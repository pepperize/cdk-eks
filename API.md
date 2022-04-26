# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetrics <a name="CloudwatchMetrics" id="@pepperize/cdk-eks.CloudwatchMetrics"></a>

Set up Container Insights to collect cluster metrics.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html)

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.CloudwatchMetrics.Initializer"></a>

```typescript
import { CloudwatchMetrics } from '@pepperize/cdk-eks'

new CloudwatchMetrics(scope: Construct, id: string, props: CloudwatchMetricsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.CloudwatchMetrics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.CloudwatchMetrics.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.CloudwatchMetrics.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.CloudwatchMetricsProps">CloudwatchMetricsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.CloudwatchMetrics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.CloudwatchMetrics.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.CloudwatchMetrics.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.CloudwatchMetricsProps">CloudwatchMetricsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.CloudwatchMetrics.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.CloudwatchMetrics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.CloudwatchMetrics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.CloudwatchMetrics.isConstruct"></a>

```typescript
import { CloudwatchMetrics } from '@pepperize/cdk-eks'

CloudwatchMetrics.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.CloudwatchMetrics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.CloudwatchMetrics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.CloudwatchMetrics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Cluster <a name="Cluster" id="@pepperize/cdk-eks.Cluster"></a>

- *Implements:* aws-cdk-lib.ITaggable

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.Cluster.Initializer"></a>

```typescript
import { Cluster } from '@pepperize/cdk-eks'

new Cluster(scope: Construct, id: string, props: ClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.ClusterProps">ClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.Cluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.Cluster.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.ClusterProps">ClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.Cluster.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.Cluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.Cluster.isConstruct"></a>

```typescript
import { Cluster } from '@pepperize/cdk-eks'

Cluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.Cluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.albController">albController</a></code> | <code>aws-cdk-lib.aws_eks.AlbController</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.autoscaling">autoscaling</a></code> | <code>cdk-karpenter.Karpenter</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.externalDns">externalDns</a></code> | <code><a href="#@pepperize/cdk-eks.ExternalDns">ExternalDns</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.externalSecrets">externalSecrets</a></code> | <code><a href="#@pepperize/cdk-eks.ExternalSecrets">ExternalSecrets</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.logging">logging</a></code> | <code><a href="#@pepperize/cdk-eks.FluentBit">FluentBit</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.mainRole">mainRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.metrics">metrics</a></code> | <code><a href="#@pepperize/cdk-eks.CloudwatchMetrics">CloudwatchMetrics</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.resource">resource</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Cluster.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | TagManager to set, remove and format tags. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.Cluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `albController`<sup>Required</sup> <a name="albController" id="@pepperize/cdk-eks.Cluster.property.albController"></a>

```typescript
public readonly albController: AlbController;
```

- *Type:* aws-cdk-lib.aws_eks.AlbController

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@pepperize/cdk-eks.Cluster.property.autoscaling"></a>

```typescript
public readonly autoscaling: Karpenter;
```

- *Type:* cdk-karpenter.Karpenter

---

##### `externalDns`<sup>Required</sup> <a name="externalDns" id="@pepperize/cdk-eks.Cluster.property.externalDns"></a>

```typescript
public readonly externalDns: ExternalDns;
```

- *Type:* <a href="#@pepperize/cdk-eks.ExternalDns">ExternalDns</a>

---

##### `externalSecrets`<sup>Required</sup> <a name="externalSecrets" id="@pepperize/cdk-eks.Cluster.property.externalSecrets"></a>

```typescript
public readonly externalSecrets: ExternalSecrets;
```

- *Type:* <a href="#@pepperize/cdk-eks.ExternalSecrets">ExternalSecrets</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@pepperize/cdk-eks.Cluster.property.logging"></a>

```typescript
public readonly logging: FluentBit;
```

- *Type:* <a href="#@pepperize/cdk-eks.FluentBit">FluentBit</a>

---

##### `mainRole`<sup>Required</sup> <a name="mainRole" id="@pepperize/cdk-eks.Cluster.property.mainRole"></a>

```typescript
public readonly mainRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@pepperize/cdk-eks.Cluster.property.metrics"></a>

```typescript
public readonly metrics: CloudwatchMetrics;
```

- *Type:* <a href="#@pepperize/cdk-eks.CloudwatchMetrics">CloudwatchMetrics</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@pepperize/cdk-eks.Cluster.property.resource"></a>

```typescript
public readonly resource: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster

---

##### `tags`<sup>Required</sup> <a name="tags" id="@pepperize/cdk-eks.Cluster.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

TagManager to set, remove and format tags.

---


### ExternalDns <a name="ExternalDns" id="@pepperize/cdk-eks.ExternalDns"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.ExternalDns.Initializer"></a>

```typescript
import { ExternalDns } from '@pepperize/cdk-eks'

new ExternalDns(scope: Construct, id: string, props: ExternalDnsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalDns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ExternalDns.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ExternalDns.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.ExternalDnsProps">ExternalDnsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.ExternalDns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.ExternalDns.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.ExternalDns.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.ExternalDnsProps">ExternalDnsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalDns.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.ExternalDns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalDns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.ExternalDns.isConstruct"></a>

```typescript
import { ExternalDns } from '@pepperize/cdk-eks'

ExternalDns.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.ExternalDns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalDns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.ExternalDns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### ExternalSecrets <a name="ExternalSecrets" id="@pepperize/cdk-eks.ExternalSecrets"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.ExternalSecrets.Initializer"></a>

```typescript
import { ExternalSecrets } from '@pepperize/cdk-eks'

new ExternalSecrets(scope: Construct, id: string, props: ExternalSecretsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ExternalSecrets.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ExternalSecrets.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.ExternalSecretsProps">ExternalSecretsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.ExternalSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.ExternalSecrets.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.ExternalSecrets.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.ExternalSecretsProps">ExternalSecretsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalSecrets.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.ExternalSecrets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.ExternalSecrets.isConstruct"></a>

```typescript
import { ExternalSecrets } from '@pepperize/cdk-eks'

ExternalSecrets.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.ExternalSecrets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.ExternalSecrets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### FluentBit <a name="FluentBit" id="@pepperize/cdk-eks.FluentBit"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.FluentBit.Initializer"></a>

```typescript
import { FluentBit } from '@pepperize/cdk-eks'

new FluentBit(scope: Construct, id: string, props: FluentBitProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.FluentBit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.FluentBit.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.FluentBit.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.FluentBitProps">FluentBitProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.FluentBit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.FluentBit.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.FluentBit.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.FluentBitProps">FluentBitProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.FluentBit.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.FluentBit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.FluentBit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.FluentBit.isConstruct"></a>

```typescript
import { FluentBit } from '@pepperize/cdk-eks'

FluentBit.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.FluentBit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.FluentBit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.FluentBit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricsProps <a name="CloudwatchMetricsProps" id="@pepperize/cdk-eks.CloudwatchMetricsProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.CloudwatchMetricsProps.Initializer"></a>

```typescript
import { CloudwatchMetricsProps } from '@pepperize/cdk-eks'

const cloudwatchMetricsProps: CloudwatchMetricsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.CloudwatchMetricsProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.CloudwatchMetricsProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.CloudwatchMetricsProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.CloudwatchMetricsProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* metrics

---

### ClusterProps <a name="ClusterProps" id="@pepperize/cdk-eks.ClusterProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.ClusterProps.Initializer"></a>

```typescript
import { ClusterProps } from '@pepperize/cdk-eks'

const clusterProps: ClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.ClusterProps.property.hostedZoneIds">hostedZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ClusterProps.property.mainRoles">mainRoles</a></code> | <code>aws-cdk-lib.aws_iam.IRole[]</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ClusterProps.property.secretsEncryptionKey">secretsEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ClusterProps.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |

---

##### `hostedZoneIds`<sup>Required</sup> <a name="hostedZoneIds" id="@pepperize/cdk-eks.ClusterProps.property.hostedZoneIds"></a>

```typescript
public readonly hostedZoneIds: string[];
```

- *Type:* string[]

---

##### `mainRoles`<sup>Required</sup> <a name="mainRoles" id="@pepperize/cdk-eks.ClusterProps.property.mainRoles"></a>

```typescript
public readonly mainRoles: IRole[];
```

- *Type:* aws-cdk-lib.aws_iam.IRole[]

---

##### `secretsEncryptionKey`<sup>Required</sup> <a name="secretsEncryptionKey" id="@pepperize/cdk-eks.ClusterProps.property.secretsEncryptionKey"></a>

```typescript
public readonly secretsEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@pepperize/cdk-eks.ClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@pepperize/cdk-eks.ClusterProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

### ExternalDnsProps <a name="ExternalDnsProps" id="@pepperize/cdk-eks.ExternalDnsProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.ExternalDnsProps.Initializer"></a>

```typescript
import { ExternalDnsProps } from '@pepperize/cdk-eks'

const externalDnsProps: ExternalDnsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalDnsProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ExternalDnsProps.property.hostedZoneIds">hostedZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ExternalDnsProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.ExternalDnsProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `hostedZoneIds`<sup>Required</sup> <a name="hostedZoneIds" id="@pepperize/cdk-eks.ExternalDnsProps.property.hostedZoneIds"></a>

```typescript
public readonly hostedZoneIds: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.ExternalDnsProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* dns

---

### ExternalSecretsProps <a name="ExternalSecretsProps" id="@pepperize/cdk-eks.ExternalSecretsProps"></a>

> [https://external-secrets.io/v0.5.1/provider-aws-secrets-manager/](https://external-secrets.io/v0.5.1/provider-aws-secrets-manager/)

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.ExternalSecretsProps.Initializer"></a>

```typescript
import { ExternalSecretsProps } from '@pepperize/cdk-eks'

const externalSecretsProps: ExternalSecretsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.ExternalSecretsProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ExternalSecretsProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.ExternalSecretsProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.ExternalSecretsProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* secrets

---

### FluentBitProps <a name="FluentBitProps" id="@pepperize/cdk-eks.FluentBitProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.FluentBitProps.Initializer"></a>

```typescript
import { FluentBitProps } from '@pepperize/cdk-eks'

const fluentBitProps: FluentBitProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.FluentBitProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.FluentBitProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.FluentBitProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.FluentBitProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* logging

---



