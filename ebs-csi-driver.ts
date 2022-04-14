import { CfnJson, Names, Stack } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export class EbsCsiDriverVersion {
  /**
   * v1.5.2
   */
  public static readonly V1_5_2 = new EbsCsiDriverVersion("v1.5.2-eksbuild.1", false);

  /**
   * Specify a custom version.
   * Use this if the version you need is not available in one of the predefined versions.
   * Note that in this case, you will also need to provide an IAM policy in the driver options.
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
   * @default v1.3.2
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
export class EbsCsiDriver extends Construct {
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

  readonly cluster: eks.ICluster;

  public constructor(scope: Construct, id: string, props: EbsCsiDriverProps) {
    super(scope, id);

    this.cluster = props.cluster;
    const namespace = props.namespace ?? "kube-system";

    const account = Stack.of(this).account;
    const region = Stack.of(this).region;

    const issuer = this.cluster.openIdConnectProvider.openIdConnectProviderIssuer;
    const role = new iam.Role(this, "Role", {
      roleName: "AmazonEKS_EBS_CSI_DriverRole",
      assumedBy: new iam.FederatedPrincipal(
        `arn:aws:iam::${account}:oidc-provider/oidc.eks.${region}.amazonaws.com/id/${issuer}`,
        {
          StringEquals: new CfnJson(this, "Condition", {
            value: {
              [`oidc.eks.${region}.amazonaws.com/id/${issuer}:aud`]: "sts.amazonaws.com",
              [`oidc.eks.${region}.amazonaws.com/id/${issuer}:sub`]: `system:serviceaccount:${namespace}:ebs-csi-controller-sa`,
            },
          }),
        },
        "sts:AssumeRoleWithWebIdentity"
      ),
    });
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AmazonEBSCSIDriverPolicy"));

    const version = props.version ?? EbsCsiDriverVersion.V1_5_2;

    const addon = new eks.CfnAddon(this, "Addon", {
      addonName: "aws-ebs-csi-driver",
      clusterName: this.cluster.clusterName,
      serviceAccountRoleArn: role.roleArn,
      addonVersion: version.version,
      resolveConflicts: "OVERWRITE",
    });
    addon.node.addDependency(role);
  }
}
