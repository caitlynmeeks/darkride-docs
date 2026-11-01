---
title: "Workload"
---

# Workload

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>


## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>cpuRunTime</code></td><td>number</td><td><p><em>Read-only.</em></p></td></tr>
<tr><td><code>enabled</code></td><td>boolean</td><td></td></tr>
<tr><td><code>branch</code></td><td>number</td><td></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### getConfig {#getConfig}

```js
Workload.getConfig(name)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object </div>

</div>

<div class="api-entry">

### getNumSubs {#getNumSubs}

```js
Workload.getNumSubs()
```

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

</div>

<div class="api-entry">

### getSubConfig {#getSubConfig}

```js
Workload.getSubConfig(index)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object </div>

</div>

<div class="api-entry">

### getSubConfigs {#getSubConfigs}

```js
Workload.getSubConfigs()
```

<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;object&gt; </div>

</div>

<div class="api-entry">

### isSwitch {#isSwitch}

```js
Workload.isSwitch()
```

<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

</div>

<div class="api-entry">

### isTask {#isTask}

```js
Workload.isTask()
```

<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

</div>

<div class="api-entry">

### load {#load}

```js
Workload.load(map)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>map</code></td><td>object</td><td></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### load {#load-2}

```js
Workload.load(json)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>json</code></td><td>object</td><td></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### refresh {#refresh}

```js
Workload.refresh()
```


</div>

<div class="api-entry">

### toJSON {#toJSON}

```js
Workload.toJSON()
```

<div class="api-returns" v-pre><strong>Returns:</strong> string </div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### dirtyEnabled {#dirtyEnabled}

```js
Workload.dirtyEnabled.connect(function () {
    ...
});
```


</div>

<div class="api-entry">

### loaded {#loaded}

```js
Workload.loaded.connect(function () {
    ...
});
```


</div>

<div class="api-entry">

### newStats {#newStats}

```js
Workload.newStats.connect(function () {
    ...
});
```


</div>
