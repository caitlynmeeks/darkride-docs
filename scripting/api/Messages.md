---
title: "Messages"
description: "The Messages API enables text and data to be sent between scripts over named \"channels\"."
---

# Messages

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Messages</code> API enables text and data to be sent between scripts over named "channels". A channel can have an arbitrary name to help separate messaging between different sets of scripts.</p>
 <p><strong>Note:</strong> To call a function in another script, you should use one of the following rather than sending a message:</p>
 <ul> <li><a href="Entities#callEntityClientMethod"><code>Entities.callEntityClientMethod</code></a></li>
 <li><a href="Entities#callEntityMethod"><code>Entities.callEntityMethod</code></a></li>
 <li><a href="Entities#callEntityServerMethod"><code>Entities.callEntityServerMethod</code></a></li>
 <li><a href="Script#callEntityScriptMethod"><code>Script.callEntityScriptMethod</code></a></li>
 </ul></div>

## Functions {#functions}

<div class="api-entry">

### sendData {#sendData}

```js
Messages.sendData(channel, data, localOnly?)
```

<div class="api-text" v-pre><p>Sends a data message on a channel.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>channel</code></td><td>string</td><td></td><td><p>The channel to send the data on.</p></td></tr>
<tr><td><code>data</code></td><td>object</td><td></td><td><p>The data to send. The data is handled as a byte stream, for example, as may be provided via a JavaScript <code>Int8Array</code> object.</p></td></tr>
<tr><td><code>localOnly</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>false</code> then the message is sent to all Darkride, client entity, server entity, and assignment client scripts in the world. </p>
<p>If <code>true</code> then: if sent from a client or client entity script it is received by all client and client entity scripts; if sent from a server entity script it is received by all entity server scripts; and if sent from an assignment client script it is received only by that same assignment client script.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Send and receive data.</p></div>

```js
// Receiving script.
var channelName = "com.example.messages-example";

function onDataReceived(channel, data, sender, localOnly) {
    var int8data = new Int8Array(data);
    var dataAsString = "";
    for (var i = 0; i < int8data.length; i++) {
        if (i > 0) {
            dataAsString += ", ";
        }
        dataAsString += int8data[i];
    }
    print("Data received:");
    print("- channel: " + channel);
    print("- data: " + dataAsString);
    print("- sender: " + sender);
    print("- localOnly: " + localOnly);
}

Messages.subscribe(channelName);
Messages.dataReceived.connect(onDataReceived);

Script.scriptEnding.connect(function () {
    Messages.dataReceived.disconnect(onDataReceived);
    Messages.unsubscribe(channelName);
});


// Sending script.
var channelName = "com.example.messages-example";
var int8data = new Int8Array([1, 1, 2, 3, 5, 8, 13]);
Messages.sendData(channelName, int8data.buffer);
```

</div>

<div class="api-entry">

### sendLocalMessage {#sendLocalMessage}

```js
Messages.sendLocalMessage(channel, message)
```

<div class="api-text" v-pre><p>Sends a text message locally on a channel. This is the same as calling <a href="#sendMessage">sendMessage</a> with <code>localOnly == true</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>channel</code></td><td>string</td><td><p>The channel to send the message on.</p></td></tr>
<tr><td><code>message</code></td><td>string</td><td><p>The message to send.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendMessage {#sendMessage}

```js
Messages.sendMessage(channel, message, localOnly?)
```

<div class="api-text" v-pre><p>Sends a text message on a channel.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>channel</code></td><td>string</td><td></td><td><p>The channel to send the message on.</p></td></tr>
<tr><td><code>message</code></td><td>string</td><td></td><td><p>The message to send.</p></td></tr>
<tr><td><code>localOnly</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>false</code> then the message is sent to all Darkride, client entity, server entity, and assignment client scripts in the world. </p>
<p>If <code>true</code> then: if sent from a client or client entity script it is received by all client and client entity scripts; if sent from a server entity script it is received by all entity server scripts; and if sent from an assignment client script it is received only by that same assignment client script.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Send and receive a message.</p></div>

```js
// Receiving script.
var channelName = "com.example.messages-example";

function onMessageReceived(channel, message, sender, localOnly) {
    print("Message received:");
    print("- channel: " + channel);
    print("- message: " + message);
    print("- sender: " + sender);
    print("- localOnly: " + localOnly);
}

Messages.subscribe(channelName);
Messages.messageReceived.connect(onMessageReceived);

Script.scriptEnding.connect(function () {
    Messages.messageReceived.disconnect(onMessageReceived);
    Messages.unsubscribe(channelName);
});


// Sending script.
var channelName = "com.example.messages-example";
var message = "Hello";
Messages.sendMessage(channelName, message);
```

</div>

<div class="api-entry">

### subscribe {#subscribe}

```js
Messages.subscribe(channel)
```

<div class="api-text" v-pre><p>Subscribes the scripting environment — Darkride, the entity script server, or assignment client instance — to receive messages on a specific channel. This means, for example, that if there are two client scripts that subscribe to different channels, both scripts will receive messages on both channels.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>channel</code></td><td>string</td><td><p>The channel to subscribe to.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### unsubscribe {#unsubscribe}

```js
Messages.unsubscribe(channel)
```

<div class="api-text" v-pre><p>Unsubscribes the scripting environment from receiving messages on a specific channel.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>channel</code></td><td>string</td><td><p>The channel to unsubscribe from.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### dataReceived {#dataReceived}

```js
Messages.dataReceived.connect(function (channel, data, senderID, localOnly, fromOwnScripts) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a data message is received.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>channel</code></td><td>string</td><td><p>The channel that the message was sent on. This can be used to filter out messages not relevant to your script.</p></td></tr>
<tr><td><code>data</code></td><td>object</td><td><p>The data received. The data is handled as a byte stream, for example, as may be used by a JavaScript <code>Int8Array</code> object.</p></td></tr>
<tr><td><code>senderID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The UUID of the sender: the user's session UUID if sent by a client or client entity script, the UUID of the entity script server if sent by a server entity script, or the UUID of the assignment client instance if sent by an assignment client script.</p></td></tr>
<tr><td><code>localOnly</code></td><td>boolean</td><td><p><code>true</code> if the message was sent with <code>localOnly == true</code>.</p></td></tr>
<tr><td><code>fromOwnScripts</code></td><td>boolean</td><td><p><code>true</code> only for a local message sent by the user's own scripts on this computer (the app's and the ones the user installed); <code>false</code> for one sent by a world's entity scripts on this computer and for every message from the network. A script that acts for the user on a message checks it.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### messageReceived {#messageReceived}

```js
Messages.messageReceived.connect(function (channel, message, senderID, localOnly, fromOwnScripts) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a text message is received.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>channel</code></td><td>string</td><td><p>The channel that the message was sent on. This can be used to filter out messages not relevant to your script.</p></td></tr>
<tr><td><code>message</code></td><td>string</td><td><p>The message received.</p></td></tr>
<tr><td><code>senderID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The UUID of the sender: the user's session UUID if sent by a client or client entity script, the UUID of the entity script server if sent by a server entity script, or the UUID of the assignment client instance if sent by an assignment client script.</p></td></tr>
<tr><td><code>localOnly</code></td><td>boolean</td><td><p><code>true</code> if the message was sent with <code>localOnly == true</code>.</p></td></tr>
<tr><td><code>fromOwnScripts</code></td><td>boolean</td><td><p><code>true</code> only for a local message sent by the user's own scripts on this computer (the app's and the ones the user installed); <code>false</code> for one sent by a world's entity scripts on this computer and for every message from the network. A script that acts for the user on a message checks it.</p></td></tr>
</tbody></table></div>

</div>
