---
title: "AnimationFrameObject"
description: "Joint rotations in one frame of an AnimationObject."
---

# AnimationFrameObject

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>Joint rotations in one frame of an <a href="AnimationObject"><code>AnimationObject</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rotations</code></td><td>Array&lt;<a href="Quat">Quat</a>&gt;</td><td><p>Joint rotations. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### getRotations {#getRotations}

```js
AnimationFrameObject.getRotations()
```

<div class="api-text" v-pre><p>Gets the joint rotations in the animation frame.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Quat">Quat</a>&gt; <p>The joint rotations in the animation frame.</p></div>

</div>
