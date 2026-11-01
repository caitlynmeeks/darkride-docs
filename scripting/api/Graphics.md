---
title: "Graphics"
description: "The Graphics API enables you to access and manipulate avatar, entity, and overlay models in the rendered scene."
draft: true
---

# Graphics

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Graphics</code> API enables you to access and manipulate avatar, entity, and overlay models in the rendered scene. This includes getting mesh and material information for applying <a href="Entities#EntityProperties-Material">Material</a> entities.</p></div>

## Functions {#functions}

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
    modelURL: "http://content.highfidelity.com/seefo/production/puck-attach/vive_tracker_puck.obj",
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

### exportModelToOBJ {#exportModelToOBJ}

```js
Graphics.exportModelToOBJ(model)
```

<div class="api-text" v-pre><p>Exports a model to OBJ format.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>model</code></td><td><a href="GraphicsModel">GraphicsModel</a></td><td><p>The model to export.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The OBJ format representation of the model.</p></div>

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
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="GraphicsModel">GraphicsModel</a> <p>The model data for the avatar, entity, or overlay, as displayed. This includes the results of applying any <a href="Entities#EntityProperties-Material">Material</a> entities to the item.</p></div>

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

### newMesh {#newMesh}

```js
Graphics.newMesh(ifsMeshData)
```

<div class="api-text" v-pre><p>Creates a new graphics mesh.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>ifsMeshData</code></td><td><a href="#IFSData">Graphics.IFSData</a></td><td><p>Index-Faced Set (IFS) data defining the mesh.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="GraphicsMesh">GraphicsMesh</a> <p>The new graphics mesh.</p></div>

### newModel {#newModel}

```js
Graphics.newModel(meshes)
```

<div class="api-text" v-pre><p>Creates a new graphics model from meshes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>meshes</code></td><td>Array&lt;<a href="GraphicsMesh">GraphicsMesh</a>&gt;</td><td><p>The meshes to include in the model.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="GraphicsModel">GraphicsModel</a> <p>The new graphics model.</p></div>

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

## Types {#types}

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

### Material {#Material}

<div class="api-text" v-pre><p>A material in a <a href="GraphicsModel"><code>GraphicsModel</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the material.</p></td></tr>
<tr><td><code>model</code></td><td>string</td><td></td><td><p>Different material models support different properties and rendering modes. Supported models are: <code>"hifi_pbr"</code> and <code>"hifi_shader_simple"</code>.</p></td></tr>
<tr><td><code>albedo</code> <em>optional</em></td><td><a href="Vec3">Vec3</a> | string</td><td></td><td><p>The albedo color. Component values are in the range <code>0.0</code> – <code>1.0</code>. If <code>"fallthrough"</code> then it falls through to the material below.</p></td></tr>
<tr><td><code>opacity</code> <em>optional</em></td><td>number | string</td><td></td><td><p>The opacity, range <code>0.0</code> – <code>1.0</code>. If <code>"fallthrough"</code> then it falls through to the material below.</p></td></tr>
<tr><td><code>opacityCutoff</code> <em>optional</em></td><td>number | string</td><td></td><td><p>The opacity cutoff threshold used to determine the opaque texels of the <code>opacityMap</code> when <code>opacityMapMode</code> is <code>"OPACITY_MAP_MASK"</code>. Range <code>0.0</code> – <code>1.0</code>. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>roughness</code> <em>optional</em></td><td>number | string</td><td></td><td><p>The roughness, range <code>0.0</code> – <code>1.0</code>. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>metallic</code> <em>optional</em></td><td>number | string</td><td></td><td><p>The metallicness, range <code>0.0</code> – <code>1.0</code>. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>scattering</code> <em>optional</em></td><td>number | string</td><td></td><td><p>The scattering, range <code>0.0</code> – <code>1.0</code>. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>unlit</code> <em>optional</em></td><td>boolean | string</td><td></td><td><p><code>true</code> if the material is unaffected by lighting, <code>false</code> if it it is lit by the key light and local lights. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>emissive</code> <em>optional</em></td><td><a href="Vec3">Vec3</a> | string</td><td></td><td><p>The emissive color, i.e., the color that the material emits. Component values are in the range <code>0.0</code> – <code>1.0</code>. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>albedoMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the albedo texture image. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>opacityMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the opacity texture image. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>opacityMapMode</code> <em>optional</em></td><td>string</td><td></td><td><p>The mode defining the interpretation of the opacity map. Values can be: </p>
<ul> <li><code>"OPACITY_MAP_OPAQUE"</code> for ignoring the opacity map information.</li>
 <li><code>"OPACITY_MAP_MASK"</code> for using the <code>opacityMap</code> as a mask, where only the texel greater than <code>opacityCutoff</code> are visible and rendered opaque.</li>
 <li><code>"OPACITY_MAP_BLEND"</code> for using the <code>opacityMap</code> for alpha blending the material surface with the background.</li>
 <li><code>"OPACITY_MAP_MASK_BLEND"</code> for both: the texels below <code>opacityCutoff</code> are cut out and the rest alpha blended.</li>
 </ul>
 If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.<p></p></td></tr>
<tr><td><code>occlusionMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the occlusion texture image. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>lightMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the light map texture image. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>lightmapParams</code> <em>optional</em></td><td>string</td><td></td><td><p>Parameters for controlling how <code>lightMap</code> is used. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only. </p>
<p><em>Currently not used.</em></p>
<p></p></td></tr>
<tr><td><code>scatteringMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the scattering texture image. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>emissiveMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the emissive texture image. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>metallicMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the metallic texture image. If <code>"fallthrough"</code> then it and <code>specularMap</code> fall through to the material below. Only use one of <code>metallicMap</code> and <code>specularMap</code>. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>specularMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the specular texture image. Only use one of <code>metallicMap</code> and <code>specularMap</code>. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>roughnessMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the roughness texture image. If <code>"fallthrough"</code> then it and <code>glossMap</code> fall through to the material below. Only use one of <code>roughnessMap</code> and <code>glossMap</code>. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>glossMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the gloss texture image. Only use one of <code>roughnessMap</code> and <code>glossMap</code>. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>normalMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the normal texture image. If <code>"fallthrough"</code> then it and <code>bumpMap</code> fall through to the material below. Only use one of <code>normalMap</code> and <code>bumpMap</code>. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>bumpMap</code> <em>optional</em></td><td>string</td><td></td><td><p>The URL of the bump texture image. Only use one of <code>normalMap</code> and <code>bumpMap</code>. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>materialParams</code> <em>optional</em></td><td>string</td><td></td><td><p>Parameters for controlling the material projection and repetition. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only. </p>
<p><em>Currently not used.</em></p>
<p></p></td></tr>
<tr><td><code>cullFaceMode</code> <em>optional</em></td><td>string</td><td><code>&quot;CULL_BACK&quot;</code></td><td><p>Specifies Which faces of the geometry to render. Values can be: </p>
<ul> <li><code>"CULL_NONE"</code> to render both sides of the geometry.</li>
 <li><code>"CULL_FRONT"</code> to cull the front faces of the geometry.</li>
 <li><code>"CULL_BACK"</code> (the default) to cull the back faces of the geometry.</li>
 </ul>
 If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.<p></p></td></tr>
<tr><td><code>texCoordTransform0</code> <em>optional</em></td><td><a href="Mat4">Mat4</a> | string</td><td></td><td><p>The transform to use for all of the maps apart from <code>occlusionMap</code> and <code>lightMap</code>. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>texCoordTransform1</code> <em>optional</em></td><td><a href="Mat4">Mat4</a> | string</td><td></td><td><p>The transform to use for <code>occlusionMap</code> and <code>lightMap</code>. If <code>"fallthrough"</code> then it falls through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>procedural</code></td><td>string</td><td></td><td><p>The definition of a procedural shader material. <code>"hifi_shader_simple"</code> model only. </p>
<p><em>Currently not used.</em></p>
<p></p></td></tr>
<tr><td><code>defaultFallthrough</code></td><td>boolean</td><td></td><td><p><code>true</code> if all properties fall through to the material below unless they are set, <code>false</code> if properties respect their individual fall-through settings.</p></td></tr>
</tbody></table></div>

### MaterialLayer {#MaterialLayer}

<div class="api-text" v-pre><p>A material layer.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>material</code></td><td><a href="#Material">Graphics.Material</a></td><td><p>The layer's material.</p></td></tr>
<tr><td><code>priority</code></td><td>number</td><td><p>The priority of the layer. If multiple materials are applied to a mesh part, only the layer with the highest priority is applied, with materials of the same priority randomly assigned.</p></td></tr>
</tbody></table></div>

### MeshExtents {#MeshExtents}

<div class="api-text" v-pre><p>The extents of a mesh.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>brn</code></td><td><a href="Vec3">Vec3</a></td><td><p>The bottom right near (minimum axes values) corner of the enclosing box.</p></td></tr>
<tr><td><code>tfl</code></td><td><a href="Vec3">Vec3</a></td><td><p>The top far left (maximum axes values) corner of the enclosing box.</p></td></tr>
<tr><td><code>center</code></td><td><a href="Vec3">Vec3</a></td><td><p>The center of the enclosing box.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><p>The dimensions of the enclosing box.</p></td></tr>
</tbody></table></div>

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
