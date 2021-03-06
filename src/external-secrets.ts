import { Duration } from "aws-cdk-lib";
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
  constructor(scope: Construct, id: string, props: ExternalSecretsProps) {
    super(scope, id);

    const namespace = props.namespace ?? "secrets";

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

    // https://external-secrets.io/v0.5.1/provider-aws-secrets-manager/#aws-authentication
    const serviceAccount = new eks.ServiceAccount(this, "ServiceAccount", {
      cluster: props.cluster,
      name: "external-secrets-sa",
      namespace,
    });
    serviceAccount.node.addDependency(namespaceManifest);
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

    // https://artifacthub.io/packages/helm/external-secrets-operator/external-secrets
    const chart = new eks.HelmChart(this, "Chart", {
      cluster: props.cluster,
      namespace: namespace,
      createNamespace: false,
      repository: "https://charts.external-secrets.io",
      chart: "external-secrets",
      release: "external-secrets",
      version: "0.5.1",
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
