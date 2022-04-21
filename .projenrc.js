const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const project = new AwsCdkConstructLibrary({
  author: "Andreas Forster",
  authorAddress: "andreas.forster@pepperize.com",
  cdkVersion: "2.20.0",
  defaultReleaseBranch: "main",
  devDeps: ["@pepperize/projen-awscdk-construct"],
  name: "cdk-eks",
  repositoryUrl: "git@github.com:pepperize/cdk-eks.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  packageName: "@pepperize/cdk-eks",
});
project.synth();
