import { Names, Stack } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { Addon, IAddonVersion } from "./addon";

export class EbsCsiDriverVersion implements IAddonVersion {
  /**
   * v1.5.2
   */
  public static readonly V1_5_2 = new EbsCsiDriverVersion("v1.5.2-eksbuild.1", false);

  /**
   * Specify a custom version.
   * Use this if the version you need is not available in one of the predefined versions.
   *
   * @param version The version number.
   */
  public static of(version: string) {
    return new EbsCsiDriverVersion(version, true);
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

export interface EbsCsiDriverProps {
  readonly cluster: eks.ICluster;

  /**
   * @default v1.5.2
   */
  readonly version?: EbsCsiDriverVersion;

  /**
   * @default kube-system
   */
  readonly namespace?: string;
}

/**
 * https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html
 */
export class EbsCsiDriver extends Addon {
  /**
   * Create the driver construct associated with this cluster and scope.
   *
   * Singleton per stack/cluster.
   */
  public static create(scope: Construct, props: EbsCsiDriverProps) {
    const stack = Stack.of(scope);
    const uid = EbsCsiDriver.uid(props.cluster);
    return new EbsCsiDriver(stack, uid, props);
  }

  private static uid(cluster: eks.ICluster) {
    return `${Names.nodeUniqueId(cluster.node)}-EbsCsiDriver`;
  }

  public constructor(scope: Construct, id: string, props: EbsCsiDriverProps) {
    const managedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AmazonEBSCSIDriverPolicy");

    super(scope, id, {
      ...props,
      managedPolicy: managedPolicy,
      addonName: "aws-ebs-csi-driver",
      version: props.version ?? EbsCsiDriverVersion.V1_5_2,
    });
  }
}
