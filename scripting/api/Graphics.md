---
title: "Graphics"
description: "The Graphics API enables you to access and manipulate avatar, entity, and overlay models in the rendered scene."
---

# Graphics

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Graphics</code> API enables you to access and manipulate avatar, entity, and overlay models in the rendered scene. This includes getting mesh and material information for applying <a href="Entities-types#EntityProperties-Material">Material</a> entities.</p></div>

## Functions {#functions}

<div class="api-entry">

### canUpdateModel {#canUpdateModel}

```js
Graphics.canUpdateModel(id, meshIndex?, partNumber?)
```

<div class="api-text" v-pre><p>Checks whether the model for an avatar, entity, or overlay can be updated in the rendered scene. Only avatars, <code>"Model"</code> entities and <code>"model"</code> overlays can have their meshes updated.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the avatar, entity, or overlay.</p></td></tr>
<tr><td><code>meshIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>partNumber</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p><em>Not used.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the model can be updated, <code>false</code> if it can't.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Test whether different types of items can be updated.</p></div>

```js
var modelEntityID = Entities.addEntity({
    type: "Model",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(Camera.orientation, { x: -0.5, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    modelURL: "https://example.com/models/vive_tracker_puck.obj",
    dimensions: { x: 0.945, y: 0.921, z: 0.423 },
    lifetime: 300  // Delete after 5 minutes.
});
var shapeEntityID = Entities.addEntity({
    type: "Shape",
    shape: "Cylinder",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(Camera.orientation, { x: 0.5, y: 0, z: -3 })),
    dimensions: { x: 0.4, y: 0.6, z: 0.4 },
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    print("Can update avatar:", Graphics.canUpdateModel(MyAvatar.sessionUUID));  // true
    print("Can update model entity:", Graphics.canUpdateModel(modelEntityID));  // true
    print("Can update shape entity:", Graphics.canUpdateModel(shapeEntityID));  // false
}, 1000);  // Wait for the entities to rez.
```

</div>

<div class="api-entry">

### exportModelToOBJ {#exportModelToOBJ}

```js
Graphics.exportModelToOBJ(model)
```

<div class="api-text" v-pre><p>Exports a model to OBJ format.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>model</code></td><td><a href="GraphicsModel">GraphicsModel</a></td><td><p>The model to export.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The OBJ format representation of the model.</p></div>

</div>

<div class="api-entry">

### getModel {#getModel}

```js
Graphics.getModel(id)
```

<div class="api-text" v-pre><p>Gets a handle to the model data used for displaying an avatar, 3D entity, or 3D overlay. </p>
<p>Note: The model data may be used for more than one instance of the item displayed in the scene.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>UUID</td><td><p>The ID of the avatar, 3D entity, or 3D overlay.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="GraphicsModel">GraphicsModel</a> <p>The model data for the avatar, entity, or overlay, as displayed. This includes the results of applying any <a href="Entities-types#EntityProperties-Material">Material</a> entities to the item.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report some details of your avatar's model.</p></div>

```js
var model = Graphics.getModel(MyAvatar.sessionUUID);
var meshes = model.meshes;
var numMeshparts = 0;
for (var i = 0; i < meshes.length; i++) {
    numMeshparts += meshes[i].numParts;
}

print("Avatar:", MyAvatar.skeletonModelURL);
print("Number of meshes:", model.numMeshes);
print("Number of mesh parts:", numMeshparts);
print("Material names: ", model.materialNames);
print("Material layers:", Object.keys(model.materialLayers));
```

</div>

<div class="api-entry">

### newMesh {#newMesh}

```js
Graphics.newMesh(ifsMeshData)
```

<div class="api-text" v-pre><p>Creates a new graphics mesh.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>ifsMeshData</code></td><td><a href="#IFSData">Graphics.IFSData</a></td><td><p>Index-Faced Set (IFS) data defining the mesh.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="GraphicsMesh">GraphicsMesh</a> <p>The new graphics mesh.</p></div>

</div>

<div class="api-entry">

### newModel {#newModel}

```js
Graphics.newModel(meshes)
```

<div class="api-text" v-pre><p>Creates a new graphics model from meshes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>meshes</code></td><td>Array&lt;<a href="GraphicsMesh">GraphicsMesh</a>&gt;</td><td><p>The meshes to include in the model.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="GraphicsModel">GraphicsModel</a> <p>The new graphics model.</p></div>

</div>

<div class="api-entry">

### updateModel {#updateModel}

```js
Graphics.updateModel(id, model)
```

<div class="api-text" v-pre><p>Updates the model for an avatar, 3D entity, or 3D overlay in the rendered scene.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the avatar, 3D entity, or 3D overlay to update.</p></td></tr>
<tr><td><code>model</code></td><td><a href="GraphicsModel">GraphicsModel</a></td><td><p>The model to update the avatar, 3D entity, or 3D overlay with.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the update was completed successfully, <code>false</code> if it wasn't.</p></div>

</div>

## Types {#types}

<div class="api-entry">

### BufferElementFormat {#BufferElementFormat}

<div class="api-text" v-pre><p>Details of a buffer element's format.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>string</td><td><p>Type.</p></td></tr>
<tr><td><code>semantic</code></td><td>string</td><td><p>Semantic.</p></td></tr>
<tr><td><code>dimension</code></td><td>string</td><td><p>Dimension.</p></td></tr>
<tr><td><code>scalarCount</code></td><td>number</td><td><p>Scalar count.</p></td></tr>
<tr><td><code>byteSize</code></td><td>number</td><td><p>Byte size.</p></td></tr>
<tr><td><code>BYTES_PER_ELEMENT</code></td><td>number</td><td><p>Bytes per element.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### BufferFormat {#BufferFormat}

<div class="api-text" v-pre><p>Details of buffer's format.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>slot</code></td><td>number</td><td><p>Slot.</p></td></tr>
<tr><td><code>length</code></td><td>number</td><td><p>Length.</p></td></tr>
<tr><td><code>byteLength</code></td><td>number</td><td><p>Byte length.</p></td></tr>
<tr><td><code>offset</code></td><td>number</td><td><p>Offset.</p></td></tr>
<tr><td><code>stride</code></td><td>number</td><td><p>Stride.</p></td></tr>
<tr><td><code>element</code></td><td><a href="#BufferElementFormat">Graphics.BufferElementFormat</a></td><td><p>Element format.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### BufferType {#BufferType}

<div class="api-text" v-pre><p>The type of a graphics buffer value as accessed by JavaScript.</p>
 <table> <thead> <tr><th>Type</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><a href="Vec3"><code>Vec3</code></a></td><td><code>"position"</code></td><td>Position buffer.</td></tr>
 <tr><td><a href="Vec3"><code>Vec3</code></a></td><td><code>"normal"</code></td><td>normal buffer.</td></tr>
 <tr><td><a href="Vec3"><code>Vec3</code></a></td><td><code>"tangent"</code></td><td>Tangent buffer.</td></tr>
 <tr><td><a href="globals#Vec4"><code>Vec4</code></a></td><td><code>"color"</code></td><td>Color buffer.</td></tr>
 <tr><td><a href="globals#Vec4"><code>Vec4</code></a></td><td><code>"skin_cluster_index"</code></td><td>Skin cluster index buffer.</td></tr>
 <tr><td><a href="globals#Vec4"><code>Vec4</code></a></td><td><code>"skin_cluster_weight"</code></td><td>Skin cluster weight buffer.</td></tr>
 <tr><td><a href="globals#Vec2"><code>Vec2</code></a></td><td><code>"texcoord0"</code></td><td>First UV coordinates buffer.</td></tr>
 <tr><td><a href="globals#Vec2"><code>Vec2</code></a></td><td><code>"texcoord1"</code></td><td>Second UV coordinates buffer.</td></tr>
 <tr><td><a href="globals#Vec2"><code>Vec2</code></a></td><td><code>"texcoord2"</code></td><td>Third UV coordinates buffer.</td></tr>
 <tr><td><a href="globals#Vec2"><code>Vec2</code></a></td><td><code>"texcoord3"</code></td><td>Fourth UV coordinates buffer.</td></tr>
 <tr><td><a href="globals#Vec2"><code>Vec2</code></a></td><td><code>"texcoord4"</code></td><td>Fifth UV coordinates buffer.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> <a href="Vec3">Vec3</a> | vec2</div>

</div>

<div class="api-entry">

### BufferTypeName {#BufferTypeName}

<div class="api-text" v-pre><p>The type name of a graphics buffer.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"position"</code></td><td>Position buffer.</td></tr>
 <tr><td><code>"normal"</code></td><td>normal buffer.</td></tr>
 <tr><td><code>"tangent"</code></td><td>Tangent buffer.</td></tr>
 <tr><td><code>"color"</code></td><td>Color buffer.</td></tr>
 <tr><td><code>"skin_cluster_index"</code></td><td>Skin cluster index buffer.</td></tr>
 <tr><td><code>"skin_cluster_weight"</code></td><td>Skin cluster weight buffer.</td></tr>
 <tr><td><code>"texcoord0"</code></td><td>First UV coordinates buffer.</td></tr>
 <tr><td><code>"texcoord1"</code></td><td>Second UV coordinates buffer.</td></tr>
 <tr><td><code>"texcoord2"</code></td><td>Third UV coordinates buffer.</td></tr>
 <tr><td><code>"texcoord3"</code></td><td>Fourth UV coordinates buffer.</td></tr>
 <tr><td><code>"texcoord4"</code></td><td>Fifth UV coordinates buffer.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### IFSData {#IFSData}

<div class="api-text" v-pre><p>IFS (Indexed-Face Set) data defining a mesh.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Mesh name. (Useful for debugging.)</p></td></tr>
<tr><td><code>topology</code></td><td><a href="#MeshTopology">Graphics.MeshTopology</a></td><td></td><td><p>Element interpretation. <em>Currently only triangles is supported.</em></p></td></tr>
<tr><td><code>indices</code></td><td>Array&lt;number&gt;</td><td></td><td><p>Vertex indices to use for the mesh faces, in tuples per the <code>topology</code>.</p></td></tr>
<tr><td><code>positions</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td></td><td><p>Vertex positions, in model coordinates.</p></td></tr>
<tr><td><code>normals</code> <em>optional</em></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>Vertex normals (normalized).</p></td></tr>
<tr><td><code>colors</code> <em>optional</em></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>Vertex colors (normalized).</p></td></tr>
<tr><td><code>texCoords0</code> <em>optional</em></td><td>Array&lt;<a href="globals#Vec2">Vec2</a>&gt;</td><td><code>[]</code></td><td><p>Vertex texture coordinates (normalized).</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### MaterialLayer {#MaterialLayer}

<div class="api-text" v-pre><p>A material layer.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>material</code></td><td>Graphics.Material</td><td><p>The layer's material.</p></td></tr>
<tr><td><code>priority</code></td><td>number</td><td><p>The priority of the layer. If multiple materials are applied to a mesh part, only the layer with the highest priority is applied, with materials of the same priority randomly assigned.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### MeshExtents {#MeshExtents}

<div class="api-text" v-pre><p>The extents of a mesh.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>brn</code></td><td><a href="Vec3">Vec3</a></td><td><p>The bottom right near (minimum axes values) corner of the enclosing box.</p></td></tr>
<tr><td><code>tfl</code></td><td><a href="Vec3">Vec3</a></td><td><p>The top far left (maximum axes values) corner of the enclosing box.</p></td></tr>
<tr><td><code>center</code></td><td><a href="Vec3">Vec3</a></td><td><p>The center of the enclosing box.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><p>The dimensions of the enclosing box.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### MeshTopology {#MeshTopology}

<div class="api-text" v-pre><p>The interpretation of mesh elements.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"points"</code></td><td>Points.</td></tr>
 <tr><td><code>"lines"</code></td><td>Lines.</td></tr>
 <tr><td><code>"line_strip"</code></td><td>Line strip.</td></tr>
 <tr><td><code>"triangles"</code></td><td>Triangles.</td></tr>
 <tr><td><code>"triangle_strip"</code></td><td>Triangle strip.</td></tr>
 <tr><td><code>"quads"</code></td><td>Quads.</td></tr>
 <tr><td><code>"quad_strip"</code></td><td>Quad strip.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>
