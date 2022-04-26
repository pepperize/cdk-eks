import { Annotations, Duration } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export interface ExternalDnsProps {
  readonly cluster: eks.ICluster;
  readonly hostedZoneIds: string[];
  /**
   * @default dns
   */
  readonly namespace?: string;
}

export class ExternalDns extends Construct {
  public constructor(scope: Construct, id: string, props: ExternalDnsProps) {
    super(scope, id);

    const namespace = props.namespace ?? "dns";

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

    if (props.hostedZoneIds.length == 0) {
      Annotations.of(this).addError("No hostedZoneId given for external-dns");
    }

    // https://artifacthub.io/packages/helm/bitnami/external-dns
    const serviceAccount = new eks.ServiceAccount(this, "ServiceAccount", {
      cluster: props.cluster,
      name: "external-dns-sa",
      namespace: namespace,
    });
    serviceAccount.node.addDependency(namespaceManifest);
    serviceAccount.addToPrincipalPolicy(
      new iam.PolicyStatement({
        actions: ["route53:ChangeResourceRecordSets", "route53:ListResourceRecordSets"],
        resources: props.hostedZoneIds.map((hostedZoneId) => {
          return `arn:aws:route53:::hostedzone/${hostedZoneId}`;
        }),
      })
    );
    serviceAccount.addToPrincipalPolicy(
      new iam.PolicyStatement({
        actions: ["route53:ListHostedZones"],
        resources: ["*"],
      })
    );

    const chart = new eks.HelmChart(this, "Chart", {
      cluster: props.cluster,
      namespace: namespace,
      createNamespace: false,
      repository: "https://charts.bitnami.com/bitnami",
      chart: "external-dns",
      release: "external-dns",
      version: "6.1.8",
      values: {
        zoneIdFilters: [props.hostedZoneIds],
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
