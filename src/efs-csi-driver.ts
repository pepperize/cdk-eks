import { Duration, Names, Stack } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import * as policy_v1_3_2 from "./efs-csi-driver_policy-v1.3.2.json";

export class EfsCsiDriverVersion {
  /**
   * v1.3.2
   */
  public static readonly V1_3_2 = new EfsCsiDriverVersion("v1.3.2", false);

  /**
   * Specify a custom version.
   * Use this if the version you need is not available in one of the predefined versions.
   * Note that in this case, you will also need to provide an IAM policy in the driver options.
   *
   * @param version The version number.
   */
  public static of(version: string) {
    return new EfsCsiDriverVersion(version, true);
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

const policies = {
  [EfsCsiDriverVersion.V1_3_2.version]: policy_v1_3_2,
};

export interface EfsCsiDriverProps {
  readonly cluster: eks.ICluster;
  /**
   * @default v1.3.2
   */
  readonly version?: EfsCsiDriverVersion;

  /**
   * A custom iam policy document used for custom version.
   *
   * @default undefined
   */
  readonly policy?: any;

  /**
   * The repository to pull the driver image from.
   *
   * Note that the default repository works for most regions, but not all.
   * @see https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html.
   *
   * @default '602401143452.dkr.ecr.us-east-1.amazonaws.com/eks/aws-efs-csi-driver'
   */
  readonly repository?: string;
  /**
   * @default kube-system
   */
  readonly namespace?: string;
}

/**
 * https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html#efs-install-driver
 */
export class EfsCsiDriver extends Construct {
  /**
   * Create the driver construct associated with this cluster and scope.
   *
   * Singleton per stack/cluster.
   */
  public static create(scope: Construct, props: EfsCsiDriverProps) {
    const stack = Stack.of(scope);
    const uid = EfsCsiDriver.uid(props.cluster);
    return new EfsCsiDriver(stack, uid, props);
  }

  private static uid(cluster: eks.ICluster) {
    return `${Names.nodeUniqueId(cluster.node)}-EfsCsiDriver`;
  }

  public constructor(scope: Construct, id: string, props: EfsCsiDriverProps) {
    super(scope, id);

    const namespace = props.namespace ?? "kube-system";

    const serviceAccount = new eks.ServiceAccount(this, "ServiceAccount", {
      namespace: namespace,
      name: "efs-csi-driver-sa",
      cluster: props.cluster,
    });

    const version = props.version ?? EfsCsiDriverVersion.V1_3_2;
    if (version.custom && !props.policy) {
      throw new Error("'efsCsiDriverProps.policy' is required when using a custom driver version");
    }

    // https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/deploy/installation/#iam-permissions
    const policy: any = props.policy ?? policies[version.version];

    for (const statement of policy.Statement) {
      serviceAccount.addToPrincipalPolicy(iam.PolicyStatement.fromJson(statement));
    }

    const chart = new eks.HelmChart(this, "Chart", {
      cluster: props.cluster,
      repository: "https://kubernetes-sigs.github.io/aws-efs-csi-driver/",
      chart: "aws-efs-csi-driver",
      release: "aws-efs-csi-driver",
      namespace,
      version: "2.2.5",
      wait: true,
      timeout: Duration.minutes(15),
      values: {
        serviceAccount: {
          create: false,
          name: serviceAccount.serviceAccountName,
        },
        image: {
          repository: props.repository ?? "602401143452.dkr.ecr.us-east-1.amazonaws.com/eks/aws-efs-csi-driver",
          tag: version.version,
        },
      },
    });
    chart.node.addDependency(serviceAccount);
  }
}
