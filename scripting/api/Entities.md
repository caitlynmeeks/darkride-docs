---
title: "Entities"
description: "The Entities API provides facilities to create and interact with entities."
---

# Entities

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Entities</code> API provides facilities to create and interact with entities. Entities are 2D or 3D objects displayed in-world. Depending on their <a href="Entities-types#EntityHostType">EntityHostType</a>, they may persist in the world as "domain" entities, travel to different worlds with a user as "avatar" entities, or be visible only to an individual user as "local" entities (a.k.a. "overlays").</p>
 <p>Note: For Darkride, avatar, and client entity scripts, the entities available to scripts are those that Darkride has displayed and so knows about. For assignment client scripts, the entities available are those that are "seen" by the <a href="EntityViewer"><code>EntityViewer</code></a>. For entity server scripts, all entities are available.</p>
 <h3>Entity Types and Properties</h3>
 <p>For a list of the entity types that you can use, see <a href="Entities-types#EntityType">Entity Types</a>.</p>
 <p>For the properties of the different entity types, see <a href="Entities-types#EntityProperties">Entity Properties</a>. Some properties are universal to all entity types, and some are specific to particular entity types.</p>
 <h3>Entity Methods</h3>
 <p>Some of the API's signals correspond to entity methods that are called, if present, in the entity being interacted with. The client or server entity script must expose them as a property. However, unlike <a href="#callEntityMethod"><code>Entities.callEntityMethod</code></a>, server entity scripts do not need to list them in an <code>remotelyCallable</code> property. The entity methods are called with parameters per their corresponding signal.</p>
 <table> <thead> <tr><th>Method Name</th><th>Corresponding Signal</th></tr>
 </thead>
 <tbody> <tr><td><code>clickDownOnEntity</code></td><td><a href="#clickDownOnEntity"><code>Entities.clickDownOnEntity</code></a></td></tr>
 <tr><td><code>clickReleaseOnEntity</code></td><td><a href="#clickReleaseOnEntity"><code>Entities.clickReleaseOnEntity</code></a></td></tr>
 <tr><td><code>collisionWithEntity</code></td><td><a href="#collisionWithEntity"><code>Entities.collisionWithEntity</code></a></td></tr>
 <tr><td><code>enterEntity</code></td><td><a href="#enterEntity"><code>Entities.enterEntity</code></a></td></tr>
 <tr><td><code>holdingClickOnEntity</code></td><td><a href="#holdingClickOnEntity"><code>Entities.holdingClickOnEntity</code></a></td></tr>
 <tr><td><code>hoverEnterEntity</code></td><td><a href="#hoverEnterEntity"><code>Entities.hoverEnterEntity</code></a></td></tr>
 <tr><td><code>hoverLeaveEntity</code></td><td><a href="#hoverLeaveEntity"><code>Entities.hoverLeaveEntity</code></a></td></tr>
 <tr><td><code>hoverOverEntity</code></td><td><a href="#hoverOverEntity"><code>Entities.hoverOverEntity</code></a></td></tr>
 <tr><td><code>leaveEntity</code></td><td><a href="#leaveEntity"><code>Entities.leaveEntity</code></a></td></tr>
 <tr><td><code>mouseDoublePressOnEntity</code></td><td><a href="#mouseDoublePressOnEntity"><code>Entities.mouseDoublePressOnEntity</code></a></td></tr>
 <tr><td><code>mouseMoveOnEntity</code></td><td><a href="#mouseMoveOnEntity"><code>Entities.mouseMoveOnEntity</code></a></td></tr>
 <tr><td><code>mouseMoveEvent</code></td><td><span class="important">Deprecated: Use <code>mouseMoveOnEntity</code> instead.</span></td></tr>
 <tr><td><code>mousePressOnEntity</code></td><td><a href="#mousePressOnEntity"><code>Entities.mousePressOnEntity</code></a></td></tr>
 <tr><td><code>mouseReleaseOnEntity</code></td><td><a href="#mouseReleaseOnEntity"><code>Entities.mouseReleaseOnEntity</code></a></td></tr>
 </tbody>
 </table>
 <p>See <a href="#clickDownOnEntity"><code>Entities.clickDownOnEntity</code></a> for an example.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>keyboardFocusEntity</code></td><td><a href="Uuid">Uuid</a></td><td><p>The <a href="Entities-types#EntityProperties-Web">Web</a> entity that has keyboard focus. If no Web entity has keyboard focus, returns <code>null</code>; set to <code>null</code> or <a href="Uuid">Uuid.NULL</a> to clear keyboard focus.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### AABoxIntersectsCapsule {#AABoxIntersectsCapsule}

```js
Entities.AABoxIntersectsCapsule(brn, dimensions, start, end, radius)
```

<div class="api-text" v-pre><p>Checks whether an axis-aligned box and a capsule intersect.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>brn</code></td><td><a href="Vec3">Vec3</a></td><td><p>The bottom right near (minimum axes values) corner of the AA box.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><p>The dimensions of the AA box.</p></td></tr>
<tr><td><code>start</code></td><td><a href="Vec3">Vec3</a></td><td><p>One end of the capsule.</p></td></tr>
<tr><td><code>end</code></td><td><a href="Vec3">Vec3</a></td><td><p>The other end of the capsule.</p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td><p>The radius of the capsule.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the AA box and capsule intersect, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### addAction {#addAction}

```js
Entities.addAction(actionType, entityID, arguments)
```

<div class="api-text" v-pre><p>Adds an action to an entity. An action is registered with the physics engine and is applied every physics simulation step. Any entity may have more than one action associated with it, but only as many as will fit in an entity's <code><a href="Entities-types#EntityProperties">actionData</a></code> property.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>actionType</code></td><td><a href="Entities-types#ActionType">Entities.ActionType</a></td><td><p>The type of action.</p></td></tr>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to add the action to.</p></td></tr>
<tr><td><code>arguments</code></td><td><a href="Entities-types#ActionArguments">Entities.ActionArguments</a></td><td><p>Configures the action.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the action if successfully added, otherwise <code>null</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Constrain a cube to move along a vertical line.</p></div>

```js
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    dynamic: true,
    collisionless: false,
    userData: "{ \"grabbableKey\": { \"grabbable\": true, \"kinematic\": false } }",
    lifetime: 300  // Delete after 5 minutes.
});

var actionID = Entities.addAction("slider", entityID, {
    axis: { x: 0, y: 1, z: 0 },
    linearLow: 0,
    linearHigh: 0.6
});
```

</div>

<div class="api-entry">

### addEntity {#addEntity}

```js
Entities.addEntity(properties, entityHostType?)
```

<div class="api-text" v-pre><p>Adds a new domain, avatar, or local entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="Entities-types#EntityProperties">Entities.EntityProperties</a></td><td></td><td><p>The properties of the entity to create.</p></td></tr>
<tr><td><code>entityHostType</code> <em>optional</em></td><td><a href="Entities-types#EntityHostType">Entities.EntityHostType</a></td><td><code>&quot;domain&quot;</code></td><td><p>The type of entity to create.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the entity if successfully created, otherwise <a href="Uuid">Uuid.NULL</a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a box domain entity in front of your avatar.</p></div>

```js
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});
print("Entity created: " + entityID);
```

</div>

<div class="api-entry">

### addEntity {#addEntity-2}

```js
Entities.addEntity(properties, avatarEntity?)
```

<div class="api-text" v-pre><p>Adds a new avatar entity (<code><a href="Entities-types#EntityProperties">entityHostType</a></code> property is <code>"avatar"</code>) or domain entity (<code><a href="Entities-types#EntityProperties">entityHostType</a></code> property is <code>"domain"</code>).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="Entities-types#EntityProperties">Entities.EntityProperties</a></td><td></td><td><p>The properties of the entity to create.</p></td></tr>
<tr><td><code>avatarEntity</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to create an avatar entity, <code>false</code> to create a domain entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the entity if successfully created, otherwise <a href="Uuid">Uuid.NULL</a>.</p></div>

</div>

<div class="api-entry">

### callEntityClientMethod {#callEntityClientMethod}

```js
Entities.callEntityClientMethod(clientSessionID, entityID, method, parameters?)
```

<div class="api-text" v-pre><p>Calls a method in a specific user's client entity script from a server entity script. The entity script method must be exposed as a property in the target client entity script. Additionally, the client entity script must include the method's name in an exposed property called <code>remotelyCallable</code> that is an array of method names that can be called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>clientSessionID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The session ID of the user to call the method in.</p></td></tr>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the entity to call the method in.</p></td></tr>
<tr><td><code>method</code></td><td>string</td><td></td><td><p>The name of the method to call. The method is called with the entity ID as the first parameter and the <code>parameters</code> value as the second parameter.</p></td></tr>
<tr><td><code>parameters</code> <em>optional</em></td><td>Array&lt;string&gt;</td><td><code>[]</code></td><td><p>The additional parameters to call the specified method with.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Call a method in a client entity script from a server entity script.</p></div>

```js
// Client entity script.
var clientEntityScript = (function () {
    this.entityMethod = function (id, params) {
        print("Method at client entity : " + id + " ; " + params[0] + ", " + params[1]);
    };
    this.remotelyCallable = [
        "entityMethod"
    ];
});

// Server entity script.
var serverEntityScript = (function () {
    var clientSessionID,
        clientEntityID;

    function callClientMethod() {
        // Server entity script call to client entity script.
        Entities.callEntityClientMethod(clientSessionID, clientEntityID, "entityMethod", ["hello", 12]);
    }

    // Obtain client entity details then call client entity method.
    this.entityMethod = function (id, params) {
        clientSessionID = params[0];
        clientEntityID = params[1];
        callClientMethod();
    };
    this.remotelyCallable = [
        "entityMethod"
    ];
});

// Entity that hosts the client entity script.
var clientEntityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -1, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    script: "(" + clientEntityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

// Entity that hosts the server entity script.
var serverEntityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 1, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    serverScripts: "(" + serverEntityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

// Interface script call to the server entity script.
Script.setTimeout(function () {
    Entities.callEntityServerMethod(serverEntityID, "entityMethod", [MyAvatar.sessionUUID, clientEntityID]);
}, 1000); // Wait for the entities to be created.
```

</div>

<div class="api-entry">

### callEntityMethod {#callEntityMethod}

```js
Entities.callEntityMethod(entityID, method, parameters?)
```

<div class="api-text" v-pre><p>Calls a method in a client entity script from a Darkride, avatar, or client entity script, or calls a method in a server entity script from a server entity script. The entity script method must be exposed as a property in the target entity script. Additionally, if calling a server entity script, the server entity script must include the method's name in an exposed property called <code>remotelyCallable</code> that is an array of method names that can be called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the entity to call the method in.</p></td></tr>
<tr><td><code>method</code></td><td>string</td><td></td><td><p>The name of the method to call. The method is called with the entity ID as the first parameter and the <code>parameters</code> value as the second parameter.</p></td></tr>
<tr><td><code>parameters</code> <em>optional</em></td><td>Array&lt;string&gt;</td><td><code>[]</code></td><td><p>The additional parameters to call the specified method with.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Call a method in a client entity script from a client script.</p></div>

```js
// Client entity script.
var entityScript = (function () {
    this.entityMethod = function (id, params) {
        print("Method at entity : " + id + " ; " + params[0] + ", " + params[1]);
    };
});

// Entity that hosts the client entity script.
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

// Interface script call to the client entity script.
Script.setTimeout(function () {
    Entities.callEntityMethod(entityID, "entityMethod", ["hello", 12]);
}, 1000); // Wait for the entity to be created.
```

</div>

<div class="api-entry">

### callEntityServerMethod {#callEntityServerMethod}

```js
Entities.callEntityServerMethod(entityID, method, parameters?)
```

<div class="api-text" v-pre><p>Calls a method in a server entity script from a Darkride, avatar, or client entity script. The server entity script method must be exposed as a property in the target server entity script. Additionally, the server entity script must include the method's name in an exposed property called <code>remotelyCallable</code> that is an array of method names that can be called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the entity to call the method in.</p></td></tr>
<tr><td><code>method</code></td><td>string</td><td></td><td><p>The name of the method to call. The method is called with the entity ID as the first parameter and the <code>parameters</code> value as the second parameter.</p></td></tr>
<tr><td><code>parameters</code> <em>optional</em></td><td>Array&lt;string&gt;</td><td><code>[]</code></td><td><p>The additional parameters to call the specified method with.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Call a method in a server entity script from a client script.</p></div>

```js
// Server entity script.
var entityScript = (function () {
    this.entityMethod = function (id, params) {
        print("Method at entity : " + id + " ; " + params[0] + ", " + params[1]); // In server log.
    };
    this.remotelyCallable = [
        "entityMethod"
    ];
});

// Entity that hosts the server entity script.
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    serverScripts: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

// Interface script call to the server entity script.
Script.setTimeout(function () {
    Entities.callEntityServerMethod(entityID, "entityMethod", ["hello", 12]);
}, 1000); // Wait for the entity to be created.
```

</div>

<div class="api-entry">

### canAdjustLocks {#canAdjustLocks}

```js
Entities.canAdjustLocks()
```

<div class="api-text" v-pre><p>Checks whether or not the script can change the <code>locked</code> property of entities. Locked entities have their <code>locked</code> property set to <code>true</code> and cannot be edited or deleted.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server will allow the script to change the <code>locked</code> property of entities, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Lock an entity if you can.</p></div>

```js
if (Entities.canAdjustLocks()) {
    Entities.editEntity(entityID, { locked: true });
} else {
    Window.alert("You do not have the permissions to set an entity locked!");
}
```

</div>

<div class="api-entry">

### canGetAndSetPrivateUserData {#canGetAndSetPrivateUserData}

```js
Entities.canGetAndSetPrivateUserData()
```

<div class="api-text" v-pre><p>Checks whether or not the script can get and set the <code>privateUserData</code> property of entities.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server will allow the script to get and set the <code>privateUserData</code> property of entities, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### canReplaceContent {#canReplaceContent}

```js
Entities.canReplaceContent()
```

<div class="api-text" v-pre><p>Checks whether or not the script can replace the world's content set.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server will allow the script to replace the world's content set, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### canRez {#canRez}

```js
Entities.canRez()
```

<div class="api-text" v-pre><p>Checks whether or not the script can rez (create) new entities in the world.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server will allow the script to rez (create) new entities, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### canRezTmp {#canRezTmp}

```js
Entities.canRezTmp()
```

<div class="api-text" v-pre><p>Checks whether or not the script can rez (create) new temporary entities in the world. Temporary entities are entities with a finite <code>lifetime</code> property value set.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server will allow the script to rez (create) new temporary entities, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### canWriteAssets {#canWriteAssets}

```js
Entities.canWriteAssets()
```

<div class="api-text" v-pre><p>Checks whether or not the script can make changes to the asset server's assets.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server will allow the script to make changes to the asset server's assets, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### clearVehicleControls {#clearVehicleControls}

```js
Entities.clearVehicleControls(entityID)
```

<div class="api-text" v-pre><p>Stops driving a vehicle: this client's controls for it are forgotten.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The vehicle.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### cloneEntity {#cloneEntity}

```js
Entities.cloneEntity(entityID)
```

<div class="api-text" v-pre><p>Creates a clone of an entity. The clone has the same properties as the original except that: it has a modified <code>name</code> property, clone-related properties are set per the original entity's clone-related <a href="Entities-types#EntityProperties">properties</a> (e.g., <code>cloneLifetime</code>), and its clone-related properties are set to their defaults. </p>
<p>Domain entities must have their <code>cloneable</code> property value be <code>true</code> in order to be cloned. A domain entity can be cloned by a client that doesn't have rez permissions in the world.</p>
 <p>Avatar entities must have their <code>cloneable</code> and <code>cloneAvatarEntity</code> property values be <code>true</code> in order to be cloned.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to clone.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the new entity if successfully cloned, otherwise <a href="Uuid">Uuid.NULL</a>.</p></div>

</div>

<div class="api-entry">

### deleteAction {#deleteAction}

```js
Entities.deleteAction(entityID, actionID)
```

<div class="api-text" v-pre><p>Deletes an action from an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of entity to delete the action from.</p></td></tr>
<tr><td><code>actionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the action to delete.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the delete was successful, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### deleteEntity {#deleteEntity}

```js
Entities.deleteEntity(entityID)
```

<div class="api-text" v-pre><p>Deletes an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to delete.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Delete an entity a few seconds after creating it.</p></div>

```js
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 }
});

Script.setTimeout(function () {
    Entities.deleteEntity(entityID);
}, 3000);
```

</div>

<div class="api-entry">

### dumpTree {#dumpTree}

```js
Entities.dumpTree()
```

<div class="api-text" v-pre><p>Dumps debug information about all entities in Darkride's local in-memory tree of entities it knows about to the program log.</p></div>

</div>

<div class="api-entry">

### editEntity {#editEntity}

```js
Entities.editEntity(entityID, properties)
```

<div class="api-text" v-pre><p>Edits an entity, changing one or more of its property values.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to edit.</p></td></tr>
<tr><td><code>properties</code></td><td><a href="Entities-types#EntityProperties">Entities.EntityProperties</a></td><td><p>The new property values.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the entity if the edit was successful, otherwise <code>null</code> or <a href="Uuid">Uuid.NULL</a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Change the color of an entity.</p></div>

```js
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});
var properties = Entities.getEntityProperties(entityID, ["color"]);
print("Entity color: " + JSON.stringify(properties.color));

Script.setTimeout(function () { // Wait for the entity to be created before editing.
    Entities.editEntity(entityID, {
        color: { red: 255, green: 0, blue: 0 }
    });
    properties = Entities.getEntityProperties(entityID, ["color"]);
    print("Entity color: " + JSON.stringify(properties.color));
}, 50);
```

</div>

<div class="api-entry">

### emitScriptEvent {#emitScriptEvent}

```js
Entities.emitScriptEvent(entityID, message)
```

<div class="api-text" v-pre><p>Sends a message to a <a href="Entities-types#EntityProperties-Web">Web</a> entity's HTML page. To receive the message, the web page's script must connect to the <code>EventBridge</code> that is automatically provided to the script: </p>
<pre class="prettyprint"><code>EventBridge.scriptEventReceived.connect(function(message) {&#10;    ...&#10;});</code></pre>
 <p>Use <a href="#webEventReceived"><code>Entities.webEventReceived</code></a> to receive messages from the Web entity's HTML page.</p>
 <p>Alternatively, you can use <a href="#getEntityObject"><code>Entities.getEntityObject</code></a> to exchange messages over a Web entity's HTML event bridge.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the Web entity to send the message to.</p></td></tr>
<tr><td><code>message</code></td><td>string</td><td><p>The message to send.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Exchange messages with a Web entity.</p></div>

```js
// HTML file, name: "webEntity.html".
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

        setTimeout(function () {
            // Send a message to the script.
            EventBridge.emitWebEvent("hello");
        }, 5000);
    </script>
</body>
</html>

// Script file.
var webEntity = Entities.addEntity({
    type: "Web",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -3 })),
    rotation: MyAvatar.orientation,
    sourceUrl: Script.resolvePath("webEntity.html"),
    alpha: 1.0,
    lifetime: 300  // 5 min
});

function onWebEventReceived(entityID, message) {
    if (entityID === webEntity) {
        // Message received.
        print("Message received: " + message);

        // Send a message back.
        Entities.emitScriptEvent(webEntity, message + " back");
    }
}

Entities.webEventReceived.connect(onWebEventReceived);
```

</div>

<div class="api-entry">

### findClosestEntity {#findClosestEntity}

```js
Entities.findClosestEntity(center, radius)
```

<div class="api-text" v-pre><p>Finds the domain or avatar entity with a position closest to a specified point and within a specified radius.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>center</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point about which to search.</p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td><p>The radius within which to search.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the entity that is closest to the <code>center</code> and within the <code>radius</code>, if there is one, otherwise <code>null</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Find the closest entity within 10m of your avatar.</p></div>

```js
var entityID = Entities.findClosestEntity(MyAvatar.position, 10);
print("Closest entity: " + entityID);
```

</div>

<div class="api-entry">

### findEntities {#findEntities}

```js
Entities.findEntities(center, radius)
```

<div class="api-text" v-pre><p>Finds all world and avatar entities that intersect a sphere. </p>
<p><strong>Note:</strong> Server entity scripts only find entities that have a server entity script running in them or a parent entity. You can apply a dummy script to entities that you want found in a search.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>center</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point about which to search.</p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td><p>The radius within which to search.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>An array of entity IDs that intersect the search sphere. The array is empty if no entities could be found.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report how many entities are within 10m of your avatar.</p></div>

```js
var entityIDs = Entities.findEntities(MyAvatar.position, 10);
print("Number of entities within 10m: " + entityIDs.length);
```

</div>

<div class="api-entry">

### findEntitiesByName {#findEntitiesByName}

```js
Entities.findEntitiesByName(entityName, center, radius, caseSensitive?)
```

<div class="api-text" v-pre><p>Finds all world and avatar entities with a particular name that intersect a sphere. </p>
<p><strong>Note:</strong> Server entity scripts only find entities that have a server entity script running in them or a parent entity. You can apply a dummy script to entities that you want found in a search.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityName</code></td><td>string</td><td></td><td><p>The name of the entity to search for.</p></td></tr>
<tr><td><code>center</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The point about which to search.</p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td></td><td><p>The radius within which to search.</p></td></tr>
<tr><td><code>caseSensitive</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the search is case-sensitive, <code>false</code> if it is case-insensitive.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>An array of entity IDs that have the specified name and intersect the search sphere. The array is empty if no entities could be found.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the number of entities with the name, "Light-Target".</p></div>

```js
var entityIDs = Entities.findEntitiesByName("Light-Target", MyAvatar.position, 10, false);
print("Number of entities with the name Light-Target: " + entityIDs.length);
```

</div>

<div class="api-entry">

### findEntitiesByType {#findEntitiesByType}

```js
Entities.findEntitiesByType(entityType, center, radius)
```

<div class="api-text" v-pre><p>Finds all world and avatar entities of a particular type that intersect a sphere. </p>
<p><strong>Note:</strong> Server entity scripts only find entities that have a server entity script running in them or a parent entity. You can apply a dummy script to entities that you want found in a search.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityType</code></td><td><a href="Entities-types#EntityType">Entities.EntityType</a></td><td><p>The type of entity to search for.</p></td></tr>
<tr><td><code>center</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point about which to search.</p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td><p>The radius within which to search.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>An array of entity IDs of the specified type that intersect the search sphere. The array is empty if no entities could be found.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the number of Model entities within 10m of your avatar.</p></div>

```js
var entityIDs = Entities.findEntitiesByType("Model", MyAvatar.position, 10);
print("Number of Model entities within 10m: " + entityIDs.length);
```

</div>

<div class="api-entry">

### findEntitiesInBox {#findEntitiesInBox}

```js
Entities.findEntitiesInBox(corner, dimensions)
```

<div class="api-text" v-pre><p>Finds all world and avatar entities whose axis-aligned boxes intersect a search axis-aligned box. </p>
<p><strong>Note:</strong> Server entity scripts only find entities that have a server entity script running in them or a parent entity. You can apply a dummy script to entities that you want found in a search.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>corner</code></td><td><a href="Vec3">Vec3</a></td><td><p>The corner of the search AA box with minimum co-ordinate values.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><p>The dimensions of the search AA box.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>An array of entity IDs whose AA boxes intersect the search AA box. The array is empty if no entities could be found.</p></div>

</div>

<div class="api-entry">

### findEntitiesInFrustum {#findEntitiesInFrustum}

```js
Entities.findEntitiesInFrustum(frustum)
```

<div class="api-text" v-pre><p>Finds all world and avatar entities whose axis-aligned boxes intersect a search frustum. </p>
<p><strong>Note:</strong> Server entity scripts only find entities that have a server entity script running in them or a parent entity. You can apply a dummy script to entities that you want found in a search.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>frustum</code></td><td><a href="globals#ViewFrustum">ViewFrustum</a></td><td><p>The frustum to search in. The <code>position</code>, <code>orientation</code>, <code>projection</code>, and <code>centerRadius</code> properties must be specified. The <code>fieldOfView</code> and <code>aspectRatio</code> properties are not used; these values are specified by the <code>projection</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>An array of entity IDs whose axis-aligned boxes intersect the search frustum. The array is empty if no entities could be found.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the number of entities in view.</p></div>

```js
var entityIDs = Entities.findEntitiesInFrustum(Camera.frustum);
print("Number of entities in view: " + entityIDs.length);
```

</div>

<div class="api-entry">

### findRayIntersection {#findRayIntersection}

```js
Entities.findRayIntersection(pickRay, precisionPicking?, entitiesToInclude?, entitiesToDiscard?, visibleOnly?, collideableOnly?)
```

<div class="api-text" v-pre><p>Finds the first avatar or domain entity intersected by a <a href="globals#PickRay"><code>PickRay</code></a>. <code>Light</code> and <code>Zone</code> entities are not intersected unless they've been configured as pickable using <a href="#setLightsArePickable">setLightsArePickable</a> and <a href="#setZonesArePickable">setZonesArePickable</a>, respectively.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pickRay</code></td><td><a href="globals#PickRay">PickRay</a></td><td></td><td><p>The pick ray to use for finding entities.</p></td></tr>
<tr><td><code>precisionPicking</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to pick against precise meshes, <code>false</code> to pick against coarse meshes. If <code>true</code> and the intersected entity is a <code>Model</code> entity, the result's <code>extraInfo</code> property includes more information than it otherwise would.</p></td></tr>
<tr><td><code>entitiesToInclude</code> <em>optional</em></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><code>[]</code></td><td><p>If not empty, then the search is restricted to these entities.</p></td></tr>
<tr><td><code>entitiesToDiscard</code> <em>optional</em></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><code>[]</code></td><td><p>Entities to ignore during the search.</p></td></tr>
<tr><td><code>visibleOnly</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if only entities that are <code><a href="Entities-types#EntityProperties">visible</a></code> are searched for, <code>false</code> if their visibility doesn't matter.</p></td></tr>
<tr><td><code>collideableOnly</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if only entities that are not <code><a href="Entities-types#EntityProperties">collisionless</a></code> are searched, <code>false</code> if their collideability doesn't matter.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Entities-types#RayToEntityIntersectionResult">Entities.RayToEntityIntersectionResult</a> <p>The result of the search for the first intersected entity.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Find the entity directly in front of your avatar.</p></div>

```js
var pickRay = {
    origin: MyAvatar.position,
    direction: Quat.getFront(MyAvatar.orientation)
};

var intersection = Entities.findRayIntersection(pickRay, true);
if (intersection.intersects) {
    print("Entity in front of avatar: " + intersection.entityID);
} else {
    print("No entity in front of avatar.");
}
```

</div>

<div class="api-entry">

### getAbsoluteJointRotationInObjectFrame {#getAbsoluteJointRotationInObjectFrame}

```js
Entities.getAbsoluteJointRotationInObjectFrame(entityID, jointIndex)
```

<div class="api-text" v-pre><p>Gets the rotation of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity relative to the entity's position and orientation.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation of the joint relative to the entity's orientation if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, and the joint index is valid; otherwise <code><a href="Quat">Quat.IDENTITY</a></code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Compare the local and absolute rotations of an avatar model's left hand joint.</p></div>

```js
entityID = Entities.addEntity({
    type: "Model",
    modelURL: "https://github.com/highfidelity/hifi-api-docs/blob/master/docs/blue_suited.fbx?raw=true",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    // Joint data aren't available until after the model has loaded.
    var index = Entities.getJointIndex(entityID, "LeftHand");
    var localRotation = Entities.getLocalJointRotation(entityID, index);
    var absoluteRotation = Entities.getAbsoluteJointRotationInObjectFrame(entityID, index);
    print("Left hand local rotation: " + JSON.stringify(Quat.safeEulerAngles(localRotation)));
    print("Left hand absolute rotation: " + JSON.stringify(Quat.safeEulerAngles(absoluteRotation)));
}, 2000);
```

</div>

<div class="api-entry">

### getAbsoluteJointTranslationInObjectFrame {#getAbsoluteJointTranslationInObjectFrame}

```js
Entities.getAbsoluteJointTranslationInObjectFrame(entityID, jointIndex)
```

<div class="api-text" v-pre><p>Gets the translation of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity relative to the entity's position and orientation.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The translation of the joint relative to the entity's position and orientation if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, and the joint index is valid; otherwise <code><a href="Vec3">Vec3.ZERO</a></code>.</p></div>

</div>

<div class="api-entry">

### getActionArguments {#getActionArguments}

```js
Entities.getActionArguments(entityID, actionID)
```

<div class="api-text" v-pre><p>Gets the arguments of an action.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity with the action.</p></td></tr>
<tr><td><code>actionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the action to get the arguments of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Entities-types#ActionArguments">Entities.ActionArguments</a> <p>The arguments of the action if found, otherwise an empty object.</p></div>

</div>

<div class="api-entry">

### getActionIDs {#getActionIDs}

```js
Entities.getActionIDs(entityID)
```

<div class="api-text" v-pre><p>Gets the IDs of the actions that are associated with an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity to get the action IDs for.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>The action IDs if any are found, otherwise an empty array.</p></div>

</div>

<div class="api-entry">

### getChildrenIDs {#getChildrenIDs}

```js
Entities.getChildrenIDs(parentID)
```

<div class="api-text" v-pre><p>Gets the IDs of entities and avatars that are directly parented to an entity or avatar model. To get all descendants, you can recurse on the IDs returned.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity or avatar to get the children IDs of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>An array of entity and avatar IDs that are parented directly to the <code>parentID</code> entity or avatar. Does not include children's children, etc. The array is empty if no children can be found or <code>parentID</code> cannot be found.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the children of an entity.</p></div>

```js
function createEntity(description, position, parent) {
    var entity = Entities.addEntity({
        type: "Sphere",
        position: position,
        dimensions: Vec3.HALF,
        parentID: parent,
        lifetime: 300  // Delete after 5 minutes.
    });
    print(description + ": " + entity);
    return entity;
}

var position = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 2, z: -5 }));
var root = createEntity("Root", position, Uuid.NULL);
var child = createEntity("Child", Vec3.sum(position, { x: 0, y: -1, z: 0 }), root);
var grandChild = createEntity("Grandchild", Vec3.sum(position, { x: 0, y: -2, z: 0 }), child);

var children = Entities.getChildrenIDs(root);
print("Children of root: " + JSON.stringify(children));  // Only the child entity.
```

</div>

<div class="api-entry">

### getChildrenIDsOfJoint {#getChildrenIDsOfJoint}

```js
Entities.getChildrenIDsOfJoint(parentID, jointIndex)
```

<div class="api-text" v-pre><p>Gets the IDs of entities and avatars that are directly parented to an entity or avatar model's joint. To get all descendants, you can use <a href="#getChildrenIDs">getChildrenIDs</a> to recurse on the IDs returned.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity or avatar to get the children IDs of.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>Integer number of the model joint to get the children IDs of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>An array of entity and avatar IDs that are parented directly to the <code>parentID</code> entity or avatar at the <code>jointIndex</code> joint. Does not include children's children, etc. The array is empty if no children can be found or <code>parentID</code> cannot be found.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the children of your avatar's right hand.</p></div>

```js
function createEntity(description, position, parent) {
    var entity = Entities.addEntity({
        type: "Sphere",
        position: position,
        dimensions: Vec3.HALF,
        parentID: parent,
        lifetime: 300  // Delete after 5 minutes.
    });
    print(description + ": " + entity);
    return entity;
}

var position = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 2, z: -5 }));
var root = createEntity("Root", position, Uuid.NULL);
var child = createEntity("Child", Vec3.sum(position, { x: 0, y: -1, z: 0 }), root);

Script.setTimeout(function () { // Wait for the entity to be created before editing.
    Entities.editEntity(root, {
        parentID: MyAvatar.sessionUUID,
        parentJointIndex: MyAvatar.getJointIndex("RightHand")
    });

    var children = Entities.getChildrenIDsOfJoint(MyAvatar.sessionUUID, MyAvatar.getJointIndex("RightHand"));
    print("Children of hand: " + JSON.stringify(children));  // Only the root entity.
}, 50);
```

</div>

<div class="api-entry">

### getDrawZoneBoundaries {#getDrawZoneBoundaries}

```js
Entities.getDrawZoneBoundaries()
```

<div class="api-text" v-pre><p>Gets whether or not <a href="Entities-types#EntityProperties-Zone">Zone</a> entities' boundaries should be drawn. <em>Currently not used.</em></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if <a href="Entities-types#EntityProperties-Zone">Zone</a> entities' boundaries should be drawn, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### getEntityLocalTransform {#getEntityLocalTransform}

```js
Entities.getEntityLocalTransform(entityID)
```

<div class="api-text" v-pre><p>Gets the object to parent transform, excluding scale, of an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Mat4">Mat4</a> <p>The entity's object to parent transform excluding scale (i.e., translation and rotation, with scale of 1) if the entity can be found, otherwise a transform with zero translation and rotation and a scale of 1. If the entity doesn't have a parent, its world transform is returned.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Position and rotation in an entity's local transform.</p></div>

```js
function createEntity(position, rotation, parent) {
    var entity = Entities.addEntity({
        type: "Box",
        position: position,
        rotation: rotation,
        dimensions: Vec3.HALF,
        parentID: parent,
        lifetime: 300  // Delete after 5 minutes.
    });
    return entity;
}

var position = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 2, z: -5 }));

var parent = createEntity(position, MyAvatar.orientation, Uuid.NULL);

var childTranslation = { x: 0, y: -1.5, z: 0 };
var childRotation = Quat.fromPitchYawRollDegrees(0, 45, 0);
var child = createEntity(Vec3.sum(position, childTranslation), Quat.multiply(childRotation, MyAvatar.orientation), parent);

var transform = Entities.getEntityLocalTransform(child);
print("Transform: " + JSON.stringify(transform));
print("Translation: " + JSON.stringify(Mat4.extractTranslation(transform)));  // childTranslation
print("Rotation: " + JSON.stringify(Quat.safeEulerAngles(Mat4.extractRotation(transform))));  // childRotation
print("Scale: " + JSON.stringify(Mat4.extractScale(transform)));  // { x: 1, y: 1, z: 1 }
```

</div>

<div class="api-entry">

### getEntityObject {#getEntityObject}

```js
Entities.getEntityObject(id)
```

<div class="api-text" v-pre><p>Gets an entity's script object. In particular, this is useful for accessing a <a href="Entities-types#EntityProperties-Web">Web</a> entity's HTML <code>EventBridge</code> script object to exchange messages with the web page script. </p>
<p>To send a message from a client script to a Web entity over its event bridge:</p>
 <pre class="prettyprint"><code>var entityObject = Entities.getEntityObject(entityID);&#10;entityObject.emitScriptEvent(message);</code></pre>
 <p>To receive a message from a Web entity over its event bridge in a client script:</p>
 <pre class="prettyprint"><code>var entityObject = Entities.getentityObject(entityID);&#10;entityObject.webEventReceived.connect(function(message) {&#10;    ...&#10;};</code></pre>
 <p>Alternatively, you can use <a href="#emitScriptEvent"><code>Entities.emitScriptEvent</code></a> and <a href="#webEventReceived"><code>Entities.webEventReceived</code></a> to exchange messages with a Web entity over its event bridge.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to get the script object for.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The script object for the entity if found.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Exchange messages with a Web entity.</p></div>

```js
// HTML file, name: "webEntity.html".
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
   
        setTimeout(function () {
            // Send a message to the script.
            EventBridge.emitWebEvent("hello");
        }, 5000);
    </script>
</body>
</html>

// Interface script file.
var webEntity = Entities.addEntity({
    type: "Web",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -3 })),
    rotation: MyAvatar.orientation,
    sourceUrl: Script.resolvePath("webEntity.html"),
    alpha: 1.0,
    lifetime: 300  // 5 min
});

var webEntityObject;

function onWebEventReceived(message) {
    // Message received.
    print("Message received: " + message);

    // Send a message back.
    webEntityObject.emitScriptEvent(message + " back");
}

Script.setTimeout(function () {
    webEntityObject = Entities.getEntityObject(webEntity);
    webEntityObject.webEventReceived.connect(onWebEventReceived);
}, 500);

Script.scriptEnding.connect(function () {
    Entities.deleteEntity(webEntity);
});
```

</div>

<div class="api-entry">

### getEntityProperties {#getEntityProperties}

```js
Entities.getEntityProperties(entityID, desiredProperties?)
```

<div class="api-text" v-pre><p>Gets an entity's property values.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the entity to get the properties of.</p></td></tr>
<tr><td><code>desiredProperties</code> <em>optional</em></td><td>string | Array&lt;string&gt;</td><td><code>[]</code></td><td><p>The name or names of the properties to get. For properties that are objects (e.g., the <code>"keyLight"</code> property), use the property and subproperty names in dot notation (e.g., <code>"keyLight.color"</code>).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Entities-types#EntityProperties">Entities.EntityProperties</a> <p>The specified properties of the entity if the entity can be found, otherwise an empty object. If no properties are specified, then all properties are returned.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the color of a new box entity.</p></div>

```js
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});
var properties = Entities.getEntityProperties(entityID, ["color"]);
print("Entity color: " + JSON.stringify(properties.color));
```

</div>

<div class="api-entry">

### getEntityTransform {#getEntityTransform}

```js
Entities.getEntityTransform(entityID)
```

<div class="api-text" v-pre><p>Gets the object to world transform, excluding scale, of an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Mat4">Mat4</a> <p>The entity's object to world transform excluding scale (i.e., translation and rotation, with scale of 1) if the entity can be found, otherwise a transform with zero translation and rotation and a scale of 1.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Position and rotation in an entity's world transform.</p></div>

```js
var position = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 1, z: -2 }));
var orientation = MyAvatar.orientation;
print("Position: " + JSON.stringify(position));
print("Orientation: " + JSON.stringify(orientation));

var entityID = Entities.addEntity({
    type: "Sphere",
    position: position,
    rotation: orientation,
    dimensions: Vec3.HALF,
    lifetime: 300  // Delete after 5 minutes.
});

var transform = Entities.getEntityTransform(entityID);
print("Transform: " + JSON.stringify(transform));
print("Translation: " + JSON.stringify(Mat4.extractTranslation(transform)));  // Same as position.
print("Rotation: " + JSON.stringify(Mat4.extractRotation(transform)));  // Same as orientation.
print("Scale: " + JSON.stringify(Mat4.extractScale(transform)));  // { x: 1, y: 1, z: 1 }
```

</div>

<div class="api-entry">

### getEntityType {#getEntityType}

```js
Entities.getEntityType(id)
```

<div class="api-text" v-pre><p>Gets an entity's type.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to get the type of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Entities-types#EntityType">Entities.EntityType</a> <p>The type of the entity.</p></div>

</div>

<div class="api-entry">

### getJointIndex {#getJointIndex}

```js
Entities.getJointIndex(entityID, name)
```

<div class="api-text" v-pre><p>Gets the index of a named joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The integer index of the joint if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, and the joint is present; otherwise <code>-1</code>. The joint indexes are in order per <a href="#getJointNames">getJointNames</a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the index of a model's head joint.</p></div>

```js
entityID = Entities.addEntity({
    type: "Model",
    modelURL: "https://github.com/highfidelity/hifi-api-docs/blob/master/docs/blue_suited.fbx?raw=true",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    // Joint data aren't available until after the model has loaded.
    var index = Entities.getJointIndex(entityID, "Head");
    print("Head joint index: " + index);
}, 2000);
```

</div>

<div class="api-entry">

### getJointNames {#getJointNames}

```js
Entities.getJointNames(entityID)
```

<div class="api-text" v-pre><p>Gets the names of all the joints in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of all the joints in the entity if it is a <a href="Entities-types#EntityProperties-Model">Model</a> entity and is loaded, otherwise an empty array. The joint names are in order per <a href="#getJointIndex">getJointIndex</a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report a model's joint names.</p></div>

```js
entityID = Entities.addEntity({
    type: "Model",
    modelURL: "https://github.com/highfidelity/hifi-api-docs/blob/master/docs/blue_suited.fbx?raw=true",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    // Joint data aren't available until after the model has loaded.
    var jointNames = Entities.getJointNames(entityID);
    print("Joint names: " + JSON.stringify(jointNames));
}, 2000);
```

</div>

<div class="api-entry">

### getJointParent {#getJointParent}

```js
Entities.getJointParent(entityID, index)
```

<div class="api-text" v-pre><p>Gets the index of the parent joint of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>index</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The index of the parent joint if found, otherwise <code>-1</code>.</p></div>

</div>

<div class="api-entry">

### getKeyboardFocusEntity {#getKeyboardFocusEntity}

```js
Entities.getKeyboardFocusEntity()
```

<div class="api-text" v-pre><p>Gets the ID of the <a href="Entities-types#EntityProperties-Web">Web</a> entity that has keyboard focus.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the <a href="Entities-types#EntityProperties-Web">Web</a> entity that has focus, if any, otherwise <code>null</code>.</p></div>

</div>

<div class="api-entry">

### getLifetimeBPS {#getLifetimeBPS}

```js
Entities.getLifetimeBPS()
```

<div class="api-text" v-pre><p>Gets the entity bytes per second send rate of the client over its lifetime.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Entity bytes per second send rate of the client over its lifetime.</p></div>

</div>

<div class="api-entry">

### getLifetimeBPSQueued {#getLifetimeBPSQueued}

```js
Entities.getLifetimeBPSQueued()
```

<div class="api-text" v-pre><p>Gets the entity bytes per second queued rate of the client over its lifetime.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Entity bytes per second queued rate of the client over its lifetime.</p></div>

</div>

<div class="api-entry">

### getLifetimeBytesQueued {#getLifetimeBytesQueued}

```js
Entities.getLifetimeBytesQueued()
```

<div class="api-text" v-pre><p>Gets the total bytes of entity packets queued by the client over its lifetime.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The total bytes of entity packets queued by the client over its lifetime.</p></div>

</div>

<div class="api-entry">

### getLifetimeBytesSent {#getLifetimeBytesSent}

```js
Entities.getLifetimeBytesSent()
```

<div class="api-text" v-pre><p>Gets the total bytes of entity packets sent by the client over its lifetime.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The total bytes of entity packets sent by the client over its lifetime.</p></div>

</div>

<div class="api-entry">

### getLifetimeInSeconds {#getLifetimeInSeconds}

```js
Entities.getLifetimeInSeconds()
```

<div class="api-text" v-pre><p>Gets the lifetime of the client from the first entity packet sent until now, in seconds.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Lifetime of the client from the first entity packet sent until now, in seconds.</p></div>

</div>

<div class="api-entry">

### getLifetimeInUsecs {#getLifetimeInUsecs}

```js
Entities.getLifetimeInUsecs()
```

<div class="api-text" v-pre><p>Gets the lifetime of the client from the first entity packet sent until now, in microseconds.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Lifetime of the client from the first entity packet sent until now, in microseconds.</p></div>

</div>

<div class="api-entry">

### getLifetimePacketsQueued {#getLifetimePacketsQueued}

```js
Entities.getLifetimePacketsQueued()
```

<div class="api-text" v-pre><p>Gets the total number of entity packets queued by the client over its lifetime.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The total number of entity packets queued by the client over its lifetime.</p></div>

</div>

<div class="api-entry">

### getLifetimePacketsSent {#getLifetimePacketsSent}

```js
Entities.getLifetimePacketsSent()
```

<div class="api-text" v-pre><p>Gets the total number of entity packets sent by the client over its lifetime.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The total number of entity packets sent by the client over its lifetime.</p></div>

</div>

<div class="api-entry">

### getLifetimePPS {#getLifetimePPS}

```js
Entities.getLifetimePPS()
```

<div class="api-text" v-pre><p>Gets the entity packets per second send rate of the client over its lifetime.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Entity packets per second send rate of the client over its lifetime.</p></div>

</div>

<div class="api-entry">

### getLifetimePPSQueued {#getLifetimePPSQueued}

```js
Entities.getLifetimePPSQueued()
```

<div class="api-text" v-pre><p>Gets the entity packets per second queued rate of the client over its lifetime.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Entity packets per second queued rate of the client over its lifetime.</p></div>

</div>

<div class="api-entry">

### getLightsArePickable {#getLightsArePickable}

```js
Entities.getLightsArePickable()
```

<div class="api-text" v-pre><p>Gets whether or not ray picks intersect the bounding box of <a href="Entities-types#EntityProperties-Light">Light</a> entities. Ray picks are performed using <a href="#findRayIntersection">findRayIntersection</a>, or the <a href="Picks"><code>Picks</code></a> API.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if ray picks intersect the bounding box of <a href="Entities-types#EntityProperties-Light">Light</a> entities, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### getLocalJointRotation {#getLocalJointRotation}

```js
Entities.getLocalJointRotation(entityID, jointIndex)
```

<div class="api-text" v-pre><p>Gets the local rotation of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The local rotation of the joint if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, and the joint index is valid; otherwise <code><a href="Quat">Quat.IDENTITY</a></code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the local rotation of an avatar model's head joint.</p></div>

```js
entityID = Entities.addEntity({
    type: "Model",
    modelURL: "https://github.com/highfidelity/hifi-api-docs/blob/master/docs/blue_suited.fbx?raw=true",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    // Joint data aren't available until after the model has loaded.
    var index = Entities.getJointIndex(entityID, "Head");
    var rotation = Entities.getLocalJointRotation(entityID,  index);
    print("Head local rotation: " + JSON.stringify(Quat.safeEulerAngles(rotation)));
}, 2000);
```

</div>

<div class="api-entry">

### getLocalJointTranslation {#getLocalJointTranslation}

```js
Entities.getLocalJointTranslation(entityID, jointIndex)
```

<div class="api-text" v-pre><p>Gets the local translation of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The local translation of the joint if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, and the joint index is valid; otherwise <code><a href="Vec3">Vec3.ZERO</a></code>.</p></div>

</div>

<div class="api-entry">

### getModelExtras {#getModelExtras}

```js
Entities.getModelExtras(entityID)
```

<div class="api-text" v-pre><p>Gets the custom properties stored in a <a href="Entities-types#EntityProperties-Model">Model</a> entity's model file: the <code>extras</code> of a glTF file's nodes and materials. Blender writes an object's or material's custom properties there when the glTF exporter's "Include &gt; Custom Properties" option is on. </p>
<p>The model is loaded separately by each client from the same file, so every client gets the same values. They aren't available in server entity scripts, which don't load models.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Entities-types#ModelExtras">Entities.ModelExtras</a> <p>The custom properties if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity and is loaded, otherwise <code>{}</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report a model's custom properties.</p></div>

```js
entityID = Entities.addEntity({
    type: "Model",
    modelURL: "https://example.com/tagged.glb",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    // Custom properties aren't available until after the model has loaded.
    var extras = Entities.getModelExtras(entityID);
    print("Custom properties: " + JSON.stringify(extras));
    // E.g., { "objects": { "Tree": { "isFoliage": true } }, "materials": { "Leaves": { "sway": 0.2 } } }
}, 2000);
```

</div>

<div class="api-entry">

### getMultipleEntityProperties {#getMultipleEntityProperties}

```js
Entities.getMultipleEntityProperties(entityIDs, desiredProperties?)
```

<div class="api-text" v-pre><p>Gets the properties of multiple entities.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityIDs</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td></td><td><p>The IDs of the entities to get the properties of.</p></td></tr>
<tr><td><code>desiredProperties</code> <em>optional</em></td><td>Array&lt;string&gt; | string</td><td><code>[]</code></td><td><p>The name or names of the properties to get. For properties that are objects (e.g., the <code>"keyLight"</code> property), use the property and subproperty names in dot notation (e.g., <code>"keyLight.color"</code>).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Entities-types#EntityProperties">Entities.EntityProperties</a>&gt; <p>The specified properties of each entity for each entity that can be found. If none of the entities can be found, then an empty array is returned. If no properties are specified, then all properties are returned.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Retrieve the names of the nearby entities</p></div>

```js
var SEARCH_RADIUS = 50; // meters
var entityIDs = Entities.findEntities(MyAvatar.position, SEARCH_RADIUS);
var propertySets = Entities.getMultipleEntityProperties(entityIDs, "name");
print("Nearby entity names: " + JSON.stringify(propertySets));
```

</div>

<div class="api-entry">

### getNestableType {#getNestableType}

```js
Entities.getNestableType(id)
```

<div class="api-text" v-pre><p>Gets the type — entity or avatar — of an in-world item.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the item to get the type of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Entities-types#NestableType">Entities.NestableType</a> <p>The type of the item.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report some nestable types.</p></div>

```js
var entity = Entities.addEntity({
    type: "Sphere",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 1, z: -2 })),
    lifetime: 300  // Delete after 5 minutes.
});

print(Entities.getNestableType(entity));  // "entity"
print(Entities.getNestableType(Uuid.generate()));  // "unknown"
```

</div>

<div class="api-entry">

### getPacketsPerSecond {#getPacketsPerSecond}

```js
Entities.getPacketsPerSecond()
```

<div class="api-text" v-pre><p>Gets the maximum number of entity packets that the client can send per second.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Integer maximum number of entity packets that the client can send per second.</p></div>

</div>

<div class="api-entry">

### getPropertyInfo {#getPropertyInfo}

```js
Entities.getPropertyInfo(propertyName)
```

<div class="api-text" v-pre><p>Gets information about an entity property, including a minimum to maximum range for some numerical properties.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>propertyName</code></td><td>string</td><td><p>The name of the property to get the information for.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Entities-types#EntityPropertyInfo">Entities.EntityPropertyInfo</a> <p>The information about the property if it can be found, otherwise an empty object.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report property information for some properties.</p></div>

```js
print("alpha: " + JSON.stringify(Entities.getPropertyInfo("alpha")));
print("script: " + JSON.stringify(Entities.getPropertyInfo("script")));
```

</div>

<div class="api-entry">

### getServerScriptStatus {#getServerScriptStatus}

```js
Entities.getServerScriptStatus(entityID, callback)
```

<div class="api-text" v-pre><p>Gets the status of a server entity script attached to an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to get the server entity script status of.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="Entities-types#getServerScriptStatusCallback">Entities~getServerScriptStatusCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> always.</p></div>

</div>

<div class="api-entry">

### getVehicleStats {#getVehicleStats}

```js
Entities.getVehicleStats()
```

<div class="api-text" v-pre><p>The vehicle simulation's counts (PHYSICS.md round 6), for tests: <code>vehicles</code>, <code>corrections</code> (replays and snaps since the start), <code>replaySteps</code>, <code>lastError</code> and <code>maxError</code> (m), <code>inputsSent</code>, <code>inputsReceived</code>, <code>inputsDropped</code>, <code>inputsStarved</code>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The counts; empty without a physics simulation.</p></div>

</div>

<div class="api-entry">

### getZonesArePickable {#getZonesArePickable}

```js
Entities.getZonesArePickable()
```

<div class="api-text" v-pre><p>Gets whether or not ray picks intersect the bounding box of <a href="Entities-types#EntityProperties-Zone">Zone</a> entities. Ray picks are performed using <a href="#findRayIntersection">findRayIntersection</a>, or the <a href="Picks"><code>Picks</code></a> API.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if ray picks intersect the bounding box of <a href="Entities-types#EntityProperties-Zone">Zone</a> entities, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### hasPacketsToSend {#hasPacketsToSend}

```js
Entities.hasPacketsToSend()
```

<div class="api-text" v-pre><p>Checks whether the client has entity packets waiting to be sent.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the client has entity packets waiting to be sent, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### isAddedEntity {#isAddedEntity}

```js
Entities.isAddedEntity(id)
```

<div class="api-text" v-pre><p>Checks if there is an entity with a specified ID.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if an entity with the specified ID exists, <code>false</code> if it doesn't.</p></div>

</div>

<div class="api-entry">

### isChildOfParent {#isChildOfParent}

```js
Entities.isChildOfParent(childID, parentID)
```

<div class="api-text" v-pre><p>Checks whether an entity has an entity as an ancestor (parent, parent's parent, etc.).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>childID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the child entity to test for being a child, grandchild, etc.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the parent entity to test for being a parent, grandparent, etc.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the <code>childID</code> entity has the <code>parentID</code> entity as a parent or grandparent etc., otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Check that a grandchild entity is a child of its grandparent.</p></div>

```js
function createEntity(description, position, parent) {
    var entity = Entities.addEntity({
        type: "Sphere",
        position: position,
        dimensions: Vec3.HALF,
        parentID: parent,
        lifetime: 300  // Delete after 5 minutes.
    });
    print(description + ": " + entity);
    return entity;
}

var position = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 2, z: -5 }));
var root = createEntity("Root", position, Uuid.NULL);
var child = createEntity("Child", Vec3.sum(position, { x: 0, y: -1, z: 0 }), root);
var grandChild = createEntity("Grandchild", Vec3.sum(position, { x: 0, y: -2, z: 0 }), child);

print("grandChild has root as parent: " + Entities.isChildOfParent(grandChild, root));  // true
```

</div>

<div class="api-entry">

### isLoaded {#isLoaded}

```js
Entities.isLoaded(id)
```

<div class="api-text" v-pre><p>Checks whether an entity's assets have been loaded. For example, for an <code>Model</code> entity the result indicates whether its textures have been loaded.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity's assets have been loaded, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### localToWorldAngularVelocity {#localToWorldAngularVelocity}

```js
Entities.localToWorldAngularVelocity(localAngularVelocity, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts a Euler angular velocity in an avatar, entity, or joint's local coordinate to an angular velocity in world coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>localAngularVelocity</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local Euler angular velocity to convert. (Can be in any unit, e.g., deg/s or rad/s.)</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>The joint in the avatar or entity that the local coordinates are based on. If <code>-1</code> then no joint is used and the local coordinates are based solely on the avatar or entity.</p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><em>Not used in the calculation.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The angular velocity converted to world coordinates if successful, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

</div>

<div class="api-entry">

### localToWorldDimensions {#localToWorldDimensions}

```js
Entities.localToWorldDimensions(localDimensions, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts dimensions in an avatar or entity's local coordinates to dimensions in world coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>localDimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local dimensions to convert.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p><em>Not used in the calculation.</em></p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the local dimensions are scaled per the parent's scale, <code>false</code> if the local dimensions are at world scale.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The dimensions converted to world coordinates if successful, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

</div>

<div class="api-entry">

### localToWorldPosition {#localToWorldPosition}

```js
Entities.localToWorldPosition(localPosition, parentID, parentJointIndex?, scalesWithparent?)
```

<div class="api-text" v-pre><p>Converts a position in an avatar, entity, or joint's local coordinate to a position in world coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local position to convert.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>The joint in the avatar or entity that the local coordinates are based on. If <code>-1</code> then no joint is used and the local coordinates are based solely on the avatar or entity.</p></td></tr>
<tr><td><code>scalesWithparent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the local dimensions are scaled per the parent's scale, <code>false</code> if the local dimensions are at world scale.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position converted to world coordinates if successful, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

</div>

<div class="api-entry">

### localToWorldRotation {#localToWorldRotation}

```js
Entities.localToWorldRotation(localRotation, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts a rotation or orientation in an avatar, entity, or joint's local coordinate to a rotation in world coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The local rotation to convert.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>The joint in the avatar or entity that the local coordinates are based on. If <code>-1</code> then no joint is used and the local coordinates are based solely on the avatar or entity.</p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><em>Not used in the calculation.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation converted to local coordinates if successful, otherwise <a href="Quat">Quat.IDENTITY</a>.</p></div>

</div>

<div class="api-entry">

### localToWorldVelocity {#localToWorldVelocity}

```js
Entities.localToWorldVelocity(localVelocity, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts a velocity in an avatar, entity, or joint's local coordinate to a velocity in world coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>localVelocity</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The local velocity to convert.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>The joint in the avatar or entity that the local coordinates are based on. If <code>-1</code> then no joint is used and the local coordinates are based solely on the avatar or entity.</p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the local velocity is scaled per the parent's scale, <code>false</code> if the local velocity is at world scale.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The velocity converted to world coordinates it successful, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

</div>

<div class="api-entry">

### packetsToSendCount {#packetsToSendCount}

```js
Entities.packetsToSendCount()
```

<div class="api-text" v-pre><p>Gets the number of entity packets the client has waiting to be sent.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Integer number of entity packets the client has waiting to be sent.</p></div>

</div>

<div class="api-entry">

### queryPropertyMetadata {#queryPropertyMetadata}

```js
Entities.queryPropertyMetadata(entityID, property, callback)
```

<div class="api-text" v-pre><p>Gets metadata for certain entity properties such as <code>script</code> and <code>serverScripts</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to get the metadata for.</p></td></tr>
<tr><td><code>property</code></td><td>string</td><td><p>The property name to get the metadata for.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="Entities-types#queryPropertyMetadataCallback">Entities~queryPropertyMetadataCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the request for metadata was successfully sent to the server, otherwise <code>false</code>.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if <code>property</code> is not handled yet or <code>callback</code> is not a function.</p></div>

</div>

<div class="api-entry">

### queryPropertyMetadata {#queryPropertyMetadata-2}

```js
Entities.queryPropertyMetadata(entityID, property, scope, callback)
```

<div class="api-text" v-pre><p>Gets metadata for certain entity properties such as <code>script</code> and <code>serverScripts</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to get the metadata for.</p></td></tr>
<tr><td><code>property</code></td><td>string</td><td><p>The property name to get the metadata for.</p></td></tr>
<tr><td><code>scope</code></td><td>object</td><td><p>The "<code>this</code>" context that the callback will be executed within.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="Entities-types#queryPropertyMetadataCallback">Entities~queryPropertyMetadataCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the request for metadata was successfully sent to the server, otherwise <code>false</code>.</p></div>
<div class="api-returns" v-pre><strong>Throws:</strong>  <p>Throws an error if <code>property</code> is not handled yet or <code>callback</code> is not a function.</p></div>

</div>

<div class="api-entry">

### reloadServerScripts {#reloadServerScripts}

```js
Entities.reloadServerScripts(entityID)
```

<div class="api-text" v-pre><p>Reloads an entity's server entity script such that the latest version re-downloaded.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to reload the server entity script of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the reload request was successfully sent to the server, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### sendClickDownOnEntity {#sendClickDownOnEntity}

```js
Entities.sendClickDownOnEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#clickDownOnEntity">clickDownOnEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendClickReleaseOnEntity {#sendClickReleaseOnEntity}

```js
Entities.sendClickReleaseOnEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#clickReleaseOnEntity">clickReleaseOnEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendHoldingClickOnEntity {#sendHoldingClickOnEntity}

```js
Entities.sendHoldingClickOnEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#holdingClickOnEntity">holdingClickOnEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendHoverEnterEntity {#sendHoverEnterEntity}

```js
Entities.sendHoverEnterEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#hoverEnterEntity">hoverEnterEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendHoverLeaveEntity {#sendHoverLeaveEntity}

```js
Entities.sendHoverLeaveEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#hoverLeaveEntity">hoverLeaveEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendHoverOverEntity {#sendHoverOverEntity}

```js
Entities.sendHoverOverEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#hoverOverEntity">hoverOverEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendMouseMoveOnEntity {#sendMouseMoveOnEntity}

```js
Entities.sendMouseMoveOnEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#mouseMoveOnEntity">mouseMoveOnEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendMousePressOnEntity {#sendMousePressOnEntity}

```js
Entities.sendMousePressOnEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#mousePressOnEntity">mousePressOnEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendMouseReleaseOnEntity {#sendMouseReleaseOnEntity}

```js
Entities.sendMouseReleaseOnEntity(entityID, event)
```

<div class="api-text" v-pre><p>Emits a <a href="#mouseReleaseOnEntity">mouseReleaseOnEntity</a> event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to emit the event for.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>The event details.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendToQml {#sendToQml}

```js
Entities.sendToQml(entityID, message)
```

<div class="api-text" v-pre><p>Sends a message to the QML in a web entity. To receive the message, the QML must implement a function: </p>
<pre class="prettyprint"><code>function fromScript(message) {&#10;  ...&#10;}</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the Web entity to send the message to.</p></td></tr>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send to the QML.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Send and receive messages with QML in a web entity.</p></div>

```js
// JavaScript file

var webEntityID = Entities.addEntity({
    type: "Web",
    position: Vec3.sum(
        MyAvatar.position,
        Vec3.multiplyQbyV(
            Quat.cancelOutRollAndPitch(
                Quat.multiply(
                    Camera.orientation,
                    Quat.fromPitchYawRollDegrees(0, 180, 0)
                )
            ),
            { z: 2 }
        )
    ),
    dimensions: Vec3.multiply({ x: 16, y: 9, z: 0 }, 0.1),
    rotation: Quat.cancelOutRollAndPitch(Camera.orientation),
    sourceUrl: Script.resolvePath("WebEntity.qml")
});

Entities.fromQml.connect(function (entityID, message) {
    if (entityID == webEntityID) print("Message received: " + message);
});

Script.setTimeout(function () {
    Entities.sendToQml(webEntityID, "Hello world!");
}, 2000);

Script.scriptEnding.connect(function () {
    Entities.deleteEntity(webEntityID);
});
```

<div class="api-example" v-pre><strong>Example</strong> </div>

```js
// QML file, "WebEntity.qml"

import QtQuick 2.15

Rectangle {
    width: parent.width
    height: parent.height

    signal sendToScript(var message)

    function fromScript(message) {
        text.text = message;
        sendToScript("Hello back!");
    }

    Text {
        id: text
        anchors.centerIn: parent
        text: "..."
        font.family: "Roboto"
        font.pointSize: 128
    }
}
```

</div>

<div class="api-entry">

### serversExist {#serversExist}

```js
Entities.serversExist()
```

<div class="api-text" v-pre><p>Checks whether servers exist for the client to send entity packets to, i.e., whether you are connected to a world and its entity server is working.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if servers exist for the client to send entity packets to, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### setAbsoluteJointRotationInObjectFrame {#setAbsoluteJointRotationInObjectFrame}

```js
Entities.setAbsoluteJointRotationInObjectFrame(entityID, jointIndex, rotation)
```

<div class="api-text" v-pre><p>Sets the rotation of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity relative to the entity's position and orientation.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation to set the joint to relative to the entity's orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, the joint index is valid, and the rotation is different to the joint's current rotation; otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Raise an avatar model's left palm.</p></div>

```js
entityID = Entities.addEntity({
    type: "Model",
    modelURL: "https://github.com/highfidelity/hifi-api-docs/blob/master/docs/blue_suited.fbx?raw=true",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    // Joint data aren't available until after the model has loaded.
    var index = Entities.getJointIndex(entityID, "LeftHand");
    var absoluteRotation = Entities.getAbsoluteJointRotationInObjectFrame(entityID, index);
    absoluteRotation = Quat.multiply(Quat.fromPitchYawRollDegrees(0, 0, 90), absoluteRotation);
    var success = Entities.setAbsoluteJointRotationInObjectFrame(entityID, index, absoluteRotation);
    print("Success: " + success);
}, 2000);
```

</div>

<div class="api-entry">

### setAbsoluteJointTranslationInObjectFrame {#setAbsoluteJointTranslationInObjectFrame}

```js
Entities.setAbsoluteJointTranslationInObjectFrame(entityID, jointIndex, translation)
```

<div class="api-text" v-pre><p>Sets the translation of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity relative to the entity's position and orientation.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation to set the joint to relative to the entity's position and orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code>if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, the joint index is valid, and the translation is different to the joint's current translation; otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### setDrawZoneBoundaries {#setDrawZoneBoundaries}

```js
Entities.setDrawZoneBoundaries(value)
```

<div class="api-text" v-pre><p>Sets whether or not <a href="Entities-types#EntityProperties-Zone">Zone</a> entities' boundaries should be drawn. <em>Currently not used.</em></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>value</code></td><td>boolean</td><td><p><code>true</code> if <a href="Entities-types#EntityProperties-Zone">Zone</a> entities' boundaries should be drawn, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setKeyboardFocusEntity {#setKeyboardFocusEntity}

```js
Entities.setKeyboardFocusEntity(id)
```

<div class="api-text" v-pre><p>Sets the <a href="Entities-types#EntityProperties-Web">Web</a> entity that has keyboard focus.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the <a href="Entities-types#EntityProperties-Web">Web</a> entity to set keyboard focus to. Use <code>null</code> or <a href="Uuid">Uuid.NULL</a> to unset keyboard focus from an entity.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setLightsArePickable {#setLightsArePickable}

```js
Entities.setLightsArePickable(value)
```

<div class="api-text" v-pre><p>Sets whether or not ray picks intersect the bounding box of <a href="Entities-types#EntityProperties-Light">Light</a> entities. By default, Light entities are not intersected. The setting lasts for the Darkride session. Ray picks are performed using <a href="#findRayIntersection">findRayIntersection</a>, or the <a href="Picks"><code>Picks</code></a> API.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>value</code></td><td>boolean</td><td><p><code>true</code> to make ray picks intersect the bounding box of <a href="Entities-types#EntityProperties-Light">Light</a> entities, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setLocalJointRotation {#setLocalJointRotation}

```js
Entities.setLocalJointRotation(entityID, jointIndex, rotation)
```

<div class="api-text" v-pre><p>Sets the local rotation of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The local rotation to set the joint to.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, the joint index is valid, and the rotation is different to the joint's current rotation; otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Make an avatar model turn its head left.</p></div>

```js
entityID = Entities.addEntity({
    type: "Model",
    modelURL: "https://github.com/highfidelity/hifi-api-docs/blob/master/docs/blue_suited.fbx?raw=true",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    // Joint data aren't available until after the model has loaded.
    var index = Entities.getJointIndex(entityID, "Head");
    var rotation = Quat.fromPitchYawRollDegrees(0, 60, 0);
    var success = Entities.setLocalJointRotation(entityID, index, rotation);
    print("Success: " + success);
}, 2000);
```

</div>

<div class="api-entry">

### setLocalJointRotations {#setLocalJointRotations}

```js
Entities.setLocalJointRotations(entityID, rotations)
```

<div class="api-text" v-pre><p>Sets the local rotations of joints in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>rotations</code></td><td>Array&lt;<a href="Quat">Quat</a>&gt;</td><td><p>The local rotations to set the joints to.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, the model has joints, and at least one of the rotations is different to the model's current rotations; otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Raise both palms of an avatar model.</p></div>

```js
entityID = Entities.addEntity({
    type: "Model",
    modelURL: "https://github.com/highfidelity/hifi-api-docs/blob/master/docs/blue_suited.fbx?raw=true",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    lifetime: 300  // Delete after 5 minutes.
});

Script.setTimeout(function () {
    // Joint data aren't available until after the model has loaded.

    // Get all the joint rotations.
    var jointNames = Entities.getJointNames(entityID);
    var jointRotations = [];
    for (var i = 0, length = jointNames.length; i < length; i++) {
        var index = Entities.getJointIndex(entityID, jointNames[i]);
        jointRotations.push(Entities.getLocalJointRotation(entityID, index));
    }

    // Raise both palms.
    var index = jointNames.indexOf("LeftHand");
    jointRotations[index] = Quat.multiply(Quat.fromPitchYawRollDegrees(-90, 0, 0), jointRotations[index]);
    index = jointNames.indexOf("RightHand");
    jointRotations[index] = Quat.multiply(Quat.fromPitchYawRollDegrees(-90, 0, 0), jointRotations[index]);

    // Update all the joint rotations.
    var success = Entities.setLocalJointRotations(entityID, jointRotations);
    print("Success: " + success);
}, 2000);
```

</div>

<div class="api-entry">

### setLocalJointsData {#setLocalJointsData}

```js
Entities.setLocalJointsData(entityID, rotations, translations)
```

<div class="api-text" v-pre><p>Sets the local rotations and translations of joints in a <a href="Entities-types#EntityProperties-Model">Model</a> entity. This is the same as calling both <a href="#setLocalJointRotations">setLocalJointRotations</a> and <a href="#setLocalJointTranslations">setLocalJointTranslations</a> at the same time.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>rotations</code></td><td>Array&lt;<a href="Quat">Quat</a>&gt;</td><td><p>The local rotations to set the joints to.</p></td></tr>
<tr><td><code>translations</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><p>The local translations to set the joints to.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, the model has joints, and at least one of the rotations or translations is different to the model's current values; otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### setLocalJointTranslation {#setLocalJointTranslation}

```js
Entities.setLocalJointTranslation(entityID, jointIndex, translation)
```

<div class="api-text" v-pre><p>Sets the local translation of a joint in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The integer index of the joint.</p></td></tr>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The local translation to set the joint to.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code>if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, the joint index is valid, and the translation is different to the joint's current translation; otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### setLocalJointTranslations {#setLocalJointTranslations}

```js
Entities.setLocalJointTranslations(entityID, translations)
```

<div class="api-text" v-pre><p>Sets the local translations of joints in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>translations</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><p>The local translations to set the joints to.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code>if the entity is a <a href="Entities-types#EntityProperties-Model">Model</a> entity, the entity is loaded, the model has joints, and at least one of the translations is different to the model's current translations; otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### setPacketsPerSecond {#setPacketsPerSecond}

```js
Entities.setPacketsPerSecond(packetsPerSecond)
```

<div class="api-text" v-pre><p>Sets the maximum number of entity packets that the client can send per second.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>packetsPerSecond</code></td><td>number</td><td><p>Integer maximum number of entity packets that the client can send per second.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setVehicleControls {#setVehicleControls}

```js
Entities.setVehicleControls(entityID, controls)
```

<div class="api-text" v-pre><p>Sets the driver's controls for a vehicle (PHYSICS.md round 6): what this client's physics applies to the vehicle every substep while this client drives it (when it holds the driver's seat, or owns the vehicle). Nothing is sent as a property: the inputs travel to the physics server in their own packets, and everyone else learns the applied input from the vehicle's state. Call it every frame while driving; call <a href="#clearVehicleControls"><code>Entities.clearVehicleControls</code></a> on standing up.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The vehicle.</p></td></tr>
<tr><td><code>controls</code></td><td>object</td><td><p><code>throttle</code> (-1 reverse to 1 forward), <code>steering</code> (-1 left to 1 right), <code>brake</code> (0 to 1) and <code>handBrake</code> (0 to 1); for an airship (round 7) also <code>pitch</code> (-1 nose down to 1 nose up), <code>lift</code> (-1 down to 1 up) and <code>trim</code> (1 drops ballast, -1 vents gas), with <code>steering</code> the rudder; a missing one is 0.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity exists and is a vehicle.</p></div>

</div>

<div class="api-entry">

### setZonesArePickable {#setZonesArePickable}

```js
Entities.setZonesArePickable(value)
```

<div class="api-text" v-pre><p>Sets whether or not ray picks intersect the bounding box of <a href="Entities-types#EntityProperties-Zone">Zone</a> entities. By default, Zone entities are not intersected. The setting lasts for the Darkride session. Ray picks are performed using <a href="#findRayIntersection">findRayIntersection</a>, or the <a href="Picks"><code>Picks</code></a> API.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>value</code></td><td>boolean</td><td><p><code>true</code> to make ray picks intersect the bounding box of <a href="Entities-types#EntityProperties-Zone">Zone</a> entities, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### textSize {#textSize}

```js
Entities.textSize(id, text)
```

<div class="api-text" v-pre><p>Calculates the size of some text in a <a href="Entities-types#EntityProperties-Text">Text</a> entity. The entity need not be set visible. </p>
<p><strong>Note:</strong> The size of text in a Text entity cannot be calculated immediately after the entity is created; a short delay is required while the entity finishes being created.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the Text entity to use for calculation.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><p>The string to calculate the size of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Size">Size</a> <p>The size of the <code>text</code> in meters if the object is a text entity, otherwise <code>{ height: 0, width : 0 }</code>.</p></div>

</div>

<div class="api-entry">

### updateAction {#updateAction}

```js
Entities.updateAction(entityID, actionID, arguments)
```

<div class="api-text" v-pre><p>Updates an entity action.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity with the action to update.</p></td></tr>
<tr><td><code>actionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the action to update.</p></td></tr>
<tr><td><code>arguments</code></td><td><a href="Entities-types#ActionArguments">Entities.ActionArguments</a></td><td><p>The arguments to update.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the update was successful, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### wantsHandControllerPointerEvents {#wantsHandControllerPointerEvents}

```js
Entities.wantsHandControllerPointerEvents(entityID)
```

<div class="api-text" v-pre><p>Checks whether an entity wants hand controller pointer events. For example, a <a href="Entities-types#EntityProperties-Web">Web</a> entity does but a <a href="Entities-types#EntityProperties-Shape">Shape</a> entity doesn't.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity can be found and it wants hand controller pointer events, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### worldToLocalAngularVelocity {#worldToLocalAngularVelocity}

```js
Entities.worldToLocalAngularVelocity(worldAngularVelocity, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts a Euler angular velocity in world coordinates to an angular velocity in an avatar, entity, or joint's local coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>worldAngularVelocity</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The world Euler angular velocity to convert. (Can be in any unit, e.g., deg/s or rad/s.)</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>The joint in the avatar or entity that the local coordinates are based on. If <code>-1</code> then no joint is used and the local coordinates are based solely on the avatar or entity.</p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><em>Not used in the calculation.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The angular velocity converted to local coordinates if successful, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

</div>

<div class="api-entry">

### worldToLocalDimensions {#worldToLocalDimensions}

```js
Entities.worldToLocalDimensions(worldDimensions, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts dimensions in world coordinates to dimensions in an avatar or entity's local coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>worldDimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The world dimensions to convert.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p><em>Not used in the calculation.</em></p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to scale the local dimensions per the parent's scale, <code>false</code> for the local dimensions to be at world scale.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The dimensions converted to local coordinates if successful, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

</div>

<div class="api-entry">

### worldToLocalPosition {#worldToLocalPosition}

```js
Entities.worldToLocalPosition(worldPosition, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts a position in world coordinates to a position in an avatar, entity, or joint's local coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>worldPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The world position to convert.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>The joint in the avatar or entity that the local coordinates are based on. If <code>-1</code> then no joint is used and the local coordinates are based solely on the avatar or entity.</p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to scale the local position per the parent's scale, <code>false</code> for the local position to be at world scale.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position converted to local coordinates if successful, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the local coordinates of an entity parented to another.</p></div>

```js
var parentPosition = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 }));
var childPosition = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 1, z: -5 }));

var parentEntity = Entities.addEntity({
    type: "Box",
    position: parentPosition,
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});
var childEntity = Entities.addEntity({
    type: "Sphere",
    position: childPosition,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    parentID: parentEntity,
    lifetime: 300  // Delete after 5 minutes.
});

var localPosition = Entities.worldToLocalPosition(childPosition, parentEntity);
print("Local position: " + JSON.stringify(localPosition));  // 0, 1, 0.
localPosition = Entities.getEntityProperties(childEntity, "localPosition").localPosition;
print("Local position: " + JSON.stringify(localPosition));  // The same.
```

</div>

<div class="api-entry">

### worldToLocalRotation {#worldToLocalRotation}

```js
Entities.worldToLocalRotation(worldRotation, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts a rotation or orientation in world coordinates to rotation in an avatar, entity, or joint's local coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>worldRotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The world rotation to convert.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>The joint in the avatar or entity that the local coordinates are based on. If <code>-1</code> then no joint is used and the local coordinates are based solely on the avatar or entity.</p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><em>Not used in the calculation.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation converted to local coordinates if successful, otherwise <a href="Quat">Quat.IDENTITY</a>.</p></div>

</div>

<div class="api-entry">

### worldToLocalVelocity {#worldToLocalVelocity}

```js
Entities.worldToLocalVelocity(worldVelocity, parentID, parentJointIndex?, scalesWithParent?)
```

<div class="api-text" v-pre><p>Converts a velocity in world coordinates to a velocity in an avatar, entity, or joint's local coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>worldVelocity</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The world velocity to convert.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The avatar or entity that the local coordinates are based on.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>The joint in the avatar or entity that the local coordinates are based on. If <code>-1</code> then no joint is used and the local coordinates are based solely on the avatar or entity.</p></td></tr>
<tr><td><code>scalesWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to scale the local velocity per the parent's scale, <code>false</code> for the local velocity to be at world scale.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The velocity converted to local coordinates if successful, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### addingEntity {#addingEntity}

```js
Entities.addingEntity.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an entity is added to Darkride's local in-memory tree of entities it knows about. This may occur when entities are loaded upon visiting a world, when the user rotates their view so that more entities become visible, and when any type of entity is created (e.g., by <a href="#addEntity">addEntity</a>).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity added.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when an entity is added.</p></div>

```js
Entities.addingEntity.connect(function (entityID) {
    print("Added entity: " + entityID);
});
```

</div>

<div class="api-entry">

### addingWearable {#addingWearable}

```js
Entities.addingWearable.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a "wearable" entity is added to Darkride's local in-memory tree of entities it knows about, for example when adding a "wearable" to your avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the "wearable" entity added.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a "wearable" entity is added.</p></div>

```js
Entities.addingWearable.connect(function (entityID) {
    print("Added wearable: " + entityID);
});
```

</div>

<div class="api-entry">

### canAdjustLocksChanged {#canAdjustLocksChanged}

```js
Entities.canAdjustLocksChanged.connect(function (canAdjustLocks) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when your ability to change the <code>locked</code> property of entities changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canAdjustLocks</code></td><td>boolean</td><td><p><code>true</code> if the script can change the <code>locked</code> property of an entity, <code>false</code> if it can't.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your ability to change locks changes.</p></div>

```js
function onCanAdjustLocksChanged(canAdjustLocks) {
    print("You can adjust entity locks: " + canAdjustLocks);
}
Entities.canAdjustLocksChanged.connect(onCanAdjustLocksChanged);
```

</div>

<div class="api-entry">

### canGetAndSetPrivateUserDataChanged {#canGetAndSetPrivateUserDataChanged}

```js
Entities.canGetAndSetPrivateUserDataChanged.connect(function (canGetAndSetPrivateUserData) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when your ability to get and set private user data changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canGetAndSetPrivateUserData</code></td><td>boolean</td><td><p><code>true</code> if the script change the <code>privateUserData</code> property of an entity, <code>false</code> if it can't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### canRezChanged {#canRezChanged}

```js
Entities.canRezChanged.connect(function (canRez) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when your ability to rez (create) entities changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canRez</code></td><td>boolean</td><td><p><code>true</code> if the script can rez (create) entities, <code>false</code> if it can't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### canRezTmpChanged {#canRezTmpChanged}

```js
Entities.canRezTmpChanged.connect(function (canRezTmp) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when your ability to rez (create) temporary entities changes. Temporary entities are entities with a finite <code>lifetime</code> property value set.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canRezTmp</code></td><td>boolean</td><td><p><code>true</code> if the script can rez (create) temporary entities, <code>false</code> if it can't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### canWriteAssetsChanged {#canWriteAssetsChanged}

```js
Entities.canWriteAssetsChanged.connect(function (canWriteAssets) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when your ability to make changes to the asset server's assets changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canWriteAssets</code></td><td>boolean</td><td><p><code>true</code> if the script can change the asset server's assets, <code>false</code> if it can't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### clearingEntities {#clearingEntities}

```js
Entities.clearingEntities.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when you disconnect from a world, at which time Darkride's local in-memory tree of entities that it knows about is cleared.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when Interfaces's entity tree is cleared.</p></div>

```js
Entities.clearingEntities.connect(function () {
    print("Entities cleared");
});
```

</div>

<div class="api-entry">

### clickDownOnEntity {#clickDownOnEntity}

```js
Entities.clickDownOnEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is clicked while the mouse cursor is on an entity. Note: Not triggered by controllers. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that was clicked on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Compare clickDownOnEntity signal and entity script method.</p></div>

```js
var entityScript = (function () {
    // Method is called for only this entity.
    this.clickDownOnEntity = function (entityID, event) {
        print("Entity : Clicked sphere ; " + event.type);
    };
});

var sphereID = Entities.addEntity({
    type: "Sphere",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

Entities.clickDownOnEntity.connect(function (entityID, event) {
    // Signal is triggered for all entities.
    if (entityID === sphereID) {
        print("Interface : Clicked sphere ; " + event.type);
    } else {
        print("Interface : Clicked another entity ; " + event.type);
    }
});
```

</div>

<div class="api-entry">

### clickReleaseOnEntity {#clickReleaseOnEntity}

```js
Entities.clickReleaseOnEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is released after clicking on an entity, even if the mouse cursor has moved off the entity. Note: Not triggered by controllers. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that was originally clicked.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### collisionWithEntity {#collisionWithEntity}

```js
Entities.collisionWithEntity.connect(function (idA, idB, collision) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered on the client that is the physics simulation owner during the collision of two entities. Note: Isn't triggered for a collision with an avatar. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>idA</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of one entity in the collision. For an entity script, this is the ID of the entity containing the script.</p></td></tr>
<tr><td><code>idB</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the other entity in the collision.</p></td></tr>
<tr><td><code>collision</code></td><td><a href="globals#Collision">Collision</a></td><td><p>The details of the collision.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Change the color of an entity when it collides with another entity.</p></div>

```js
var entityScript = (function () {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.collisionWithEntity = function (myID, otherID, collision) {
        Entities.editEntity(myID, {
            color: {
                red: randomInteger(128, 255),
                green: randomInteger(128, 255),
                blue: randomInteger(128, 255)
            }
        });
    };
});

var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    color: { red: 128, green: 128, blue: 128 },
    gravity: { x: 0, y: -9.8, z: 0 },
    velocity: { x: 0, y: 0.1, z: 0 },  // Kick off physics.
    dynamic: true,
    collisionless: false,  // So that collision events are generated.
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### deletingEntity {#deletingEntity}

```js
Entities.deletingEntity.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an entity is deleted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity deleted.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when an entity is deleted.</p></div>

```js
Entities.deletingEntity.connect(function (entityID) {
    print("Deleted entity: " + entityID);
});
```

</div>

<div class="api-entry">

### deletingWearable {#deletingWearable}

```js
Entities.deletingWearable.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a "wearable" entity is deleted, for example when removing a "wearable" from your avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the "wearable" entity deleted.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a "wearable" entity is deleted.</p></div>

```js
Entities.deletingWearable.connect(function (entityID) {
    print("Deleted wearable: " + entityID);
});
```

</div>

<div class="api-entry">

### enterEntity {#enterEntity}

```js
Entities.enterEntity.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an avatar enters an entity. Note: At the initial loading of the script, if the avatar is already present inside the entity, it might be too late to catch this event when the script runs, so it won't trigger. The <a href="#preload">preload</a> signal can be used to handle those cases. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that the avatar entered.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### fromQml {#fromQml}

```js
Entities.fromQml.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message from the QML in a web entity is received. The QML can send a message (string or object) by calling: </p>
<pre class="prettyprint"><code>sendToScript(message);</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### holdingClickOnEntity {#holdingClickOnEntity}

```js
Entities.holdingClickOnEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Repeatedly triggered while a mouse button continues to be held after clicking an entity, even if the mouse cursor has moved off the entity. Note: Not triggered by controllers. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that was originally clicked.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### hoverEnterEntity {#hoverEnterEntity}

```js
Entities.hoverEnterEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the mouse cursor or controller laser starts hovering on an entity. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that is being hovered.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### hoverLeaveEntity {#hoverLeaveEntity}

```js
Entities.hoverLeaveEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the mouse cursor or controller laser stops hovering over an entity. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that was being hovered.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### hoverOverEntity {#hoverOverEntity}

```js
Entities.hoverOverEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Repeatedly triggered when the mouse cursor or controller laser moves while hovering over an entity. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that is being hovered.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### leaveEntity {#leaveEntity}

```js
Entities.leaveEntity.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an avatar leaves an entity. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that the avatar left.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mouseDoublePressOffEntity {#mouseDoublePressOffEntity}

```js
Entities.mouseDoublePressOffEntity.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is double-clicked while the mouse cursor is not on an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mouseDoublePressOnEntity {#mouseDoublePressOnEntity}

```js
Entities.mouseDoublePressOnEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is double-clicked while the mouse cursor is on an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that was double-pressed on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mouseMoveOnEntity {#mouseMoveOnEntity}

```js
Entities.mouseMoveOnEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Repeatedly triggered while the mouse cursor or controller laser moves on an entity. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that was moved on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mousePressOffEntity {#mousePressOffEntity}

```js
Entities.mousePressOffEntity.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is clicked while the mouse cursor is not on an entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mousePressOnEntity {#mousePressOnEntity}

```js
Entities.mousePressOnEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is clicked while the mouse cursor is on an entity, or a controller trigger is fully pressed while its laser is on an entity. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that was pressed on.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when an entity is clicked with the mouse or laser.</p></div>

```js
function onMousePressOnEntity(entityID, event) {
    print("Clicked on entity: " + entityID);
}

Entities.mousePressOnEntity.connect(onMousePressOnEntity);
```

</div>

<div class="api-entry">

### mouseReleaseOnEntity {#mouseReleaseOnEntity}

```js
Entities.mouseReleaseOnEntity.connect(function (entityID, event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is released after clicking on an entity or the controller trigger is partly or fully released after pressing on an entity, even if the mouse pointer or controller laser has moved off the entity. </p>
<p>See also, <a href="">Entity Methods</a> and <a href="Script#addEventHandler"><code>Script.addEventHandler</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that was originally pressed.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### preload {#preload}

```js
Entities.preload.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script starts for a user. See also, <a href="Script#entityScriptPreloadFinished"><code>Script.entityScriptPreloadFinished</code></a>. </p>
<p>Note: Can only be connected to via <code>this.preload = function (...) { ... }</code> in the entity script.</p>
 <p class="availableIn"><strong>Supported Script Types:</strong> Client Entity Scripts • Server Entity Scripts</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that the script is running in.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the ID of the entity that a client entity script is running in.</p></div>

```js
var entityScript = (function () {
    this.entityID = Uuid.NULL;

    this.preload = function (entityID) {
        this.entityID = entityID;
        print("Entity ID: " + this.entityID);
    };
});

var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    color: { red: 255, green: 0, blue: 0 },
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### unload {#unload}

```js
Entities.unload.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script terminates for a user. </p>
<p>Note: Can only be connected to via <code>this.unoad = function () { ... }</code> in the entity script.</p>
 <p class="availableIn"><strong>Supported Script Types:</strong> Client Entity Scripts • Server Entity Scripts</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that the script is running in.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### webEventReceived {#webEventReceived}

```js
Entities.webEventReceived.connect(function (entityID, message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a script in a <a href="Entities-types#EntityProperties-Web">Web</a> entity's HTML sends an event over the entity's HTML event bridge. The HTML web page can send a message by calling: </p>
<pre class="prettyprint"><code>EventBridge.emitWebEvent(message);</code></pre>
 <p>Use <a href="#emitScriptEvent"><code>Entities.emitScriptEvent</code></a> to send messages to the Web entity's HTML page.</p>
 <p>Alternatively, you can use <a href="#getEntityObject"><code>Entities.getEntityObject</code></a> to exchange messages over a Web entity's HTML event bridge.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the Web entity that the message was received from.</p></td></tr>
<tr><td><code>message</code></td><td>string</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

Entities's types (ActionArguments, ActionArguments-BallSocket, ActionArguments-ConeTwist and the rest) are on a page of their own: [Entities types](./Entities-types).

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### appendPoint {#appendPoint}

```js
Entities.appendPoint(entityID, point)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <a href="Entities-types#EntityProperties-PolyLine">PolyLine</a> entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Appends a point to a <a href="Entities-types#EntityProperties-Line">Line</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the <a href="Entities-types#EntityProperties-Line">Line</a> entity.</p></td></tr>
<tr><td><code>point</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point to add to the line. The coordinates are relative to the entity's position.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the point was added to the line, otherwise <code>false</code>. The point may fail to be added if the entity does not exist, the entity is not a <a href="Entities-types#EntityProperties-Line">Line</a> entity, the point is outside the entity's dimensions, or the maximum number of points has been reached.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Append a point to a Line entity.</p></div>

```js
// Draw a line between two points.
var entity = Entities.addEntity({
    type: "Line",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 2, y: 2, z: 1 },
    linePoints: [
        { x: -1, y: 1, z: 0 },
        { x: 0, y: -1, z: 0 }
    ],
    color: { red: 255, green: 0, blue: 0 },
    lifetime: 300  // Delete after 5 minutes.
});

// Add a third point to create a "V".
Script.setTimeout(function () {
    Entities.appendPoint(entity, { x: 1, y: 1, z: 0 });
}, 50); // Wait for the entity to be created.
```

</div>

<div class="api-entry">

### canRezCertified {#canRezCertified}

```js
Entities.canRezCertified()
```

::: warning Deprecated
<div class="api-text" v-pre><p>From the old marketplace; does nothing in Darkride.</p></div>
:::

<div class="api-text" v-pre><p>Checks whether or not the script can rez (create) new certified entities in the world. Certified entities are entities that have PoP certificates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server will allow the script to rez (create) new certified entities, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### canRezTmpCertified {#canRezTmpCertified}

```js
Entities.canRezTmpCertified()
```

::: warning Deprecated
<div class="api-text" v-pre><p>From the old marketplace; does nothing in Darkride.</p></div>
:::

<div class="api-text" v-pre><p>Checks whether or not the script can rez (create) new temporary certified entities in the world. Temporary entities are entities with a finite <code>lifetime</code> property value set. Certified entities are entities that have PoP certificates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server will allow the script to rez (create) new temporary certified entities, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### getMeshes {#getMeshes}

```js
Entities.getMeshes(entityID, callback)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. It no longer works for Model entities. Use the <a href="Graphics"><code>Graphics</code></a> API instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets the meshes in a <a href="Entities-types#EntityProperties-Model">Model</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the <code>Model</code> entity to get the meshes of.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="Entities-types#getMeshesCallback">Entities~getMeshesCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getStaticCertificateJSON {#getStaticCertificateJSON}

```js
Entities.getStaticCertificateJSON(entityID)
```

::: warning Deprecated
<div class="api-text" v-pre><p>From the old marketplace; does nothing in Darkride.</p></div>
:::

<div class="api-text" v-pre><p>Gets the static certificate for an entity. The static certificate contains static properties of the item which cannot be altered.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to get the static certificate for.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The entity's static certificate as a JSON string if the entity can be found, otherwise <code>""</code>.</p></div>

</div>

<div class="api-entry">

### setAllPoints {#setAllPoints}

```js
Entities.setAllPoints(entityID, points)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <a href="Entities-types#EntityProperties-PolyLine">PolyLine</a> entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Sets all the points in a <a href="Entities-types#EntityProperties-Line">Line</a> entity.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the <a href="Entities-types#EntityProperties-Line">Line</a> entity.</p></td></tr>
<tr><td><code>points</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><p>The points that the entity should draw lines between.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity was updated, otherwise <code>false</code>. The property may fail to be updated if the entity does not exist, the entity is not a <a href="Entities-types#EntityProperties-Line">Line</a> entity, one of the points is outside the entity's dimensions, or the number of points is greater than the maximum allowed.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Change the shape of a Line entity.</p></div>

```js
// Draw a horizontal line between two points.
var entity = Entities.addEntity({
    type: "Line",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 2, y: 2, z: 1 },
    linePoints: [
        { x: -1, y: 0, z: 0 },
        { x:1, y: -0, z: 0 }
    ],
    color: { red: 255, green: 0, blue: 0 },
    lifetime: 300  // Delete after 5 minutes.
});

// Change the line to be a "V".
Script.setTimeout(function () {
    Entities.setAllPoints(entity, [
        { x: -1, y: 1, z: 0 },
        { x: 0, y: -1, z: 0 },
        { x: 1, y: 1, z: 0 },
    ]);
}, 2000);
```

</div>

<div class="api-entry">

### verifyStaticCertificateProperties {#verifyStaticCertificateProperties}

```js
Entities.verifyStaticCertificateProperties(entityID)
```

::: warning Deprecated
<div class="api-text" v-pre><p>From the old marketplace; does nothing in Darkride.</p></div>
:::

<div class="api-text" v-pre><p>Verifies the entity's proof of provenance, i.e., that the entity's <code>certificateID</code> property was produced by the old marketplace signing the entity's static certificate JSON.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity to verify.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity can be found, its <code>certificateID</code> property is present, and its value matches the entity's static certificate JSON; otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### canRezCertifiedChanged {#canRezCertifiedChanged}

```js
Entities.canRezCertifiedChanged.connect(function (canRezCertified) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>From the old marketplace; does nothing in Darkride.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when your ability to rez (create) certified entities changes. Certified entities are entities that have PoP certificates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canRezCertified</code></td><td>boolean</td><td><p><code>true</code> if the script can rez (create) certified entities, <code>false</code> if it can't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### canRezTmpCertifiedChanged {#canRezTmpCertifiedChanged}

```js
Entities.canRezTmpCertifiedChanged.connect(function (canRezTmpCertified) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>From the old marketplace; does nothing in Darkride.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when your ability to rez (create) temporary certified entities changes. Temporary entities are entities with a finite <code>lifetime</code> property value set. Certified entities are entities that have PoP certificates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canRezTmpCertified</code></td><td>boolean</td><td><p><code>true</code> if the script can rez (create) temporary certified entities, <code>false</code> if it can't.</p></td></tr>
</tbody></table></div>

</div>

::: tip Names from the engine's history
Names and addresses with `hifi` or `tivoli` in them, such as `hifi_pbr`, a `hifi://` address or an example file's address, come from the engine's history and still work. Type them as they are.
:::
