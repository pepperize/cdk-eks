import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export interface ExternalDnsProps {
  readonly cluster: eks.ICluster;
  readonly hostedZoneId: string;
  /**
   * @default dns
   */
  readonly namespace?: string;
}

export class ExternalDns extends Construct {
  readonly cluster: eks.ICluster;

  public constructor(scope: Construct, id: string, props: ExternalDnsProps) {
    super(scope, id);

    this.cluster = props.cluster;
    const namespace = props.namespace ?? "dns";

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

    // https://artifacthub.io/packages/helm/bitnami/external-dns
    const serviceAccount = new eks.ServiceAccount(this, "ServiceAccount", {
      cluster: this.cluster,
      name: "external-dns-sa",
      namespace: namespace,
    });
    serviceAccount.addToPrincipalPolicy(
      new iam.PolicyStatement({
        actions: ["route53:ChangeResourceRecordSets", "route53:ListResourceRecordSets"],
        resources: [`arn:aws:route53:::hostedzone/${props.hostedZoneId}`],
      })
    );
    serviceAccount.addToPrincipalPolicy(
      new iam.PolicyStatement({
        actions: ["route53:ListHostedZones"],
        resources: ["*"],
      })
    );
    serviceAccount.node.addDependency(namespaceManifest);

    const chart = new eks.HelmChart(this, "Chart", {
      cluster: this.cluster,
      repository: "https://charts.bitnami.com/bitnami",
      chart: "external-dns",
      release: "external-dns",
      namespace: namespace,
      version: "6.1.8",
      values: {
        zoneIdFilters: [props.hostedZoneId],
        serviceAccount: {
          create: false,
          name: serviceAccount.serviceAccountName,
        },
      },
    });
    chart.node.addDependency(serviceAccount, namespaceManifest);
  }
}
