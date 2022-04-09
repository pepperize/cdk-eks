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

    const externalsDnsNamespaceManifest = new eks.KubernetesManifest(this, "Namespace", {
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
    const externalDnsServiceAccount = this.cluster.addServiceAccount("ServiceAccount", {
      name: "external-dns",
      namespace: namespace,
    });
    externalDnsServiceAccount.addToPrincipalPolicy(
      new iam.PolicyStatement({
        actions: ["route53:ChangeResourceRecordSets", "route53:ListResourceRecordSets"],
        resources: [`arn:aws:route53:::hostedzone/${props.hostedZoneId}`],
      })
    );
    externalDnsServiceAccount.addToPrincipalPolicy(
      new iam.PolicyStatement({
        actions: ["route53:ListHostedZones"],
        resources: ["*"],
      })
    );
    externalDnsServiceAccount.node.addDependency(externalsDnsNamespaceManifest);

    const externalDnsChart = this.cluster.addHelmChart("ExternalDns", {
      repository: "https://charts.bitnami.com/bitnami",
      chart: "external-dns",
      release: "external-dns",
      namespace: namespace,
      version: "6.1.8",
      values: {
        zoneIdFilters: [props.hostedZoneId],
        serviceAccount: {
          create: false,
          name: externalDnsServiceAccount.serviceAccountName,
        },
      },
    });
    externalDnsChart.node.addDependency(externalDnsServiceAccount, externalsDnsNamespaceManifest);
  }
}
