---
title: "MeshProxy"
description: "A handle for a mesh in an entity, such as returned by Entities.getMeshes."
draft: true
---

# MeshProxy

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>A handle for a mesh in an entity, such as returned by <a href="Entities#getMeshes"><code>Entities.getMeshes</code></a>.</p></div>

## Methods {#functions}

### getNumVertices {#getNumVertices}

```js
getNumVertices()
```

<div class="api-text" v-pre><p>Gets the number of vertices in the mesh.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Integer number of vertices in the mesh.</p></div>

### getPos {#getPos}

```js
getPos(index)
```

<div class="api-text" v-pre><p>Gets the position of a vertex in the mesh.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>Integer index of the vertex.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>Local position of the vertex relative to the mesh.</p></div>
