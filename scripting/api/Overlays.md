---
title: "Overlays"
description: "The Overlays API provides facilities to create and interact with overlays."
draft: true
---

# Overlays

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Overlays</code> API provides facilities to create and interact with overlays. These are 2D and 3D objects visible only to yourself and that aren't persisted to the domain. They are used for UI.</p>
 <p><strong>Note:</strong> 3D overlays are local <a href="Entities"><code>Entities</code></a>, internally, so many of the methods also work with entities.</p>
 <p class="important">3D overlays are deprecated: Use local <a href="Entities"><code>Entities</code></a> for these instead.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>keyboardFocusOverlay</code></td><td><a href="Uuid">Uuid</a></td><td><p>The <code><a href="#OverlayProperties-Web3D">"web3d"</a></code> overlay (<a href="Entities#EntityProperties-Web">Web</a> entity) that has keyboard focus. If no overlay (entity) has keyboard focus, returns <code>null</code>; set to <code>null</code> or <a href="Uuid">Uuid.NULL</a> to clear keyboard focus.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### addOverlay {#addOverlay}

```js
Overlays.addOverlay(type, properties)
```

<div class="api-text" v-pre><p>Adds an overlay to the scene.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td><a href="#OverlayType">Overlays.OverlayType</a></td><td><p>The type of the overlay to add.</p></td></tr>
<tr><td><code>properties</code></td><td><a href="#OverlayProperties">Overlays.OverlayProperties</a></td><td><p>The properties of the overlay to add.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the newly created overlay if successful, otherwise <a href="Uuid">Uuid.NULL</a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add a cube overlay in front of your avatar.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
```

### cloneOverlay {#cloneOverlay}

```js
Overlays.cloneOverlay(id)
```

<div class="api-text" v-pre><p>Creates a clone of an existing overlay (or entity). </p>
<p>Note: For cloning behavior of 3D overlays and entities, see <a href="Entities#cloneEntity"><code>Entities.cloneEntity</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or entity) to clone.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the new overlay (or entity) if successful, otherwise <a href="Uuid">Uuid.NULL</a>.</p></div>

### deleteOverlay {#deleteOverlay}

```js
Overlays.deleteOverlay(id)
```

<div class="api-text" v-pre><p>Deletes an overlay (or entity).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or entity) to delete.</p></td></tr>
</tbody></table></div>

### editOverlay {#editOverlay}

```js
Overlays.editOverlay(id, properties)
```

<div class="api-text" v-pre><p>Edits an overlay's (or entity's) properties.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or entity) to edit.</p></td></tr>
<tr><td><code>properties</code></td><td><a href="#OverlayProperties">Overlays.OverlayProperties</a></td><td><p>The properties changes to make.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>false</code> if Interface is exiting. Otherwise, if a 2D overlay then <code>true</code> always, and if a 3D overlay then <code>true</code> if the overlay was found and edited, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add an overlay in front of your avatar then change its color.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});

var success = Overlays.editOverlay(overlay, {
    color: { red: 255, green: 0, blue: 0 }
});
print("Success: " + success);
```

### editOverlays {#editOverlays}

```js
Overlays.editOverlays(propertiesById)
```

<div class="api-text" v-pre><p>Edits the properties of multiple overlays (or entities).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>propertiesById</code></td><td>object&lt;<a href="Uuid">Uuid</a>, <a href="#OverlayProperties">Overlays.OverlayProperties</a>&gt;</td><td><p>An object with overlay (or entity) IDs as keys and <a href="#OverlayProperties">OverlayProperties</a> edits to make as values.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>false</code> if Interface is exiting, otherwise <code>true</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create two overlays in front of your avatar then change their colors.</p></div>

```js
var overlayA = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var overlayB = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});

var overlayEdits = {};
overlayEdits[overlayA] = { color: { red: 255, green: 0, blue: 0 } };
overlayEdits[overlayB] = { color: { red: 0, green: 255, blue: 0 } };
var success = Overlays.editOverlays(overlayEdits);
print("Success: " + success);
```

### findOverlays {#findOverlays}

```js
Overlays.findOverlays(center, radius)
```

<div class="api-text" v-pre><p>Gets a list of visible 3D overlays (local entities) with bounding boxes that touch a search sphere.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>center</code></td><td><a href="Vec3">Vec3</a></td><td><p>The center of the search sphere.</p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td><p>The radius of the search sphere.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>The IDs of the overlays (local entities) that are visible and have bounding boxes that touch a search sphere.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create two overlays in front of your avatar then search for overlays near your avatar.</p></div>

```js
var overlayA = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay A: " + overlayA);
var overlayB = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay B: " + overlayB);

var overlaysFound = Overlays.findOverlays(MyAvatar.position, 5.0);
print("Overlays found: " + JSON.stringify(overlaysFound));
```

### findRayIntersection {#findRayIntersection}

```js
Overlays.findRayIntersection(pickRay, precisionPicking?, include?, discard?, visibleOnly?, collideableOnly?)
```

<div class="api-text" v-pre><p>Finds the closest 3D overlay (or local entity) intersected by a <a href="globals#PickRay"><code>PickRay</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pickRay</code></td><td><a href="globals#PickRay">PickRay</a></td><td></td><td><p>The PickRay to use for finding overlays.</p></td></tr>
<tr><td><code>precisionPicking</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to pick against precise meshes, <code>false</code> to pick against coarse meshes. If <code>true</code> and the intersected entity is a model, the result's <code>extraInfo</code> property includes more information than it otherwise would.</p></td></tr>
<tr><td><code>include</code> <em>optional</em></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><code>[]</code></td><td><p>If not empty, then the search is restricted to these overlays (and local entities).</p></td></tr>
<tr><td><code>discard</code> <em>optional</em></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><code>[]</code></td><td><p>Overlays (and local entities) to ignore during the search.</p></td></tr>
<tr><td><code>visibleOnly</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if only overlays (and local entities) that are <code><a href="#OverlayProperties">visible</a></code> should be searched.</p></td></tr>
<tr><td><code>collideableOnly</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if only local entities that are not <code><a href="Entities#EntityProperties">collisionless</a></code> should be searched.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#RayToOverlayIntersectionResult">Overlays.RayToOverlayIntersectionResult</a> <p>The result of the search for the first intersected overlay (or local entity.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a cube overlay in front of your avatar. Report 3D overlay intersection details for mouse clicks.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});

Controller.mousePressEvent.connect(function (event) {
    var pickRay = Camera.computePickRay(event.x, event.y);
    var intersection = Overlays.findRayIntersection(pickRay);
    print("Intersection: " + JSON.stringify(intersection));
});
```

### getKeyboardFocusOverlay {#getKeyboardFocusOverlay}

```js
Overlays.getKeyboardFocusOverlay()
```

<div class="api-text" v-pre><p>Gets the ID of the <code><a href="#OverlayProperties-Web3D">"web3d"</a></code> overlay (<a href="Entities#EntityProperties-Web">Web</a> entity) that has keyboard focus.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the <code><a href="#OverlayProperties-Web3D">"web3d"</a></code> overlay (<a href="Entities#EntityProperties-Web">Web</a> entity) that has focus, if any, otherwise <code>null</code>.</p></div>

### getOverlayAtPoint {#getOverlayAtPoint}

```js
Overlays.getOverlayAtPoint(point)
```

<div class="api-text" v-pre><p>Gets the ID of the 2D overlay at a particular point on the desktop screen or HUD surface.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>point</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The point to check for an overlay.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the 2D overlay at the specified point if found, otherwise <code>null</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a 2D overlay and add an event function that reports the overlay clicked on, if any.</p></div>

```js
var overlay = Overlays.addOverlay("rectangle", {
    bounds: { x: 100, y: 100, width: 200, height: 100 },
    color: { red: 255, green: 255, blue: 255 }
});
print("Created: " + overlay);

Controller.mousePressEvent.connect(function (event) {
    var overlay = Overlays.getOverlayAtPoint({ x: event.x, y: event.y });
    print("Clicked: " + overlay);
});
```

### getOverlayObject {#getOverlayObject}

```js
Overlays.getOverlayObject(overlayID)
```

<div class="api-text" v-pre><p>Gets an overlay's (or entity's) script object. In particular, this is useful for accessing a <code><a href="#OverlayProperties-Web3D">"web3d"</a></code> overlay's <code>EventBridge</code> script object to exchange messages with the web page script. </p>
<p>To send a message from an Interface script to a <code>"web3d"</code> overlay over its event bridge:</p>
 <pre class="prettyprint"><code>var overlayObject = Overlays.getOverlayObject(overlayID);&#10;overlayObject.emitScriptEvent(message);</code></pre>
 <p>To receive a message from a <code>"web3d"</code> overlay over its event bridge in an Interface script:</p>
 <pre class="prettyprint"><code>var overlayObject = Overlays.getOverlayObject(overlayID);&#10;overlayObject.webEventReceived.connect(function(message) {&#10;    ...&#10;};</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>overlayID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay to get the script object of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The script object for the overlay if found.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Exchange messages with a <code>"web3d"</code> overlay.</p></div>

```js
// HTML file, name: "web3d.html".
<!DOCTYPE html>
<html>
<head>
    <title>HELLO</title>
</head>
<body>
    <h1>HELLO</h1>
    <script>
        function onScriptEventReceived(message) {
            // Message received from the script.
            console.log("Message received: " + message);
        }

        EventBridge.scriptEventReceived.connect(onScriptEventReceived);

        setInterval(function () {
            // Send a message to the script.
            EventBridge.emitWebEvent("hello");
        }, 2000);
    </script>
</body>
</html>

// Interface script file.
var web3DOverlay = Overlays.addOverlay("web3d", {
    type: "Web",
    position : Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y : 0.5, z : -3 })),
    rotation : MyAvatar.orientation,
    sourceUrl : Script.resolvePath("web3d.html"),
    alpha : 1.0
    });

var overlayObject;

function onWebEventReceived(message) {
    // Message received.
    print("Message received: " + message);

    // Send a message back.
    overlayObject.emitScriptEvent(message + " back");
}

Script.setTimeout(function() {
    overlayObject = Overlays.getOverlayObject(web3DOverlay);
    overlayObject.webEventReceived.connect(onWebEventReceived);
}, 500);

Script.scriptEnding.connect(function() {
    Overlays.deleteOverlay(web3DOverlay);
});
```

### getOverlaysProperties {#getOverlaysProperties}

```js
Overlays.getOverlaysProperties(propertiesById)
```

<div class="api-text" v-pre><p>Gets the values of multiple overlays' (or entities') properties.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>propertiesById</code></td><td>object&lt;<a href="Uuid">Uuid</a>, Array&lt;string&gt;&gt;</td><td><p>An object with overlay (or entity) IDs as keys and arrays of the names of properties to get for each as values.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object&lt;<a href="Uuid">Uuid</a>, <a href="#OverlayProperties">Overlays.OverlayProperties</a>&gt; <p>An object with overlay (or entity) IDs as keys and <a href="#OverlayProperties">OverlayProperties</a> as values.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create two cube overlays in front of your avatar then get some of their properties.</p></div>

```js
var overlayA = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var overlayB = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var propertiesToGet = {};
propertiesToGet[overlayA] = ["color", "alpha"];
propertiesToGet[overlayB] = ["dimensions"];
var properties = Overlays.getOverlaysProperties(propertiesToGet);
print("Overlays properties: " + JSON.stringify(properties));
```

### getOverlayType {#getOverlayType}

```js
Overlays.getOverlayType(id)
```

<div class="api-text" v-pre><p>Gets the type of an overlay.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay to get the type of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#OverlayType">Overlays.OverlayType</a> <p>The type of the overlay if found, otherwise <code>"unknown"</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create an overlay in front of your avatar then get and report its type.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var type = Overlays.getOverlayType(overlay);
print("Type: " + type); // cube
```

### getProperties {#getProperties}

```js
Overlays.getProperties(id, properties)
```

<div class="api-text" v-pre><p>Gets specified property values of a 3D overlay (or entity). </p>
<p><strong>Note:</strong> 2D overlays' property values cannot be retrieved.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or entity).</p></td></tr>
<tr><td><code>properties</code></td><td>Array&lt;string&gt;</td><td><p>The names of the properties to get the values of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#OverlayProperties">Overlays.OverlayProperties</a> <p>The values of valid properties if the overlay can be found, otherwise an empty object.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create an overlay in front of your avatar then report some of its properties.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var properties = Overlays.getProperties(overlay, ["color", "alpha", "grabbable"]);
print("Overlay properties: " + JSON.stringify(properties));
```

### getProperty {#getProperty}

```js
Overlays.getProperty(id, property)
```

<div class="api-text" v-pre><p>Gets a specified property value of a 3D overlay (or entity). </p>
<p><strong>Note:</strong> 2D overlays' property values cannot be retrieved.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the 3D overlay (or entity).</p></td></tr>
<tr><td><code>property</code></td><td>string</td><td><p>The name of the property to get the value of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The value of the property if the 3D overlay and property can be found, otherwise <code>undefined</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create an overlay in front of your avatar then report its alpha property value.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var alpha = Overlays.getProperty(overlay, "alpha");
print("Overlay alpha: " + alpha);
```

### height {#height}

```js
Overlays.height()
```

<div class="api-text" v-pre><p>Gets the height of the Interface window or HUD surface.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The height, in pixels, of the Interface window if in desktop mode or the HUD surface if in HMD mode.</p></div>

### isAddedOverlay {#isAddedOverlay}

```js
Overlays.isAddedOverlay(id)
```

<div class="api-text" v-pre><p>Checks if an overlay (or entity) exists.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or entity) to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if an overlay (or entity) with the given ID exists, <code>false</code> if it doesn't.</p></div>

### isLoaded {#isLoaded}

```js
Overlays.isLoaded(id)
```

<div class="api-text" v-pre><p>Checks whether an overlay's (or entity's) assets have been loaded. For example, for an <code><a href="#OverlayProperties-Image">"image"</a></code> overlay, the result indicates whether its image has been loaded.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or entity) to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the overlay's (or entity's) assets have been loaded, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create an image overlay and report whether its image is loaded after 1s.</p></div>

```js
var overlay = Overlays.addOverlay("image", {
    bounds: { x: 100, y: 100, width: 200, height: 200 },
    imageURL: "qrc:///images/wispy-smoke.png"
});
Script.setTimeout(function () {
    var isLoaded = Overlays.isLoaded(overlay);
    print("Image loaded: " + isLoaded);
}, 1000);
```

### sendHoverEnterOverlay {#sendHoverEnterOverlay}

```js
Overlays.sendHoverEnterOverlay(id, event)
```

<div class="api-text" v-pre><p>Generates a hover enter event on an overlay (or local entity).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or local entity) to generate a hover enter event on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The hover enter event details.</p></td></tr>
</tbody></table></div>

### sendHoverLeaveOverlay {#sendHoverLeaveOverlay}

```js
Overlays.sendHoverLeaveOverlay(id, event)
```

<div class="api-text" v-pre><p>Generates a hover leave event on an overlay (or local entity).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or local entity) to generate a hover leave event on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The hover leave event details.</p></td></tr>
</tbody></table></div>

### sendHoverOverOverlay {#sendHoverOverOverlay}

```js
Overlays.sendHoverOverOverlay(id, event)
```

<div class="api-text" v-pre><p>Generates a hover over event on an overlay (or entity).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or local entity) to generate a hover over event on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The hover over event details.</p></td></tr>
</tbody></table></div>

### sendMouseMoveOnOverlay {#sendMouseMoveOnOverlay}

```js
Overlays.sendMouseMoveOnOverlay(id, event)
```

<div class="api-text" v-pre><p>Generates a mouse move event on an overlay (or local entity).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or local entity) to generate a mouse move event on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The mouse move event details.</p></td></tr>
</tbody></table></div>

### sendMousePressOnOverlay {#sendMousePressOnOverlay}

```js
Overlays.sendMousePressOnOverlay(id, event)
```

<div class="api-text" v-pre><p>Generates a mouse press event on an overlay (or local entity).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or local entity) to generate a mouse press event on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The mouse press event details.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a 2D rectangle overlay plus a 3D cube overlay and generate mousePressOnOverlay events for the 2D overlay.</p></div>

```js
var overlay3D = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("3D overlay: " + overlay);

var overlay2D = Overlays.addOverlay("rectangle", {
    bounds: { x: 100, y: 100, width: 200, height: 100 },
    color: { red: 255, green: 255, blue: 255 }
});
print("2D overlay: " + overlay);

// Overlays.mousePressOnOverlay by default applies only to 3D overlays.
Overlays.mousePressOnOverlay.connect(function(overlayID, event) {
    print("Clicked: " + overlayID);
});

Controller.mousePressEvent.connect(function (event) {
    // Overlays.getOverlayAtPoint applies only to 2D overlays.
    var overlay = Overlays.getOverlayAtPoint({ x: event.x, y: event.y });
    if (overlay) {
        Overlays.sendMousePressOnOverlay(overlay, {
            type: "press",
            id: 0,
            pos2D: event
        });
    }
});
```

### sendMouseReleaseOnOverlay {#sendMouseReleaseOnOverlay}

```js
Overlays.sendMouseReleaseOnOverlay(id, event)
```

<div class="api-text" v-pre><p>Generates a mouse release event on an overlay (or local entity).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or local entity) to generate a mouse release event on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The mouse release event details.</p></td></tr>
</tbody></table></div>

### setKeyboardFocusOverlay {#setKeyboardFocusOverlay}

```js
Overlays.setKeyboardFocusOverlay(id)
```

<div class="api-text" v-pre><p>Sets the <code><a href="#OverlayProperties-Web3D">"web3d"</a></code> overlay (<a href="Entities#EntityProperties-Web">Web</a> entity) that has keyboard focus.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the <code><a href="#OverlayProperties-Web3D">"web3d"</a></code> overlay (<a href="Entities#EntityProperties-Web">Web</a> entity) to set keyboard focus to. Use <code>null</code> or <a href="Uuid">Uuid.NULL</a> to unset keyboard focus from an overlay (entity).</p></td></tr>
</tbody></table></div>

### textSize {#textSize}

```js
Overlays.textSize(id, text)
```

<div class="api-text" v-pre><p>Calculates the size of some text in a text overlay (or entity). The overlay (or entity) need not be set visible. </p>
<p><strong>Note:</strong> The size of text in a 3D overlay (or entity) cannot be calculated immediately after the overlay (or entity) is created; a short delay is required while the overlay (or entity) finishes being created.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or entity) to use for calculation.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><p>The string to calculate the size of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Size">Size</a> <p>The size of the <code>text</code> if the object is a text overlay (or entity), otherwise <code>{ height: 0, width : 0 }</code>. If the object is a 2D overlay, the size is in pixels; if the object is a 3D overlay (or entity), the size is in meters.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Calculate the size of "hello" in a 3D text entity.</p></div>

```js
var overlay = Overlays.addOverlay("text3d", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -2 })),
    rotation: MyAvatar.orientation,
    lineHeight: 0.2,
    visible: false
});

Script.setTimeout(function() {
    var textSize = Overlays.textSize(overlay, "hello");
    print("Size of \"hello\": " + JSON.stringify(textSize));
}, 500);
```

### width {#width}

```js
Overlays.width()
```

<div class="api-text" v-pre><p>Gets the width of the Interface window or HUD surface.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The width, in pixels, of the Interface window if in desktop mode or the HUD surface if in HMD mode.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### hoverEnterOverlay {#hoverEnterOverlay}

```js
Overlays.hoverEnterOverlay.connect(function (id, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse cursor starts hovering over an overlay. Only occurs for 3D overlays (unless you use <a href="#sendHoverEnterOverlay">sendHoverEnterOverlay</a> for a 2D overlay).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay the mouse moved event occurred on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The mouse move event details.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a cube overlay in front of your avatar and report when you start hovering your mouse over it.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay: " + overlay);
Overlays.hoverEnterOverlay.connect(function(overlayID, event) {
    print("Hover enter: " + overlayID);
});
```

### hoverLeaveOverlay {#hoverLeaveOverlay}

```js
Overlays.hoverLeaveOverlay.connect(function (id, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse cursor finishes hovering over an overlay. Only occurs for 3D overlays (unless you use <a href="#sendHoverLeaveOverlay">sendHoverLeaveOverlay</a> for a 2D overlay).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay the hover leave event occurred on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The hover leave event details.</p></td></tr>
</tbody></table></div>

### hoverOverOverlay {#hoverOverOverlay}

```js
Overlays.hoverOverOverlay.connect(function (id, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse cursor continues hovering over an overlay. Only occurs for 3D overlays (unless you use <a href="#sendHoverOverOverlay">sendHoverOverOverlay</a> for a 2D overlay).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay the hover over event occurred on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The hover over event details.</p></td></tr>
</tbody></table></div>

### mouseDoublePressOffOverlay {#mouseDoublePressOffOverlay}

```js
Overlays.mouseDoublePressOffOverlay.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse double press event occurs on something other than a 3D overlay.</p></div>

### mouseDoublePressOnOverlay {#mouseDoublePressOnOverlay}

```js
Overlays.mouseDoublePressOnOverlay.connect(function (id, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse double press event occurs on an overlay. Only occurs for 3D overlays.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay the mouse double press event occurred on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The mouse double press event details.</p></td></tr>
</tbody></table></div>

### mouseMoveOnOverlay {#mouseMoveOnOverlay}

```js
Overlays.mouseMoveOnOverlay.connect(function (id, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse move event occurs on an overlay. Only occurs for 3D overlays (unless you use <a href="#sendMouseMoveOnOverlay">sendMouseMoveOnOverlay</a> for a 2D overlay).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay the mouse moved event occurred on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The mouse move event details.</p></td></tr>
</tbody></table></div>

### mousePressOffOverlay {#mousePressOffOverlay}

```js
Overlays.mousePressOffOverlay.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse press event occurs on something other than a 3D overlay.</p></div>

### mousePressOnOverlay {#mousePressOnOverlay}

```js
Overlays.mousePressOnOverlay.connect(function (id, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse press event occurs on an overlay. Only occurs for 3D overlays (unless you use <a href="#sendMousePressOnOverlay">sendMousePressOnOverlay</a> for a 2D overlay).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay the mouse press event occurred on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The mouse press event details.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a cube overlay in front of your avatar and report mouse clicks on it.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("My overlay: " + overlay);

Overlays.mousePressOnOverlay.connect(function(overlayID, event) {
    if (overlayID === overlay) {
        print("Clicked on my overlay");
    }
});
```

### mouseReleaseOnOverlay {#mouseReleaseOnOverlay}

```js
Overlays.mouseReleaseOnOverlay.connect(function (id, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse release event occurs on an overlay. Only occurs for 3D overlays (unless you use <a href="#sendMouseReleaseOnOverlay">sendMouseReleaseOnOverlay</a> for a 2D overlay).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay the mouse release event occurred on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The mouse release event details.</p></td></tr>
</tbody></table></div>

### overlayDeleted {#overlayDeleted}

```js
Overlays.overlayDeleted.connect(function (id) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an overlay (or entity) is deleted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the overlay (or entity) that was deleted.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create an overlay then delete it after 1s.</p></div>

```js
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay: " + overlay);

Overlays.overlayDeleted.connect(function(overlayID) {
    print("Deleted: " + overlayID);
});
Script.setTimeout(function () {
    Overlays.deleteOverlay(overlay);
}, 1000);
```

## Types {#types}

### OverlayProperties {#OverlayProperties}

<div class="api-text" v-pre><p>Different overlay types have different properties: some common to all overlays (listed in the table) and some specific to each <a href="#OverlayType">OverlayType</a> (linked to below). </p>
<p>3D overlays are local entities, internally, so they also support the relevant entity's properties.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the overlay. <em>Read-only.</em></p></td></tr>
<tr><td><code>type</code></td><td><a href="#OverlayType">Overlays.OverlayType</a></td><td></td><td><p>The overlay's type. <em>Read-only.</em></p></td></tr>
<tr><td><code>visible</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the overlay is rendered, <code>false</code> if it isn't.</p></td></tr>
</tbody></table></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="#OverlayProperties-Rectangle">OverlayProperties-Rectangle</a>, <a href="#OverlayProperties-Image">OverlayProperties-Image</a>, <a href="#OverlayProperties-Text">OverlayProperties-Text</a>, <a href="#OverlayProperties-Cube">OverlayProperties-Cube</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Sphere">OverlayProperties-Sphere</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Shape">OverlayProperties-Shape</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Model">OverlayProperties-Model</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Rectangle3D">OverlayProperties-Rectangle3D</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Image3D">OverlayProperties-Image3D</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Text3D">OverlayProperties-Text3D</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Web3D">OverlayProperties-Web3D</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Line3D">OverlayProperties-Line3D</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Grid">OverlayProperties-Grid</a> — <span class="important">Deprecated.</span>, <a href="#OverlayProperties-Circle3D">OverlayProperties-Circle3D</a> — <span class="important">Deprecated.</span></div>

### OverlayProperties-Circle3D {#OverlayProperties-Circle3D}

<div class="api-text" v-pre><p>The <code>"circle3d"</code> <a href="#OverlayType">OverlayType</a> is for 3D circles. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Gizmo">Gizmo</a> entity, with the <code>gizmoType</code> property value being <code>"ring"</code>. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>isSolid</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered as a solid, <code>false</code> if it is rendered as a wire frame. Synonyms: <code>solid</code>, <code>isFilled</code>, and <code>filled</code>. Antonyms: <code>isWire</code> and <code>wire</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
<tr><td><code>startAt</code></td><td>number</td><td><code>0</code></td><td><p>The counter-clockwise angle from the overlay's x-axis that drawing starts at, in degrees.</p></td></tr>
<tr><td><code>endAt</code></td><td>number</td><td><code>360</code></td><td><p>The counter-clockwise angle from the overlay's x-axis that drawing ends at, in degrees.</p></td></tr>
<tr><td><code>outerRadius</code></td><td>number</td><td><code>1</code></td><td><p>The outer radius of the overlay in meters. Synonym: <code>radius</code>.</p></td></tr>
<tr><td><code>innerRadius</code></td><td>number</td><td><code>0</code></td><td><p>The inner radius of the overlay in meters.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td></td><td><p>Sets the color of the overlay. Setting this value sets the values of <code>innerStartColor</code>, <code>innerEndColor</code>, <code>outerStartColor</code>, and <code>outerEndColor</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>startColor</code></td><td><a href="globals#Color">Color</a></td><td></td><td><p>Sets the values of <code>innerStartColor</code> and <code>outerStartColor</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>endColor</code></td><td><a href="globals#Color">Color</a></td><td></td><td><p>Sets the values of <code>innerEndColor</code> and <code>outerEndColor</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>innerColor</code></td><td><a href="globals#Color">Color</a></td><td></td><td><p>Sets the values of <code>innerStartColor</code> and <code>innerEndColor</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>outerColor</code></td><td><a href="globals#Color">Color</a></td><td></td><td><p>Sets the values of <code>outerStartColor</code> and <code>outerEndColor</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>innerStartcolor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color at the inner start point of the overlay.</p></td></tr>
<tr><td><code>innerEndColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color at the inner end point of the overlay.</p></td></tr>
<tr><td><code>outerStartColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color at the outer start point of the overlay.</p></td></tr>
<tr><td><code>outerEndColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color at the outer end point of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td></td><td><p>Sets the opacity of the overlay, <code>0.0</code> – <code>1.0</code>. Setting this value sets the values of <code>innerStartAlpha</code>, <code>innerEndAlpha</code>, <code>outerStartAlpha</code>, and <code>outerEndAlpha</code>. Synonym: <code>Alpha</code>.</p></td></tr>
<tr><td><code>startAlpha</code></td><td>number</td><td></td><td><p>Sets the values of <code>innerStartAlpha</code> and <code>outerStartAlpha</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>endAlpha</code></td><td>number</td><td></td><td><p>Sets the values of <code>innerEndAlpha</code> and <code>outerEndAlpha</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>innerAlpha</code></td><td>number</td><td></td><td><p>Sets the values of <code>innerStartAlpha</code> and <code>innerEndAlpha</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>outerAlpha</code></td><td>number</td><td></td><td><p>Sets the values of <code>outerStartAlpha</code> and <code>outerEndAlpha</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>innerStartAlpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity at the inner start point of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>innerEndAlpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity at the inner end point of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>outerStartAlpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity at the outer start point of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>outerEndAlpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity at the outer end point of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>hasTickMarks</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if tick marks are drawn, <code>false</code> if they aren't.</p></td></tr>
<tr><td><code>majorTickMarksAngle</code></td><td>number</td><td><code>0</code></td><td><p>The angle between major tick marks, in degrees.</p></td></tr>
<tr><td><code>minorTickMarksAngle</code></td><td>number</td><td><code>0</code></td><td><p>The angle between minor tick marks, in degrees.</p></td></tr>
<tr><td><code>majorTickMarksLength</code></td><td>number</td><td><code>0</code></td><td><p>The length of the major tick marks, in meters. A positive value draws tick marks outwards from the inner radius; a negative value draws tick marks inwards from the outer radius.</p></td></tr>
<tr><td><code>minorTickMarksLength</code></td><td>number</td><td><code>0</code></td><td><p>The length of the minor tick marks, in meters. A positive value draws tick marks outwards from the inner radius; a negative value draws tick marks inwards from the outer radius.</p></td></tr>
<tr><td><code>majorTickMarksColor</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>The color of the major tick marks.</p></td></tr>
<tr><td><code>minorTickMarksColor</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>The color of the minor tick marks.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Cube {#OverlayProperties-Cube}

<div class="api-text" v-pre><p>The <code>"cube"</code> <a href="#OverlayType">OverlayType</a> is for 3D cubes. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Box">Box</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>isSolid</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered as a solid, <code>false</code> if it is rendered as a wire frame. Synonyms: <code>solid</code>, <code>isFilled</code>, and <code>filled</code>. Antonyms: <code>isWire</code> and <code>wire</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Grid {#OverlayProperties-Grid}

<div class="api-text" v-pre><p>The <code>"grid"</code> <a href="#OverlayType">OverlayType</a> is for 3D grids. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Grid">Grid</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Image {#OverlayProperties-Image}

<div class="api-text" v-pre><p>The <code>"image"</code> <a href="#OverlayType">OverlayType</a> is for 2D images. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bounds</code></td><td><a href="globals#Rect">Rect</a></td><td></td><td><p>The position and size of the image display area, in pixels. <em>Write-only.</em></p></td></tr>
<tr><td><code>x</code></td><td>number</td><td></td><td><p>Integer left, x-coordinate value of the image display area = <code>bounds.x</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>y</code></td><td>number</td><td></td><td><p>Integer top, y-coordinate value of the image display area = <code>bounds.y</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>width</code></td><td>number</td><td></td><td><p>Integer width of the image display area = <code>bounds.width</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>height</code></td><td>number</td><td></td><td><p>Integer height of the image display area = <code>bounds.height</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>imageURL</code></td><td>string</td><td></td><td><p>The URL of the image file to display. The image is scaled to fit to the <code>bounds</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>subImage</code></td><td><a href="globals#Rect">Rect</a></td><td></td><td><p>The portion of the image to use. If not specified, the whole image is used. <em>Write-only.</em></p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>The color to apply over the top of the image to colorize it. <em>Write-only.</em></p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.0</code></td><td><p>The opacity of the color applied over the top of the image, <code>0.0</code> – <code>1.0</code>. <em>Write-only.</em></p></td></tr>
</tbody></table></div>

### OverlayProperties-Image3D {#OverlayProperties-Image3D}

<div class="api-text" v-pre><p>The <code>"image3D"</code> <a href="#OverlayType">OverlayType</a> is for 3D images. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Image">Image</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The URL of the image to display.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Line3D {#OverlayProperties-Line3D}

<div class="api-text" v-pre><p>The <code>"line3d"</code> <a href="#OverlayType">OverlayType</a> is for 3D lines. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-PolyLine">PolyLine</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to. </p>
<p><em>Currently doesn't work.</em></p>
<p></p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
<tr><td><code>endParentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the end point of the line is parented to. </p>
<p><em>Currently doesn't work.</em></p>
<p></p></td></tr>
<tr><td><code>endParentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the skeleton joint that the end point of the line is attached to if <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint". </p>
<p><em>Currently doesn't work.</em></p>
<p></p></td></tr>
<tr><td><code>start</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The start point of the line. Synonyms: <code>startPoint</code> and <code>p1</code>. </p>
<p><strong>Note:</strong> If <code>parentID</code> is set, use <code>localStart</code> to set the local position of the start point.</p>
<p></p></td></tr>
<tr><td><code>end</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The end point of the line. Synonyms: <code>endPoint</code> and <code>p2</code>. </p>
<p><strong>Note:</strong> If <code>parentID</code> is set, use <code>localEnd</code> to set the local position of the end point.</p>
<p></p></td></tr>
<tr><td><code>localStart</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>start</code>. </p>
<p><em>Currently doesn't work.</em></p>
<p></p></td></tr>
<tr><td><code>localEnd</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>endParentID</code> set, otherwise the same value as <code>end</code>. </p>
<p><em>Currently doesn't work.</em></p>
<p></p></td></tr>
<tr><td><code>length</code></td><td>number</td><td></td><td><p>The length of the line, in meters. This can be set after creating a line with start and end points. </p>
<p><em>Currently doesn't work.</em></p>
<p></p></td></tr>
<tr><td><code>glow</code></td><td>number</td><td><code>0</code></td><td><p>If <code>glow &gt; 0</code>, the line is rendered with a glow.</p></td></tr>
<tr><td><code>lineWidth</code></td><td>number</td><td><code>0.02</code></td><td><p>Width of the line, in meters. </p>
<p><em>You can set this property's value but currently cannot retrieve its value. Use the <code>strokeWidths</code> property to retrieve its value instead.</em></p>
<p></p></td></tr>
</tbody></table></div>

### OverlayProperties-Model {#OverlayProperties-Model}

<div class="api-text" v-pre><p>The <code>"model"</code> <a href="#OverlayType">OverlayType</a> is for 3D models. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Model">Model</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>size</code>.</p></td></tr>
<tr><td><code>scale</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The scale factor applied to the model's dimensions.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The URL of the glTF, FBX, or OBJ model used for the overlay. glTF models may be in JSON or binary format (".gltf" or ".glb" URLs respectively). Baked models' URLs have ".baked" before the file type. Model files may also be compressed in GZ format, in which case the URL ends in ".gz".</p></td></tr>
<tr><td><code>loadPriority</code></td><td>number</td><td><code>0.0</code></td><td><p>The priority for loading and displaying the overlay. Overlays with higher values load first. <em>Currently not used.</em></p></td></tr>
<tr><td><code>textures</code></td><td>Object&lt;string, string&gt; | string</td><td></td><td><p>Texture name, URL pairs used when rendering the model in place of the model's original textures, per the <a href="Entities#EntityProperties-Model"><code>Entities.EntityProperties-Model</code></a> property of the same name. </p>
<p>The value can be an object or a JSON string when setting the value; it is a JSON string when getting the value.</p>
<p></p></td></tr>
<tr><td><code>animationSettings</code></td><td><a href="Entities#AnimationProperties">Entities.AnimationProperties</a></td><td></td><td><p>An animation to play on the model.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Rectangle {#OverlayProperties-Rectangle}

<div class="api-text" v-pre><p>The <code>"rectangle"</code> <a href="#OverlayType">OverlayType</a> is for 2D rectangles. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bounds</code></td><td><a href="globals#Rect">Rect</a></td><td></td><td><p>The position and size of the rectangle, in pixels. <em>Write-only.</em></p></td></tr>
<tr><td><code>x</code></td><td>number</td><td></td><td><p>Integer left, x-coordinate value = <code>bounds.x</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>y</code></td><td>number</td><td></td><td><p>Integer top, y-coordinate value = <code>bounds.y</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>width</code></td><td>number</td><td></td><td><p>Integer width of the rectangle = <code>bounds.width</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>height</code></td><td>number</td><td></td><td><p>Integer height of the rectangle = <code>bounds.height</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td><code>0</code></td><td><p>Integer corner radius, in pixels. <em>Write-only.</em></p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>The color of the overlay. <em>Write-only.</em></p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>1.0</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>borderWidth</code></td><td>number</td><td><code>1</code></td><td><p>Integer width of the border, in pixels. The border is drawn within the rectangle's bounds. It is not drawn unless either <code>borderColor</code> or <code>borderAlpha</code> are specified. <em>Write-only.</em></p></td></tr>
<tr><td><code>borderColor</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>The color of the border. <em>Write-only.</em></p></td></tr>
<tr><td><code>borderAlpha</code></td><td>number</td><td><code>1.0</code></td><td><p>The opacity of the border, <code>0.0</code> – <code>1.0</code>. <em>Write-only.</em></p></td></tr>
</tbody></table></div>

### OverlayProperties-Rectangle3D {#OverlayProperties-Rectangle3D}

<div class="api-text" v-pre><p>The <code>"rectangle3D"</code> <a href="#OverlayType">OverlayType</a> is for 3D rectangles. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Shape">Shape</a> entity, with the <code>shape</code> property value being <code>"Quad"</code>. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>isSolid</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered as a solid, <code>false</code> if it is rendered as a wire frame. Synonyms: <code>solid</code>, <code>isFilled</code>, and <code>filled</code>. Antonyms: <code>isWire</code> and <code>wire</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Shape {#OverlayProperties-Shape}

<div class="api-text" v-pre><p>The <code>"shape"</code> <a href="#OverlayType">OverlayType</a> is for 3D shapes. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Shape">Shape</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>isSolid</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered as a solid, <code>false</code> if it is rendered as a wire frame. Synonyms: <code>solid</code>, <code>isFilled</code>, and <code>filled</code>. Antonyms: <code>isWire</code> and <code>wire</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
<tr><td><code>shape</code></td><td><a href="#Shape">Overlays.Shape</a></td><td><code>Hexagon</code></td><td><p>The geometrical shape of the overlay.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Sphere {#OverlayProperties-Sphere}

<div class="api-text" v-pre><p>The <code>"sphere"</code> <a href="#OverlayType">OverlayType</a> is for 3D spheres. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Sphere">Sphere</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>isSolid</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered as a solid, <code>false</code> if it is rendered as a wire frame. Synonyms: <code>solid</code>, <code>isFilled</code>, and <code>filled</code>. Antonyms: <code>isWire</code> and <code>wire</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Text {#OverlayProperties-Text}

<div class="api-text" v-pre><p>The <code>"text"</code> <a href="#OverlayType">OverlayType</a> is for 2D text. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bounds</code></td><td><a href="globals#Rect">Rect</a></td><td></td><td><p>The position and size of the rectangle, in pixels. <em>Write-only.</em></p></td></tr>
<tr><td><code>x</code></td><td>number</td><td></td><td><p>Integer left, x-coordinate value = <code>bounds.x</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>y</code></td><td>number</td><td></td><td><p>Integer top, y-coordinate value = <code>bounds.y</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>width</code></td><td>number</td><td></td><td><p>Integer width of the rectangle = <code>bounds.width</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>height</code></td><td>number</td><td></td><td><p>Integer height of the rectangle = <code>bounds.height</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>margin</code></td><td>number</td><td><code>0</code></td><td><p>The <code>leftMargin</code> and <code>topMargin</code> values, in pixels. <em>Write-only.</em></p></td></tr>
<tr><td><code>leftMargin</code></td><td>number</td><td><code>0</code></td><td><p>The left margin's size, in pixels. This value is also used for the right margin. <em>Write-only.</em></p></td></tr>
<tr><td><code>topMargin</code></td><td>number</td><td><code>0</code></td><td><p>The top margin's size, in pixels. This value is also used for the bottom margin. <em>Write-only.</em></p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The text to display. Text does not automatically wrap; use <code>"\n"</code> for a line break. Text is clipped to the <code>bounds</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>font.size</code></td><td>number</td><td><code>18</code></td><td><p>The size of the text, in pixels. <em>Write-only.</em></p></td></tr>
<tr><td><code>lineHeight</code></td><td>number</td><td><code>18</code></td><td><p>The height of a line of text, in pixels. <em>Write-only.</em></p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the text. Synonym: <code>textColor</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>1.0</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>. <em>Write-only.</em></p></td></tr>
<tr><td><code>backgroundColor</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>The color of the background rectangle. <em>Write-only.</em></p></td></tr>
<tr><td><code>backgroundAlpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the background rectangle, <code>0.0</code> – <code>1.0</code>. <em>Write-only.</em></p></td></tr>
</tbody></table></div>

### OverlayProperties-Text3D {#OverlayProperties-Text3D}

<div class="api-text" v-pre><p>The <code>"text3D"</code> <a href="#OverlayType">OverlayType</a> is for 3D text. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Text">Text</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay text. Synonym: <code>textColor</code>.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay text, <code>0.0</code> – <code>1.0</code>. </p>
<p><em>Currently not used; use <code>textAlpha</code> instead.</em></p>
<p></p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
</tbody></table></div>

### OverlayProperties-Web3D {#OverlayProperties-Web3D}

<div class="api-text" v-pre><p>The <code>"web3d"</code> <a href="#OverlayType">OverlayType</a> is for 3D web surfaces. It has properties in addition to the common <a href="#OverlayProperties">OverlayProperties</a>. It additionally has properties per the <a href="Entities#EntityProperties-Web">Web</a> entity. </p>
<p class="important">Deprecated: Use local <a href="Entities"><code>Entities</code></a> instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>The name of the overlay.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the overlay.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>0.7</code></td><td><p>The opacity of the overlay, <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>pulseMax</code></td><td>number</td><td><code>0</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulseMin</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>pulsePeriod</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</p></td></tr>
<tr><td><code>alphaPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>colorPulse</code></td><td>number</td><td><code>0</code></td><td><p>If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.)</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and <code>start</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay. Synonym: <code>orientation</code>.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>position</code>.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the overlay relative to its parent if the overlay has a <code>parentID</code> set, otherwise the same value as <code>rotation</code>. Synonym: <code>localOrientation</code>.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> ignore the overlay, <code>false</code> if they don't. Synonym: <code>ignoreRayIntersection</code>.</p></td></tr>
<tr><td><code>drawInFront</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered on top of the world layer but behind the HUD surface.</p></td></tr>
<tr><td><code>drawHUDLayer</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay is rendered in front of everything, including the HUD surface.</p></td></tr>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The avatar, entity, or overlay that the overlay is parented to.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>Integer value specifying the joint of the entity or avatar that the entity is parented to if <code>parentID</code> is set. Use 65535 or -1 to parent to the parent's position and orientation rather than a joint.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The URL of the web page to display.</p></td></tr>
</tbody></table></div>

### OverlayType {#OverlayType}

<div class="api-text" v-pre><p>An overlay may be one of the following types:</p>
 <table> <thead> <tr><th>Value</th><th>2D/3D</th><th>Description</th><th>Properties</th></tr>
 </thead>
 <tbody> <tr><td><code>"rectangle"</code></td><td>2D</td> <td>A rectangle.</td> <td><a href="#OverlayProperties-Rectangle">OverlayProperties-Rectangle</a></td></tr>
 <tr><td><code>"image"</code></td><td>2D</td> <td>An image.</td> <td><a href="#OverlayProperties-Image">OverlayProperties-Image</a></td></tr>
 <tr><td><code>"text"</code></td><td>2D</td> <td>Some text.</td> <td><a href="#OverlayProperties-Text">OverlayProperties-Text</a></td></tr>
 <tr><td><code>"cube"</code></td><td>3D</td> <td><p>A cube. A <code>"shape"</code> overlay can also be used to create a cube.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Cube">OverlayProperties-Cube</a></td></tr>
 <tr><td><code>"sphere"</code></td><td>3D</td> <td><p>A sphere. A <code>"shape"</code> overlay can also be used to create a sphere.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Sphere">OverlayProperties-Sphere</a></td></tr>
 <tr><td><code>"shape"</code></td><td>3D</td> <td><p>A geometric shape, such as a cube, sphere, or cylinder.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Shape">OverlayProperties-Shape</a></td></tr>
 <tr><td><code>"model"</code></td><td>3D</td> <td><p>A model.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Model">OverlayProperties-Model</a></td></tr>
 <tr><td><code>"image3d"</code></td><td>3D</td> <td><p>An image. Synonym: <code>"billboard"</code>.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Image3D">OverlayProperties-Image3D</a></td></tr>
 <tr><td><code>"rectangle3d"</code></td><td>3D</td> <td><p>A rectangle.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Rectangle3D">OverlayProperties-Rectangle3D</a></td></tr>
 <tr><td><code>"text3d"</code></td><td>3D</td> <td><p>Some text.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Text3D">OverlayProperties-Text3D</a></td></tr>
 <tr><td><code>"web3d"</code></td><td>3D</td> <td><p>Web content.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Web3D">OverlayProperties-Web3D</a></td></tr>
 <tr><td><code>"line3d"</code></td><td>3D</td> <td><p>A line.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Line3D">OverlayProperties-Line3D</a></td></tr>
 <tr><td><code>"grid"</code></td><td>3D</td> <td><p>A grid of lines in a plane.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Grid">OverlayProperties-Grid</a></td></tr>
 <tr><td><code>"circle3d"</code></td><td>3D</td> <td><p>A circle.</p>
 <p class="important">Deprecated.</p>
</td> <td><a href="#OverlayProperties-Circle3D">OverlayProperties-Circle3D</a></td></tr>
 </tbody>
 </table>
 <p>2D overlays are rendered on the display surface in desktop mode and on the HUD surface in HMD mode. 3D overlays are rendered at a position and orientation in-world.</p>
 <p class="important">3D overlays are deprecated. Use local <a href="Entities"><code>Entities</code></a> instead.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

### RayToOverlayIntersectionResult {#RayToOverlayIntersectionResult}

<div class="api-text" v-pre><p>The result of a <a href="globals#PickRay"><code>PickRay</code></a> search using <a href="#findRayIntersection">findRayIntersection</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>intersects</code></td><td>boolean</td><td><p><code>true</code> if the <a href="globals#PickRay"><code>PickRay</code></a> intersected with a 3D overlay, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>overlayID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The UUID of the local entity that was intersected.</p></td></tr>
<tr><td><code>distance</code></td><td>number</td><td><p>The distance from the <a href="globals#PickRay"><code>PickRay</code></a> origin to the intersection point.</p></td></tr>
<tr><td><code>surfaceNormal</code></td><td><a href="Vec3">Vec3</a></td><td><p>The normal of the overlay surface at the intersection point.</p></td></tr>
<tr><td><code>intersection</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of the intersection point.</p></td></tr>
<tr><td><code>extraInfo</code></td><td>object</td><td><p>Additional intersection details, if available.</p></td></tr>
</tbody></table></div>

### Shape {#Shape}

<div class="api-text" v-pre><p>A <code>"shape"</code> <a href="#OverlayType">OverlayType</a> may display as one of the following geometrical shapes:</p>
 <table> <thead> <tr><th>Value</th><th>Dimensions</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"Circle"</code></td><td>2D</td><td>A circle oriented in 3D.</td></tr>
 <tr><td><code>"Cone"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Cube"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Cylinder"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Dodecahedron"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Hexagon"</code></td><td>3D</td><td>A hexagonal prism.</td></tr>
 <tr><td><code>"Icosahedron"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Octagon"</code></td><td>3D</td><td>An octagonal prism.</td></tr>
 <tr><td><code>"Octahedron"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Quad"</code></td><td>2D</td><td>A square oriented in 3D.</td></tr>
 <tr><td><code>"Sphere"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Tetrahedron"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Torus"</code></td><td>3D</td><td><em>Not implemented.</em></td></tr>
 <tr><td><code>"Triangle"</code></td><td>3D</td><td>A triangular prism.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>
