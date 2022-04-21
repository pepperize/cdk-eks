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

  /**
   * The name of the addon
   */
  readonly addonName: string;

  /**
   * The name of the service account for which to create a role
   */
  readonly serviceAccountName: string;

  /**
   * The version of the addon to be deployed
   */
  readonly version: AddonVersion;

  /**
   * The managed policy to add to the service account's role
   */
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

    const region = Stack.of(this).region;
    const issuer = props.cluster.openIdConnectProvider.openIdConnectProviderIssuer;
    this.serviceAccountRole = new iam.Role(this, "ServiceAccountRole", {
      assumedBy: new iam.OpenIdConnectPrincipal(props.cluster.openIdConnectProvider, {
        StringEquals: new CfnJson(this, "Condition", {
          value: {
            [`oidc.eks.${region}.amazonaws.com/id/${issuer}:aud`]: "sts.amazonaws.com",
            [`oidc.eks.${region}.amazonaws.com/id/${issuer}:sub`]: `system:serviceaccount:${namespace}:${props.serviceAccountName}`,
          },
        }),
      }),
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
