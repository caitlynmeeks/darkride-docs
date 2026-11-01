---
title: "Clipboard"
description: "The Clipboard API enables you to export and import entities to and from JSON files."
draft: true
---

# Clipboard

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Clipboard</code> API enables you to export and import entities to and from JSON files.</p></div>

## Functions {#functions}

<div class="api-entry">

### exportEntities {#exportEntities}

```js
Clipboard.exportEntities(filename, entityIDs)
```

<div class="api-text" v-pre><p>Exports specified entities to a JSON file.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>Path and name of the file to export the entities to. Should have the extension ".json".</p></td></tr>
<tr><td><code>entityIDs</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The IDs of the entities to export.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if entities were found and the file was written, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create and export a cube and a sphere.</p></div>

```js
// Create entities.
var box = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -0.2, y: 0, z: -3 })),
    lifetime: 300 // Delete after 5 minutes.
});
var sphere = Entities.addEntity({
    type: "Sphere",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0.2, y: 0, z: -3 })),
    lifetime: 300 // Delete after 5 minutes.
});

// Export entities.
var filename = Window.save("Export entities to JSON file", Paths.resources, "*.json");
if (filename) {
    Clipboard.exportEntities(filename, [box, sphere]);
}
```

</div>

<div class="api-entry">

### exportEntities {#exportEntities-2}

```js
Clipboard.exportEntities(filename, x, y, z, scale)
```

<div class="api-text" v-pre><p>Exports all entities that have centers within a cube to a JSON file.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>Path and name of the file to export the entities to. Should have the extension ".json".</p></td></tr>
<tr><td><code>x</code></td><td>number</td><td><p>X-coordinate of the cube center.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Y-coordinate of the cube center.</p></td></tr>
<tr><td><code>z</code></td><td>number</td><td><p>Z-coordinate of the cube center.</p></td></tr>
<tr><td><code>scale</code></td><td>number</td><td><p>Half dimension of the cube.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if entities were found and the file was written, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### getClipboardContentsLargestDimension {#getClipboardContentsLargestDimension}

```js
Clipboard.getClipboardContentsLargestDimension()
```

<div class="api-text" v-pre><p>Gets the largest dimension of the extents of the entities held in the clipboard.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The largest dimension of the extents of the content held in the clipboard.</p></div>

</div>

<div class="api-entry">

### getContentsDimensions {#getContentsDimensions}

```js
Clipboard.getContentsDimensions()
```

<div class="api-text" v-pre><p>Gets the extents of the entities held in the clipboard.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The extents of the content held in the clipboard.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Import entities to the clipboard and report their overall dimensions.</p></div>

```js
var filename = Window.browse("Import entities to clipboard", "", "*.json");
if (filename) {
    if (Clipboard.importEntities(filename)) {
        print("Clipboard dimensions: " + JSON.stringify(Clipboard.getContentsDimensions()));
    }
}
```

</div>

<div class="api-entry">

### importEntities {#importEntities}

```js
Clipboard.importEntities(filename, isObservable?, callerID?)
```

<div class="api-text" v-pre><p>Imports entities from a JSON file into the clipboard.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td></td><td><p>The path and name of the JSON file to import.</p></td></tr>
<tr><td><code>isObservable</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the <a href="ResourceRequestObserver"><code>ResourceRequestObserver</code></a> can observe this request, <code>false</code> if it can't.</p></td></tr>
<tr><td><code>callerID</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>An integer ID that is passed through to the <a href="ResourceRequestObserver"><code>ResourceRequestObserver</code></a>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the import was successful, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Import entities and paste into the world.</p></div>

```js
var filename = Window.browse("Import entities to clipboard", "", "*.json");
if (filename) {
    if (Clipboard.importEntities(filename)) {
        pastedEntities = Clipboard.pasteEntities(Vec3.sum(MyAvatar.position,
            Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })));
        print("Entities pasted: " + JSON.stringify(pastedEntities));
    }
}
```

</div>

<div class="api-entry">

### pasteEntities {#pasteEntities}

```js
Clipboard.pasteEntities(position, entityHostType?)
```

<div class="api-text" v-pre><p>Pastes the contents of the clipboard into the world.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position to paste the clipboard contents at.</p></td></tr>
<tr><td><code>entityHostType</code> <em>optional</em></td><td><a href="Entities-types#EntityHostType">Entities.EntityHostType</a></td><td><code>&quot;domain&quot;</code></td><td><p>The type of entities to create.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>The IDs of the new entities that were created as a result of the paste operation. If entities couldn't be created then an empty array is returned.</p></div>

</div>
