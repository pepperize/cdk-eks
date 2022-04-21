import { App, Stack } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Cluster } from "./cluster";

const app = new App();
const stack = new Stack(app);

const vpc = new ec2.Vpc(stack, "Vpc", {});

new Cluster(stack, "Cluster", {
  vpc: vpc,
  hostedZoneId: "",
  mainRoles: [],
});

export { app, stack };
