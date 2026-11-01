---
title: "MaterialCache"
description: "The MaterialCache API manages material cache resources."
---

# MaterialCache

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>MaterialCache</code> API manages material cache resources.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>numTotal</code></td><td>number</td><td><p>Total number of total resources. <em>Read-only.</em></p></td></tr>
<tr><td><code>numCached</code></td><td>number</td><td><p>Total number of cached resource. <em>Read-only.</em></p></td></tr>
<tr><td><code>sizeTotal</code></td><td>number</td><td><p>Size in bytes of all resources. <em>Read-only.</em></p></td></tr>
<tr><td><code>sizeCached</code></td><td>number</td><td><p>Size in bytes of all cached resources. <em>Read-only.</em></p></td></tr>
<tr><td><code>numGlobalQueriesPending</code></td><td>number</td><td><p>Total number of global queries pending (across all resource cache managers). <em>Read-only.</em></p></td></tr>
<tr><td><code>numGlobalQueriesLoading</code></td><td>number</td><td><p>Total number of global queries loading (across all resource cache managers). <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### getResourceList {#getResourceList}

```js
MaterialCache.getResourceList()
```

<div class="api-text" v-pre><p>Gets the URLs of all resources in the cache.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The URLs of all resources in the cache.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report cached resources.</p></div>

```js
// Replace AnimationCache with MaterialCache, ModelCache, SoundCache, or TextureCache as appropriate.

var cachedResources = AnimationCache.getResourceList();
print("Cached resources: " + JSON.stringify(cachedResources));
```

</div>

<div class="api-entry">

### prefetch {#prefetch}

```js
MaterialCache.prefetch(url)
```

<div class="api-text" v-pre><p>Prefetches a resource.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the resource to prefetch.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="ResourceObject">ResourceObject</a> <p>A resource object.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Prefetch a resource and wait until it has loaded.</p></div>

```js
// Replace AnimationCache with MaterialCache, ModelCache, SoundCache, or TextureCache as appropriate.
// TextureCache has its own version of this function.

var resourceURL = "https://s3-us-west-1.amazonaws.com/hifi-content/clement/production/animations/sitting_idle.fbx";
var resourceObject = AnimationCache.prefetch(resourceURL);

function checkIfResourceLoaded(state) {
    if (state === Resource.State.FINISHED) {
        print("Resource loaded and ready.");
    } else if (state === Resource.State.FAILED) {
        print("Resource not loaded.");
    }
}

// Resource may have already been loaded.
print("Resource state: " + resourceObject.state);
checkIfResourceLoaded(resourceObject.state);

// Resource may still be loading.
resourceObject.stateChanged.connect(function (state) {
    print("Resource state changed to: " + state);
    checkIfResourceLoaded(state);
});
```

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### dirty {#dirty}

```js
MaterialCache.dirty.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the cache content has changed.</p></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### updateTotalSize {#updateTotalSize}

```js
MaterialCache.updateTotalSize(deltaSize)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deltaSize</code></td><td>number</td><td><p>Delta size.</p></td></tr>
</tbody></table></div>

</div>
