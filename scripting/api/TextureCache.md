---
title: "TextureCache"
description: "The TextureCache API manages texture cache resources."
draft: true
---

# TextureCache

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>TextureCache</code> API manages texture cache resources.</p></div>

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
TextureCache.getResourceList()
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
TextureCache.prefetch(url, type, maxNumPixels?)
```

<div class="api-text" v-pre><p>Prefetches a texture resource of specific type.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The URL of the texture to prefetch.</p></td></tr>
<tr><td><code>type</code></td><td><a href="#TextureType">TextureCache.TextureType</a></td><td></td><td><p>The type of the texture.</p></td></tr>
<tr><td><code>maxNumPixels</code> <em>optional</em></td><td>number</td><td><code>67108864</code></td><td><p>The maximum number of pixels to use for the image. If the texture has more than this number it is downscaled.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="ResourceObject">ResourceObject</a> <p>A resource object.</p></div>

</div>

<div class="api-entry">

### prefetch {#prefetch-2}

```js
TextureCache.prefetch(url)
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
TextureCache.dirty.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the cache content has changed.</p></div>

</div>

## Types {#types}

<div class="api-entry">

### TextureType {#TextureType}

<div class="api-text" v-pre><p>Describes the type of texture.</p>
 <p>See also: <code>Material</code> and PBR Materials Guide.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>Default</td><td>Basic color.</td></tr>
 <tr><td><code>1</code></td><td>Strict</td><td>Basic color. Quality never downgraded.</td></tr>
 <tr><td><code>2</code></td><td>Albedo</td><td>Color for PBR.</td></tr>
 <tr><td><code>3</code></td><td>Normal</td><td>Normal map.</td></tr>
 <tr><td><code>4</code></td><td>Bump</td><td>Bump map.</td></tr>
 <tr><td><code>5</code></td><td>Specular or metallic</td><td>Metallic or not.</td></tr>
 <tr><td><code>6</code></td><td>Roughness</td><td>Rough or matte.</td></tr>
 <tr><td><code>7</code></td><td>Gloss</td><td>Gloss or shine.</td></tr>
 <tr><td><code>8</code></td><td>Emissive</td><td>The amount of light reflected.</td></tr>
 <tr><td><code>9</code></td><td>Cube</td><td>Cubic image for sky boxes.</td></tr>
 <tr><td><code>10</code></td><td>Ambient</td><td>Cubic image for ambient light.</td></tr>
 <tr><td><code>11</code></td><td>Scattering</td><td>How human skin interacts with light. Occlusion maps used this type until they had their own.</td></tr>
 <tr><td><code>12</code></td><td>Lightmap</td><td>Light map.</td></tr>
 <tr><td><code>13</code></td><td>Unused</td><td>Texture is not currently used.</td></tr>
 <tr><td><code>14</code></td><td>Occlusion</td><td>How much ambient light reaches the surface: data, not colour.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### updateTotalSize {#updateTotalSize}

```js
TextureCache.updateTotalSize(deltaSize)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deltaSize</code></td><td>number</td><td><p>Delta size.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### spectatorCameraFramebufferReset {#spectatorCameraFramebufferReset}

```js
TextureCache.spectatorCameraFramebufferReset.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::


</div>
