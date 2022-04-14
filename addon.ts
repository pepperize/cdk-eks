import { CfnJson, Stack } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export enum ResolveConflicts {
  NONE = "NONE",
  OVERWRITE = "OVERWRITE",
}

export interface AddonVersion {
  readonly version: string;
}

export interface AddonProps {
  readonly cluster: eks.ICluster;
  readonly addonName: string;
  readonly serviceAccountName: string;
  readonly version: AddonVersion;
  readonly managedPolicy: iam.IManagedPolicy;

  /**
   * @default kube-system
   */
  readonly namespace?: string;

  /**
   * @default 'OVERWRITE'
   */
  readonly resolveConflicts?: ResolveConflicts;
}

export class Addon extends Construct {
  readonly serviceAccountRole: iam.IRole;

  public constructor(scope: Construct, id: string, props: AddonProps) {
    super(scope, id);
    const namespace = props.namespace ?? "kube-system";

    const account = Stack.of(this).account;
    const region = Stack.of(this).region;

    const issuer = props.cluster.openIdConnectProvider.openIdConnectProviderIssuer;
    this.serviceAccountRole = new iam.Role(this, "ServiceAccountRole", {
      assumedBy: new iam.FederatedPrincipal(
        `arn:aws:iam::${account}:oidc-provider/oidc.eks.${region}.amazonaws.com/id/${issuer}`,
        {
          StringEquals: new CfnJson(this, "Condition", {
            value: {
              [`oidc.eks.${region}.amazonaws.com/id/${issuer}:aud`]: "sts.amazonaws.com",
              [`oidc.eks.${region}.amazonaws.com/id/${issuer}:sub`]: `system:serviceaccount:${namespace}:${props.serviceAccountName}`,
            },
          }),
        },
        "sts:AssumeRoleWithWebIdentity"
      ),
    });
    this.serviceAccountRole.addManagedPolicy(props.managedPolicy);

    const addon = new eks.CfnAddon(this, "Addon", {
      addonName: props.addonName,
      clusterName: props.cluster.clusterName,
      serviceAccountRoleArn: this.serviceAccountRole.roleArn,
      addonVersion: props.version.version,
      resolveConflicts: props.resolveConflicts ?? ResolveConflicts.OVERWRITE,
    });
    addon.node.addDependency(this.serviceAccountRole);
  }
}
