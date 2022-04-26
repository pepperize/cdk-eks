import { App, Stack } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as kms from "aws-cdk-lib/aws-kms";
import { Cluster } from "./cluster";

const app = new App();
const stack = new Stack(app);

const vpc = new ec2.Vpc(stack, "Vpc", {});

const key = new kms.Key(stack, "Key");

new Cluster(stack, "Cluster", {
  vpc: vpc,
  secretsEncryptionKey: key,
  hostedZoneIds: ["Z1D633PJN98FT9"],
  mainRoles: [],
});

export { app, stack };
