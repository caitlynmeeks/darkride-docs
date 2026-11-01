---
title: "Global types and functions"
description: "Types and functions every script can use."
draft: true
---

# Global types and functions

Types used across the API, and the few functions that belong to no namespace.


## Functions {#functions}

<div class="api-entry">

### atob {#atob}

```js
atob(base64)
```

<div class="api-text" v-pre><p>Decodes base64 to text.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>base64</code></td><td>string</td><td><p>The base64 you want to decode.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>text</p></div>

</div>

<div class="api-entry">

### btoa {#btoa}

```js
btoa(text)
```

<div class="api-text" v-pre><p>Encodes text to base64.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>text</code></td><td>string</td><td><p>The text you want to encode.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>base64</p></div>

</div>

<div class="api-entry">

### print {#print}

```js
print(...message?)
```

<div class="api-text" v-pre><p>Prints a message to the program log and emits <a href="Script#printedMessage"><code>Script.printedMessage</code></a>. The message logged is the message values separated by spaces. </p>
<p>Alternatively, you can use <a href="Script#print"><code>Script.print</code></a> or one of the <a href="console"><code>console</code></a> API methods.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>*</td><td><p>The message values to print.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### request {#request}

```js
request(options, callback)
```

<div class="api-text" v-pre><p>Sends a HTTP request. API is a non-complete implementation of <a href="https://www.npmjs.com/package/request" target="_blank" rel="noopener">npm module request</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>options</code></td><td><a href="#RequestOptions">RequestOptions</a> | string</td><td><p>If a string is specified, it will use it as a URI and continue as a <code>GET</code> request.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="#RequestCallback">RequestCallback</a></td><td></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Make a GET request to the metaverse to check how many online users and worlds there are.</p></div>

```js
request({
    uri: "https://tivolicloud.com/api/domains/stats",
    method: "GET",
    json: true,
    body: {},
    headers: {}
}, function (error, response, body) {
    if (error) return console.error(error);
    console.log("Response headers:", response.headers);
    console.log("Status code:", response.statusCode);
    console.log("Content type:", response.headers["content-type"]);
    console.log("Online users:", body.onlineUsers);
    console.log("Online worlds:", body.onlineDomains);
});
```

</div>

## Types {#types}

<div class="api-entry">

### AACube {#AACube}

<div class="api-text" v-pre><p>An axis-aligned cube, defined as the bottom right near (minimum axes values) corner of the cube plus the dimension of its sides.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>X coordinate of the brn corner of the cube.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Y coordinate of the brn corner of the cube.</p></td></tr>
<tr><td><code>z</code></td><td>number</td><td><p>Z coordinate of the brn corner of the cube.</p></td></tr>
<tr><td><code>scale</code></td><td>number</td><td><p>The dimensions of each side of the cube.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### AttachmentData {#AttachmentData}

<div class="api-text" v-pre><p>Information on an attachment worn by the avatar.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>modelUrl</code></td><td>string</td><td><p>The URL of the glTF, FBX, or OBJ model file. glTF models may be in JSON or binary format (".gltf" or ".glb" URLs respectively).</p></td></tr>
<tr><td><code>jointName</code></td><td>string</td><td><p>The name of the joint that the attachment is parented to.</p></td></tr>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The offset from the joint that the attachment is positioned at.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The rotation applied to the model relative to the joint orientation.</p></td></tr>
<tr><td><code>scale</code></td><td>number</td><td><p>The scale applied to the attachment model.</p></td></tr>
<tr><td><code>soft</code></td><td>boolean</td><td><p>If <code>true</code> and the model has a skeleton, the bones of the attached model's skeleton are rotated to fit the avatar's current pose. If <code>true</code>, the <code>translation</code>, <code>rotation</code>, and <code>scale</code> parameters are ignored.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### AvatarDataRate {#AvatarDataRate}

<div class="api-text" v-pre><p>The avatar mixer data comprises different types of data, with the data rates of each being tracked in kbps.</p>
 <table> <thead> <tr><th>Rate Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"globalPosition"</code></td><td>Incoming global position.</td></tr>
 <tr><td><code>"localPosition"</code></td><td>Incoming local position.</td></tr>
 <tr><td><code>"handControllers"</code></td><td>Incoming hand controllers.</td></tr>
 <tr><td><code>"avatarBoundingBox"</code></td><td>Incoming avatar bounding box.</td></tr>
 <tr><td><code>"avatarOrientation"</code></td><td>Incoming avatar orientation.</td></tr>
 <tr><td><code>"avatarScale"</code></td><td>Incoming avatar scale.</td></tr>
 <tr><td><code>"lookAtPosition"</code></td><td>Incoming look-at position.</td></tr>
 <tr><td><code>"audioLoudness"</code></td><td>Incoming audio loudness.</td></tr>
 <tr><td><code>"sensorToWorkMatrix"</code></td><td>Incoming sensor-to-world matrix.</td></tr>
 <tr><td><code>"additionalFlags"</code></td><td>Incoming additional avatar flags.</td></tr>
 <tr><td><code>"parentInfo"</code></td><td>Incoming parent information.</td></tr>
 <tr><td><code>"faceTracker"</code></td><td>Incoming face tracker data.</td></tr>
 <tr><td><code>"jointData"</code></td><td>Incoming joint data.</td></tr>
 <tr><td><code>"jointDefaultPoseFlagsRate"</code></td><td>Incoming joint default pose flags.</td></tr>
 <tr><td><code>"farGrabJointRate"</code></td><td>Incoming far grab joint.</td></tr>
 <tr><td><code>"globalPositionOutbound"</code></td><td>Outgoing global position.</td></tr>
 <tr><td><code>"localPositionOutbound"</code></td><td>Outgoing local position.</td></tr>
 <tr><td><code>"avatarBoundingBoxOutbound"</code></td><td>Outgoing avatar bounding box.</td></tr>
 <tr><td><code>"avatarOrientationOutbound"</code></td><td>Outgoing avatar orientation.</td></tr>
 <tr><td><code>"avatarScaleOutbound"</code></td><td>Outgoing avatar scale.</td></tr>
 <tr><td><code>"lookAtPositionOutbound"</code></td><td>Outgoing look-at position.</td></tr>
 <tr><td><code>"audioLoudnessOutbound"</code></td><td>Outgoing audio loudness.</td></tr>
 <tr><td><code>"sensorToWorkMatrixOutbound"</code></td><td>Outgoing sensor-to-world matrix.</td></tr>
 <tr><td><code>"additionalFlagsOutbound"</code></td><td>Outgoing additional avatar flags.</td></tr>
 <tr><td><code>"parentInfoOutbound"</code></td><td>Outgoing parent information.</td></tr>
 <tr><td><code>"faceTrackerOutbound"</code></td><td>Outgoing face tracker data.</td></tr>
 <tr><td><code>"jointDataOutbound"</code></td><td>Outgoing joint data.</td></tr>
 <tr><td><code>"jointDefaultPoseFlagsOutbound"</code></td><td>Outgoing joint default pose flags.</td></tr>
 <tr><td><code>""</code></td><td>When no rate name is specified, the total incoming data rate is provided.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### AvatarEntityMap {#AvatarEntityMap}

<div class="api-text" v-pre><p>An object with the UUIDs of avatar entities as keys and avatar entity properties objects as values.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> Object&lt;<a href="Uuid">Uuid</a>, <a href="Entities-types#EntityProperties">Entities.EntityProperties</a>&gt;</div>

</div>

<div class="api-entry">

### AvatarSimulationRate {#AvatarSimulationRate}

<div class="api-text" v-pre><p>An avatar has different types of data simulated at different rates, in Hz.</p>
 <table> <thead> <tr><th>Rate Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"avatar" or ""</code></td><td>The rate at which the avatar is updated even if not in view.</td></tr>
 <tr><td><code>"avatarInView"</code></td><td>The rate at which the avatar is updated if in view.</td></tr>
 <tr><td><code>"skeletonModel"</code></td><td>The rate at which the skeleton model is being updated, even if there are no joint data available.</td></tr>
 <tr><td><code>"jointData"</code></td><td>The rate at which joint data are being updated.</td></tr>
 <tr><td><code>""</code></td><td>When no rate name is specified, the <code>"avatar"</code> update rate is provided.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### AvatarUpdateRate {#AvatarUpdateRate}

<div class="api-text" v-pre><p>The avatar mixer data comprises different types of data updated at different rates, in Hz.</p>
 <table> <thead> <tr><th>Rate Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"globalPosition"</code></td><td>Global position.</td></tr>
 <tr><td><code>"localPosition"</code></td><td>Local position.</td></tr>
 <tr><td><code>"handControllers"</code></td><td>Hand controller positions and orientations.</td></tr>
 <tr><td><code>"avatarBoundingBox"</code></td><td>Avatar bounding box.</td></tr>
 <tr><td><code>"avatarOrientation"</code></td><td>Avatar orientation.</td></tr>
 <tr><td><code>"avatarScale"</code></td><td>Avatar scale.</td></tr>
 <tr><td><code>"lookAtPosition"</code></td><td>Look-at position.</td></tr>
 <tr><td><code>"audioLoudness"</code></td><td>Audio loudness.</td></tr>
 <tr><td><code>"sensorToWorkMatrix"</code></td><td>Sensor-to-world matrix.</td></tr>
 <tr><td><code>"additionalFlags"</code></td><td>Additional avatar flags.</td></tr>
 <tr><td><code>"parentInfo"</code></td><td>Parent information.</td></tr>
 <tr><td><code>"faceTracker"</code></td><td>Face tracker data.</td></tr>
 <tr><td><code>"jointData"</code></td><td>Joint data.</td></tr>
 <tr><td><code>"farGrabJointData"</code></td><td>Far grab joint data.</td></tr>
 <tr><td><code>""</code></td><td>When no rate name is specified, the overall update rate is provided.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### BillboardMode {#BillboardMode}

<div class="api-text" v-pre><p>How an entity is billboarded.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"none"</code></td><td>The entity will not be billboarded.</td></tr>
 <tr><td><code>"yaw"</code></td><td>The entity will yaw, but not pitch, to face the camera. Its actual rotation will be ignored.</td></tr>
 <tr><td><code>"full"</code></td><td>The entity will yaw and pitch to face the camera. Its actual rotation will be ignored.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### BoxFace {#BoxFace}

<div class="api-text" v-pre><p>A <code>BoxFace</code> specifies the face of an axis-aligned (AA) box. </p>
<table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"MIN_X_FACE"</code></td><td>The minimum x-axis face.</td></tr>
 <tr><td><code>"MAX_X_FACE"</code></td><td>The maximum x-axis face.</td></tr>
 <tr><td><code>"MIN_Y_FACE"</code></td><td>The minimum y-axis face.</td></tr>
 <tr><td><code>"MAX_Y_FACE"</code></td><td>The maximum y-axis face.</td></tr>
 <tr><td><code>"MIN_Z_FACE"</code></td><td>The minimum z-axis face.</td></tr>
 <tr><td><code>"MAX_Z_FACE"</code></td><td>The maximum z-axis face.</td></tr>
 <tr><td><code>"UNKNOWN_FACE"</code></td><td>Unknown value.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### Collision {#Collision}

<div class="api-text" v-pre><p>Details of a collision between avatars and entities.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td><a href="#ContactEventType">ContactEventType</a></td><td><p>The contact type of the collision event.</p></td></tr>
<tr><td><code>idA</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of one of the avatars or entities in the collision.</p></td></tr>
<tr><td><code>idB</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the other of the avatars or entities in the collision.</p></td></tr>
<tr><td><code>penetration</code></td><td><a href="Vec3">Vec3</a></td><td><p>The amount of penetration between the two items.</p></td></tr>
<tr><td><code>contactPoint</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point of contact.</p></td></tr>
<tr><td><code>velocityChange</code></td><td><a href="Vec3">Vec3</a></td><td><p>The change in relative velocity of the two items, in m/s.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### CollisionContact {#CollisionContact}

<div class="api-text" v-pre><p>A pair of points that represents part of an overlap between a <code>CollisionPick</code> and an object in the physics engine. Points which are further apart represent deeper overlap.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pointOnPick</code></td><td><a href="Vec3">Vec3</a></td><td><p>A point representing a penetration of the object's surface into the volume of the pick, in world coordinates.</p></td></tr>
<tr><td><code>pointOnObject</code></td><td><a href="Vec3">Vec3</a></td><td><p>A point representing a penetration of the pick's surface into the volume of the object, in world coordinates.</p></td></tr>
<tr><td><code>normalOnPick</code></td><td><a href="Vec3">Vec3</a></td><td><p>The normal vector pointing away from the pick, representing the direction of collision.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### CollisionMask {#CollisionMask}

<div class="api-text" v-pre><p>A collision may occur with the following types of items:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th> </tr>
</thead>
 <tbody> <tr><td><code>1</code></td><td>Static entities — non-dynamic entities with no velocity.</td></tr>
 <tr><td><code>2</code></td><td>Dynamic entities — entities that have their <code>dynamic</code> property set to <code>true</code>.</td></tr>
 <tr><td><code>4</code></td><td>Kinematic entities — non-dynamic entities with velocity.</td></tr>
 <tr><td><code>8</code></td><td>My avatar.</td></tr>
 <tr><td><code>16</code></td><td>Other avatars.</td></tr>
 </tbody>
 </table>
 <p>The values for the collision types that are enabled are added together to give the CollisionMask value. For example, a value of <code>31</code> means that an entity will collide with all item types.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### CollisionPickResult {#CollisionPickResult}

<div class="api-text" v-pre><p>An intersection result for a collision pick.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>intersects</code></td><td>boolean</td><td><p><code>true</code> if there is at least one intersection, <code>false</code> if there isn't.</p></td></tr>
<tr><td><code>intersectingObjects</code></td><td>Array&lt;<a href="#IntersectingObject">IntersectingObject</a>&gt;</td><td><p>All objects which intersect with the <code>collisionRegion</code>.</p></td></tr>
<tr><td><code>collisionRegion</code></td><td><a href="#CollisionRegion">CollisionRegion</a></td><td><p>The collision region that was used. Valid even if there was no intersection.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### CollisionRegion {#CollisionRegion}

<div class="api-text" v-pre><p>A volume for checking collisions in the physics simulation.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>shape</code></td><td><a href="#Shape">Shape</a></td><td></td><td><p>The collision region's shape and size. Dimensions are in world coordinates, but scale with the parent if defined.</p></td></tr>
<tr><td><code>loaded</code></td><td>boolean</td><td></td><td><p><code>true</code> if the <code>shape</code> has no model, or has a model and it is loaded, <code>false</code> if otherwise.</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the collision region, relative to the parent if defined.</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the collision region, relative to the parent if defined.</p></td></tr>
<tr><td><code>threshold</code></td><td>number</td><td></td><td><p>The approximate minimum penetration depth for a test object to be considered in contact with the collision region. The depth is in world coordinates but scales with the parent if defined.</p></td></tr>
<tr><td><code>collisionGroup</code> <em>optional</em></td><td><a href="#CollisionMask">CollisionMask</a></td><td><code>8</code></td><td><p>The type of objects the collision region collides as. Objects whose collision masks overlap with the region's collision group are considered to be colliding with the region.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### Color {#Color}

<div class="api-text" v-pre><p>A color vector. See also the <a href="Vec3">Vec3</a> object.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>red</code></td><td>number</td><td><p>Red component value. Integer in the range <code>0</code> - <code>255</code>. Synonyms: <code>r</code>, <code>x</code>.</p></td></tr>
<tr><td><code>green</code></td><td>number</td><td><p>Green component value. Integer in the range <code>0</code> - <code>255</code>. Synonyms: <code>g</code>, <code>y</code>.</p></td></tr>
<tr><td><code>blue</code></td><td>number</td><td><p>Blue component value. Integer in the range <code>0</code> - <code>255</code>. Synonyms: <code>b</code>, <code>z</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Colors can be set in multiple ways and modified with their aliases, but still stringify in the same way</p></div>

```js
Entities.editEntity(<id>, { color: { x: 1, y: 2, z: 3 }});                 // { red: 1, green: 2, blue: 3 }
Entities.editEntity(<id>, { color: { r: 4, g: 5, b: 6 }});                 // { red: 4, green: 5, blue: 6 }
Entities.editEntity(<id>, { color: { red: 7, green: 8, blue: 9 }});        // { red: 7, green: 8, blue: 9 }
Entities.editEntity(<id>, { color: [10, 11, 12] });                        // { red: 10, green: 11, blue: 12 }
Entities.editEntity(<id>, { color: 13 });                                  // { red: 13, green: 13, blue: 13 }
var color = Entities.getEntityProperties(<id>).color;                      // { red: 13, green: 13, blue: 13 }
color.g = 14;                                                              // { red: 13, green: 14, blue: 13 }
color.blue = 15;                                                           // { red: 13, green: 14, blue: 15 }
Entities.editEntity(<id>, { color: "red"});                                // { red: 255, green: 0, blue: 0 }
Entities.editEntity(<id>, { color: "#00FF00"});                            // { red: 0, green: 255, blue: 0 }
```

</div>

<div class="api-entry">

### ColorFloat {#ColorFloat}

<div class="api-text" v-pre><p>A color vector with real values. Values may also be <code>null</code>. See also the <a href="Vec3">Vec3</a> object.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>red</code></td><td>number</td><td><p>Red component value. Real in the range <code>0</code> - <code>255</code>. Synonyms: <code>r</code>, <code>x</code>.</p></td></tr>
<tr><td><code>green</code></td><td>number</td><td><p>Green component value. Real in the range <code>0</code> - <code>255</code>. Synonyms: <code>g</code>, <code>y</code>.</p></td></tr>
<tr><td><code>blue</code></td><td>number</td><td><p>Blue component value. Real in the range <code>0</code> - <code>255</code>. Synonyms: <code>b</code>, <code>z</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>ColorFloats can be set in multiple ways and modified with their aliases, but still stringify in the same way</p></div>

```js
Entities.editEntity(<id>, { color: { x: 1, y: 2, z: 3 }});                 // { red: 1, green: 2, blue: 3 }
Entities.editEntity(<id>, { color: { r: 4, g: 5, b: 6 }});                 // { red: 4, green: 5, blue: 6 }
Entities.editEntity(<id>, { color: { red: 7, green: 8, blue: 9 }});        // { red: 7, green: 8, blue: 9 }
Entities.editEntity(<id>, { color: [10, 11, 12] });                        // { red: 10, green: 11, blue: 12 }
Entities.editEntity(<id>, { color: 13 });                                  // { red: 13, green: 13, blue: 13 }
var color = Entities.getEntityProperties(<id>).color;                      // { red: 13, green: 13, blue: 13 }
color.g = 14;                                                              // { red: 13, green: 14, blue: 13 }
color.blue = 15;                                                           // { red: 13, green: 14, blue: 15 }
Entities.editEntity(<id>, { color: "red"});                                // { red: 255, green: 0, blue: 0 }
Entities.editEntity(<id>, { color: "#00FF00"});                            // { red: 0, green: 255, blue: 0 }
```

</div>

<div class="api-entry">

### ContactEventType {#ContactEventType}

<div class="api-text" v-pre><p>The type of a collision contact event.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>Start of the collision.</td></tr>
 <tr><td><code>1</code></td><td>Continuation of the collision.</td></tr>
 <tr><td><code>2</code></td><td>End of the collision.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### DriveKey {#DriveKey}

<div class="api-text" v-pre><p>Logical keys that drive your avatar and camera.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code><a href="DriveKeys">DriveKeys.TRANSLATE_X</a></code></td><td>Move the user's avatar in the direction of its x-axis, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.TRANSLATE_Y</a></code></td><td>Move the user's avatar in the direction of its -axis, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.TRANSLATE_Z</a></code></td><td>Move the user's avatar in the direction of its z-axis, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.YAW</a></code></td><td>Rotate the user's avatar about its y-axis at a rate proportional to the control value, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.STEP_TRANSLATE_X</a></code></td><td>No action.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.STEP_TRANSLATE_Y</a></code></td><td>No action.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.STEP_TRANSLATE_Z</a></code></td><td>No action.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.STEP_YAW</a></code></td><td>Rotate the user's avatar about its y-axis in a step increment, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.PITCH</a></code></td><td>Rotate the user's avatar head and attached camera about its negative x-axis (i.e., positive values pitch down) at a rate proportional to the control value, if the camera isn't in HMD, independent, or mirror modes.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.ZOOM</a></code></td><td>Zoom the camera in or out.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.DELTA_YAW</a></code></td><td>Rotate the user's avatar about its y-axis by an amount proportional to the control value, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code><a href="DriveKeys">DriveKeys.DELTA_PITCH</a></code></td><td>Rotate the user's avatar head and attached camera about its negative x-axis (i.e., positive values pitch down) by an amount proportional to the control value, if the camera isn't in HMD, independent, or mirror modes.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### FilterFlags {#FilterFlags}

<div class="api-text" v-pre><p>A set of flags for a pick filter. The value is constructed by using the <code>|</code> (bitwise OR) operator on the individual flag values.</p>
 <table> <thead> <tr><th>Flag Name</th><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td>PICK_DOMAIN_ENTITIES</td><td><code>1</code></td><td>Include domain entities when intersecting.</td></tr>
 <tr><td>PICK_AVATAR_ENTITIES</td><td><code>2</code></td><td>Include avatar entities when intersecting.</td></tr>
 <tr><td>PICK_LOCAL_ENTITIES</td><td><code>4</code></td><td>Include local entities when intersecting.</td></tr>
 <tr><td>PICK_AVATARS</td><td><code>8</code></td><td>Include avatars when intersecting.</td></tr>
 <tr><td>PICK_HUD</td><td><code>16</code></td><td>Include the HUD surface when intersecting in HMD mode.</td></tr>
 <tr><td>PICK_INCLUDE_VISIBLE</td><td><code>32</code></td><td>Include visible objects when intersecting.</td></tr>
 <tr><td>PICK_INCLUDE_INVISIBLE</td><td><code>64</code></td><td>Include invisible objects when intersecting.</td></tr>
 <tr><td>PICK_INCLUDE_COLLIDABLE</td><td><code>128</code></td><td>Include collidable objects when intersecting.</td></tr>
 <tr><td>PICK_INCLUDE_NONCOLLIDABLE</td><td><code>256</code></td><td>Include non-collidable objects when intersecting.</td></tr>
 <tr><td>PICK_PRECISE</td><td><code>512</code></td><td>Pick against exact meshes.</td></tr>
 <tr><td>PICK_COARSE</td><td><code>1024</code></td><td>Pick against coarse meshes.</td></tr>
 <tr><td>PICK_ALL_INTERSECTIONS</td><td><code>2048</code></td><td>Return all intersections instead of just the closest.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### HandState {#HandState}

<div class="api-text" v-pre><p>The pointing state of the hands is specified by the following values:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th> </tr>
</thead>
 <tbody> <tr><td><code>0</code></td><td>No hand is pointing.</td></tr>
 <tr><td><code>1</code></td><td>The left hand is pointing.</td></tr>
 <tr><td><code>2</code></td><td>The right hand is pointing.</td></tr>
 <tr><td><code>4</code></td><td>It is the index finger that is pointing.</td></tr>
 </tbody>
 </table>
 <p>The values for the hand states are added together to give the <code>HandState</code> value. For example, if the left hand's finger is pointing, the value is <code>1 + 4 == 5</code>.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### IntersectingObject {#IntersectingObject}

<div class="api-text" v-pre><p>Information about a <code>CollisionPick</code>'s intersection with an object.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the object.</p></td></tr>
<tr><td><code>type</code></td><td><a href="#IntersectionType">IntersectionType</a></td><td><p>The type of the object, either <code>1</code> for INTERSECTED_ENTITY or <code>3</code> for INTERSECTED_AVATAR.</p></td></tr>
<tr><td><code>collisionContacts</code></td><td>Array&lt;<a href="#CollisionContact">CollisionContact</a>&gt;</td><td><p>Information on the penetration between the pick and the object.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### IntersectionType {#IntersectionType}

<div class="api-text" v-pre><p>The type of an intersection.</p>
 <table> <thead> <tr><th>Name</th><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td>INTERSECTED_NONE</td><td><code>0</code></td><td>Intersected nothing.</td></tr>
 <tr><td>INTERSECTED_ENTITY</td><td><code>1</code></td><td>Intersected an entity.</td></tr>
 <tr><td>INTERSECTED_LOCAL_ENTITY</td><td><code>2</code></td><td>Intersected a local entity.</td></tr>
 <tr><td>INTERSECTED_AVATAR</td><td><code>3</code></td><td>Intersected an avatar.</td></tr>
 <tr><td>INTERSECTED_HUD</td><td><code>4</code></td><td>Intersected the HUD surface.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### KeyboardModifiers {#KeyboardModifiers}

<div class="api-text" v-pre><p>A KeyboardModifiers value is used to specify which modifier keys on the keyboard are pressed. The value is the sum (bitwise OR) of the relevant combination of values from the following table:</p>
 <table> <thead> <tr><th>Key</th><th>Hexadecimal value</th><th>Decimal value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td>Shift</td><td><code>0x02000000</code></td><td><code>33554432</code></td> <td>A Shift key on the keyboard is pressed.</td></tr>
 <tr><td>Control</td><td><code>0x04000000</code></td><td><code>67108864</code></td> <td>A control key on the keyboard is pressed. On Windows the "control" key is the Ctrl key; on OSX it is the Command key.</td></tr>
 <tr><td>Alt</td><td><code>0x08000000</code></td><td><code>134217728</code></td> <td>An Alt key on the keyboard is pressed.</td></tr>
 <tr><td>Meta</td><td><code>0x10000000</code></td><td><code>268435456</code></td> <td>A meta key on the keyboard is pressed. On Windows the "meta" key is the Windows key; on OSX it is the Control (Splat) key.</td></tr>
 <tr><td>Keypad</td><td><code>0x20000000</code></td><td><code>536870912</code></td> <td>A keypad button is pressed.</td></tr>
 <tr><td>Group</td><td><code>0x40000000</code></td><td><code>1073741824</code></td> <td>X11 operating system only: An AltGr / Mode_switch key on the keyboard is pressed.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### KeyEvent {#KeyEvent}

<div class="api-text" v-pre><p>A keyboard key event.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>number</td><td><p>The Qt keyboard code of the key pressed. For a list of keyboard codes, see <a href="http://doc.qt.io/qt-5/qt.html#Key-enum" target="_blank" rel="noopener">http://doc.qt.io/qt-5/qt.html#Key-enum</a>.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><p>A string describing the key. For example, <code>"a"</code> for the "A" key if the Shift is not pressed, <code>"F1"</code> for the F1 key, <code>"SPACE"</code> for the space bar.</p></td></tr>
<tr><td><code>isShifted</code></td><td>boolean</td><td><p><code>true</code> if a Shift key was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isMeta</code></td><td>boolean</td><td><p><code>true</code> if a meta key was pressed when the event was generated, otherwise <code>false</code>. On Windows the "meta" key is the Windows key; on OSX it is the Control (Splat) key.</p></td></tr>
<tr><td><code>isControl</code></td><td>boolean</td><td><p><code>true</code> if a control key was pressed when the event was generated, otherwise <code>false</code>. On Windows the "control" key is the Ctrl key; on OSX it is the Command key.</p></td></tr>
<tr><td><code>isAlt</code></td><td>boolean</td><td><p><code>true</code> if an Alt key was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isKeypad</code></td><td>boolean</td><td><p><code>true</code> if the key is on the numeric keypad, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isAutoRepeat</code></td><td>boolean</td><td><p><code>true</code> if the event is a repeat for key that is being held down, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the KeyEvent details for each key press.</p></div>

```js
Controller.keyPressEvent.connect(function (event) {
    print(JSON.stringify(event));
});
```

</div>

<div class="api-entry">

### MeshFace {#MeshFace}

<div class="api-text" v-pre><p>A triangle in a mesh.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>vertices</code></td><td>Array&lt;number&gt;</td><td><p>The indexes of the three vertices that make up the fase.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### MouseEvent {#MouseEvent}

<div class="api-text" v-pre><p>A controller mouse movement or button event.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>Integer x-coordinate of the event on the Interface window or HMD HUD.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Integer y-coordinate of the event on the Interface window or HMD HUD.</p></td></tr>
<tr><td><code>button</code></td><td>string</td><td><p><code>"LEFT"</code>, <code>"MIDDLE"</code>, or <code>"RIGHT"</code> if a button press or release caused the event, otherwise <code>"NONE"</code>.</p></td></tr>
<tr><td><code>isLeftButton</code></td><td>boolean</td><td><p><code>true</code> if the left button was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isMiddleButton</code></td><td>boolean</td><td><p><code>true</code> if the middle button was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isRightButton</code></td><td>boolean</td><td><p><code>true</code> if the right button was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isShifted</code></td><td>boolean</td><td><p><code>true</code> if the Shift key was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isMeta</code></td><td>boolean</td><td><p><code>true</code> if the "meta" key was pressed when the event was generated, otherwise <code>false</code>. On Windows the "meta" key is the Windows key; on OSX it is the Control (Splat) key.</p></td></tr>
<tr><td><code>isControl</code></td><td>boolean</td><td><p><code>true</code> if the "control" key was pressed when the event was generated, otherwise <code>false</code>. On Windows the "control" key is the Ctrl key; on OSX it is the Command key.</p></td></tr>
<tr><td><code>isAlt</code></td><td>boolean</td><td><p><code>true</code> if the Alt key was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the MouseEvent details for each mouse move.</p></div>

```js
Controller.mouseMoveEvent.connect(function (event) {
    print(JSON.stringify(event));
});
```

</div>

<div class="api-entry">

### ParabolaPickResult {#ParabolaPickResult}

<div class="api-text" v-pre><p>An intersection result for a parabola pick.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>number</td><td><p>The intersection type.</p></td></tr>
<tr><td><code>intersects</code></td><td>boolean</td><td><p><code>true</code> if there's a valid intersection, <code>false</code> if there isn't.</p></td></tr>
<tr><td><code>objectID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the intersected object. <code>null</code> for HUD or invalid intersections.</p></td></tr>
<tr><td><code>distance</code></td><td>number</td><td><p>The distance from the parabola origin to the intersection point in a straight line.</p></td></tr>
<tr><td><code>parabolicDistance</code></td><td>number</td><td><p>The distance from the parabola origin to the intersection point along the arc of the parabola.</p></td></tr>
<tr><td><code>intersection</code></td><td><a href="Vec3">Vec3</a></td><td><p>The intersection point in world coordinates.</p></td></tr>
<tr><td><code>surfaceNormal</code></td><td><a href="Vec3">Vec3</a></td><td><p>The surface normal at the intersected point. All <code>NaN</code>s if <code>type == Picks.INTERSECTED_HUD</code>.</p></td></tr>
<tr><td><code>extraInfo</code></td><td><a href="#SubmeshIntersection">SubmeshIntersection</a></td><td><p>Additional intersection details for model objects, otherwise <code>{ }</code>.</p></td></tr>
<tr><td><code>parabola</code></td><td><a href="#PickParabola">PickParabola</a></td><td><p>The pick parabola that was used. Valid even if there is no intersection.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PickParabola {#PickParabola}

<div class="api-text" v-pre><p>A parabola defined by a starting point, initial velocity, and acceleration. It is used, for example, when finding entities or avatars that intersect a parabolic beam.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>origin</code></td><td><a href="Vec3">Vec3</a></td><td><p>The starting position of the parabola, i.e., the initial position of a virtual projectile whose trajectory defines the parabola.</p></td></tr>
<tr><td><code>velocity</code></td><td><a href="Vec3">Vec3</a></td><td><p>The starting velocity of the parabola in m/s, i.e., the initial speed of a virtual projectile whose trajectory defines the parabola.</p></td></tr>
<tr><td><code>acceleration</code></td><td><a href="Vec3">Vec3</a></td><td><p>The acceleration that the parabola experiences in m/s<sup>2</sup>, i.e., the acceleration of a virtual projectile whose trajectory defines the parabola, both magnitude and direction.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PickRay {#PickRay}

<div class="api-text" v-pre><p>A vector with a starting point. It is used, for example, when finding entities or avatars that lie under a mouse click or intersect a laser beam.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>origin</code></td><td><a href="Vec3">Vec3</a></td><td><p>The starting position of the ray.</p></td></tr>
<tr><td><code>direction</code></td><td><a href="Vec3">Vec3</a></td><td><p>The direction that the ray travels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PointerEvent {#PointerEvent}

<div class="api-text" v-pre><p>A 2D or 3D mouse or similar pointer event.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>string</td><td><p>The type of event: <code>"Press"</code>, <code>"DoublePress"</code>, <code>"Release"</code>, or <code>"Move"</code>.</p></td></tr>
<tr><td><code>id</code></td><td>number</td><td><p>Integer number used to identify the pointer: <code>0</code> = hardware mouse, <code>1</code> = left controller, <code>2</code> = right controller.</p></td></tr>
<tr><td><code>pos2D</code></td><td><a href="#Vec2">Vec2</a></td><td><p>The 2D position of the event on the intersected object XY plane, where applicable.</p></td></tr>
<tr><td><code>pos3D</code></td><td><a href="Vec3">Vec3</a></td><td><p>The 3D position of the event on the intersected object, where applicable.</p></td></tr>
<tr><td><code>normal</code></td><td><a href="Vec3">Vec3</a></td><td><p>The surface normal at the intersection point.</p></td></tr>
<tr><td><code>direction</code></td><td><a href="Vec3">Vec3</a></td><td><p>The direction of the intersection ray.</p></td></tr>
<tr><td><code>button</code></td><td>string</td><td><p>The name of the button pressed: <code>None</code>, <code>Primary</code>, <code>Secondary</code>, or <code>Tertiary</code>.</p></td></tr>
<tr><td><code>isPrimaryButton</code></td><td>boolean</td><td><p><code>true</code> if the button pressed was the primary button, otherwise <code>undefined</code>;</p></td></tr>
<tr><td><code>isLeftButton</code></td><td>boolean</td><td><p><code>true</code> if the button pressed was the primary button, otherwise <code>undefined</code>;</p></td></tr>
<tr><td><code>isSecondaryButton</code></td><td>boolean</td><td><p><code>true</code> if the button pressed was the secondary button, otherwise <code>undefined</code>;</p></td></tr>
<tr><td><code>isRightButton</code></td><td>boolean</td><td><p><code>true</code> if the button pressed was the secondary button, otherwise <code>undefined</code>;</p></td></tr>
<tr><td><code>isTertiaryButton</code></td><td>boolean</td><td><p><code>true</code> if the button pressed was the tertiary button, otherwise <code>undefined</code>;</p></td></tr>
<tr><td><code>isMiddleButton</code></td><td>boolean</td><td><p><code>true</code> if the button pressed was the tertiary button, otherwise <code>undefined</code>;</p></td></tr>
<tr><td><code>isPrimaryHeld</code></td><td>boolean</td><td><p><code>true</code> if the primary button is currently being pressed, otherwise <code>false</code></p></td></tr>
<tr><td><code>isSecondaryHeld</code></td><td>boolean</td><td><p><code>true</code> if the secondary button is currently being pressed, otherwise <code>false</code></p></td></tr>
<tr><td><code>isTertiaryHeld</code></td><td>boolean</td><td><p><code>true</code> if the tertiary button is currently being pressed, otherwise <code>false</code></p></td></tr>
<tr><td><code>keyboardModifiers</code></td><td><a href="#KeyboardModifiers">KeyboardModifiers</a></td><td><p>Integer value with bits set according to which keyboard modifier keys were pressed when the event was generated.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### Pose {#Pose}

<div class="api-text" v-pre><p>The pose of a joint or other item relative to the world or a parent.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>Translation.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>Rotation.</p></td></tr>
<tr><td><code>velocity</code></td><td><a href="Vec3">Vec3</a></td><td><p>Velocity in m/s.</p></td></tr>
<tr><td><code>angularVelocity</code></td><td><a href="Vec3">Vec3</a></td><td><p>Angular velocity in rad/s.</p></td></tr>
<tr><td><code>valid</code></td><td>boolean</td><td><p><code>true</code> if the pose is valid, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ProceduralData {#ProceduralData}

<div class="api-text" v-pre><p>The data used to define a Procedural shader material.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>version</code></td><td>number</td><td><code>1</code></td><td><p>The version of the procedural shader.</p></td></tr>
<tr><td><code>vertexShaderURL</code></td><td>string</td><td></td><td><p>A link to a vertex shader. Currently, only GLSL shaders are supported. The shader must implement a different method depending on the version. If a procedural material contains a vertex shader, the bounding box of the material entity is used to cull the object to which the material is applied.</p></td></tr>
<tr><td><code>fragmentShaderURL</code></td><td>string</td><td></td><td><p>A link to a fragment shader. Currently, only GLSL shaders are supported. The shader must implement a different method depending on the version. <code>shaderUrl</code> is an alias.</p></td></tr>
<tr><td><code>channels</code></td><td>Array&lt;string&gt;</td><td><code>[</code></td><td><p>An array of input texture URLs. Currently, up to 4 are supported.</p></td></tr>
<tr><td><code>uniforms</code></td><td><a href="#ProceduralUniforms">ProceduralUniforms</a></td><td><code>{}</code></td><td><p>A <a href="#ProceduralUniforms"><code>ProceduralUniforms</code></a> object containing all the custom uniforms to be passed to the shader.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ProceduralUniforms {#ProceduralUniforms}

<div class="api-text" v-pre><p>An object containing user-defined uniforms for communicating data to shaders.</p></div>

</div>

<div class="api-entry">

### RayPickResult {#RayPickResult}

<div class="api-text" v-pre><p>An intersection result for a ray pick.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td><a href="#IntersectionType">IntersectionType</a></td><td><p>The intersection type.</p></td></tr>
<tr><td><code>intersects</code></td><td>boolean</td><td><p><code>true</code> if there's a valid intersection, <code>false</code> if there isn't.</p></td></tr>
<tr><td><code>objectID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the intersected object. <code>null</code> for HUD or invalid intersections.</p></td></tr>
<tr><td><code>distance</code></td><td>number</td><td><p>The distance from the ray origin to the intersection point.</p></td></tr>
<tr><td><code>intersection</code></td><td><a href="Vec3">Vec3</a></td><td><p>The intersection point in world coordinates.</p></td></tr>
<tr><td><code>surfaceNormal</code></td><td><a href="Vec3">Vec3</a></td><td><p>The surface normal at the intersected point. All <code>NaN</code>s if <code>type == Picks.INTERSECTED_HUD</code>.</p></td></tr>
<tr><td><code>extraInfo</code></td><td><a href="#SubmeshIntersection">SubmeshIntersection</a></td><td><p>Additional intersection details for model objects, otherwise <code>{ }</code>.</p></td></tr>
<tr><td><code>searchRay</code></td><td><a href="#PickRay">PickRay</a></td><td><p>The pick ray that was used. Valid even if there is no intersection.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RayToAvatarIntersectionResult {#RayToAvatarIntersectionResult}

<div class="api-text" v-pre><p>Information about a ray-to-avatar intersection.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>intersects</code></td><td>boolean</td><td><p><code>true</code> if an avatar is intersected, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>avatarID</code></td><td>string</td><td><p>The ID of the avatar that is intersected.</p></td></tr>
<tr><td><code>distance</code></td><td>number</td><td><p>The distance from the ray origin to the intersection.</p></td></tr>
<tr><td><code>face</code></td><td>string</td><td><p>The name of the box face that is intersected; <code>"UNKNOWN_FACE"</code> if mesh was picked against.</p></td></tr>
<tr><td><code>intersection</code></td><td><a href="Vec3">Vec3</a></td><td><p>The ray intersection point in world coordinates.</p></td></tr>
<tr><td><code>surfaceNormal</code></td><td><a href="Vec3">Vec3</a></td><td><p>The surface normal at the intersection point.</p></td></tr>
<tr><td><code>jointIndex</code></td><td>number</td><td><p>The index of the joint intersected.</p></td></tr>
<tr><td><code>extraInfo</code></td><td><a href="#SubmeshIntersection">SubmeshIntersection</a></td><td><p>Extra information on the mesh intersected if mesh was picked against, <code>{}</code> if it wasn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### Rect {#Rect}

<div class="api-text" v-pre><p>Defines a rectangular portion of an image or screen, or similar.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>Left, x-coordinate value.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Top, y-coordinate value.</p></td></tr>
<tr><td><code>width</code></td><td>number</td><td><p>Width of the rectangle.</p></td></tr>
<tr><td><code>height</code></td><td>number</td><td><p>Height of the rectangle.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RefreshRateProfileName {#RefreshRateProfileName}

<div class="api-text" v-pre><p>Refresh rate profile.</p>
 <table> <thead> <tr> <th>Value</th> <th>Description</th> </tr>
 </thead>
 <tbody> <tr> <td><code>"Eco"</code></td> <td>20 FPS target rate, reduced when Interface doesn't have focus or is minimized</td> </tr>
 <tr> <td><code>"Interactive"</code></td> <td>30 FPS target rate, reduced when Interface doesn't have focus or is minimized</td> </tr>
 <tr> <td><code>"Realtime"</code></td> <td>60 FPS target rate, reduced when Interface doesn't have focus or is minimized</td> </tr>
 <tr> <td><code>"Display-based"</code></td> <td>Targets the refresh rate of your screen, reduced when Interface doesn't have focus or is minimized</td> </tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### RefreshRateRegime {#RefreshRateRegime}

<div class="api-text" v-pre><p>Interface states that affect the refresh rate.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th> </tr>
</thead>
 <tbody> <tr><td><code>0</code></td><td>FOCUS_ACTIVE</td><td>Interface has focus and the user is active or is in VR.</td></tr>
 <tr><td><code>1</code></td><td>FOCUS_INACTIVE</td><td>Interface has focus and the user is inactive.</td></tr>
 <tr><td><code>2</code></td><td>UNFOCUS</td><td>Interface doesn't have focus.</td></tr>
 <tr><td><code>3</code></td><td>MINIMIZED</td><td>Interface is minimized.</td></tr>
 <tr><td><code>4</code></td><td>STARTUP</td><td>Interface is starting up.</td></tr>
 <tr><td><code>5</code></td><td>SHUTDOWN</td><td>Interface is shutting down.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### RefreshRateRegimeName {#RefreshRateRegimeName}

<div class="api-text" v-pre><p>Interface states that affect the refresh rate.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"FocusActive"</code></td><td>Interface has focus and the user is active or is in VR.</td></tr>
 <tr><td><code>"FocusInactive"</code></td><td>Interface has focus and the user is inactive.</td></tr>
 <tr><td><code>"Unfocus"</code></td><td>Interface doesn't have focus.</td></tr>
 <tr><td><code>"Minimized"</code></td><td>Interface is minimized.</td></tr>
 <tr><td><code>"StartUp"</code></td><td>Interface is starting up.</td></tr>
 <tr><td><code>"ShutDown"</code></td><td>Interface is shutting down.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### RequestCallback {#RequestCallback}

<div class="api-text" v-pre><p>Callback for the <a href="#request"><code>request</code></a> function.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td></td></tr>
<tr><td><code>response</code></td><td><a href="#RequestResponse">RequestResponse</a></td><td></td></tr>
<tr><td><code>body</code></td><td>string | Object</td><td><p>Returns the response body or object if <code>json</code> was enabled in the request options.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RequestOptions {#RequestOptions}

<div class="api-text" v-pre><p>Options for the <a href="#request"><code>request</code></a> function.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>uri</code> <em>optional</em></td><td>string</td><td><p>URI to be requested.</p></td></tr>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><p>URI to be requested. (alias to <code>uri</code>)</p></td></tr>
<tr><td><code>method</code> <em>optional</em></td><td>string</td><td><p>Find <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" target="_blank" rel="noopener">all HTTP methods here</a>.</p></td></tr>
<tr><td><code>json</code> <em>optional</em></td><td>boolean</td><td><p>Whether to expect the response as JSON which will be parsed.</p></td></tr>
<tr><td><code>body</code> <em>optional</em></td><td>Object&lt;string, string&gt;</td><td><p>Object of body parameters to send.</p></td></tr>
<tr><td><code>headers</code> <em>optional</em></td><td>Object&lt;string, string&gt;</td><td><p>Object of headers to send.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RequestResponse {#RequestResponse}

<div class="api-text" v-pre><p>Response for the <a href="#request"><code>request</code></a> function.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>statusCode</code></td><td>number</td><td><p>Find <a href="https://www.restapitutorial.com/httpstatuscodes.html" target="_blank" rel="noopener">all HTTP status codes here</a>.</p></td></tr>
<tr><td><code>headers</code></td><td>Object&lt;string, string&gt;</td><td><p>Reponse headers where each key is lowercase, e.g. <code>headers["content-type"]</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RGBS {#RGBS}

<div class="api-text" v-pre><p>An RGB or SRGB color value.</p>
 <table> <thead> <tr><th>Index</th><th>Type</th><th>Attributes</th><th>Default</th><th>Value</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>number</td><td></td><td></td> <td>Red component value. Number in the range <code>0.0</code> – <code>1.0</code>.</td></tr>
 <tr><td><code>1</code></td><td>number</td><td></td><td></td> <td>Green component value. Number in the range <code>0.0</code> – <code>1.0</code>.</td></tr>
 <tr><td><code>2</code></td><td>number</td><td></td><td></td> <td>Blue component value. Number in the range <code>0.0</code> – <code>1.0</code>.</td></tr>
 <tr><td><code>3</code></td><td>boolean</td><td>&lt;optional&gt;</td><td>false</td> <td>If <code>true</code> then the color is an SRGB color.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> array</div>

</div>

<div class="api-entry">

### Shape {#Shape}

<div class="api-text" v-pre><p>A physical volume.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>shapeType</code></td><td><a href="#ShapeType">ShapeType</a></td><td><code>&quot;none&quot;</code></td><td><p>The type of shape.</p></td></tr>
<tr><td><code>modelUrl</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The model to load to for the shape if <code>shapeType</code> is one of <code>"compound"</code>, <code>"simple-hull"</code>, <code>"simple-compound"</code>, or <code>"static-mesh"</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the shape.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ShapeType {#ShapeType}

<div class="api-text" v-pre><p>Defines the shape used for collisions or zones.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"none"</code></td><td>No shape.</td></tr>
 <tr><td><code>"box"</code></td><td>A cube.</td></tr>
 <tr><td><code>"sphere"</code></td><td>A sphere.</td></tr>
 <tr><td><code>"capsule-x"</code></td><td>A capsule (cylinder with spherical ends) oriented on the x-axis.</td></tr>
 <tr><td><code>"capsule-y"</code></td><td>A capsule (cylinder with spherical ends) oriented on the y-axis.</td></tr>
 <tr><td><code>"capsule-z"</code></td><td>A capsule (cylinder with spherical ends) oriented on the z-axis.</td></tr>
 <tr><td><code>"cylinder-x"</code></td><td>A cylinder oriented on the x-axis.</td></tr>
 <tr><td><code>"cylinder-y"</code></td><td>A cylinder oriented on the y-axis.</td></tr>
 <tr><td><code>"cylinder-z"</code></td><td>A cylinder oriented on the z-axis.</td></tr>
 <tr><td><code>"hull"</code></td><td><em>Not used.</em></td></tr>
 <tr><td><code>"compound"</code></td><td>A compound convex hull specified in an OBJ file.</td></tr>
 <tr><td><code>"simple-hull"</code></td><td>A convex hull automatically generated from the model.</td></tr>
 <tr><td><code>"simple-compound"</code></td><td>A compound convex hull automatically generated from the model, using sub-meshes.</td></tr>
 <tr><td><code>"static-mesh"</code></td><td>The exact shape of the model.</td></tr>
 <tr><td><code>"plane"</code></td><td>A plane.</td></tr>
 <tr><td><code>"ellipsoid"</code></td><td>An ellipsoid.</td></tr>
 <tr><td><code>"circle"</code></td><td>A circle.</td></tr>
 <tr><td><code>"multisphere"</code></td><td>A convex hull generated from a set of spheres.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### Size {#Size}

<div class="api-text" v-pre><p>A 2D size value.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>height</code></td><td>number</td><td><p>The height value.</p></td></tr>
<tr><td><code>width</code></td><td>number</td><td><p>The width value.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### SkeletonJoint {#SkeletonJoint}

<div class="api-text" v-pre><p>Information about a joint in an avatar's skeleton hierarchy.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Joint name.</p></td></tr>
<tr><td><code>index</code></td><td>number</td><td><p>Joint index.</p></td></tr>
<tr><td><code>parentIndex</code></td><td>number</td><td><p>Index of this joint's parent (-1 if no parent).</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### StylusPickResult {#StylusPickResult}

<div class="api-text" v-pre><p>An intersection result for a stylus pick.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>number</td><td><p>The intersection type.</p></td></tr>
<tr><td><code>intersects</code></td><td>boolean</td><td><p><code>true</code> if there's a valid intersection, <code>false</code> if there isn't.</p></td></tr>
<tr><td><code>objectID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the intersected object. <code>null</code> for invalid intersections.</p></td></tr>
<tr><td><code>distance</code></td><td>number</td><td><p>The distance to the intersection point from the stylus tip.</p></td></tr>
<tr><td><code>intersection</code></td><td><a href="Vec3">Vec3</a></td><td><p>The intersection point in world coordinates.</p></td></tr>
<tr><td><code>surfaceNormal</code></td><td><a href="Vec3">Vec3</a></td><td><p>The surface normal at the intersected point.</p></td></tr>
<tr><td><code>stylusTip</code></td><td><a href="#StylusTip">StylusTip</a></td><td><p>The stylus tip at the time of the result. Valid even if there is no intersection.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### StylusTip {#StylusTip}

<div class="api-text" v-pre><p>The tip of a stylus.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>side</code></td><td>number</td><td><p>The hand that the stylus is attached to: <code>0</code> for left hand, <code>1</code> for the right hand, <code>-1</code> for invalid.</p></td></tr>
<tr><td><code>tipOffset</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of the stylus tip relative to the body of the stylus.</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of the stylus tip.</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td><p>The orientation of the stylus.</p></td></tr>
<tr><td><code>velocity</code></td><td><a href="Vec3">Vec3</a></td><td><p>The velocity of the stylus tip.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### SubmeshIntersection {#SubmeshIntersection}

<div class="api-text" v-pre><p>A submesh intersection point.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>worldIntersectionPoint</code></td><td><a href="Vec3">Vec3</a></td><td><p>The intersection point in world coordinates.</p></td></tr>
<tr><td><code>meshIntersectionPoint</code></td><td><a href="Vec3">Vec3</a></td><td><p>The intersection point in model coordinates.</p></td></tr>
<tr><td><code>partIndex</code></td><td>number</td><td><p>The index of the intersected mesh part within the submesh.</p></td></tr>
<tr><td><code>shapeID</code></td><td>number</td><td><p>The index of the mesh part within the model.</p></td></tr>
<tr><td><code>subMeshIndex</code></td><td>number</td><td><p>The index of the intersected submesh within the model.</p></td></tr>
<tr><td><code>subMeshName</code></td><td>string</td><td><p>The name of the intersected submesh.</p></td></tr>
<tr><td><code>subMeshTriangleWorld</code></td><td><a href="#Triangle">Triangle</a></td><td><p>The vertices of the intersected mesh part triangle in world coordinates.</p></td></tr>
<tr><td><code>subMeshNormal</code></td><td><a href="Vec3">Vec3</a></td><td><p>The normal of the intersected mesh part triangle in model coordinates.</p></td></tr>
<tr><td><code>subMeshTriangle</code></td><td><a href="#Triangle">Triangle</a></td><td><p>The vertices of the intersected mesh part triangle in model coordinates.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### TouchEvent {#TouchEvent}

<div class="api-text" v-pre><p>A display or device touch event.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>Integer x-coordinate of the average position of the touch events.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Integer y-coordinate of the average position of the touch events.</p></td></tr>
<tr><td><code>isPressed</code></td><td>boolean</td><td><p><code>true</code> if the touch point has just been pressed, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isMoved</code></td><td>boolean</td><td><p><code>true</code> if the touch point has moved, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isStationary</code></td><td>boolean</td><td><p><code>true</code> if the touch point has not moved, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isReleased</code></td><td>boolean</td><td><p><code>true</code> if the touch point has just been released, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isShifted</code></td><td>boolean</td><td><p><code>true</code> if the Shift key was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isMeta</code></td><td>boolean</td><td><p><code>true</code> if the "meta" key was pressed when the event was generated, otherwise <code>false</code>. On Windows the "meta" key is the Windows key; on OSX it is the Control (Splat) key.</p></td></tr>
<tr><td><code>isControl</code></td><td>boolean</td><td><p><code>true</code> if the "control" key was pressed when the event was generated, otherwise <code>false</code>. On Windows the "control" key is the Ctrl key; on OSX it is the Command key.</p></td></tr>
<tr><td><code>isAlt</code></td><td>boolean</td><td><p><code>true</code> if the Alt key was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>touchPoints</code></td><td>number</td><td><p>Integer number of touch points.</p></td></tr>
<tr><td><code>points</code></td><td>Array&lt;<a href="#Vec2">Vec2</a>&gt;</td><td><p>The coordinates of the touch points.</p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td><p>The radius of a circle centered on their average position that encompasses the touch points.</p></td></tr>
<tr><td><code>isPinching</code></td><td>boolean</td><td><p><code>true</code> if the <code>radius</code> has reduced since the most recent touch event with a different <code>radius</code> value, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isPinchOpening</code></td><td>boolean</td><td><p><code>true</code> if the <code>radius</code> has increased since the most recent touch event with a different <code>radius</code> value, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>angle</code></td><td>number</td><td><p>An angle calculated from the touch points, in degrees.</p></td></tr>
<tr><td><code>deltaAngle</code></td><td>number</td><td><p>The change in the <code>angle</code> value since the previous touch event, in degrees, if the number of touch points is the same, otherwise <code>0.0</code>.</p></td></tr>
<tr><td><code>angles</code></td><td>Array&lt;number&gt;</td><td><p>The angles of each touch point about the center of all the touch points, in degrees.</p></td></tr>
<tr><td><code>isRotating</code></td><td>boolean</td><td><p><code>true</code> if the <code>angle</code> of the touch event has changed since the previous touch event and the number of touch points is the same, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>rotating</code></td><td>string</td><td><p><code>"clockwise"</code> or <code>"counterClockwise"</code> if the <code>angle</code> of the touch event has changed since the previous touch event and the number of touch points is the same, otherwise <code>"none"</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the TouchEvent details when a touch event starts.</p></div>

```js
Controller.touchBeginEvent.connect(function (event) {
    print(JSON.stringify(event));
});
```

</div>

<div class="api-entry">

### Triangle {#Triangle}

<div class="api-text" v-pre><p>A triangle in a mesh.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v0</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of vertex 0 in the triangle.</p></td></tr>
<tr><td><code>v1</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of vertex 1 in the triangle.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of vertex 2 in the triangle.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### UXMode {#UXMode}

<div class="api-text" v-pre><p>User experience (UX) modes.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th> </tr>
</thead>
 <tbody> <tr><td><code>0</code></td><td>DESKTOP</td><td>Desktop user experience.</td></tr>
 <tr><td><code>1</code></td><td>VR</td><td>VR use experience.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### UXModeName {#UXModeName}

<div class="api-text" v-pre><p>User experience (UX) modes.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"Desktop"</code></td><td>Desktop user experience.</td></tr>
 <tr><td><code>"VR"</code></td><td>VR user experience.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### Vec2 {#Vec2}

<div class="api-text" v-pre><p>A 2-dimensional vector.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>X-coordinate of the vector. Synonyms: <code>u</code>.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Y-coordinate of the vector. Synonyms: <code>v</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Vec2s can be set in multiple ways and modified with their aliases, but still stringify in the same way</p></div>

```js
Entities.editEntity(<id>, { materialMappingPos: { x: 0.1, y: 0.2 }});          // { x: 0.1, y: 0.2 }
Entities.editEntity(<id>, { materialMappingPos: { u: 0.3, v: 0.4 }});          // { x: 0.3, y: 0.4 }
Entities.editEntity(<id>, { materialMappingPos: [0.5, 0.6] });                 // { x: 0.5, y: 0.6 }
Entities.editEntity(<id>, { materialMappingPos: 0.7 });                        // { x: 0.7, y: 0.7 }
var color = Entities.getEntityProperties(<id>).materialMappingPos;             // { x: 0.7, y: 0.7 }
color.v = 0.8;                                                                 // { x: 0.7, y: 0.8 }
```

</div>

<div class="api-entry">

### Vec4 {#Vec4}

<div class="api-text" v-pre><p>A 4-dimensional vector.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>X-coordinate of the vector.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Y-coordinate of the vector.</p></td></tr>
<tr><td><code>z</code></td><td>number</td><td><p>Z-coordinate of the vector.</p></td></tr>
<tr><td><code>w</code></td><td>number</td><td><p>W-coordinate of the vector.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ViewFrustum {#ViewFrustum}

<div class="api-text" v-pre><p>A ViewFrustum has a "keyhole" shape: a regular frustum for stuff that is visible plus a central sphere for stuff that is nearby (for physics simulation).</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The location of the frustum's apex.</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td><p>The direction that the frustum is looking at.</p></td></tr>
<tr><td><code>centerRadius</code></td><td>number</td><td><p>Center radius of the keyhole in meters.</p></td></tr>
<tr><td><code>fieldOfView</code></td><td>number</td><td><p>Horizontal field of view in degrees.</p></td></tr>
<tr><td><code>aspectRatio</code></td><td>number</td><td><p>Aspect ratio of the frustum.</p></td></tr>
<tr><td><code>projection</code></td><td><a href="Mat4">Mat4</a></td><td><p>The projection matrix for the view defined by the frustum.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### WebInputMode {#WebInputMode}

<div class="api-text" v-pre><p>Specifies how a web surface processes events.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"touch"</code></td><td>Events are processed as touch events.</td></tr>
 <tr><td><code>"mouse"</code></td><td>Events are processed as mouse events.</td></tr>
 <tr><td><code>"none"</code></td><td>Events are not processed and input is not captured.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### WheelEvent {#WheelEvent}

<div class="api-text" v-pre><p>A mouse wheel event.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>Integer x-coordinate of the event on the Interface window or HMD HUD.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Integer y-coordinate of the event on the Interface window or HMD HUD.</p></td></tr>
<tr><td><code>delta</code></td><td>number</td><td><p>Integer number indicating the direction and speed to scroll: positive numbers to scroll up, and negative numers to scroll down.</p></td></tr>
<tr><td><code>orientation</code></td><td>string</td><td><p>The orientation of the wheel: <code>"VERTICAL"</code> for a typical mouse; <code>"HORIZONTAL"</code> for a "horizontal" wheel.</p></td></tr>
<tr><td><code>isLeftButton</code></td><td>boolean</td><td><p><code>true</code> if the left button was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isMiddleButton</code></td><td>boolean</td><td><p><code>true</code> if the middle button was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isRightButton</code></td><td>boolean</td><td><p><code>true</code> if the right button was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isShifted</code></td><td>boolean</td><td><p><code>true</code> if the Shift key was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isMeta</code></td><td>boolean</td><td><p><code>true</code> if the "meta" key was pressed when the event was generated, otherwise <code>false</code>. On Windows the "meta" key is the Windows key; on OSX it is the Control (Splat) key.</p></td></tr>
<tr><td><code>isControl</code></td><td>boolean</td><td><p><code>true</code> if the "control" key was pressed when the event was generated, otherwise <code>false</code>. On Windows the "control" key is the Ctrl key; on OSX it is the Command key.</p></td></tr>
<tr><td><code>isAlt</code></td><td>boolean</td><td><p><code>true</code> if the Alt key was pressed when the event was generated, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the WheelEvent details for each wheel rotation.</p></div>

```js
Controller.wheelEvent.connect(function (event) {
    print(JSON.stringify(event));
});
```

</div>
