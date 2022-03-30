import { Stack } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import * as loadBalancerPolicyDocument from "./aws-load-balancer-controller-iam-policy.json";

export interface AwsLoadBalancerControllerProps {
  readonly cluster: eks.ICluster;
  readonly vpcId: string;
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

    const loadBalancerNamespaceManifest = new eks.KubernetesManifest(this, "LoadBalancerNamespace", {
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
    const loadBalancerServiceAccount = this.cluster.addServiceAccount("LoadBalancerServiceAccount", {
      name: "aws-load-balancer-controller",
      namespace: namespace,
    });
    for (const statement of loadBalancerPolicyDocument.Statement) {
      loadBalancerServiceAccount.addToPrincipalPolicy(iam.PolicyStatement.fromJson(statement));
    }
    loadBalancerServiceAccount.node.addDependency(loadBalancerNamespaceManifest);

    const loadBalancerChart = this.cluster.addHelmChart("LoadBalancerController", {
      repository: "https://aws.github.io/eks-charts",
      chart: "aws-load-balancer-controller",
      release: "aws-load-balancer-controller",
      namespace: "ingress",
      version: "1.4.0",
      values: {
        clusterName: this.cluster.clusterName,
        region: Stack.of(this).region,
        vpcId: props.vpcId,
        serviceAccount: {
          create: false,
          name: loadBalancerServiceAccount.serviceAccountName,
        },
      },
    });
    loadBalancerChart.node.addDependency(loadBalancerServiceAccount, loadBalancerNamespaceManifest);
  }
}
