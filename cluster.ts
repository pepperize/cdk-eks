import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Karpenter } from "cdk-karpenter";
import { Construct } from "constructs";
import * as albIamPolicy from "./alb-iam_policy-v2.4.1.json";
import { ExternalDns } from "./external-dns";

export interface BaseClusterProps {
  readonly clusterName?: string;
}

export interface ClusterProps extends BaseClusterProps {
  readonly hostedZoneId: string;
  readonly vpc: ec2.IVpc;
  readonly mainRoles: iam.IRole[];
}

export class Cluster extends Construct {
  public readonly mainRole: iam.IRole;
  public readonly cluster: eks.ICluster;
  public readonly autoscaling: Karpenter;
  public readonly albController: eks.AlbController;
  public readonly externalDns: ExternalDns;

  public constructor(scope: Construct, id: string, props: ClusterProps) {
    super(scope, id);

    this.mainRole = new iam.Role(this, "MainRole", {
      assumedBy: new iam.AccountRootPrincipal(),
    });

    this.cluster = new eks.Cluster(this, "Cluster", {
      vpc: props.vpc,
      mastersRole: this.mainRole,
      clusterName: props.clusterName ?? "Cluster",
      version: eks.KubernetesVersion.V1_21,
      defaultCapacityInstance: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MEDIUM),
    });

    const awsAuth = (this.cluster as eks.Cluster).awsAuth;
    for (const role of props.mainRoles) {
      awsAuth.addMastersRole(role);
    }

    // auto scale
    // https://artifacthub.io/packages/helm/karpenter/karpenter
    this.autoscaling = new Karpenter(this, "Karpenter", {
      cluster: this.cluster as eks.Cluster,
      vpc: props.vpc,
    });

    // load balancing
    this.albController = new eks.AlbController(this, "AwsLoadBalancerController", {
      cluster: this.cluster as eks.Cluster,
      version: eks.AlbControllerVersion.of("v2.4.1"),
      policy: albIamPolicy,
    });

    // domain name
    this.externalDns = new ExternalDns(this, "ExternalDns", {
      cluster: this.cluster,
      hostedZoneId: props.hostedZoneId,
    });
  }
}
