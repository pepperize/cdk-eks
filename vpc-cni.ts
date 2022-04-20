import { Names, Stack } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { Addon, AddonVersion } from "./addon";

export class VpcCniVersion implements AddonVersion {
  /**
   * v1.10.1
   */
  public static readonly V1_10_1 = new VpcCniVersion("v1.10.1-eksbuild.1", false);

  /**
   * v1.10.2
   */
  public static readonly V1_10_2 = new VpcCniVersion("v1.10.2-eksbuild.1", false);

  /**
   * v1.10.3
   */
  public static readonly V1_10_3 = new VpcCniVersion("v1.10.3-eksbuild.1", false);

  /**
   * Specify a custom version.
   * Use this if the version you need is not available in one of the predefined versions.
   *
   * @param version The version number.
   */
  public static of(version: string) {
    return new VpcCniVersion(version, true);
  }

  private constructor(
    /**
     * The version string.
     */
    public readonly version: string,

    /**
     * Whether it's a custom version.
     */
    public readonly custom: boolean
  ) {}
}

export interface VpcCniProps {
  readonly cluster: eks.ICluster;

  /**
   * @default v1.10.2
   */
  readonly version?: VpcCniVersion;

  /**
   * @default kube-system
   */
  readonly namespace?: string;
}

/**
 * Amazon EKS supports native VPC networking with the Amazon VPC Container Network Interface (CNI) plugin for Kubernetes.
 * Using this plugin allows Kubernetes pods to have the same IP address inside the pod as they do on the VPC network.
 *
 * @see https://docs.aws.amazon.com/eks/latest/userguide/managing-vpc-cni.html
 * @see https://docs.aws.amazon.com/eks/latest/userguide/pod-networking.html
 */
export class VpcCni extends Addon {
  /**
   * Create the driver construct associated with this cluster and scope.
   *
   * Singleton per stack/cluster.
   */
  public static create(scope: Construct, props: VpcCniProps) {
    const stack = Stack.of(scope);
    const uid = VpcCni.uid(props.cluster);
    return new VpcCni(stack, uid, props);
  }

  private static uid(cluster: eks.ICluster) {
    return `${Names.nodeUniqueId(cluster.node)}-VpcCni`;
  }

  public constructor(scope: Construct, id: string, props: VpcCniProps) {
    const managedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonEKS_CNI_Policy");

    super(scope, id, {
      ...props,
      managedPolicy: managedPolicy,
      addonName: "vpc-cni",
      serviceAccountName: "aws-node",
      version: props.version ?? VpcCniVersion.V1_10_3,
    });
  }
}
