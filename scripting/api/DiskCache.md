---
title: "DiskCache"
description: "The DiskCache API lets you manage your cache."
---

# DiskCache

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>DiskCache</code> API lets you manage your cache.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>maximumCacheSize</code></td><td>number</td><td><p>The maximum cache size in gigabytes.</p></td></tr>
<tr><td><code>usedCacheSize</code></td><td>number</td><td><p>The used cache size in gigabytes. <em>Read-only.</em></p></td></tr>
<tr><td><code>cacheDirectory</code></td><td>string</td><td><p>The path to the cache directory.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### clearCache {#clearCache}

```js
DiskCache.clearCache()
```

<div class="api-text" v-pre><p>Clears all the cache.</p></div>

</div>

<div class="api-entry">

### getCacheDirectory {#getCacheDirectory}

```js
DiskCache.getCacheDirectory()
```

<div class="api-text" v-pre><p>Gets the path to the cache directory.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>cacheDirectory - The path to the cache directory.</p></div>

</div>

<div class="api-entry">

### getMaximumCacheSize {#getMaximumCacheSize}

```js
DiskCache.getMaximumCacheSize()
```

<div class="api-text" v-pre><p>Gets the maximum cache size in gigabytes.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>maximumCacheSize - The maximum cache size in gigabytes.</p></div>

</div>

<div class="api-entry">

### getUsedCacheSize {#getUsedCacheSize}

```js
DiskCache.getUsedCacheSize()
```

<div class="api-text" v-pre><p>Gets the used cache size in gigabytes.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>usedCacheSize - The used cache size in gigabytes.</p></div>

</div>

<div class="api-entry">

### restoreDefaultCacheDirectory {#restoreDefaultCacheDirectory}

```js
DiskCache.restoreDefaultCacheDirectory()
```

<div class="api-text" v-pre><p>Sets the path to the cache directory back to the default.</p></div>

</div>

<div class="api-entry">

### restoreDefaultMaximumCacheSize {#restoreDefaultMaximumCacheSize}

```js
DiskCache.restoreDefaultMaximumCacheSize()
```

<div class="api-text" v-pre><p>Sets the maximum cache size in gigabytes back to the default.</p></div>

</div>

<div class="api-entry">

### setCacheDirectory {#setCacheDirectory}

```js
DiskCache.setCacheDirectory(cacheDirectory)
```

<div class="api-text" v-pre><p>Sets the path to the cache directory.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>cacheDirectory</code></td><td>string</td><td><p>The path to the cache directory.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setMaximumCacheSize {#setMaximumCacheSize}

```js
DiskCache.setMaximumCacheSize(maximumCacheSize)
```

<div class="api-text" v-pre><p>Sets the maximum cache size in gigabytes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>maximumCacheSize</code></td><td>number</td><td><p>The maximum cache size in gigabytes.</p></td></tr>
</tbody></table></div>

</div>
