# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Addon <a name="Addon" id="@pepperize/cdk-eks.Addon"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.Addon.Initializer"></a>

```typescript
import { Addon } from '@pepperize/cdk-eks'

new Addon(scope: Construct, id: string, props: AddonProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.Addon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Addon.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.Addon.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.AddonProps">AddonProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.Addon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.Addon.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.Addon.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.AddonProps">AddonProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.Addon.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.Addon.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.Addon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.Addon.isConstruct"></a>

```typescript
import { Addon } from '@pepperize/cdk-eks'

Addon.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.Addon.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.Addon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-eks.Addon.property.serviceAccount">serviceAccount</a></code> | <code>aws-cdk-lib.aws_eks.ServiceAccount</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.Addon.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@pepperize/cdk-eks.Addon.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ServiceAccount;
```

- *Type:* aws-cdk-lib.aws_eks.ServiceAccount

---


### AwsLoadBalancerController <a name="AwsLoadBalancerController" id="@pepperize/cdk-eks.AwsLoadBalancerController"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.AwsLoadBalancerController.Initializer"></a>

```typescript
import { AwsLoadBalancerController } from '@pepperize/cdk-eks'

new AwsLoadBalancerController(scope: Construct, id: string, props: AwsLoadBalancerControllerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerController.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerController.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerController.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerControllerProps">AwsLoadBalancerControllerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.AwsLoadBalancerController.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.AwsLoadBalancerController.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.AwsLoadBalancerController.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.AwsLoadBalancerControllerProps">AwsLoadBalancerControllerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerController.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.AwsLoadBalancerController.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerController.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.AwsLoadBalancerController.isConstruct"></a>

```typescript
import { AwsLoadBalancerController } from '@pepperize/cdk-eks'

AwsLoadBalancerController.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.AwsLoadBalancerController.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerController.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerController.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.AwsLoadBalancerController.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.AwsLoadBalancerController.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---


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


### EbsCsiDriver <a name="EbsCsiDriver" id="@pepperize/cdk-eks.EbsCsiDriver"></a>

https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html.

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.EbsCsiDriver.Initializer"></a>

```typescript
import { EbsCsiDriver } from '@pepperize/cdk-eks'

new EbsCsiDriver(scope: Construct, id: string, props: EbsCsiDriverProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriver.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriver.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.EbsCsiDriverProps">EbsCsiDriverProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.EbsCsiDriver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.EbsCsiDriver.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.EbsCsiDriver.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.EbsCsiDriverProps">EbsCsiDriverProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriver.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.EbsCsiDriver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriver.create">create</a></code> | Create the driver construct associated with this cluster and scope. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.EbsCsiDriver.isConstruct"></a>

```typescript
import { EbsCsiDriver } from '@pepperize/cdk-eks'

EbsCsiDriver.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.EbsCsiDriver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `create` <a name="create" id="@pepperize/cdk-eks.EbsCsiDriver.create"></a>

```typescript
import { EbsCsiDriver } from '@pepperize/cdk-eks'

EbsCsiDriver.create(scope: Construct, props: EbsCsiDriverProps)
```

Create the driver construct associated with this cluster and scope.

Singleton per stack/cluster.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.EbsCsiDriver.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.EbsCsiDriver.create.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.EbsCsiDriverProps">EbsCsiDriverProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriver.property.serviceAccount">serviceAccount</a></code> | <code>aws-cdk-lib.aws_eks.ServiceAccount</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.EbsCsiDriver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@pepperize/cdk-eks.EbsCsiDriver.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ServiceAccount;
```

- *Type:* aws-cdk-lib.aws_eks.ServiceAccount

---


### EfsCsiDriver <a name="EfsCsiDriver" id="@pepperize/cdk-eks.EfsCsiDriver"></a>

https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html#efs-install-driver.

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.EfsCsiDriver.Initializer"></a>

```typescript
import { EfsCsiDriver } from '@pepperize/cdk-eks'

new EfsCsiDriver(scope: Construct, id: string, props: EfsCsiDriverProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriver.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriver.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.EfsCsiDriverProps">EfsCsiDriverProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.EfsCsiDriver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.EfsCsiDriver.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.EfsCsiDriver.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.EfsCsiDriverProps">EfsCsiDriverProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriver.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.EfsCsiDriver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriver.create">create</a></code> | Create the driver construct associated with this cluster and scope. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.EfsCsiDriver.isConstruct"></a>

```typescript
import { EfsCsiDriver } from '@pepperize/cdk-eks'

EfsCsiDriver.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.EfsCsiDriver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `create` <a name="create" id="@pepperize/cdk-eks.EfsCsiDriver.create"></a>

```typescript
import { EfsCsiDriver } from '@pepperize/cdk-eks'

EfsCsiDriver.create(scope: Construct, props: EfsCsiDriverProps)
```

Create the driver construct associated with this cluster and scope.

Singleton per stack/cluster.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.EfsCsiDriver.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.EfsCsiDriver.create.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.EfsCsiDriverProps">EfsCsiDriverProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.EfsCsiDriver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

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


### VpcCni <a name="VpcCni" id="@pepperize/cdk-eks.VpcCni"></a>

Amazon EKS supports native VPC networking with the Amazon VPC Container Network Interface (CNI) plugin for Kubernetes.

Using this plugin allows Kubernetes pods to have the same IP address inside the pod as they do on the VPC network.

> [https://docs.aws.amazon.com/eks/latest/userguide/pod-networking.html](https://docs.aws.amazon.com/eks/latest/userguide/pod-networking.html)

#### Initializers <a name="Initializers" id="@pepperize/cdk-eks.VpcCni.Initializer"></a>

```typescript
import { VpcCni } from '@pepperize/cdk-eks'

new VpcCni(scope: Construct, id: string, props: VpcCniProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.VpcCni.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.VpcCni.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.VpcCni.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-eks.VpcCniProps">VpcCniProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.VpcCni.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-eks.VpcCni.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.VpcCni.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.VpcCniProps">VpcCniProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.VpcCni.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-eks.VpcCni.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.VpcCni.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-eks.VpcCni.create">create</a></code> | Create the driver construct associated with this cluster and scope. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-eks.VpcCni.isConstruct"></a>

```typescript
import { VpcCni } from '@pepperize/cdk-eks'

VpcCni.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-eks.VpcCni.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `create` <a name="create" id="@pepperize/cdk-eks.VpcCni.create"></a>

```typescript
import { VpcCni } from '@pepperize/cdk-eks'

VpcCni.create(scope: Construct, props: VpcCniProps)
```

Create the driver construct associated with this cluster and scope.

Singleton per stack/cluster.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-eks.VpcCni.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-eks.VpcCni.create.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-eks.VpcCniProps">VpcCniProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.VpcCni.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-eks.VpcCni.property.serviceAccount">serviceAccount</a></code> | <code>aws-cdk-lib.aws_eks.ServiceAccount</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-eks.VpcCni.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@pepperize/cdk-eks.VpcCni.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ServiceAccount;
```

- *Type:* aws-cdk-lib.aws_eks.ServiceAccount

---


## Structs <a name="Structs" id="Structs"></a>

### AddonProps <a name="AddonProps" id="@pepperize/cdk-eks.AddonProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.AddonProps.Initializer"></a>

```typescript
import { AddonProps } from '@pepperize/cdk-eks'

const addonProps: AddonProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.AddonProps.property.addonName">addonName</a></code> | <code>string</code> | The name of the addon. |
| <code><a href="#@pepperize/cdk-eks.AddonProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.AddonProps.property.version">version</a></code> | <code><a href="#@pepperize/cdk-eks.IAddonVersion">IAddonVersion</a></code> | The version of the addon to be deployed. |
| <code><a href="#@pepperize/cdk-eks.AddonProps.property.managedPolicy">managedPolicy</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | The managed policy to add to the service account's role. |
| <code><a href="#@pepperize/cdk-eks.AddonProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.AddonProps.property.resolveConflicts">resolveConflicts</a></code> | <code><a href="#@pepperize/cdk-eks.ResolveConflicts">ResolveConflicts</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.AddonProps.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | The name of the service account for which to create a role. |

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@pepperize/cdk-eks.AddonProps.property.addonName"></a>

```typescript
public readonly addonName: string;
```

- *Type:* string

The name of the addon.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.AddonProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-eks.AddonProps.property.version"></a>

```typescript
public readonly version: IAddonVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.IAddonVersion">IAddonVersion</a>

The version of the addon to be deployed.

---

##### `managedPolicy`<sup>Optional</sup> <a name="managedPolicy" id="@pepperize/cdk-eks.AddonProps.property.managedPolicy"></a>

```typescript
public readonly managedPolicy: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The managed policy to add to the service account's role.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.AddonProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* kube-system

---

##### `resolveConflicts`<sup>Optional</sup> <a name="resolveConflicts" id="@pepperize/cdk-eks.AddonProps.property.resolveConflicts"></a>

```typescript
public readonly resolveConflicts: ResolveConflicts;
```

- *Type:* <a href="#@pepperize/cdk-eks.ResolveConflicts">ResolveConflicts</a>
- *Default:* 'OVERWRITE'

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@pepperize/cdk-eks.AddonProps.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

The name of the service account for which to create a role.

---

### AwsLoadBalancerControllerProps <a name="AwsLoadBalancerControllerProps" id="@pepperize/cdk-eks.AwsLoadBalancerControllerProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.AwsLoadBalancerControllerProps.Initializer"></a>

```typescript
import { AwsLoadBalancerControllerProps } from '@pepperize/cdk-eks'

const awsLoadBalancerControllerProps: AwsLoadBalancerControllerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerControllerProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerControllerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.AwsLoadBalancerControllerProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.AwsLoadBalancerControllerProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@pepperize/cdk-eks.AwsLoadBalancerControllerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.AwsLoadBalancerControllerProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* ingress

---

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

### EbsCsiDriverProps <a name="EbsCsiDriverProps" id="@pepperize/cdk-eks.EbsCsiDriverProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.EbsCsiDriverProps.Initializer"></a>

```typescript
import { EbsCsiDriverProps } from '@pepperize/cdk-eks'

const ebsCsiDriverProps: EbsCsiDriverProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriverProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriverProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriverProps.property.version">version</a></code> | <code><a href="#@pepperize/cdk-eks.EbsCsiDriverVersion">EbsCsiDriverVersion</a></code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.EbsCsiDriverProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.EbsCsiDriverProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* kube-system

---

##### `version`<sup>Optional</sup> <a name="version" id="@pepperize/cdk-eks.EbsCsiDriverProps.property.version"></a>

```typescript
public readonly version: EbsCsiDriverVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.EbsCsiDriverVersion">EbsCsiDriverVersion</a>
- *Default:* v1.5.2

---

### EfsCsiDriverProps <a name="EfsCsiDriverProps" id="@pepperize/cdk-eks.EfsCsiDriverProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.EfsCsiDriverProps.Initializer"></a>

```typescript
import { EfsCsiDriverProps } from '@pepperize/cdk-eks'

const efsCsiDriverProps: EfsCsiDriverProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverProps.property.policy">policy</a></code> | <code>any</code> | A custom iam policy document used for custom version. |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverProps.property.repository">repository</a></code> | <code>string</code> | The repository to pull the driver image from. |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverProps.property.version">version</a></code> | <code><a href="#@pepperize/cdk-eks.EfsCsiDriverVersion">EfsCsiDriverVersion</a></code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.EfsCsiDriverProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.EfsCsiDriverProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* kube-system

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@pepperize/cdk-eks.EfsCsiDriverProps.property.policy"></a>

```typescript
public readonly policy: any;
```

- *Type:* any
- *Default:* undefined

A custom iam policy document used for custom version.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@pepperize/cdk-eks.EfsCsiDriverProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string
- *Default:* '602401143452.dkr.ecr.us-east-1.amazonaws.com/eks/aws-efs-csi-driver'

The repository to pull the driver image from.

Note that the default repository works for most regions, but not all.

> [https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html.](https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html.)

---

##### `version`<sup>Optional</sup> <a name="version" id="@pepperize/cdk-eks.EfsCsiDriverProps.property.version"></a>

```typescript
public readonly version: EfsCsiDriverVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.EfsCsiDriverVersion">EfsCsiDriverVersion</a>
- *Default:* v1.3.2

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

### VpcCniProps <a name="VpcCniProps" id="@pepperize/cdk-eks.VpcCniProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-eks.VpcCniProps.Initializer"></a>

```typescript
import { VpcCniProps } from '@pepperize/cdk-eks'

const vpcCniProps: VpcCniProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.VpcCniProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.VpcCniProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.VpcCniProps.property.version">version</a></code> | <code><a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a></code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@pepperize/cdk-eks.VpcCniProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@pepperize/cdk-eks.VpcCniProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* kube-system

---

##### `version`<sup>Optional</sup> <a name="version" id="@pepperize/cdk-eks.VpcCniProps.property.version"></a>

```typescript
public readonly version: VpcCniVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a>
- *Default:* v1.10.2

---

## Classes <a name="Classes" id="Classes"></a>

### EbsCsiDriverVersion <a name="EbsCsiDriverVersion" id="@pepperize/cdk-eks.EbsCsiDriverVersion"></a>

- *Implements:* <a href="#@pepperize/cdk-eks.IAddonVersion">IAddonVersion</a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriverVersion.of">of</a></code> | Specify a custom version. |

---

##### `of` <a name="of" id="@pepperize/cdk-eks.EbsCsiDriverVersion.of"></a>

```typescript
import { EbsCsiDriverVersion } from '@pepperize/cdk-eks'

EbsCsiDriverVersion.of(version: string)
```

Specify a custom version.

Use this if the version you need is not available in one of the predefined versions.

###### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-eks.EbsCsiDriverVersion.of.parameter.version"></a>

- *Type:* string

The version number.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriverVersion.property.custom">custom</a></code> | <code>boolean</code> | Whether it's a custom version. |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriverVersion.property.version">version</a></code> | <code>string</code> | The version string. |

---

##### `custom`<sup>Required</sup> <a name="custom" id="@pepperize/cdk-eks.EbsCsiDriverVersion.property.custom"></a>

```typescript
public readonly custom: boolean;
```

- *Type:* boolean

Whether it's a custom version.

---

##### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-eks.EbsCsiDriverVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version string.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EbsCsiDriverVersion.property.V1_5_2">V1_5_2</a></code> | <code><a href="#@pepperize/cdk-eks.EbsCsiDriverVersion">EbsCsiDriverVersion</a></code> | v1.5.2. |

---

##### `V1_5_2`<sup>Required</sup> <a name="V1_5_2" id="@pepperize/cdk-eks.EbsCsiDriverVersion.property.V1_5_2"></a>

```typescript
public readonly V1_5_2: EbsCsiDriverVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.EbsCsiDriverVersion">EbsCsiDriverVersion</a>

v1.5.2.

---

### EfsCsiDriverVersion <a name="EfsCsiDriverVersion" id="@pepperize/cdk-eks.EfsCsiDriverVersion"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverVersion.of">of</a></code> | Specify a custom version. |

---

##### `of` <a name="of" id="@pepperize/cdk-eks.EfsCsiDriverVersion.of"></a>

```typescript
import { EfsCsiDriverVersion } from '@pepperize/cdk-eks'

EfsCsiDriverVersion.of(version: string)
```

Specify a custom version.

Use this if the version you need is not available in one of the predefined versions.
Note that in this case, you will also need to provide an IAM policy in the driver options.

###### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-eks.EfsCsiDriverVersion.of.parameter.version"></a>

- *Type:* string

The version number.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverVersion.property.custom">custom</a></code> | <code>boolean</code> | Whether it's a custom version. |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverVersion.property.version">version</a></code> | <code>string</code> | The version string. |

---

##### `custom`<sup>Required</sup> <a name="custom" id="@pepperize/cdk-eks.EfsCsiDriverVersion.property.custom"></a>

```typescript
public readonly custom: boolean;
```

- *Type:* boolean

Whether it's a custom version.

---

##### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-eks.EfsCsiDriverVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version string.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.EfsCsiDriverVersion.property.V1_3_2">V1_3_2</a></code> | <code><a href="#@pepperize/cdk-eks.EfsCsiDriverVersion">EfsCsiDriverVersion</a></code> | v1.3.2. |

---

##### `V1_3_2`<sup>Required</sup> <a name="V1_3_2" id="@pepperize/cdk-eks.EfsCsiDriverVersion.property.V1_3_2"></a>

```typescript
public readonly V1_3_2: EfsCsiDriverVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.EfsCsiDriverVersion">EfsCsiDriverVersion</a>

v1.3.2.

---

### VpcCniVersion <a name="VpcCniVersion" id="@pepperize/cdk-eks.VpcCniVersion"></a>

- *Implements:* <a href="#@pepperize/cdk-eks.IAddonVersion">IAddonVersion</a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.VpcCniVersion.of">of</a></code> | Specify a custom version. |

---

##### `of` <a name="of" id="@pepperize/cdk-eks.VpcCniVersion.of"></a>

```typescript
import { VpcCniVersion } from '@pepperize/cdk-eks'

VpcCniVersion.of(version: string)
```

Specify a custom version.

Use this if the version you need is not available in one of the predefined versions.

###### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-eks.VpcCniVersion.of.parameter.version"></a>

- *Type:* string

The version number.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.VpcCniVersion.property.custom">custom</a></code> | <code>boolean</code> | Whether it's a custom version. |
| <code><a href="#@pepperize/cdk-eks.VpcCniVersion.property.version">version</a></code> | <code>string</code> | The version string. |

---

##### `custom`<sup>Required</sup> <a name="custom" id="@pepperize/cdk-eks.VpcCniVersion.property.custom"></a>

```typescript
public readonly custom: boolean;
```

- *Type:* boolean

Whether it's a custom version.

---

##### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-eks.VpcCniVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version string.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.VpcCniVersion.property.V1_10_1">V1_10_1</a></code> | <code><a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a></code> | v1.10.1. |
| <code><a href="#@pepperize/cdk-eks.VpcCniVersion.property.V1_10_2">V1_10_2</a></code> | <code><a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a></code> | v1.10.2. |
| <code><a href="#@pepperize/cdk-eks.VpcCniVersion.property.V1_10_3">V1_10_3</a></code> | <code><a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a></code> | v1.10.3. |

---

##### `V1_10_1`<sup>Required</sup> <a name="V1_10_1" id="@pepperize/cdk-eks.VpcCniVersion.property.V1_10_1"></a>

```typescript
public readonly V1_10_1: VpcCniVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a>

v1.10.1.

---

##### `V1_10_2`<sup>Required</sup> <a name="V1_10_2" id="@pepperize/cdk-eks.VpcCniVersion.property.V1_10_2"></a>

```typescript
public readonly V1_10_2: VpcCniVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a>

v1.10.2.

---

##### `V1_10_3`<sup>Required</sup> <a name="V1_10_3" id="@pepperize/cdk-eks.VpcCniVersion.property.V1_10_3"></a>

```typescript
public readonly V1_10_3: VpcCniVersion;
```

- *Type:* <a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a>

v1.10.3.

---

## Protocols <a name="Protocols" id="Protocols"></a>

### IAddonVersion <a name="IAddonVersion" id="@pepperize/cdk-eks.IAddonVersion"></a>

- *Implemented By:* <a href="#@pepperize/cdk-eks.EbsCsiDriverVersion">EbsCsiDriverVersion</a>, <a href="#@pepperize/cdk-eks.VpcCniVersion">VpcCniVersion</a>, <a href="#@pepperize/cdk-eks.IAddonVersion">IAddonVersion</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-eks.IAddonVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-eks.IAddonVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### ResolveConflicts <a name="ResolveConflicts" id="@pepperize/cdk-eks.ResolveConflicts"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-eks.ResolveConflicts.NONE">NONE</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-eks.ResolveConflicts.OVERWRITE">OVERWRITE</a></code> | *No description.* |

---

##### `NONE` <a name="NONE" id="@pepperize/cdk-eks.ResolveConflicts.NONE"></a>

---


##### `OVERWRITE` <a name="OVERWRITE" id="@pepperize/cdk-eks.ResolveConflicts.OVERWRITE"></a>

---

