import { ITaggable, TagManager, TagType } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Karpenter } from "cdk-karpenter";
import { Construct } from "constructs";
import { CloudwatchMetrics } from "./cloudwatch-metrics";
import { EfsCsiDriver } from "./efs-csi-driver";
import { ExternalDns } from "./external-dns";
import { ExternalSecrets } from "./external-secrets";
import { FluentBit } from "./fluent-bit";
import { EbsCsiDriver } from "./ebs-csi-driver";

export interface BaseClusterProps {
  readonly clusterName?: string;
}

export interface ClusterProps extends BaseClusterProps {
  readonly hostedZoneId: string;
  readonly vpc: ec2.IVpc;
  readonly mainRoles: iam.IRole[];
}

export class Cluster extends Construct implements ITaggable {
  public readonly tags = new TagManager(TagType.MAP, "AWS::EKS::Cluster");

  public readonly mainRole: iam.IRole;
  public readonly cluster: eks.ICluster;
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

    this.cluster = new eks.Cluster(this, "Cluster", {
      vpc: props.vpc,
      mastersRole: this.mainRole,
      clusterName: props.clusterName ?? "Cluster",
      version: eks.KubernetesVersion.V1_22,
      defaultCapacityInstance: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MEDIUM),
      tags: this.tags.renderedTags as unknown as { [key: string]: string },
    });

    const awsAuth = (this.cluster as eks.Cluster).awsAuth;
    for (const role of props.mainRoles) {
      awsAuth.addMastersRole(role);
    }

    // autoscaling
    // https://artifacthub.io/packages/helm/karpenter/karpenter
    this.autoscaling = new Karpenter(this, "Karpenter", {
      cluster: this.cluster as eks.Cluster,
      vpc: props.vpc,
    });

    // load balancing
    this.albController = new eks.AlbController(this, "AwsLoadBalancerController", {
      cluster: this.cluster as eks.Cluster,
      version: eks.AlbControllerVersion.V2_4_1,
    });

    // domain name
    this.externalDns = new ExternalDns(this, "ExternalDns", {
      cluster: this.cluster,
      hostedZoneId: props.hostedZoneId,
    });

    // secrets
    this.externalSecrets = new ExternalSecrets(this, "ExternalSecrets", {
      cluster: this.cluster,
    });

    // logging
    this.logging = new FluentBit(this, "FluentBit", {
      cluster: this.cluster,
    });

    // metrics
    this.metrics = new CloudwatchMetrics(this, "CloudwatchMetrics", {
      cluster: this.cluster,
    });

    // filesystem
    new EfsCsiDriver(this, "EfsCsiDriver", {
      cluster: this.cluster,
    });
    new EbsCsiDriver(this, "EbsCsiDriver", {
      cluster: this.cluster,
    });
  }
}
