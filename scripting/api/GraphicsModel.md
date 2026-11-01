---
title: "GraphicsModel"
description: "A handle to in-memory model data such as may be used in displaying avatars, 3D entities, or 3D overlays in the rendered scene."
---

# GraphicsModel

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A handle to in-memory model data such as may be used in displaying avatars, 3D entities, or 3D overlays in the rendered scene. Changes made to the model are visible only to yourself; they are not persisted. </p>
<p>Note: The model may be used for more than one instance of an item displayed in the scene. Modifying the model updates all instances displayed.</p>
<p></p>
 <p>Created using the <a href="Graphics"><code>Graphics</code></a> API or <a href="#cloneModel"><code>GraphicsModel.cloneModel</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>objectID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity or avatar that the model is associated with, if any; <code>null</code> if the model is not associated with an entity or avatar. <em>Read-only.</em></p></td></tr>
<tr><td><code>numMeshes</code></td><td>number</td><td><p>The number of meshes contained in the model. <em>Read-only.</em></p></td></tr>
<tr><td><code>meshes</code></td><td>Array&lt;<a href="GraphicsMesh">GraphicsMesh</a>&gt;</td><td><p>The meshes in the model. Each mesh may have more than one mesh part. <em>Read-only.</em></p></td></tr>
<tr><td><code>materialNames</code></td><td>Array&lt;string&gt;</td><td><p>The names of the materials used by each mesh part in the model. The names are in the order of the <code>meshes</code> and their mesh parts. <em>Read-only.</em></p></td></tr>
<tr><td><code>materialLayers</code></td><td>Object&lt;string, Array&lt;<a href="Graphics#MaterialLayer">Graphics.MaterialLayer</a>&gt;&gt;</td><td><p>The mapping from mesh parts and material names to material layers. The mesh parts are numbered from <code>"0"</code> per the array indexes of <code>materialNames</code>. The material names are those used in <code>materialNames</code>. (You can look up a material layer by mesh part number or by material name.) <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### cloneModel {#cloneModel}

```js
GraphicsModel.cloneModel(options?)
```

<div class="api-text" v-pre><p>Makes a copy of the model.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>options</code> <em>optional</em></td><td>object</td><td><p><em>Not used.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">GraphicsModel</a> <p>A copy of the model.</p></div>

</div>

<div class="api-entry">

### toString {#toString}

```js
GraphicsModel.toString()
```

<div class="api-text" v-pre><p>Gets a string description of the model.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>A string description of the model.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the string description of your avatar's model.</p></div>

```js
var model = Graphics.getModel(MyAvatar.sessionUUID);
print("Avatar model info:", model.toString());
```

</div>
