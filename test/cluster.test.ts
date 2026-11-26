import { KubectlLayer } from "@aws-cdk/lambda-layer-kubectl-v21";
import { Stack } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as eks from "aws-cdk-lib/aws-eks";
import * as kms from "aws-cdk-lib/aws-kms";
import { Cluster } from "../src";

describe("Cluster", () => {
  it("Should use the kubectl layer matching the kubernetes version", () => {
    // Given
    const stack = new Stack();

    // When
    const cluster = new Cluster(stack, "Cluster", {
      vpc: new ec2.Vpc(stack, "Vpc"),
      secretsEncryptionKey: new kms.Key(stack, "Key"),
      hostedZoneIds: [],
      mainRoles: [],
    });

    // Then
    expect(cluster.resource.version).toBe(eks.KubernetesVersion.V1_21);
    expect(cluster.resource.kubectlLayer).toBeInstanceOf(KubectlLayer);
  });
});
