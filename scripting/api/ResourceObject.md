---
title: "ResourceObject"
description: "Information about a cached resource."
draft: true
---

# ResourceObject

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>Information about a cached resource. Created by <a href="AnimationCache#prefetch"><code>AnimationCache.prefetch</code></a>, <a href="MaterialCache#prefetch"><code>MaterialCache.prefetch</code></a>, <a href="ModelCache#prefetch"><code>ModelCache.prefetch</code></a>, <a href="SoundCache#prefetch"><code>SoundCache.prefetch</code></a>, or <a href="TextureCache#prefetch-2"><code>TextureCache.prefetch</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>URL of the resource. <em>Read-only.</em></p></td></tr>
<tr><td><code>state</code></td><td><a href="Resource#State">Resource.State</a></td><td><p>Current loading state. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### release {#release}

```js
release()
```

<div class="api-text" v-pre><p>Releases the resource.</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### progressChanged {#progressChanged}

```js
ResourceObject.progressChanged.connect(function (bytesReceived, bytesTotal) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the resource's download progress changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bytesReceived</code></td><td>number</td><td><p>Bytes downloaded so far.</p></td></tr>
<tr><td><code>bytesTotal</code></td><td>number</td><td><p>Total number of bytes in the resource.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### stateChanged {#stateChanged}

```js
ResourceObject.stateChanged.connect(function (state) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the resource's loading state changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>state</code></td><td><a href="Resource#State">Resource.State</a></td><td><p>New state.</p></td></tr>
</tbody></table></div>

</div>
