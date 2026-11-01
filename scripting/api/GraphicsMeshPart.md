---
title: "GraphicsMeshPart"
description: "A handle to in-memory mesh part data in a GraphicsModel."
---

# GraphicsMeshPart

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A handle to in-memory mesh part data in a <a href="GraphicsModel"><code>GraphicsModel</code></a>.</p>
 <p>Created using the <a href="Graphics"><code>Graphics</code></a> API, <a href="GraphicsModel#cloneModel"><code>GraphicsModel.cloneModel</code></a>, <a href="GraphicsMesh#cloneMesh"><code>GraphicsMesh.cloneMesh</code></a>, or <a href="#cloneMeshPart"><code>GraphicsMeshPart.cloneMeshPart</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>valid</code></td><td>boolean</td><td><p><code>true</code> if the mesh part is valid, <code>false</code> if it isn't. <em>Read-only.</em></p></td></tr>
<tr><td><code>partIndex</code></td><td>number</td><td><p>The index of the part within the <em>whole</em> mesh (i.e., parent and mesh parts). <em>Read-only.</em></p></td></tr>
<tr><td><code>firstVertexIndex</code></td><td>number</td><td><p>The index of the first vertex.</p></td></tr>
<tr><td><code>baseVertexIndex</code></td><td>number</td><td><p>The index of the base vertex.</p></td></tr>
<tr><td><code>lastVertexIndex</code></td><td>number</td><td><p>The index of the last vertex.</p></td></tr>
<tr><td><code>topology</code></td><td><a href="Graphics#MeshTopology">Graphics.MeshTopology</a></td><td><p>The element interpretation. <em>Currently only triangles is supported.</em></p></td></tr>
<tr><td><code>numIndices</code></td><td>number</td><td><p>The number of vertex indices in the mesh part.</p></td></tr>
<tr><td><code>numVertices</code></td><td>number</td><td><p>The number of vertices in the <em>whole</em> mesh (i.e., parent and mesh parts). <em>Read-only.</em></p></td></tr>
<tr><td><code>numVerticesPerFace</code></td><td>number</td><td><p>The number of vertices per face, per the <code>topology</code> (e.g., 3 for triangles). <em>Read-only.</em></p></td></tr>
<tr><td><code>numFaces</code></td><td>number</td><td><p>The number of faces represented by the mesh part. <em>Read-only.</em></p></td></tr>
<tr><td><code>numAttributes</code></td><td>number</td><td><p>The number of vertex attributes in the <em>whole</em> mesh (i.e., parent and mesh parts). <em>Read-only.</em></p></td></tr>
<tr><td><code>attributeNames</code></td><td>Array&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>&gt;</td><td><p>The names of the vertex attributes in the <em>whole</em> mesh (i.e., parent and mesh parts). <em>Read-only.</em></p></td></tr>
<tr><td><code>extents</code></td><td><a href="Graphics#MeshExtents">Graphics.MeshExtents</a></td><td><p>The mesh part extents, in model coordinates. <em>Read-only.</em></p></td></tr>
<tr><td><code>bufferFormats</code></td><td>Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferFormat">Graphics.BufferFormat</a>&gt;</td><td><p>Details of the buffers used for the <em>whole</em> mesh (i.e., parent and mesh parts). <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### addAttribute {#addAttribute}

```js
GraphicsMeshPart.addAttribute(name, defaultValue?)
```

<div class="api-text" v-pre><p>Adds an attribute to the (whole) mesh's vertices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the attribute.</p></td></tr>
<tr><td><code>defaultValue</code> <em>optional</em></td><td><a href="Graphics#BufferType">Graphics.BufferType</a></td><td><p>The value to give the attributes added to the vertices.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of vertices the attribute was added to, <code>0</code> if the <code>name</code> was invalid or all vertices already had the attribute.</p></div>

</div>

<div class="api-entry">

### cloneMeshPart {#cloneMeshPart}

```js
GraphicsMeshPart.cloneMeshPart()
```

<div class="api-text" v-pre><p>Makes a copy of the mesh part.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">GraphicsMeshPart</a> <p>A copy of the mesh part.</p></div>

</div>

<div class="api-entry">

### dedupeVertices {#dedupeVertices}

```js
GraphicsMeshPart.dedupeVertices(epsilon?)
```

<div class="api-text" v-pre><p>Deduplicates vertices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>epsilon</code> <em>optional</em></td><td>number</td><td><code>1e-6</code></td><td><p>The deduplicadtion distance. If a pair of vertices is within this distance of each other they are combined into a single vertex.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the deduplication succeeded, <code>false</code> if it didn't.</p></div>

</div>

<div class="api-entry">

### fillAttribute {#fillAttribute}

```js
GraphicsMeshPart.fillAttribute(name, value)
```

<div class="api-text" v-pre><p>Sets the value of an attribute for all vertices in the <em>whole</em> mesh (i.e., parent and mesh parts).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the attribute. The attribute is added to the vertices if not already present.</p></td></tr>
<tr><td><code>value</code></td><td><a href="Graphics#BufferType">Graphics.BufferType</a></td><td><p>The value to give the attributes.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p><code>1</code> if the attribute name was valid and the attribute values were set, <code>0</code> otherwise.</p></div>

</div>

<div class="api-entry">

### findNearbyPartVertexIndices {#findNearbyPartVertexIndices}

```js
GraphicsMeshPart.findNearbyPartVertexIndices(origin, epsilon?)
```

<div class="api-text" v-pre><p>Gets the indices of nearby vertices in the mesh part.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>origin</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The search position, in model coordinates.</p></td></tr>
<tr><td><code>epsilon</code> <em>optional</em></td><td>number</td><td><code>1e-6</code></td><td><p>The search distance. If a vertex is within this distance from the <code>origin</code> it is considered to be "nearby".</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;number&gt; <p>The indices of nearby vertices.</p></div>

</div>

<div class="api-entry">

### getFace {#getFace}

```js
GraphicsMeshPart.getFace(index)
```

<div class="api-text" v-pre><p>Gets the vertex indices that make up a face.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the face.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;number&gt; <p>The vertex indices that make up the face, of number per the mesh <code>topology</code>.</p></div>

</div>

<div class="api-entry">

### getIndices {#getIndices}

```js
GraphicsMeshPart.getIndices()
```

<div class="api-text" v-pre><p>Gets the vertex indices.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;number&gt; <p>The vertex indices.</p></div>

</div>

<div class="api-entry">

### getParentMesh {#getParentMesh}

```js
GraphicsMeshPart.getParentMesh()
```

<div class="api-text" v-pre><p>Gets the parent mesh.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="GraphicsMesh">GraphicsMesh</a> <p>The parent mesh.</p></div>

</div>

<div class="api-entry">

### getVertexProperty {#getVertexProperty}

```js
GraphicsMeshPart.getVertexProperty(index, name)
```

<div class="api-text" v-pre><p>Gets the value of a vertex's attribute.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex index.</p></td></tr>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the vertex attribute to get.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Graphics#BufferType">Graphics.BufferType</a> <p>The value of the vertex attribute.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> is invalid or <code>name</code> is invalid or isn't used in the mesh.</p></div>

</div>

<div class="api-entry">

### getVertextAttributes {#getVertextAttributes}

```js
GraphicsMeshPart.getVertextAttributes(index)
```

<div class="api-text" v-pre><p>Gets the attributes and attribute values of a vertex.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex to get the attributes for.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferType">Graphics.BufferType</a>&gt; <p>The attribute names and values for the vertex.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> is invalid.</p></div>

</div>

<div class="api-entry">

### isValidIndex {#isValidIndex}

```js
GraphicsMeshPart.isValidIndex(index, attribute?)
```

<div class="api-text" v-pre><p>Checks if an index is valid and, optionally, that vertex has a particular attribute.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index to check.</p></td></tr>
<tr><td><code>attribute</code> <em>optional</em></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The attribute to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the index is valid and that vertex has the attribute if specified.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> if invalid or <code>name</code> is invalid or isn't used in the mesh.</p></div>

</div>

<div class="api-entry">

### replaceMeshPartData {#replaceMeshPartData}

```js
GraphicsMeshPart.replaceMeshPartData(source, attributes?)
```

<div class="api-text" v-pre><p>Replaces a mesh part with a copy of another mesh part.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td>GrphicsMeshPart</td><td><p>The mesh part to copy.</p></td></tr>
<tr><td><code>attributes</code> <em>optional</em></td><td>Array&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>&gt;</td><td><p>The attributes to copy. If not specified, all attributes are copied from the source.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the mesh part was successfully replaced, <code>false</code> if it wasn't.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the mesh part of source mesh part aren't valid.</p></div>

</div>

<div class="api-entry">

### rotate {#rotate}

```js
GraphicsMeshPart.rotate(rotation, origin?)
```

<div class="api-text" v-pre><p>Rotates the mesh part, using a quaternion.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation to perform, in model coordinates.</p></td></tr>
<tr><td><code>origin</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><p>The point about which to rotate, in model coordinates. </p>
<p><strong>Warning:</strong> Currently doesn't work as expected.</p>
<p></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Graphics#MeshExtents">Graphics.MeshExtents</a> <p>The resulting mesh extents, in model coordinates.</p></div>

</div>

<div class="api-entry">

### rotateDegrees {#rotateDegrees}

```js
GraphicsMeshPart.rotateDegrees(eulerAngles, origin?)
```

<div class="api-text" v-pre><p>Rotates the mesh part, using Euler angles.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>eulerAngles</code></td><td><a href="Vec3">Vec3</a></td><td><p>The rotation to perform, in mesh coordinates, as Euler angles in degrees.</p></td></tr>
<tr><td><code>origin</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><p>The point about which to rotate, in model coordinates. </p>
<p><strong>Warning:</strong> Currently doesn't work as expected.</p>
<p></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Graphics#MeshExtents">Graphics.MeshExtents</a> <p>The resulting mesh extents, in model coordinates.</p></div>

</div>

<div class="api-entry">

### scale {#scale}

```js
GraphicsMeshPart.scale(scale, origin?)
```

<div class="api-text" v-pre><p>Scales the mesh part.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scale</code></td><td><a href="Vec3">Vec3</a></td><td><p>The scale to apply in each model coordinate direction.</p></td></tr>
<tr><td><code>origin</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><p>The origin to scale about. If not specified, the center of the mesh part is used.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Graphics#MeshExtents">Graphics.MeshExtents</a> <p>The resulting mesh extents, in model coordinates.</p></div>

</div>

<div class="api-entry">

### scaleToFit {#scaleToFit}

```js
GraphicsMeshPart.scaleToFit(scale)
```

<div class="api-text" v-pre><p>Scales the mesh to so that it's maximum model coordinate dimension is a specified length.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scale</code></td><td>number</td><td><p>The target dimension.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Graphics#MeshExtents">Graphics.MeshExtents</a> <p>The resulting mesh extents, in model coordinates.</p></div>

</div>

<div class="api-entry">

### setIndices {#setIndices}

```js
GraphicsMeshPart.setIndices(indices)
```

<div class="api-text" v-pre><p>Sets the vertex indices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>indices</code></td><td>Array&lt;number&gt;</td><td><p>The vertex indices.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if successful, <code>false</code> if not.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the number of indices isn't the same, or an index is invalid.</p></div>

</div>

<div class="api-entry">

### setVertexProperty {#setVertexProperty}

```js
GraphicsMeshPart.setVertexProperty(index, name, value)
```

<div class="api-text" v-pre><p>Sets the value of a vertex's attribute.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex index.</p></td></tr>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the vertex attribute to set.</p></td></tr>
<tr><td><code>value</code></td><td><a href="Graphics#BufferType">Graphics.BufferType</a></td><td><p>The vertex attribute value to set.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the vertex attribute value was set, <code>false</code> if it wasn't.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> is invalid or <code>name</code> is invalid or isn't used in the mesh.</p></div>

</div>

<div class="api-entry">

### setVertextAttributes {#setVertextAttributes}

```js
GraphicsMeshPart.setVertextAttributes(index, values)
```

<div class="api-text" v-pre><p>Updates attribute values of a vertex.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex to set the attributes for.</p></td></tr>
<tr><td><code>values</code></td><td>Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferType">Graphics.BufferType</a>&gt;</td><td><p>The attribute names and values. Need not specify unchanged values.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the index and the attribute names and values were valid and the vertex was updated, <code>false</code> otherwise.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> is invalid or one of the attribute names is invalid or isn't used in the mesh.</p></div>

</div>

<div class="api-entry">

### toOBJ {#toOBJ}

```js
GraphicsMeshPart.toOBJ()
```

<div class="api-text" v-pre><p>Exports the mesh part to OBJ format.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The OBJ format representation of the mesh part.</p></div>

</div>

<div class="api-entry">

### transform {#transform}

```js
GraphicsMeshPart.transform(transform)
```

<div class="api-text" v-pre><p>Scales, rotates, and translates the mesh.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>transform</code></td><td><a href="Mat4">Mat4</a></td><td><p>The scale, rotate, and translate transform to apply.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Graphics#MeshExtents">Graphics.MeshExtents</a> <p>The resulting mesh extents, in model coordinates.</p></div>

</div>

<div class="api-entry">

### translate {#translate}

```js
GraphicsMeshPart.translate(translation)
```

<div class="api-text" v-pre><p>Translates the mesh part.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation to apply, in model coordinates.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Graphics#MeshExtents">Graphics.MeshExtents</a> <p>The rseulting mesh extents, in model coordinates.</p></div>

</div>

<div class="api-entry">

### updateVertexAttributes {#updateVertexAttributes}

```js
GraphicsMeshPart.updateVertexAttributes(callback)
```

<div class="api-text" v-pre><p>Updates vertex attributes by calling a function for each vertex in the <em>whole</em> mesh (i.e., the parent and mesh parts). The function can return modified attributes to update the vertex with.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>callback</code></td><td><a href="GraphicsMesh#updateVertexAttributesCallback">GraphicsMesh~updateVertexAttributesCallback</a></td><td><p>The function to call for each vertex.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of vertices the callback was called for.</p></div>

</div>
