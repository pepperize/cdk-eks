import { Duration } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export interface CloudwatchMetricsProps {
  readonly cluster: eks.ICluster;
  /**
   * @default metrics
   */
  readonly namespace?: string;
}

/**
 * Set up Container Insights to collect cluster metrics
 *
 * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html
 */
export class CloudwatchMetrics extends Construct {
  constructor(scope: Construct, id: string, props: CloudwatchMetricsProps) {
    super(scope, id);

    const namespace = props.namespace ?? "metrics";

    const namespaceManifest = new eks.KubernetesManifest(this, "Namespace", {
      cluster: props.cluster,
      manifest: [
        {
          apiVersion: "v1",
          kind: "Namespace",
          metadata: {
            name: namespace,
          },
        },
      ],
    });

    const serviceAccount = new eks.ServiceAccount(this, "ServiceAccount", {
      cluster: props.cluster,
      name: "metrics-sa",
      namespace: namespace,
    });
    serviceAccount.node.addDependency(namespaceManifest);
    serviceAccount.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("CloudWatchAgentServerPolicy"));

    // https://artifacthub.io/packages/helm/aws/aws-for-fluent-bit
    const chart = new eks.HelmChart(this, "Chart", {
      cluster: props.cluster,
      namespace: namespace,
      createNamespace: false,
      repository: "https://aws.github.io/eks-charts",
      chart: "aws-cloudwatch-metrics",
      release: "aws-cloudwatch-metrics",
      version: "0.0.7",
      values: {
        serviceAccount: {
          create: false,
          name: serviceAccount.serviceAccountName,
        },
      },
      wait: true,
      timeout: Duration.minutes(15),
    });
    chart.node.addDependency(serviceAccount, namespaceManifest);
  }
}
