import { Stack } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import * as loadBalancerPolicyDocument from "./aws-load-balancer-controller_policy.json";

export interface AwsLoadBalancerControllerProps {
  readonly cluster: eks.ICluster;
  readonly vpc: ec2.IVpc;
  /**
   * @default ingress
   */
  readonly namespace?: string;
}

export class AwsLoadBalancerController extends Construct {
  readonly cluster: eks.ICluster;

  public constructor(scope: Construct, id: string, props: AwsLoadBalancerControllerProps) {
    super(scope, id);

    this.cluster = props.cluster;
    const namespace = props.namespace ?? "ingress";

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

    // https://artifacthub.io/packages/helm/aws/aws-load-balancer-controller
    const serviceAccount = this.cluster.addServiceAccount("ServiceAccount", {
      name: "aws-load-balancer-controller",
      namespace: namespace,
    });
    for (const statement of loadBalancerPolicyDocument.Statement) {
      serviceAccount.addToPrincipalPolicy(iam.PolicyStatement.fromJson(statement));
    }
    serviceAccount.node.addDependency(namespaceManifest);

    const chart = this.cluster.addHelmChart("Chart", {
      repository: "https://aws.github.io/eks-charts",
      chart: "aws-load-balancer-controller",
      release: "aws-load-balancer-controller",
      namespace: `${namespace}`,
      version: "1.4.0",
      values: {
        clusterName: this.cluster.clusterName,
        region: Stack.of(this).region,
        vpcId: props.vpc.vpcId,
        serviceAccount: {
          create: false,
          name: serviceAccount.serviceAccountName,
        },
      },
    });
    chart.node.addDependency(serviceAccount, namespaceManifest);
  }
}
