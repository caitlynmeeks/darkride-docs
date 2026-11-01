---
title: "Scene"
description: "The Scene API provides some control over what is rendered."
draft: true
---

# Scene

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Scene</code> API provides some control over what is rendered.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>shouldRenderAvatars</code></td><td>boolean</td><td><p><code>true</code> if avatars are rendered, <code>false</code> if they aren't.</p></td></tr>
<tr><td><code>shouldRenderEntities</code></td><td>boolean</td><td><p><code>true</code> if entities (domain, avatar, and local) are rendered, <code>false</code> if they aren't.</p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### shouldRenderAvatarsChanged {#shouldRenderAvatarsChanged}

```js
Scene.shouldRenderAvatarsChanged.connect(function (shouldRenderAvatars) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when whether or not avatars are rendered changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>shouldRenderAvatars</code></td><td>boolean</td><td><p><code>true</code> if avatars are rendered, <code>false</code> if they aren't.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when the rendering of avatars changes.</p></div>

```js
Scene.shouldRenderAvatarsChanged.connect(function (shouldRenderAvatars) {
    print("Should render avatars changed to: " + shouldRenderAvatars);
});
```

### shouldRenderEntitiesChanged {#shouldRenderEntitiesChanged}

```js
Scene.shouldRenderEntitiesChanged.connect(function (shouldRenderEntities) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when whether or not entities are rendered changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>shouldRenderEntities</code></td><td>boolean</td><td><p><code>true</code> if entities (domain, avatar, and local) are rendered, <code>false</code> if they aren't.</p></td></tr>
</tbody></table></div>
