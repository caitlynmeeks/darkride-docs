---
title: "Resources"
description: "The Resources API enables the default location for different resource types to be overridden."
---

# Resources

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Resources</code> API enables the default location for different resource types to be overridden.</p></div>

## Functions {#functions}

<div class="api-entry">

### clearFailures {#clearFailures}

```js
Resources.clearFailures()
```

<div class="api-text" v-pre><p>Empties the list of failures (Resources.getFailures), to start a fresh pass.</p></div>

</div>

<div class="api-entry">

### getFailures {#getFailures}

```js
Resources.getFailures()
```

<div class="api-text" v-pre><p>Every file whose load failed for good this run, one entry per address (its latest failure), the newest last: a list to work through. A file that loads later leaves it.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="#Failure">Resources.Failure</a>&gt; <p>The failures.</p></div>

</div>

<div class="api-entry">

### overrideUrlPrefix {#overrideUrlPrefix}

```js
Resources.overrideUrlPrefix(prefix, replacement)
```

<div class="api-text" v-pre><p>Overrides a path prefix with an alternative path.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>prefix</code></td><td>string</td><td><p>The path prefix to override, e.g., <code>"atp:/"</code>.</p></td></tr>
<tr><td><code>replacement</code></td><td>string</td><td><p>The replacement path for the prefix.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### restoreUrlPrefix {#restoreUrlPrefix}

```js
Resources.restoreUrlPrefix(prefix)
```

<div class="api-text" v-pre><p>Restores the default path for a specified prefix.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>prefix</code></td><td>string</td><td><p>The prefix of the resource to restore the path for.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### resourceFailed {#resourceFailed}

```js
Resources.resourceFailed.connect(function (url, type, reason) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a file's load fails for good.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The file's address.</p></td></tr>
<tr><td><code>type</code></td><td>string</td><td><p>What kind of file (see Resources.Failure).</p></td></tr>
<tr><td><code>reason</code></td><td>string</td><td><p>Why.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### Failure {#Failure}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The file's address.</p></td></tr>
<tr><td><code>type</code></td><td>string</td><td><p><code>"model"</code>, <code>"texture"</code>, <code>"material"</code>, <code>"animation"</code>, <code>"shader"</code> or <code>"file"</code>.</p></td></tr>
<tr><td><code>reason</code></td><td>string</td><td><p>Why, e.g. <code>"404 not found"</code>, <code>"host not found: example.com"</code>, <code>"could not be read"</code>.</p></td></tr>
<tr><td><code>time</code></td><td>number</td><td><p>When, in milliseconds since the epoch.</p></td></tr>
</tbody></table></div>

</div>
