---
title: "Chat"
description: "The Chat API lets you use chat in world."
draft: true
---

# Chat

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Chat</code> API lets you use chat in world.</p></div>

## Functions {#functions}

### addCommand {#addCommand}

```js
Chat.addCommand(command, description)
```

<div class="api-text" v-pre><p>Adds a command to chat.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>command</code></td><td>string</td><td><p>The callable command string.</p></td></tr>
<tr><td><code>description</code></td><td>string</td><td><p>The command description.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="ChatCommand">ChatCommand</a> <p>The command added.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add new `/scale 0.5` command</p></div>

```js
var command = Chat.addCommand("scale", "updates your avatars scale");
command.running.connect(function (params) {
    var scale = Number(params);
    if (scale > 0) {
        MyAvatar.scale = scale;
        Chat.showMessage("Updated avatar scale to " + scale);
    } else {
        Chat.showMessage("Invalid scale!");
    }
});

// run your command if you want to
command.run("0.5");

Script.scriptEnding.connect(function () {
    Chat.removeCommand(command);
})
```

### getCommand {#getCommand}

```js
Chat.getCommand(command)
```

<div class="api-text" v-pre><p>Get one command for chat.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>command</code></td><td>string</td><td><p>The callable command string.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="ChatCommand">ChatCommand</a> <p>The command.</p></div>

### getCommands {#getCommands}

```js
Chat.getCommands()
```

<div class="api-text" v-pre><p>Get all commands for chat.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="ChatCommand">ChatCommand</a>&gt; <p>All available commands.</p></div>

### removeCommand {#removeCommand}

```js
Chat.removeCommand(command)
```

<div class="api-text" v-pre><p>Removes a command from chat.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>command</code></td><td><a href="ChatCommand">ChatCommand</a></td><td><p>The command to remove.</p></td></tr>
</tbody></table></div>

### sendMessage {#sendMessage}

```js
Chat.sendMessage(message, me?, tts?)
```

<div class="api-text" v-pre><p>Sends the given message to all other users in world.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td></td><td><p>The text message to send.</p></td></tr>
<tr><td><code>me</code> <em>optional</em></td><td>bool</td><td><code>false</code></td><td><p>Speaks in third person.</p></td></tr>
<tr><td><code>tts</code> <em>optional</em></td><td>bool</td><td><code>false</code></td><td><p>Send the message with text to speech.</p></td></tr>
</tbody></table></div>

### showMessage {#showMessage}

```js
Chat.showMessage(message)
```

<div class="api-text" v-pre><p>Shows the given message locally.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The text message to show.</p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### messageReceived {#messageReceived}

```js
Chat.messageReceived.connect(function (data, senderID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a chat message is received.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>object</td><td><p>The message received, usually <code>{message: "This is a message!"}</code> but can also include extras like: </p>
<ul> <li><code>{message: "This is a local announcement", local: true}</code> from <a href="#showMessage"><code>Chat.showMessage</code></a></li>
 <li><code>{message: "Hello world!", tts: true}</code></li>
 <li><code>{message: "is thinking", me: true}</code></li>
 </ul>
<p></p></td></tr>
<tr><td><code>senderID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The UUID of the sender: the user's session UUID if sent by an Interface or client entity script, the UUID of the entity script server if sent by a server entity script, or the UUID of the assignment client instance if sent by an assignment client script.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example</strong> </div>

```js
Chat.messageReceived.connect(function (data, senderID) {
    if (data.local) {
        console.log(data.message);
    } else {
        var avatar = AvatarList.getAvatar(senderID);
        console.log(
            avatar.displayName + 
            (data.me ? " " : ": ") + 
            data.message
        );
    }
});
```

### messageSent {#messageSent}

```js
Chat.messageSent.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user sends a message.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The message sent</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example</strong> </div>

```js
var huggiesSound = SoundCache.getSound("https://files.tivolicloud.com/maki/sounds/huggies.wav");
Chat.messageSent.connect(function (message) {
    if (message.toLowerCase().indexOf("huggies") > -1 && huggiesSound.downloaded) {
        Audio.playSound(huggiesSound, {
            position: MyAvatar.position,
            volume: 0.25
        });
    }
});
```
