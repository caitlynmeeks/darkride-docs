---
title: "GraphicsMesh"
description: "A handle to in-memory mesh data in a GraphicsModel."
draft: true
---

# GraphicsMesh

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A handle to in-memory mesh data in a <a href="GraphicsModel"><code>GraphicsModel</code></a>.</p>
 <p>Created using the <a href="Graphics"><code>Graphics</code></a> API, <a href="GraphicsModel#cloneModel"><code>GraphicsModel.cloneModel</code></a>, or <a href="#cloneMesh"><code>GraphicsMesh.cloneMesh</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>numParts</code></td><td>number</td><td><p>The number of mesh parts. <em>Read-only.</em></p></td></tr>
<tr><td><code>parts</code></td><td>Array&lt;<a href="GraphicsMeshPart">GraphicsMeshPart</a>&gt;</td><td><p>The mesh parts. <em>Read-only.</em></p></td></tr>
<tr><td><code>numIndices</code></td><td>number</td><td><p>The total number of vertex indices in the mesh. <em>Read-only.</em></p></td></tr>
<tr><td><code>numVertices</code></td><td>number</td><td><p>The total number of vertices in the mesh. <em>Read-only.</em></p></td></tr>
<tr><td><code>numAttributes</code></td><td>number</td><td><p>The number of vertex attributes. <em>Read-only.</em></p></td></tr>
<tr><td><code>attributeNames</code></td><td>Array&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>&gt;</td><td><p>The names of the vertex attributes. <em>Read-only.</em></p></td></tr>
<tr><td><code>valid</code></td><td>boolean</td><td><p><code>true</code> if the mesh is valid, <code>false</code> if it isn't. <em>Read-only.</em></p></td></tr>
<tr><td><code>strong</code></td><td>boolean</td><td><p><code>true</code> if the mesh is valid and able to be used, <code>false</code> if it isn't. <em>Read-only.</em></p></td></tr>
<tr><td><code>extents</code></td><td><a href="Graphics#MeshExtents">Graphics.MeshExtents</a></td><td><p>The mesh extents, in model coordinates. <em>Read-only.</em></p></td></tr>
<tr><td><code>bufferFormats</code></td><td>Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferFormat">Graphics.BufferFormat</a>&gt;</td><td><p>Details of the buffers used for the mesh. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

### addAttribute {#addAttribute}

```js
GraphicsMesh.addAttribute(name, defaultValue?)
```

<div class="api-text" v-pre><p>Adds an attribute to the (whole) mesh's vertices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the attribute.</p></td></tr>
<tr><td><code>defaultValue</code> <em>optional</em></td><td><a href="Graphics#BufferType">Graphics.BufferType</a></td><td><p>The value to give the attributes added to the vertices.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of vertices the attribute was added to, <code>0</code> if the <code>name</code> was invalid or all vertices already had the attribute.</p></div>

### cloneMesh {#cloneMesh}

```js
GraphicsMesh.cloneMesh()
```

<div class="api-text" v-pre><p>Makes a copy of the mesh.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">GraphicsMesh</a> <p>A copy of the mesh.</p></div>

### fillAttribute {#fillAttribute}

```js
GraphicsMesh.fillAttribute(name, value)
```

<div class="api-text" v-pre><p>Sets the value of an attribute for all vertices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the attribute. The attribute is added to the vertices if not already present.</p></td></tr>
<tr><td><code>value</code></td><td><a href="Graphics#BufferType">Graphics.BufferType</a></td><td><p>The value to give the attributes.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p><code>1</code> if the attribute name was valid and the attribute values were set, <code>0</code> otherwise.</p></div>

### findNearbyVertexIndices {#findNearbyVertexIndices}

```js
GraphicsMesh.findNearbyVertexIndices(origin, epsilon?)
```

<div class="api-text" v-pre><p>Gets the indices of nearby vertices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>origin</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The search position, in model coordinates.</p></td></tr>
<tr><td><code>epsilon</code> <em>optional</em></td><td>number</td><td><code>1e-6</code></td><td><p>The search distance. If a vertex is within this distance from the <code>origin</code> it is considered to be "nearby".</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;number&gt; <p>The indices of nearby vertices.</p></div>

### forEachVertex {#forEachVertex}

```js
GraphicsMesh.forEachVertex(callback)
```

<div class="api-text" v-pre><p>Calls a function for each vertex.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>callback</code></td><td><a href="#forEachVertexCallback">GraphicsMesh~forEachVertexCallback</a></td><td><p>The function to call for each vertex.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of vertices the callback was called for.</p></div>

### getIndices {#getIndices}

```js
GraphicsMesh.getIndices()
```

<div class="api-text" v-pre><p>Gets the vertex indices.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;number&gt; <p>The vertex indices.</p></div>

### getParentModel {#getParentModel}

```js
GraphicsMesh.getParentModel()
```

<div class="api-text" v-pre><p>Gets the model the mesh is part of. </p>
<p><em>Currently doesn't work.</em></p>
<p></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="GraphicsModel">GraphicsModel</a> <p>The model the mesh is part of, <code>null</code> if it isn't part of a model.</p></div>

### getVertexAttributes {#getVertexAttributes}

```js
GraphicsMesh.getVertexAttributes(index)
```

<div class="api-text" v-pre><p>Gets the attributes and attribute values of a vertex.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex to get the attributes for.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferType">Graphics.BufferType</a>&gt; <p>The attribute names and values for the vertex.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> is invalid.</p></div>

### getVertexProperty {#getVertexProperty}

```js
GraphicsMesh.getVertexProperty(index, name)
```

<div class="api-text" v-pre><p>Gets the value of a vertex's attribute.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex index.</p></td></tr>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the vertex attribute to get.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Graphics#BufferType">Graphics.BufferType</a> <p>The value of the vertex attribute.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> is invalid or <code>name</code> is invalid or isn't used in the mesh.</p></div>

### isValidIndex {#isValidIndex}

```js
GraphicsMesh.isValidIndex(index, attribute?)
```

<div class="api-text" v-pre><p>Checks if an index is valid and, optionally, that vertex has a particular attribute.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index to check.</p></td></tr>
<tr><td><code>attribute</code> <em>optional</em></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The attribute to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the index is valid and that vertex has the attribute if specified.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> if invalid or <code>name</code> is invalid or isn't used in the mesh.</p></div>

### queryVertexAttributes {#queryVertexAttributes}

```js
GraphicsMesh.queryVertexAttributes(name)
```

<div class="api-text" v-pre><p>Gets the value of an attribute for all vertices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the attribute to get the vertex values of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Graphics#BufferType">Graphics.BufferType</a>&gt; <p>The attribute values for all vertices.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>name</code> is invalid or isn't used in the mesh.</p></div>

### removeAttribute {#removeAttribute}

```js
GraphicsMesh.removeAttribute(name)
```

<div class="api-text" v-pre><p>Removes an attribute from all vertices. </p>
<p>Note: The <code>"position"</code> attribute cannot be removed.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the attribute to remove.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the attribute existed and was removed, <code>false</code> otherwise.</p></div>

### setVertexAttributes {#setVertexAttributes}

```js
GraphicsMesh.setVertexAttributes(index, values)
```

<div class="api-text" v-pre><p>Updates attribute values of a vertex.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex to set the attributes for.</p></td></tr>
<tr><td><code>values</code></td><td>Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferType">Graphics.BufferType</a>&gt;</td><td><p>The attribute names and values. Need not specify unchanged values.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the index and the attribute names and values were valid and the vertex was updated, <code>false</code> otherwise.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> is invalid or one of the attribute names is invalid or isn't used in the mesh.</p></div>

### setVertexProperty {#setVertexProperty}

```js
GraphicsMesh.setVertexProperty(index, name, value)
```

<div class="api-text" v-pre><p>Sets the value of a vertex's attribute.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex index.</p></td></tr>
<tr><td><code>name</code></td><td><a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a></td><td><p>The name of the vertex attribute to set.</p></td></tr>
<tr><td><code>value</code></td><td><a href="Graphics#BufferType">Graphics.BufferType</a></td><td><p>The vertex attribute value to set.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the vertex attribute value was set, <code>false</code> if it wasn't.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if the <code>index</code> is invalid or <code>name</code> is invalid or isn't used in the mesh.</p></div>

### updateVertexAttributes {#updateVertexAttributes}

```js
GraphicsMesh.updateVertexAttributes(callback)
```

<div class="api-text" v-pre><p>Updates vertex attributes by calling a function for each vertex. The function can return modified attributes to update the vertex with.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>callback</code></td><td><a href="#updateVertexAttributesCallback">GraphicsMesh~updateVertexAttributesCallback</a></td><td><p>The function to call for each vertex.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of vertices the callback was called for.</p></div>

## Types {#types}

### forEachVertexCallback {#forEachVertexCallback}

<div class="api-text" v-pre><p>Called for each vertex when <a href="#updateVertexAttributes"><code>GraphicsMesh.updateVertexAttributes</code></a> is called.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>attributes</code></td><td>Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferType">Graphics.BufferType</a>&gt;</td><td><p>The attributes of the vertex.</p></td></tr>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex index.</p></td></tr>
<tr><td><code>properties</code></td><td>object</td><td><p>The properties of the mesh, per <a href=""><code>GraphicsMesh</code></a>.</p></td></tr>
</tbody></table></div>

### updateVertexAttributesCallback {#updateVertexAttributesCallback}

<div class="api-text" v-pre><p>Called for each vertex when <a href="#updateVertexAttributes"><code>GraphicsMesh.updateVertexAttributes</code></a> is called. The value returned by the script function should be the modified attributes to update the vertex with, or <code>false</code> to not update the particular vertex.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>attributes</code></td><td>Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferType">Graphics.BufferType</a>&gt;</td><td><p>The attributes of the vertex.</p></td></tr>
<tr><td><code>index</code></td><td>number</td><td><p>The vertex index.</p></td></tr>
<tr><td><code>properties</code></td><td>object</td><td><p>The properties of the mesh, per <a href=""><code>GraphicsMesh</code></a>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Object&lt;<a href="Graphics#BufferTypeName">Graphics.BufferTypeName</a>, <a href="Graphics#BufferType">Graphics.BufferType</a>&gt; | boolean <p>The attribute values to update the vertex with, or <code>false</code> to not update the vertex.</p></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### getMeshPointer {#getMeshPointer}

```js
GraphicsMesh.getMeshPointer()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> undefined </div>

### getModelBasePointer {#getModelBasePointer}

```js
GraphicsMesh.getModelBasePointer()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> undefined </div>

### getModelProviderPointer {#getModelProviderPointer}

```js
GraphicsMesh.getModelProviderPointer()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> undefined </div>
