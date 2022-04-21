import { Stack } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export interface FluentBitProps {
  readonly cluster: eks.ICluster;
  /**
   * @default logging
   */
  readonly namespace?: string;
}

export class FluentBit extends Construct {
  constructor(scope: Construct, id: string, props: FluentBitProps) {
    super(scope, id);

    const namespace = props.namespace ?? "logging";

    const serviceAccount = new eks.ServiceAccount(this, "ServiceAccount", {
      cluster: props.cluster,
      name: "fluent-bit-sa",
      namespace: namespace,
    });

    serviceAccount.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("CloudWatchAgentServerPolicy"));

    // https://artifacthub.io/packages/helm/aws/aws-for-fluent-bit
    const chart = new eks.HelmChart(this, "Chart", {
      cluster: props.cluster,
      namespace: namespace,
      repository: "https://aws.github.io/eks-charts",
      chart: "aws-for-fluent-bit",
      release: "aws-for-fluent-bit",
      version: "0.1.15",
      values: {
        serviceAccount: {
          create: false,
          name: serviceAccount.serviceAccountName,
        },
        firehose: {
          enabled: false,
        },
        kinesis: {
          enabled: false,
        },
        elasticsearch: {
          enabled: false,
        },
        cloudWatch: {
          region: Stack.of(this).region,
        },
      },
    });
    chart.node.addDependency(serviceAccount);
  }
}
