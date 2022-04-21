const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { cdk, javascript } = require("projen");
const project = new AwsCdkConstructLibrary({
  stability: cdk.Stability.EXPERIMENTAL,

  author: "Andreas Forster",
  authorAddress: "andreas.forster@pepperize.com",
  cdkVersion: "2.20.0",
  defaultReleaseBranch: "main",
  name: "cdk-eks",
  repositoryUrl: "git@github.com:pepperize/cdk-eks.git",

  packageName: "@pepperize/cdk-eks",

  bundledDeps: ["cdk-karpenter"],
  devDeps: ["@pepperize/projen-awscdk-construct", "cdk-nag"],

  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.Eks",
  },
  publishToPypi: {
    distName: "pepperize.cdk-eks",
    module: "pepperize_cdk_eks",
  },
});

project.synth();
