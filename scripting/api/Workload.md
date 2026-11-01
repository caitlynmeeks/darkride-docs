---
title: "Workload"
draft: true
---

# Workload

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>


## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>cpuRunTime</code></td><td>number</td><td><p><em>Read-only.</em></p></td></tr>
<tr><td><code>enabled</code></td><td>boolean</td><td></td></tr>
<tr><td><code>branch</code></td><td>number</td><td></td></tr>
</tbody></table></div>

## Functions {#functions}

### getConfig {#getConfig}

```js
Workload.getConfig(name)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object </div>

### getNumSubs {#getNumSubs}

```js
Workload.getNumSubs()
```

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### getSubConfig {#getSubConfig}

```js
Workload.getSubConfig(index)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object </div>

### getSubConfigs {#getSubConfigs}

```js
Workload.getSubConfigs()
```

<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;object&gt; </div>

### isSwitch {#isSwitch}

```js
Workload.isSwitch()
```

<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

### isTask {#isTask}

```js
Workload.isTask()
```

<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

### load {#load}

```js
Workload.load(map)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>map</code></td><td>object</td><td></td></tr>
</tbody></table></div>

### load {#load-2}

```js
Workload.load(json)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>json</code></td><td>object</td><td></td></tr>
</tbody></table></div>

### refresh {#refresh}

```js
Workload.refresh()
```


### toJSON {#toJSON}

```js
Workload.toJSON()
```

<div class="api-returns" v-pre><strong>Returns:</strong> string </div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### dirtyEnabled {#dirtyEnabled}

```js
Workload.dirtyEnabled.connect(function () {
    ...
});
```


### loaded {#loaded}

```js
Workload.loaded.connect(function () {
    ...
});
```


### newStats {#newStats}

```js
Workload.newStats.connect(function () {
    ...
});
```

