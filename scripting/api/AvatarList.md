---
title: "AvatarList"
description: "The AvatarList API provides information about avatars within the current domain."
draft: true
---

# AvatarList

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: assignment client scripts, server entity scripts.</div>

<div class="api-text" v-pre><p>The <code>AvatarList</code> API provides information about avatars within the current domain.</p>
 <p><strong>Warning:</strong> An API named "<code>AvatarList</code>" is also provided for Interface, client entity, and avatar scripts, however, it is a synonym for the <a href="AvatarManager"><code>AvatarManager</code></a> API.</p></div>

## Functions {#functions}

### getAvatar {#getAvatar}

```js
AvatarList.getAvatar(avatarID)
```

<div class="api-text" v-pre><p>Gets information about an avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>avatarID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the avatar.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="ScriptAvatar">ScriptAvatar</a> <p>Information about the avatar.</p></div>

### getAvatarIdentifiers {#getAvatarIdentifiers}

```js
AvatarList.getAvatarIdentifiers()
```

<div class="api-text" v-pre><p>Gets the IDs of all avatars in the domain. </p>
<p><strong>Warning:</strong> If the AC script is acting as an avatar (i.e., <code>Agent.isAvatar == true</code>) the avatar's ID is NOT included in results.</p>
<p></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>The IDs of all avatars in the domain (excluding AC script's avatar).</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the IDS of all avatars within the domain.</p></div>

```js
var avatars = AvatarList.getAvatarIdentifiers();
print("Avatars in the domain: " + JSON.stringify(avatars));
```

### getAvatarsInRange {#getAvatarsInRange}

```js
AvatarList.getAvatarsInRange(position, range)
```

<div class="api-text" v-pre><p>Gets the IDs of all avatars within a specified distance from a point. </p>
<p><strong>Warning:</strong> If the AC script is acting as an avatar (i.e., <code>Agent.isAvatar == true</code>) the avatar's ID is NOT included in results.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point about which the search is performed.</p></td></tr>
<tr><td><code>range</code></td><td>number</td><td><p>The search radius.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>The IDs of all avatars within the search distance from the position (excluding AC script's avatar).</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the IDs of all avatars within 10m of the origin.</p></div>

```js
var RANGE = 10;
var avatars = AvatarList.getAvatarsInRange(Vec3.ZERO, RANGE);
print("Avatars near the origin: " + JSON.stringify(avatars));
```

### isAvatarInRange {#isAvatarInRange}

```js
AvatarList.isAvatarInRange(position, range)
```

<div class="api-text" v-pre><p>Checks whether there is an avatar within a specified distance from a point.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td>string</td><td><p>The test position.</p></td></tr>
<tr><td><code>range</code></td><td>string</td><td><p>The test distance.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if there's an avatar within the specified distance of the point, <code>false</code> if not.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### avatarAddedEvent {#avatarAddedEvent}

```js
AvatarList.avatarAddedEvent.connect(function (sessionUUID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an avatar arrives in the domain.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the avatar that arrived in the domain.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when an avatar arrives in the domain.</p></div>

```js
AvatarManager.avatarAddedEvent.connect(function (sessionID) {
    print("Avatar arrived: " + sessionID);
});

// Note: If using from the AvatarList API, replace "AvatarManager" with "AvatarList".
```

### avatarRemovedEvent {#avatarRemovedEvent}

```js
AvatarList.avatarRemovedEvent.connect(function (sessionUUID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an avatar leaves the domain.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the avatar that left the domain.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when an avatar leaves the domain.</p></div>

```js
AvatarManager.avatarRemovedEvent.connect(function (sessionID) {
    print("Avatar left: " + sessionID);
});

// Note: If using from the AvatarList API, replace "AvatarManager" with "AvatarList".
```

### avatarSessionChangedEvent {#avatarSessionChangedEvent}

```js
AvatarList.avatarSessionChangedEvent.connect(function (newSessionUUID, oldSessionUUID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an avatar's session ID changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>newSessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The new session ID.</p></td></tr>
<tr><td><code>oldSessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The old session ID.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when an avatar's session ID changes.</p></div>

```js
AvatarManager.avatarSessionChangedEvent.connect(function (newSessionID, oldSessionID) {
    print("Avatar session ID changed from " + oldSessionID + " to " + newSessionID);
});

// Note: If using from the AvatarList API, replace "AvatarManager" with "AvatarList".
```

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### processAvatarDataPacket {#processAvatarDataPacket}

```js
AvatarList.processAvatarDataPacket(message, sendingNode)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>Message.</p></td></tr>
<tr><td><code>sendingNode</code></td><td>object</td><td><p>Sending node.</p></td></tr>
</tbody></table></div>

### processAvatarIdentityPacket {#processAvatarIdentityPacket}

```js
AvatarList.processAvatarIdentityPacket(message, sendingNode)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>Message.</p></td></tr>
<tr><td><code>sendingNode</code></td><td>object</td><td><p>Sending node.</p></td></tr>
</tbody></table></div>

### processBulkAvatarTraits {#processBulkAvatarTraits}

```js
AvatarList.processBulkAvatarTraits(message, sendingNode)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>Message.</p></td></tr>
<tr><td><code>sendingNode</code></td><td>object</td><td><p>Sending node.</p></td></tr>
</tbody></table></div>

### processKillAvatar {#processKillAvatar}

```js
AvatarList.processKillAvatar(message, sendingNode)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>Message.</p></td></tr>
<tr><td><code>sendingNode</code></td><td>object</td><td><p>Sending node.</p></td></tr>
</tbody></table></div>

### sessionUUIDChanged {#sessionUUIDChanged}

```js
AvatarList.sessionUUIDChanged(sessionUUID, oldSessionUUID)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>New session ID.</p></td></tr>
<tr><td><code>oldSessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>Old session ID.</p></td></tr>
</tbody></table></div>
