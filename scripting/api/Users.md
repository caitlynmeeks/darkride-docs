---
title: "Users"
description: "The Users API provides features to regulate your interaction with other users."
---

# Users

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Users</code> API provides features to regulate your interaction with other users.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canKick</code></td><td>boolean</td><td><p><code>true</code> if the world server allows the client to kick (ban) avatars, otherwise <code>false</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>requestsDomainListData</code></td><td>boolean</td><td><p><code>true</code> if the client requests extra data from the mixers (such as positional data of an avatar they've ignored). <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### disableIgnoreRadius {#disableIgnoreRadius}

```js
Users.disableIgnoreRadius()
```

<div class="api-text" v-pre><p>Disables the privacy shield.</p></div>

</div>

<div class="api-entry">

### enableIgnoreRadius {#enableIgnoreRadius}

```js
Users.enableIgnoreRadius()
```

<div class="api-text" v-pre><p>Enables the privacy shield.</p></div>

</div>

<div class="api-entry">

### getAvatarGain {#getAvatarGain}

```js
Users.getAvatarGain(nodeID)
```

<div class="api-text" v-pre><p>Gets an avatar's gain (volume) for you and you only, or gets the master gain.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>nodeID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the avatar to get the gain for, or <code>null</code> to get the master gain.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The gain, in dB.</p></div>

</div>

<div class="api-entry">

### getCanKick {#getCanKick}

```js
Users.getCanKick()
```

<div class="api-text" v-pre><p>Gets whether the client can kick and ban users in the world.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the world server allows the client to kick and ban users, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### getIgnoreRadiusEnabled {#getIgnoreRadiusEnabled}

```js
Users.getIgnoreRadiusEnabled()
```

<div class="api-text" v-pre><p>Gets the status of the privacy shield.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the privacy shield is enabled, <code>false</code> if it is disabled.</p></div>

</div>

<div class="api-entry">

### getIgnoreStatus {#getIgnoreStatus}

```js
Users.getIgnoreStatus(sessionID)
```

<div class="api-text" v-pre><p>Gets whether or not you have ignored a particular avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the avatar to get the ignore status of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the avatar is being ignored, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### getPersonalMuteStatus {#getPersonalMuteStatus}

```js
Users.getPersonalMuteStatus(sessionID)
```

<div class="api-text" v-pre><p>Gets whether or not you have muted a particular avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the avatar to get the mute status of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the avatar is muted, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### ignore {#ignore}

```js
Users.ignore(sessionID, enable?)
```

<div class="api-text" v-pre><p>Ignores or un-ignores another avatar. Ignoring an avatar makes them disappear for you and you disappear for them.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The session ID of the avatar to ignore.</p></td></tr>
<tr><td><code>enable</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> to ignore, <code>false</code> to un-ignore.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ignore a nearby avatar for a few seconds.</p></div>

```js
var avatars = AvatarList.getAvatarsInRange(MyAvatar.position, 1000);
if (avatars.length > 1) {  // Skip own avatar which is provided in position 0.
    print("Ignore: " + avatars[1]);
    Users.ignore(avatars[1], true);
    Script.setTimeout(function () {
        print("Un-ignore: " + avatars[1]);
        Users.ignore(avatars[1], false);
    }, 5000);
} else {
    print("No avatars");
}
```

</div>

<div class="api-entry">

### kick {#kick}

```js
Users.kick(sessionID)
```

<div class="api-text" v-pre><p>Kicks and bans a user. This removes them from the server and prevents them from returning. The ban is by user name if available, or machine fingerprint otherwise. </p>
<p>This function only works if you're an administrator of the world you're in.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the user to kick and ban.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mute {#mute}

```js
Users.mute(sessionID)
```

<div class="api-text" v-pre><p>Mutes a user's microphone for everyone. The mute is not permanent: the user can unmute themselves. </p>
<p>This function only works if you're an administrator of the world you're in.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the user to mute.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### personalMute {#personalMute}

```js
Users.personalMute(sessionID, muteEnabled?)
```

<div class="api-text" v-pre><p>Mutes or un-mutes another avatar. Muting makes you unable to hear them and them unable to hear you.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The session ID of the avatar to mute.</p></td></tr>
<tr><td><code>muteEnabled</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> to mute, <code>false</code> to un-mute.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### requestUsernameFromID {#requestUsernameFromID}

```js
Users.requestUsernameFromID(sessionID)
```

<div class="api-text" v-pre><p>Requests the user name and machine fingerprint associated with the given UUID. The user name is returned via a <a href="#usernameFromIDReply">usernameFromIDReply</a> signal. </p>
<p>This function only works if you're an administrator of the world you're in.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the user to get the user name and machine fingerprint of.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the user name and fingerprint of a nearby user.</p></div>

```js
function onUsernameFromIDReply(sessionID, userName, machineFingerprint, isAdmin) {
    print("Session:     " + sessionID);
    print("User name:   " + userName);
    print("Fingerprint: " + machineFingerprint);
    print("Is admin:    " + isAdmin);
}

Users.usernameFromIDReply.connect(onUsernameFromIDReply);

var avatars = AvatarList.getAvatarsInRange(MyAvatar.position, 1000);
if (avatars.length > 1) {  // Skip own avatar which is provided in position 0.
    print("Request data for: " + avatars[1]);
    Users.requestUsernameFromID(avatars[1]);
} else {
    print("No avatars");
}
```

</div>

<div class="api-entry">

### setAvatarGain {#setAvatarGain}

```js
Users.setAvatarGain(nodeID, gain)
```

<div class="api-text" v-pre><p>Sets an avatar's gain (volume) for you and you only, or sets the master gain.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>nodeID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the avatar to set the gain for, or <code>null</code> to set the master gain.</p></td></tr>
<tr><td><code>gain</code></td><td>number</td><td><p>The gain to set, in dB.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### toggleIgnoreRadius {#toggleIgnoreRadius}

```js
Users.toggleIgnoreRadius()
```

<div class="api-text" v-pre><p>Toggles the state of the privacy shield.</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### avatarDisconnected {#avatarDisconnected}

```js
Users.avatarDisconnected.connect(function (sessionID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a client has disconnected from the world.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the client that has disconnected.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### canKickChanged {#canKickChanged}

```js
Users.canKickChanged.connect(function (canKick) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when your ability to kick and ban users changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>canKick</code></td><td>boolean</td><td><p><code>true</code> if you can kick and ban users, <code>false</code> if you can't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### enteredIgnoreRadius {#enteredIgnoreRadius}

```js
Users.enteredIgnoreRadius.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when another user enters the privacy shield.</p></div>

</div>

<div class="api-entry">

### ignoreRadiusEnabledChanged {#ignoreRadiusEnabledChanged}

```js
Users.ignoreRadiusEnabledChanged.connect(function (isEnabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the privacy shield status changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isEnabled</code></td><td>boolean</td><td><p><code>true</code> if the privacy shield is enabled, <code>false</code> if it isn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### usernameFromIDReply {#usernameFromIDReply}

```js
Users.usernameFromIDReply.connect(function (sessionID, userName, machineFingerprint, isAdmin) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered in response to a <a href="#requestUsernameFromID">requestUsernameFromID</a> call. Provides the user name and machine fingerprint associated with a UUID.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The session ID of the client that the data is for.</p></td></tr>
<tr><td><code>userName</code></td><td>string</td><td><p>The user name of the client, if the requesting client is an administrator in the world or the <code>sessionID</code> is that of the client, otherwise <code>""</code>.</p></td></tr>
<tr><td><code>machineFingerprint</code></td><td><a href="Uuid">Uuid</a></td><td><p>The machine fingerprint of the client, if the requesting client is an administrator in the world or the <code>sessionID</code> is that of the client, otherwise <a href="Uuid">Uuid.NULL</a>.</p></td></tr>
<tr><td><code>isAdmin</code></td><td>boolean</td><td><p><code>true</code> if the client is an administrator in the world, <code>false</code> if not.</p></td></tr>
</tbody></table></div>

</div>
