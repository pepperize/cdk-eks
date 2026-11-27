const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { javascript } = require("projen");
const project = new AwsCdkConstructLibrary({
  author: "Andreas Forster",
  authorAddress: "andreas.forster@pepperize.com",
  cdkVersion: "2.278.0",
  jsiiVersion: "~6.0.0",
  defaultReleaseBranch: "main",
  name: "cdk-eks",
  repositoryUrl: "git@github.com:pepperize/cdk-eks.git",

  packageName: "@pepperize/cdk-eks",

  minNodeVersion: "22.13.0",
  workflowNodeVersion: "24.x",
  jestOptions: {
    jestVersion: "^30",
  },
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

  peerDeps: ["cdk-karpenter@^1.9.0", "@aws-cdk/lambda-layer-kubectl-v21@^2.0.0"],
  devDeps: ["@pepperize/projen-awscdk-construct@~0.1.2", "@types/node@^22", "typescript@~6.0", "cdk-nag@^2"],

  gitpod: true,
});

project.gitpod.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});
project.gitpod.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();
