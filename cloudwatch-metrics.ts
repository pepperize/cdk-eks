import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export interface CloudwatchMetricsProps {
  readonly cluster: eks.ICluster;
  /**
   * @default cloudwatch-metrics
   */
  readonly namespace?: string;
}

export class CloudwatchMetrics extends Construct {
  readonly cluster: eks.ICluster;

  constructor(scope: Construct, id: string, props: CloudwatchMetricsProps) {
    super(scope, id);

    this.cluster = props.cluster;
    const namespace = props.namespace ?? "metrics";

    const namespaceManifest = new eks.KubernetesManifest(this, "Namespace", {
      cluster: this.cluster,
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
      cluster: this.cluster,
      name: "metrics-sa",
      namespace: namespace,
    });

    serviceAccount.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("CloudWatchAgentServerPolicy"));
    serviceAccount.node.addDependency(namespaceManifest);

    // https://artifacthub.io/packages/helm/aws/aws-for-fluent-bit
    const chart = new eks.HelmChart(this, "Chart", {
      cluster: this.cluster,
      namespace: namespace,
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
    });
    chart.node.addDependency(serviceAccount, namespaceManifest);
  }
}
