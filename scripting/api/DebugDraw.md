---
title: "DebugDraw"
description: "The DebugDraw API renders debug markers and lines."
draft: true
---

# DebugDraw

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>DebugDraw</code> API renders debug markers and lines. These markers are only visible locally; they are not visible to other users.</p></div>

## Functions {#functions}

<div class="api-entry">

### addMarker {#addMarker}

```js
DebugDraw.addMarker(key, rotation, position, color, size?)
```

<div class="api-text" v-pre><p>Adds or updates a debug marker in world coordinates. This marker is drawn every frame until it is removed using <a href="#removeMarker">removeMarker</a>. If a world coordinates debug marker of the specified <code>name</code> already exists, its parameters are updated.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td></td><td><p>A name that uniquely identifies the marker.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the marker in world coordinates.</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the market in world coordinates.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Vec4">Vec4</a></td><td></td><td><p>The color of the marker.</p></td></tr>
<tr><td><code>size</code> <em>optional</em></td><td>number</td><td><code>1</code></td><td><p>A float between 0.0 and 1.0 (10 cm) to control the size of the marker.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Briefly draw a debug marker in front of your avatar, in world coordinates.</p></div>

```js
var MARKER_NAME = "my marker";
DebugDraw.addMarker(
    MARKER_NAME,
    Quat.ZERO,
    Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5})),
    { red: 255, green: 0, blue: 0 },
    1.0
);
Script.setTimeout(function () {
    DebugDraw.removeMarker(MARKER_NAME);
}, 5000);
```

</div>

<div class="api-entry">

### addMyAvatarMarker {#addMyAvatarMarker}

```js
DebugDraw.addMyAvatarMarker(key, rotation, position, color, size?)
```

<div class="api-text" v-pre><p>Adds or updates a debug marker to the world in avatar coordinates. This marker is drawn every frame until it is removed using <a href="#removeMyAvatarMarker">removeMyAvatarMarker</a>. If an avatar coordinates debug marker of the specified <code>name</code> already exists, its parameters are updated. The debug marker moves with your avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td></td><td><p>A name that uniquely identifies the marker.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the marker in avatar coordinates.</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the market in avatar coordinates.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Vec4">Vec4</a></td><td></td><td><p>color of the marker.</p></td></tr>
<tr><td><code>size</code> <em>optional</em></td><td>number</td><td><code>1</code></td><td><p>A float between 0.0 and 1.0 (10 cm) to control the size of the marker.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Briefly draw a debug marker in front of your avatar, in avatar coordinates.</p></div>

```js
var MARKER_NAME = "My avatar marker";
DebugDraw.addMyAvatarMarker(
    MARKER_NAME,
    Quat.ZERO,
    { x: 0, y: 0, z: -5 },
    { red: 255, green: 0, blue: 0 },
    1.0
);
Script.setTimeout(function () {
    DebugDraw.removeMyAvatarMarker(MARKER_NAME);
}, 5000);
```

</div>

<div class="api-entry">

### drawRay {#drawRay}

```js
DebugDraw.drawRay(start, end, color)
```

<div class="api-text" v-pre><p>Draws a line in world space, visible for a single frame. To make the line visually persist, you need to repeatedly draw it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>start</code></td><td><a href="Vec3">Vec3</a></td><td><p>The start position of the line, in world coordinates.</p></td></tr>
<tr><td><code>end</code></td><td><a href="Vec3">Vec3</a></td><td><p>The end position of the line, in world coordinates.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Vec4">Vec4</a></td><td><p>The color of the line. Each component should be in the range <code>0.0</code> – <code>1.0</code>, with <code>x</code> = red, <code>y</code> = green, <code>z</code> = blue, and <code>w</code> = alpha.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Draw a red ray from your initial avatar position to 10m in front of it.</p></div>

```js
var start = MyAvatar.position;
var end = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -10 }));
var color = { x: 1.0, y: 0.0, z: 0.0, w: 1.0 };

Script.update.connect(function () {
    DebugDraw.drawRay(start, end, color);
});
```

</div>

<div class="api-entry">

### drawRays {#drawRays}

```js
DebugDraw.drawRays(lines, color, translation?, rotation?)
```

<div class="api-text" v-pre><p>Draws lines in world space, visible for a single frame. To make the lines visually persist, you need to repeatedly draw them. </p>
<p><strong>Note:</strong> Currently doesn't work.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>lines</code></td><td>Array&lt;Vec3Pair&gt;</td><td></td><td><p>The start and end points of the lines to draw.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Vec4">Vec4</a></td><td></td><td><p>The color of the lines. Each component should be in the range <code>0.0</code> – <code>1.0</code>, with <code>x</code> = red, <code>y</code> = green, <code>z</code> = blue, and <code>w</code> = alpha.</p></td></tr>
<tr><td><code>translation</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>A translation applied to each line.</p></td></tr>
<tr><td><code>rotation</code> <em>optional</em></td><td><a href="Quat">Quat</a></td><td><code>Quat.IDENTITY</code></td><td><p>A rotation applied to each line.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Draw a red "V" in front of your initial avatar position.</p></div>

```js
var lines = [
    [{ x: -1, y: 0.5, z: 0 }, { x: 0, y: 0, z: 0 }],
    [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0.5, z: 0 }]
];
var color = { x: 1, y: 0, z: 0, w: 1 };
var translation = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 }));
var rotation = MyAvatar.orientation;

Script.update.connect(function () {
    DebugDraw.drawRays(lines, color, translation, rotation);
});
```

</div>

<div class="api-entry">

### removeMarker {#removeMarker}

```js
DebugDraw.removeMarker(key)
```

<div class="api-text" v-pre><p>Removes a debug marker that was added in world coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td><p>The name of the world coordinates debug marker to remove.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### removeMyAvatarMarker {#removeMyAvatarMarker}

```js
DebugDraw.removeMyAvatarMarker(key)
```

<div class="api-text" v-pre><p>Removes a debug marker that was added in avatar coordinates.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td><p>The name of the avatar coordinates debug marker to remove.</p></td></tr>
</tbody></table></div>

</div>
