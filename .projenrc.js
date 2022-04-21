const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const project = new AwsCdkConstructLibrary({
  author: "Andreas Forster",
  authorAddress: "andreas.forster@pepperize.com",
  cdkVersion: "2.20.0",
  defaultReleaseBranch: "main",
  name: "cdk-eks",
  repositoryUrl: "git@github.com:pepperize/cdk-eks.git",

  packageName: "@pepperize/cdk-eks",

  devDeps: ["@pepperize/projen-awscdk-construct", "cdk-nag"],
});
project.synth();
