import { ITaggable, TagManager, TagType } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import * as kms from "aws-cdk-lib/aws-kms";
import { Karpenter } from "cdk-karpenter";
import { Construct } from "constructs";
import {AwsLoadBalancerController} from "./aws-load-balancer-controller";
import { CloudwatchMetrics } from "./cloudwatch-metrics";
import { EbsCsiDriver } from "./ebs-csi-driver";
import { EfsCsiDriver } from "./efs-csi-driver";
import { ExternalDns } from "./external-dns";
import { ExternalSecrets } from "./external-secrets";
import { FluentBit } from "./fluent-bit";

export interface ClusterProps {
  readonly clusterName?: string;
  readonly secretsEncryptionKey: kms.IKey;
  readonly hostedZoneIds: string[];
  readonly vpc: ec2.IVpc;
  readonly mainRoles: iam.IRole[];
}

export class Cluster extends Construct implements ITaggable {
  public readonly tags = new TagManager(TagType.MAP, "AWS::EKS::Cluster");

  public readonly mainRole: iam.IRole;
  public readonly resource: eks.Cluster;
  public readonly autoscaling: Karpenter;
  public readonly albController: eks.AlbController;
  public readonly externalDns: ExternalDns;
  public readonly externalSecrets: ExternalSecrets;
  public readonly logging: FluentBit;
  public readonly metrics: CloudwatchMetrics;

  public constructor(scope: Construct, id: string, props: ClusterProps) {
    super(scope, id);

    this.mainRole = new iam.Role(this, "MainRole", {
      assumedBy: new iam.AccountRootPrincipal(),
    });

    this.resource = new eks.Cluster(this, "Cluster", {
      vpc: props.vpc,
      mastersRole: this.mainRole,
      clusterName: props.clusterName ?? "Cluster",
      version: eks.KubernetesVersion.V1_21,
      secretsEncryptionKey: props.secretsEncryptionKey,
      defaultCapacityInstance: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MEDIUM),
      tags: this.tags.renderedTags as unknown as { [key: string]: string },
    });

    const awsAuth = this.resource.awsAuth;
    for (const role of props.mainRoles) {
      awsAuth.addMastersRole(role);
    }

    // autoscaling
    // https://artifacthub.io/packages/helm/karpenter/karpenter
    this.autoscaling = new Karpenter(this, "Karpenter", {
      cluster: this.resource as eks.Cluster,
      vpc: props.vpc,
    });

    // load balancing
    this.albController = new AwsLoadBalancerController(this, "AwsLoadBalancerController", {
      cluster: this.resource as eks.Cluster,
      vpc: props.vpc,
    });

    // domain name
    this.externalDns = new ExternalDns(this, "ExternalDns", {
      cluster: this.resource,
      hostedZoneIds: props.hostedZoneIds,
    });

    // secrets
    this.externalSecrets = new ExternalSecrets(this, "ExternalSecrets", {
      cluster: this.resource,
    });

    // logging
    this.logging = new FluentBit(this, "FluentBit", {
      cluster: this.resource,
    });

    // metrics
    this.metrics = new CloudwatchMetrics(this, "CloudwatchMetrics", {
      cluster: this.resource,
    });

    // filesystem
    new EfsCsiDriver(this, "EfsCsiDriver", {
      cluster: this.resource,
    });

    new EbsCsiDriver(this, "EbsCsiDriver", {
      cluster: this.resource,
    });
  }
}
