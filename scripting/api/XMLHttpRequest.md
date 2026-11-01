---
title: "XMLHttpRequest"
description: "Provides a means to interact with web servers."
draft: true
---

# XMLHttpRequest

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>Provides a means to interact with web servers. It is a near-complete implementation of the XMLHttpRequest API described in the Mozilla docs: <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest</a>.</p>
 <p>On a person's client, a script that came over the network (a world's script) may use web addresses only (http, https, atp), to public hosts: not the files on that computer, not services on it or on its network. A refused request ends as a failed one (status 0, error 201), with the reason in the script's log. A script loaded from the computer itself, or any script of a world served from that computer or its network, keeps every address.</p>
 <p>Create using <code>new XMLHttpRequest(...)</code>.</p></div>

```js
new XMLHttpRequest()
```

<div class="api-example" v-pre><strong>Example:</strong> <p>Get a web page's HTML.</p></div>

```js
var URL = "https://darkride.ai/";

var req = new XMLHttpRequest();
req.onreadystatechange = function () {
    if (req.readyState === req.DONE) {
        if (req.status === 200) {
            print("Success");
            print("Content type:", req.getResponseHeader("content-type"));
            print("Content:", req.responseText.slice(0, 100), "...");

        } else {
            print("Error", req.status, req.statusText);
        }

        req = null;
    }
};

req.open("GET", URL);
req.send();
```

<div class="api-example" v-pre><strong>Example:</strong> <p>Get a web page's HTML — alternative method.</p></div>

```js
var URL = "https://darkride.ai/";

var req = new XMLHttpRequest();
req.requestComplete.connect(function () {
    if (req.status === 200) {
        print("Success");
        print("Content type:", req.getResponseHeader("content-type"));
        print("Content:", req.responseText.slice(0, 100), "...");

    } else {
        print("Error", req.status, req.statusText);
    }

    req = null;
});

req.open("GET", URL);
req.send();
```

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>response</code></td><td>*</td><td><p>The response data. <em>Read-only.</em></p></td></tr>
<tr><td><code>responseText</code></td><td>string</td><td><p>The response data as text. <em>Read-only.</em></p></td></tr>
<tr><td><code>responseType</code></td><td>string</td><td><p>The response type required or received (e.g., <code>"text"</code>, <code>"json"</code>, <code>"arraybuffer"</code>, ...).</p></td></tr>
<tr><td><code>status</code></td><td>number</td><td><p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" rel="noopener">HTTP response status code</a> (<code>100</code> – <code>599</code>). <em>Read-only.</em></p></td></tr>
<tr><td><code>statusText</code></td><td>string</td><td><p>The HTTP response status text. <em>Read-only.</em></p></td></tr>
<tr><td><code>readyState</code></td><td><a href="#ReadyState">XMLHttpRequest.ReadyState</a></td><td><p>The status of the request. <em>Read-only.</em></p></td></tr>
<tr><td><code>errorCode</code></td><td><a href="#NetworkError">XMLHttpRequest.NetworkError</a></td><td><p>The network result of the request: including, <code>0</code> (NoError) if there was no error, <code>4</code> (TimeoutError) if the request timed out. <em>Read-only.</em></p></td></tr>
<tr><td><code>timeout</code></td><td>number</td><td><p>The time a request can take before timing out, in ms.</p></td></tr>
<tr><td><code>UNSENT</code></td><td><a href="#ReadyState">XMLHttpRequest.ReadyState</a></td><td><p>Request has been created; <a href="#open"><code>XMLHttpRequest.open</code></a> not called yet. <em>Read-only.</em></p></td></tr>
<tr><td><code>OPENED</code></td><td><a href="#ReadyState">XMLHttpRequest.ReadyState</a></td><td><p><a href="#open"><code>XMLHttpRequest.open</code></a> has been called. <em>Read-only.</em></p></td></tr>
<tr><td><code>HEADERS_RECEIVED</code></td><td><a href="#ReadyState">XMLHttpRequest.ReadyState</a></td><td><p><a href="#send"><code>XMLHttpRequest.send</code></a> has been called; headers and status are available. <em>Read-only.</em></p></td></tr>
<tr><td><code>LOADING</code></td><td><a href="#ReadyState">XMLHttpRequest.ReadyState</a></td><td><p>Downloading; <a href="">XMLHttpRequest.responseText</a> has partial data. <em>Read-only.</em></p></td></tr>
<tr><td><code>DONE</code></td><td><a href="#ReadyState">XMLHttpRequest.ReadyState</a></td><td><p>Operation complete. <em>Read-only.</em></p></td></tr>
<tr><td><code>ontimeout</code></td><td><a href="#onTimeoutCallback">XMLHttpRequest~onTimeoutCallback</a></td><td><p>Function called when the request times out. </p>
<p>Note: This is called in addition to any function set for <code>onreadystatechange</code>.</p>
<p></p></td></tr>
<tr><td><code>onreadystatechange</code></td><td><a href="#onReadyStateChangeCallback">XMLHttpRequest~onReadyStateChangeCallback</a></td><td><p>Function called when the request's ready state changes.</p></td></tr>
</tbody></table></div>

## Methods {#functions}

### abort {#abort}

```js
XMLHttpRequest.abort()
```

<div class="api-text" v-pre><p>Aborts the request.</p></div>

### getAllResponseHeaders {#getAllResponseHeaders}

```js
XMLHttpRequest.getAllResponseHeaders()
```

<div class="api-text" v-pre><p>Gets the response headers.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The response headers, separated by <code>"\n"</code> characters.</p></div>

### getResponseHeader {#getResponseHeader}

```js
XMLHttpRequest.getResponseHeader(name)
```

<div class="api-text" v-pre><p>Gets a response header.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>-</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The response header.</p></div>

### open {#open}

```js
XMLHttpRequest.open(method, url, async?, username?, password?)
```

<div class="api-text" v-pre><p>Initializes a request.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>method</code></td><td>string</td><td></td><td><p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" target="_blank" rel="noopener">HTTP request method</a> to use, e.g., <code>"GET"</code>, <code>"POST"</code>, <code>"PUT"</code>, or <code>"DELETE"</code>.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The URL to send the request to.</p></td></tr>
<tr><td><code>async</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the method returns without waiting for the response, <code>false</code> if the method returns only once the request is complete.</p></td></tr>
<tr><td><code>username</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>User name for authentication.</p></td></tr>
<tr><td><code>password</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Password for authentication.</p></td></tr>
</tbody></table></div>

### send {#send}

```js
XMLHttpRequest.send(data?)
```

<div class="api-text" v-pre><p>Sends the request to the server.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code> <em>optional</em></td><td>*</td><td><p>The data to send.</p></td></tr>
</tbody></table></div>

### setRequestHeader {#setRequestHeader}

```js
XMLHttpRequest.setRequestHeader(name, value)
```

<div class="api-text" v-pre><p>Sets the value of an HTTP request header. Must be called after <a href="#open"><code>XMLHttpRequest.open</code></a> but before <a href="#send"><code>XMLHttpRequest.send</code></a>;</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the header to set.</p></td></tr>
<tr><td><code>value</code></td><td>string</td><td><p>The value of the header.</p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### requestComplete {#requestComplete}

```js
XMLHttpRequest.requestComplete.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the request is complete — with or without error (incl. timeout).</p></div>

## Types {#types}

### NetworkError {#NetworkError}

<div class="api-text" v-pre><p>The type of network error.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>NoError</td><td>No error.</td></tr>
 <tr><td><code>1</code></td><td>ConnectionRefusedError</td><td>The server refused the connection.</td></tr>
 <tr><td><code>2</code></td><td>RemoteHostClosedError</td><td>The server closed the connection.</td></tr>
 <tr><td><code>3</code></td><td>HostNotFoundError</td><td>Host name not found.</td></tr>
 <tr><td><code>4</code></td><td>TimeoutError</td><td>Connection timed out</td></tr>
 <tr><td><code>5</code></td><td>OperationCanceledError</td><td>Operation canceled by <a href="#abort"><code>XMLHttpRequest.abort</code></a>.</td></tr>
 <tr><td><code>6</code></td><td>SslHandshakeFailedError</td><td>SSL/TLS handshake failed.</td></tr>
 <tr><td><code>7</code></td><td>TemporaryNetworkFailureError</td><td>Temporarily disconnected from the network.</td></tr>
 <tr><td><code>8</code></td><td>NetworkSessionFailedError</td><td>Disconnection from the network.</td></tr>
 <tr><td><code>9</code></td><td>BackgroundRequestNotAllowedError</td><td>Background request not allowed.</td></tr>
 <tr><td><code>10</code></td><td>TooManyRedirectsError</td><td>Too many redirects.</td></tr>
 <tr><td><code>11</code></td><td>InsecureRedirectError</td><td>Redirect from secure to insecure protocol.</td></tr>
 <tr><td><code>101</code></td><td>ProxyConnectionRefusedError</td><td>Connection to proxy server refused.</td></tr>
 <tr><td><code>102</code></td><td>ProxyConnectionClosedError</td><td>Proxy server closed the connection.</td></tr>
 <tr><td><code>103</code></td><td>ProxyNotFoundError</td><td>Proxy host name not found.</td></tr>
 <tr><td><code>104</code></td><td>ProxyTimeoutError</td><td>Proxy connection timed out.</td></tr>
 <tr><td><code>105</code></td><td>ProxyAuthenticationRequiredError</td><td>Proxy requires authentication.</td></tr>
 <tr><td><code>201</code></td><td>ContentAccessDenied</td><td>Access denied.</td></tr>
 <tr><td><code>202</code></td><td>ContentOperationNotPermittedError</td><td>Operation not permitted.</td></tr>
 <tr><td><code>203</code></td><td>ContentNotFoundError</td><td>Content not found.</td></tr>
 <tr><td><code>204</code></td><td>AuthenticationRequiredError</td><td>Authentication required.</td></tr>
 <tr><td><code>205</code></td><td>ContentReSendError</td><td>Resend failed.</td></tr>
 <tr><td><code>206</code></td><td>ContentConflictError</td><td>Resource state conflict.</td></tr>
 <tr><td><code>207</code></td><td>ContentGoneError</td><td>Resource no longer available.</td></tr>
 <tr><td><code>401</code></td><td>InternalServerError</td><td>Internal server error.</td></tr>
 <tr><td><code>402</code></td><td>OperationNotImplementedError</td><td>Operation not supported.</td></tr>
 <tr><td><code>403</code></td><td>ServiceUnavailableError</td><td>Request not able to be handled at this time.</td></tr>
 <tr><td><code>301</code></td><td>ProtocolUnknownError</td><td>Protocol unknown.</td></tr>
 <tr><td><code>302</code></td><td>ProtocolInvalidOperationError</td><td>Operation invalid fro protocol.</td></tr>
 <tr><td><code>99</code></td><td>UnknownNetworkError</td><td>Unknown network-related error.</td></tr>
 <tr><td><code>199</code></td><td>UnknownProxyError</td><td>Unknown proxy-related error.</td></tr>
 <tr><td><code>299</code></td><td>UnknownContentError</td><td>Unknown content-related error.</td></tr>
 <tr><td><code>399</code></td><td>ProtocolFailure</td><td>Protocol error.</td></tr>
 <tr><td><code>499</code></td><td>UnknownServerError</td><td>Unknown server response error.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

### onReadyStateChangeCallback {#onReadyStateChangeCallback}

<div class="api-text" v-pre><p>Called when the request's ready state changes.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>

### onTimeoutCallback {#onTimeoutCallback}

<div class="api-text" v-pre><p>Called when the request times out.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>

### ReadyState {#ReadyState}

<div class="api-text" v-pre><p>The state of an XMLHttpRequest.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>UNSENT</td><td>Request has been created; <a href="#open"><code>XMLHttpRequest.open</code></a> not called yet.</td></tr>
 <tr><td><code>1</code></td><td>OPENED</td><td><a href="#open"><code>XMLHttpRequest.open</code></a> has been called.</td></tr>
 <tr><td><code>2</code></td><td>HEADERS_RECEIVED</td><td><a href="#send"><code>XMLHttpRequest.send</code></a> has been called; headers and status are available.</td></tr>
 <tr><td><code>3</code></td><td>LOADING</td><td>Downloading; <a href="">XMLHttpRequest.responseText</a> has partial data.</td></tr>
 <tr><td><code>4</code></td><td>DONE</td><td>Operation complete.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>
