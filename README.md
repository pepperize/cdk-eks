[![GitHub](https://img.shields.io/github/license/pepperize/cdk-eks?style=flat-square)](https://github.com/pepperize/cdk-eks/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-eks?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-eks)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-eks/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-eks/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-eks?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-eks/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-eks)

# AWS CDK EKS

## Install

### TypeScript

```shell
npm install @pepperize/cdk-eks
```

or

```shell
yarn add @pepperize/cdk-eks
```

## Getting started

1. Create a new CDK TypeScript App project with [projen](https://github.com/projen/projen)

   ```shell
   mkdir my-project
   cd my-project
   git init -b main
   npx projen new awscdk-app-ts
   ```

2. Add `@pepperize/cdk-eks` to your dependencies in `.projenrc.js`

   ```typescript
   const project = new awscdk.AwsCdkTypeScriptApp({
     //...
     deps: ["@pepperize/cdk-eks"],
   });
   ```

3. Install the dependency

   ```shell
   yarn
   npx projen
   ```

4. Create a new app in `src/main.ts`

   ```typescript
   import { App, Stack } from "aws-cdk-lib";
   import * as ec2 from "aws-cdk-lib/aws-ec2";
   import { Cluster } from "@pepperize/cdk-eks";

   const app = new App();
   const stack = new Stack(app);

   const vpc = new ec2.Vpc(stack, "Vpc", {});

   new Cluster(stack, "Cluster", {
     vpc: vpc,
     hostedZoneIds: ["Z1D633PJN98FT9"],
     mainRoles: [],
   });
   ```

# Contributing

Contributions of all kinds are welcome :rocket: Check out our [contributor's guide](https://github.com/pepperize/cdk-eks/blob/main/CONTRIBUTING.md).

For a quick start, check out a development environment:

```shell
git clone git@github.com:pepperize/cdk-eks
cd cdk-eks
# install dependencies
yarn
# build with projen
yarn build
```
