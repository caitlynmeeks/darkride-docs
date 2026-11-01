---
title: "WebSocket"
description: "Provides a bi-directional, event-driven communication session between the script and another WebSocket connection."
---

# WebSocket

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>Provides a bi-directional, event-driven communication session between the script and another WebSocket connection. It is a near-complete implementation of the WebSocket API described in the Mozilla docs: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/API/WebSocket</a>.</p>
 <p>Create using <code>new WebSocket(...)</code> in Darkride, client entity, avatar, and server entity scripts, or the <a href="WebSocketServer"><code>WebSocketServer</code></a> class in server entity and assignment client scripts. </p>
<p><strong>Note:</strong> Does not support secure, <code>wss:</code> protocol.</p>
 <p>On a person's client, a script that came over the network (a world's script) may connect to public hosts only: not to services on that computer or on its network. A refused connection fails as an unreachable one does (onerror, then onclose with code 1006), with the reason in the script's log. A script loaded from the computer itself, or any script of a world served from that computer or its network, keeps every address.</p></div>

```js
new WebSocket(urlOrWebSocket)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>urlOrWebSocket</code></td><td>string | <a href="">WebSocket</a></td><td><p>The URL to connect to or an existing <a href=""><code>WebSocket</code></a> to reuse the connection of.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Echo a message off websocket.org.</p></div>

```js
print("Create WebSocket");
var WEBSOCKET_PING_URL = "ws://echo.websocket.org";
var webSocket = new WebSocket(WEBSOCKET_PING_URL);

webSocket.onclose = function (data) {
    print("WebSocket closed");
    print("Ready state =", webSocket.readyState);  // 3
};

webSocket.onmessage = function (data) {
    print("Message received:", data.data);

    print("Close WebSocket");
    webSocket.close();
};

webSocket.onopen = function () {
    print("WebSocket opened");
    print("Ready state =", webSocket.readyState);  // 1

    print("Send a test message");
    webSocket.send("Test message");
};
```

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>binaryType</code></td><td>string</td><td><code>&quot;blob&quot;</code></td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>bufferedAmount</code></td><td>number</td><td><code>0</code></td><td><p><em>Not implemented.</em> <em>Read-only.</em></p></td></tr>
<tr><td><code>extensions</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>Not implemented.</em> <em>Read-only.</em></p></td></tr>
<tr><td><code>onopen</code></td><td><a href="#onOpenCallback">WebSocket~onOpenCallback</a></td><td></td><td><p>Function called when the connection opens.</p></td></tr>
<tr><td><code>onmessage</code></td><td><a href="#onMessageCallback">WebSocket~onMessageCallback</a></td><td></td><td><p>Function called when a message is received.</p></td></tr>
<tr><td><code>onerror</code></td><td><a href="#onErrorCallback">WebSocket~onErrorCallback</a></td><td></td><td><p>Function called when an error occurs.</p></td></tr>
<tr><td><code>onclose</code></td><td><a href="#onCloseCallback">WebSocket~onCloseCallback</a></td><td></td><td><p>Function called when the connection closes.</p></td></tr>
<tr><td><code>protocol</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>Not implemented.</em> <em>Read-only.</em></p></td></tr>
<tr><td><code>readyState</code></td><td><a href="#ReadyState">WebSocket.ReadyState</a></td><td></td><td><p>The state of the connection. <em>Read-only.</em></p></td></tr>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The URL to connect to. <em>Read-only.</em></p></td></tr>
<tr><td><code>CONNECTING</code></td><td><a href="#ReadyState">WebSocket.ReadyState</a></td><td></td><td><p>The connection is opening. <em>Read-only.</em></p></td></tr>
<tr><td><code>OPEN</code></td><td><a href="#ReadyState">WebSocket.ReadyState</a></td><td></td><td><p>The connection is open. <em>Read-only.</em></p></td></tr>
<tr><td><code>CLOSING</code></td><td><a href="#ReadyState">WebSocket.ReadyState</a></td><td></td><td><p>The connection is closing. <em>Read-only.</em></p></td></tr>
<tr><td><code>CLOSED</code></td><td><a href="#ReadyState">WebSocket.ReadyState</a></td><td></td><td><p>The connection is closed. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### close {#close}

```js
WebSocket.close(closeCode?, reason?)
```

<div class="api-text" v-pre><p>Closes the connection.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>closeCode</code> <em>optional</em></td><td><a href="#CloseCode">WebSocket.CloseCode</a></td><td><code>1000</code></td><td><p>The reason for closing.</p></td></tr>
<tr><td><code>reason</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A description of the reason for closing.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### send {#send}

```js
WebSocket.send(message)
```

<div class="api-text" v-pre><p>Sends a message on the connection.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send. If an object, it is converted to a string.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### CloseCode {#CloseCode}

<div class="api-text" v-pre><p>The reason why the connection was closed. </p>
<table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>1000</code></td><td>Normal</td><td>Normal closure.</td></tr>
 <tr><td><code>1001</code></td><td>GoingAway</td><td>Going away.</td></tr>
 <tr><td><code>1002</code></td><td>ProtocolError</td><td>Protocol error.</td></tr>
 <tr><td><code>1003</code></td><td>DatatypeNotSupported</td><td>Unsupported data.</td></tr>
 <tr><td><code>1004</code></td><td>Reserved1004</td><td>Reserved.</td></tr>
 <tr><td><code>1005</code></td><td>MissingStatusCode</td><td>No status received.</td></tr>
 <tr><td><code>1006</code></td><td>AbnormalDisconnection</td><td>abnormal closure.</td></tr>
 <tr><td><code>1007</code></td><td>WrongDatatype</td><td>Invalid frame payload data.</td></tr>
 <tr><td><code>1008</code></td><td>PolicyViolated</td><td>Policy violation.</td></tr>
 <tr><td><code>1009</code></td><td>TooMuchData</td><td>Message too big.</td></tr>
 <tr><td><code>1010</code></td><td>MissingExtension</td><td>Mandatory extension missing.</td></tr>
 <tr><td><code>1011</code></td><td>BadOperation</td><td>Internal server error.</td></tr>
 <tr><td><code>1015</code></td><td>TlsHandshakeFailed</td><td>TLS handshake failed.</td></tr>
 </tbody>
 </table>
<p></p>
<table></table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### CloseData {#CloseData}

<div class="api-text" v-pre><p>Information on a connection being closed.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>code</code></td><td><a href="#CloseCode">WebSocket.CloseCode</a></td><td><p>The reason why the connection was closed.</p></td></tr>
<tr><td><code>reason</code></td><td>string</td><td><p>Description of the reason why the connection was closed.</p></td></tr>
<tr><td><code>wasClean</code></td><td>boolean</td><td><p><code>true</code> if the connection closed cleanly, <code>false</code> if it didn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### MessageData {#MessageData}

<div class="api-text" v-pre><p>A message received on a WebSocket connection.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>string</td><td><p>The message content.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onCloseCallback {#onCloseCallback}

<div class="api-text" v-pre><p>Called when the connection closes.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td><a href="#CloseData">WebSocket.CloseData</a></td><td><p>Information on the connection closure.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onErrorCallback {#onErrorCallback}

<div class="api-text" v-pre><p>Called when an error occurs.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td><a href="#SocketError">WebSocket.SocketError</a></td><td><p>The error.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onMessageCallback {#onMessageCallback}

<div class="api-text" v-pre><p>Triggered when a message is received.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td><a href="#MessageData">WebSocket.MessageData</a></td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onOpenCallback {#onOpenCallback}

<div class="api-text" v-pre><p>Called when the connection opens.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>

</div>

<div class="api-entry">

### ReadyState {#ReadyState}

<div class="api-text" v-pre><p>The state of a WebSocket connection. </p>
<table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>CONNECTING</td><td>The connection is opening.</td></tr>
 <tr><td><code>1</code></td><td>OPEN</td><td>The connection is open.</td></tr>
 <tr><td><code>2</code></td><td>CLOSING</td><td>The connection is closing.</td></tr>
 <tr><td><code>3</code></td><td>CLOSED</td><td>The connection is closed.</td></tr>
 </tbody>
 </table>
<p></p></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### SocketError {#SocketError}

<div class="api-text" v-pre><p>The type of socket error.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>ConnectionRefusedError</td><td>The connection was refused or timed out.</td></tr>
 <tr><td><code>1</code></td><td>RemoteHostClosedError</td><td>The remote host closed the connection.</td></tr>
 <tr><td><code>2</code></td><td>HostNotFoundError</td><td>The host address was not found.</td></tr>
 <tr><td><code>3</code></td><td>SocketAccessError</td><td>The socket operation failed because the application doesn't have the necessary privileges.</td></tr>
 <tr><td><code>4</code></td><td>SocketResourceError</td><td>The local system ran out of resources (e.g., too many sockets).</td></tr>
 <tr><td><code>5</code></td><td>SocketTimeoutError</td><td>The socket operation timed out.</td></tr>
 <tr><td><code>6</code></td><td>DatagramTooLargeError</td><td>The datagram was larger than the OS's limit.</td></tr>
 <tr><td><code>7</code></td><td>NetworkError</td><td>An error occurred with the network.</td></tr>
 <tr><td><code>8</code></td><td>AddressInUseError</td><td>The is already in use and cannot be reused.</td></tr>
 <tr><td><code>9</code></td><td>SocketAddressNotAvailableError</td><td>The address specified does not belong to the host.</td></tr>
 <tr><td><code>10</code></td><td>UnsupportedSocketOperationError</td><td>The requested socket operation is not supported by the local OS.</td></tr>
 <tr><td><code>11</code></td><td>ProxyAuthenticationRequiredError</td><td>The socket is using a proxy and requires authentication.</td></tr>
 <tr><td><code>12</code></td><td>SslHandshakeFailedError</td><td>The SSL/TLS handshake failed.</td></tr>
 <tr><td><code>13</code></td><td>UnfinishedSocketOperationError</td><td>The last operation has not finished yet.</td></tr>
 <tr><td><code>14</code></td><td>ProxyConnectionRefusedError</td><td>Could not contact the proxy server because connection was denied.</td></tr>
 <tr><td><code>15</code></td><td>ProxyConnectionClosedError</td><td>The connection to the proxy server was unexpectedly closed.</td></tr>
 <tr><td><code>16</code></td><td>ProxyConnectionTimeoutError</td><td>The connection to the proxy server timed out.</td></tr>
 <tr><td><code>17</code></td><td>ProxyNotFoundError</td><td>The proxy address was not found.</td></tr>
 <tr><td><code>18</code></td><td>ProxyProtocolError</td><td>Connection to the proxy server failed because the server response could not be understood.</td></tr>
 <tr><td><code>19</code></td><td>OperationError</td><td>An operation failed because the socket state did not permit it.</td></tr>
 <tr><td><code>20</code></td><td>SslInternalError</td><td>Internal error in the SSL library being used.</td></tr>
 <tr><td><code>21</code></td><td>SslInvalidUserDataError</td><td>Error in the SSL library because of invalid data.</td></tr>
 <tr><td><code>22</code></td><td>TemporaryError</td><td>A temporary error occurred.</td></tr>
 <tr><td><code>-1</code></td><td>UnknownSocketError</td><td>An unknown error occurred.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>
