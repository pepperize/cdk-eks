import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

/**
 * @see https://external-secrets.io/v0.5.1/provider-aws-secrets-manager/
 */
export interface ExternalSecretsProps {
  readonly cluster: eks.ICluster;
  /**
   * @default secrets
   */
  readonly namespace?: string;
}

export class ExternalSecrets extends Construct {
  readonly cluster: eks.ICluster;

  constructor(scope: Construct, id: string, props: ExternalSecretsProps) {
    super(scope, id);

    this.cluster = props.cluster;
    const namespace = props.namespace ?? "secrets";

    // https://external-secrets.io/v0.5.1/provider-aws-secrets-manager/#aws-authentication
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
      name: "external-secrets-sa",
      namespace,
    });
    serviceAccount.addToPrincipalPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          "secretsmanager:GetResourcePolicy",
          "secretsmanager:GetSecretValue",
          "secretsmanager:DescribeSecret",
          "secretsmanager:ListSecretVersionIds",
          "secretsmanager:ListSecrets",
        ],
        resources: ["*"],
      })
    );
    serviceAccount.node.addDependency(namespaceManifest);

    // https://artifacthub.io/packages/helm/external-secrets-operator/external-secrets
    const chart = new eks.HelmChart(this, "Chart", {
      cluster: this.cluster,
      repository: "https://charts.external-secrets.io",
      chart: "external-secrets",
      release: "external-secrets",
      namespace: namespace,
      version: "0.5.1",
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
