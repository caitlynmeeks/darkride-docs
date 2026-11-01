---
title: "Model"
description: "The Model API provides the ability to manipulate meshes."
draft: true
---

# Model

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Model</code> API provides the ability to manipulate meshes. You can get the meshes for an entity using <a href="Entities#getMeshes"><code>Entities.getMeshes</code></a>, or create a new mesh using <a href="#newMesh"><code>Model.newMesh</code></a>. </p>
<p>See also, the <a href="Graphics"><code>Graphics</code></a> API.</p>
<p></p></div>

## Functions {#functions}

<div class="api-entry">

### appendMeshes {#appendMeshes}

```js
Model.appendMeshes(meshes)
```

<div class="api-text" v-pre><p>Combines multiple meshes into one.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>meshes</code></td><td>Array&lt;<a href="MeshProxy">MeshProxy</a>&gt;</td><td><p>The meshes to combine.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="MeshProxy">MeshProxy</a> <p>The combined mesh.</p></div>

</div>

<div class="api-entry">

### getVertex {#getVertex}

```js
Model.getVertex(mesh, index)
```

<div class="api-text" v-pre><p>Gets the position of a vertex in a mesh.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>mesh</code></td><td><a href="MeshProxy">MeshProxy</a></td><td><p>The mesh.</p></td></tr>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the vertex to get.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> | boolean <p>The local position of the vertex relative to the mesh, if valid. <code>false</code> if an error.</p></div>

</div>

<div class="api-entry">

### getVertexCount {#getVertexCount}

```js
Model.getVertexCount(mesh)
```

<div class="api-text" v-pre><p>Gets the number of vertices in a mesh.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>mesh</code></td><td><a href="MeshProxy">MeshProxy</a></td><td><p>The mesh to count the vertices in.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number | boolean <p>The number of vertices in the mesh, if valid. <code>false</code> if an error.</p></div>

</div>

<div class="api-entry">

### meshToOBJ {#meshToOBJ}

```js
Model.meshToOBJ(meshes)
```

<div class="api-text" v-pre><p>Exports meshes to an OBJ format model.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>meshes</code></td><td>Array&lt;<a href="MeshProxy">MeshProxy</a>&gt;</td><td><p>The meshes to export.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The OBJ format representation of the meshes.</p></div>

</div>

<div class="api-entry">

### newMesh {#newMesh}

```js
Model.newMesh(vertices, normals, faces)
```

<div class="api-text" v-pre><p>Creates a new mesh.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>vertices</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><p>The vertices in the mesh.</p></td></tr>
<tr><td><code>normals</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><p>The normals in the mesh.</p></td></tr>
<tr><td><code>faces</code></td><td>Array&lt;<a href="globals#MeshFace">MeshFace</a>&gt;</td><td><p>The faces in the mesh.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="MeshProxy">MeshProxy</a> <p>A new mesh.</p></div>

</div>

<div class="api-entry">

### transformMesh {#transformMesh}

```js
Model.transformMesh(transform, mesh)
```

<div class="api-text" v-pre><p>Transforms the vertices in a mesh.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>transform</code></td><td><a href="Mat4">Mat4</a></td><td><p>The transform to apply.</p></td></tr>
<tr><td><code>mesh</code></td><td><a href="MeshProxy">MeshProxy</a></td><td><p>The mesh to apply the transform to.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="MeshProxy">MeshProxy</a> | boolean <p>The transformed mesh, if valid. <code>false</code> if an error.</p></div>

</div>
