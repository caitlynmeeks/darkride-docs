---
title: "Selection"
description: "The Selection API provides a means of grouping together and highlighting avatars and entities in named lists."
---

# Selection

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Selection</code> API provides a means of grouping together and highlighting avatars and entities in named lists.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Outline an entity when it is grabbed by the mouse or a controller.</p></div>

```js
// Create an entity and copy the following script into the entity's "Script URL" field.
// Move the entity behind another entity to see the occluded outline.
(function () {
    var LIST_NAME = "SelectionExample",
        ITEM_TYPE = "entity",
        HIGHLIGHT_STYLE = {
            outlineUnoccludedColor: { red: 0, green: 180, blue: 239 },
            outlineUnoccludedAlpha: 0.5,
            outlineOccludedColor: { red: 239, green: 180, blue: 0 },
            outlineOccludedAlpha: 0.5,
            outlineWidth: 4
        };

    Selection.enableListHighlight(LIST_NAME, HIGHLIGHT_STYLE);

    this.startNearGrab = function (entityID) {
        Selection.addToSelectedItemsList(LIST_NAME, ITEM_TYPE, entityID);
    };

    this.startDistanceGrab = function (entityID) {
        Selection.addToSelectedItemsList(LIST_NAME, ITEM_TYPE, entityID);
    };

    this.releaseGrab = function (entityID) {
        Selection.removeFromSelectedItemsList(LIST_NAME, ITEM_TYPE, entityID);
    };

    Script.scriptEnding.connect(function () {
        Selection.removeListFromMap(LIST_NAME);
    });
});
```

## Functions {#functions}

<div class="api-entry">

### addToSelectedItemsList {#addToSelectedItemsList}

```js
Selection.addToSelectedItemsList(listName, itemType, itemID)
```

<div class="api-text" v-pre><p>Adds an item to a selection list. The list is created if it doesn't exist.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list to add the item to.</p></td></tr>
<tr><td><code>itemType</code></td><td><a href="#ItemType">Selection.ItemType</a></td><td><p>The type of item being added.</p></td></tr>
<tr><td><code>itemID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the item to add.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the item was successfully added or already existed in the list, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### clearSelectedItemsList {#clearSelectedItemsList}

```js
Selection.clearSelectedItemsList(listName)
```

<div class="api-text" v-pre><p>Removes all items from a selection list.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> always.</p></div>

</div>

<div class="api-entry">

### disableListHighlight {#disableListHighlight}

```js
Selection.disableListHighlight(listName)
```

<div class="api-text" v-pre><p>Disables highlighting for a selection list. </p>
<p>Note: This function implicitly calls <a href="#disableListToScene">disableListToScene</a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> always.</p></div>

</div>

<div class="api-entry">

### disableListToScene {#disableListToScene}

```js
Selection.disableListToScene(listName)
```

<div class="api-text" v-pre><p>Disables scene selection for a selection list.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> always.</p></div>

</div>

<div class="api-entry">

### enableListHighlight {#enableListHighlight}

```js
Selection.enableListHighlight(listName, highlightStyle)
```

<div class="api-text" v-pre><p>Enables highlighting for a selection list. All items in or subsequently added to the list are displayed with the highlight effect specified. The method can be called multiple times with different values in the style to modify the highlighting. </p>
<p>Note: This function implicitly calls <a href="#enableListToScene">enableListToScene</a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list.</p></td></tr>
<tr><td><code>highlightStyle</code></td><td><a href="#HighlightStyle">Selection.HighlightStyle</a></td><td><p>The highlight style.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> always.</p></div>

</div>

<div class="api-entry">

### enableListToScene {#enableListToScene}

```js
Selection.enableListToScene(listName)
```

<div class="api-text" v-pre><p>Enables scene selection for a selection list. All items in or subsequently added to the list are sent to a scene selection in the rendering engine for debugging purposes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> always.</p></div>

</div>

<div class="api-entry">

### getHighlightedListNames {#getHighlightedListNames}

```js
Selection.getHighlightedListNames()
```

<div class="api-text" v-pre><p>Gets the names of all current selection lists that have highlighting enabled.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of the selection lists that currently have highlighting enabled.</p></div>

</div>

<div class="api-entry">

### getListHighlightStyle {#getListHighlightStyle}

```js
Selection.getListHighlightStyle(listName)
```

<div class="api-text" v-pre><p>Gets the current highlighting style for a selection list.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#HighlightStyle">Selection.HighlightStyle</a> <p>The highlight style of the selection list if the list exists and highlighting is enabled, otherwise an empty object.</p></div>

</div>

<div class="api-entry">

### getListNames {#getListNames}

```js
Selection.getListNames()
```

<div class="api-text" v-pre><p>Gets the names of all current selection lists.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of all current selection lists.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>List all the current selection lists.</p></div>

```js
print("Selection lists: " + Selection.getListNames());
```

</div>

<div class="api-entry">

### getSelectedItemsList {#getSelectedItemsList}

```js
Selection.getSelectedItemsList(listName)
```

<div class="api-text" v-pre><p>Gets the list of avatars and entities in a selection list.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#SelectedItemsList">Selection.SelectedItemsList</a> <p>The content of the selection list if the list exists, otherwise an empty object.</p></div>

</div>

<div class="api-entry">

### printList {#printList}

```js
Selection.printList(listName)
```

<div class="api-text" v-pre><p>Prints the list of avatars and entities in a selection to the program log (but not the Script Log window).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### removeFromSelectedItemsList {#removeFromSelectedItemsList}

```js
Selection.removeFromSelectedItemsList(listName, itemType, itemID)
```

<div class="api-text" v-pre><p>Removes an item from a selection list.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list to remove the item from.</p></td></tr>
<tr><td><code>itemType</code></td><td><a href="#ItemType">Selection.ItemType</a></td><td><p>The type of item being removed.</p></td></tr>
<tr><td><code>itemID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the item to remove.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the item was successfully removed or was not in the list, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### removeListFromMap {#removeListFromMap}

```js
Selection.removeListFromMap(listName)
```

<div class="api-text" v-pre><p>Deletes a selection list.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list to delete.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the selection existed and was successfully removed, otherwise <code>false</code>.</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### selectedItemsListChanged {#selectedItemsListChanged}

```js
Selection.selectedItemsListChanged.connect(function (listName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a selection list's content changes or the list is deleted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>listName</code></td><td>string</td><td><p>The name of the selection list that changed.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### HighlightStyle {#HighlightStyle}

<div class="api-text" v-pre><p>The highlighting style of a selection list.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>outlineUnoccludedColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,178,51</code></td><td><p>Unoccluded outline color.</p></td></tr>
<tr><td><code>outlineOccludedColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,178,51</code></td><td><p>Occluded outline color.</p></td></tr>
<tr><td><code>fillUnoccludedColor</code></td><td><a href="globals#Color">Color</a></td><td><code>51,178,255</code></td><td><p>Unoccluded fill color.</p></td></tr>
<tr><td><code>fillOccludedColor</code></td><td><a href="globals#Color">Color</a></td><td><code>51,178,255</code></td><td><p>Occluded fill color.</p></td></tr>
<tr><td><code>outlineUnoccludedAlpha</code></td><td>number</td><td><code>0.9</code></td><td><p>Unoccluded outline alpha, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>outlineOccludedAlpha</code></td><td>number</td><td><code>0.9</code></td><td><p>Occluded outline alpha, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>fillUnoccludedAlpha</code></td><td>number</td><td><code>0.0</code></td><td><p>Unoccluded fill alpha, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>fillOccludedAlpha</code></td><td>number</td><td><code>0.0</code></td><td><p>Occluded fill alpha, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>outlineWidth</code></td><td>number</td><td><code>2</code></td><td><p>Width of the outline, in pixels.</p></td></tr>
<tr><td><code>isOutlineSmooth</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to fade the outside edge of the outline, <code>false</code> to have a sharp edge.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ItemType {#ItemType}

<div class="api-text" v-pre><p>The type of a specific item in a selection list.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"avatar"</code></td><td>The item is an avatar.</td></tr>
 <tr><td><code>"entity"</code></td><td>The item is an entity.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### SelectedItemsList {#SelectedItemsList}

<div class="api-text" v-pre><p>A selection list.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>avatars</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The IDs of the avatars in the selection list.</p></td></tr>
<tr><td><code>entities</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The IDs of the entities in the selection list.</p></td></tr>
</tbody></table></div>

</div>
