---
title: "WebSocketServer"
description: "Manages WebSockets in server entity and assignment client scripts."
draft: true
---

# WebSocketServer

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: server entity scripts, agents.</div>

<div class="api-text" v-pre><p>Manages <a href="WebSocket"><code>WebSocket</code></a>s in server entity and assignment client scripts.</p>
 <p>Create using <code>new WebSocketServer(...)</code>.</p></div>

```js
new WebSocketServer()
```

<div class="api-example" v-pre><strong>Example:</strong> <p>Echo a message back to sender.</p></div>

```js
// Server entity script. Echoes received message back to sender.
(function () {
    print("Create WebSocketServer");
    var webSocketServer = new WebSocketServer();
    print("Server url:", webSocketServer.url);

    function onNewConnection(webSocket) {
        print("New connection");

        webSocket.onmessage = function (message) {
            print("Message received:", message.data);

            var returnMessage = message.data + " back!";
            print("Echo a message back:", returnMessage);
            webSocket.send(message.data + " back!");
        };
    }

    webSocketServer.newConnection.connect(onNewConnection);
})
```

<div class="api-example" v-pre><strong>Example</strong> </div>

```js
// Interface script. Bounces message off server entity script.
// Use the server URL reported by the server entity script.
var WEBSOCKET_PING_URL = "ws://127.0.0.1:nnnnn";
var TEST_MESSAGE = "Hello";

print("Create WebSocket");
var webSocket = new WebSocket(WEBSOCKET_PING_URL);

webSocket.onmessage = function(data) {
    print("Message received:", data.data);
};

webSocket.onopen = function() {
    print("WebSocket opened");
    print("Send test message:", TEST_MESSAGE);
    webSocket.send(TEST_MESSAGE);
};
```

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL that the server is listening on. <em>Read-only.</em></p></td></tr>
<tr><td><code>port</code></td><td>number</td><td><p>The port that the server is listening on. <em>Read-only.</em></p></td></tr>
<tr><td><code>listening</code></td><td>boolean</td><td><p><code>true</code> if the server is listening for incoming connections, <code>false</code> if it isn't. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### close {#close}

```js
WebSocketServer.close()
```

<div class="api-text" v-pre><p>Closes all connections and closes the WebSocketServer.</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### newConnection {#newConnection}

```js
WebSocketServer.newConnection.connect(function (webSocket) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when there is a new connection.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>webSocket</code></td><td><a href="WebSocket">WebSocket</a></td><td><p>The <a href="WebSocket"><code>WebSocket</code></a> for the new connection.</p></td></tr>
</tbody></table></div>

</div>
