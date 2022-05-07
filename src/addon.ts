import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export enum ResolveConflicts {
  NONE = "NONE",
  OVERWRITE = "OVERWRITE",
}

export interface IAddonVersion {
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
  readonly serviceAccountName?: string;

  /**
   * The version of the addon to be deployed
   */
  readonly version: IAddonVersion;

  /**
   * The managed policy to add to the service account's role
   */
  readonly managedPolicy?: iam.IManagedPolicy;

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
  readonly serviceAccount?: eks.ServiceAccount;

  public constructor(scope: Construct, id: string, props: AddonProps) {
    super(scope, id);
    const namespace = props.namespace ?? "kube-system";

    if (props.managedPolicy) {
      this.serviceAccount = new eks.ServiceAccount(this, "ServiceAccount", {
        cluster: props.cluster,
        name: props.serviceAccountName ?? props.addonName,
        namespace: namespace,
      });
      this.serviceAccount?.role.addManagedPolicy(props.managedPolicy);
    }

    new eks.CfnAddon(this, "Addon", {
      addonName: props.addonName,
      clusterName: props.cluster.clusterName,
      serviceAccountRoleArn: this.serviceAccount?.role.roleArn,
      addonVersion: props.version.version,
      resolveConflicts: props.resolveConflicts ?? ResolveConflicts.OVERWRITE,
    });
  }
}
