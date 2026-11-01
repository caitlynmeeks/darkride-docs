---
title: "AnimationObject"
description: "Information about an animation resource, created by AnimationCache.getAnimation."
---

# AnimationObject

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>Information about an animation resource, created by <a href="AnimationCache#getAnimation"><code>AnimationCache.getAnimation</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>jointNames</code></td><td>Array&lt;string&gt;</td><td><p>The names of the joints that are animated. <em>Read-only.</em></p></td></tr>
<tr><td><code>frames</code></td><td>Array&lt;<a href="AnimationFrameObject">AnimationFrameObject</a>&gt;</td><td><p>The frames in the animation. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### getFrames {#getFrames}

```js
AnimationObject.getFrames()
```

<div class="api-text" v-pre><p>Gets the frames in the animation.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="AnimationFrameObject">AnimationFrameObject</a>&gt; <p>The frames in the animation.</p></div>

</div>

<div class="api-entry">

### getJointNames {#getJointNames}

```js
AnimationObject.getJointNames()
```

<div class="api-text" v-pre><p>Gets the names of the joints that are animated.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of the joints that are animated.</p></div>

</div>
