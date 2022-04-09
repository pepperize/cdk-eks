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

    // Create the namespace
    const externalSecretsNamespaceManifest = new eks.KubernetesManifest(this, "Namespace", {
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

    const externalSecretsServiceAccount = new eks.ServiceAccount(this, "ServiceAccount", {
      cluster: this.cluster,
      name: "external-secrets",
      namespace,
    });
    externalSecretsServiceAccount.addToPrincipalPolicy(
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
    externalSecretsServiceAccount.node.addDependency(externalSecretsNamespaceManifest);

    // https://github.com/external-secrets/external-secrets
    const externalSecretsChart = this.cluster.addHelmChart("ExternalSecret", {
      repository: "https://external-secrets.github.io/kubernetes-external-secrets",
      chart: "external-secrets",
      release: "external-secrets",
      namespace,
      version: "0.5.1",
      values: {
        serviceAccount: {
          create: false,
          name: externalSecretsServiceAccount.serviceAccountName,
        },
      },
    });
    externalSecretsChart.node.addDependency(externalSecretsServiceAccount, externalSecretsNamespaceManifest);
  }
}
