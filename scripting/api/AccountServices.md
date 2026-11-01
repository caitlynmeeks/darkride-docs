---
title: "AccountServices"
description: "The AccountServices API provides functions that give information on user connectivity, visibility, and asset download progress."
draft: true
---

# AccountServices

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>AccountServices</code> API provides functions that give information on user connectivity, visibility, and asset download progress.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>The user name of the user logged in. If there is no user logged in, it is <code>"Unknown user"</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>loggedIn</code></td><td>boolean</td><td><p><code>true</code> if the user is logged in, otherwise <code>false</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>findableBy</code></td><td>string</td><td><p>The user's visibility to other users: </p>
<ul> <li><code>"none"</code> — user appears offline.</li>
 <li><code>"friends"</code> — user is visible only to friends.</li>
 <li><code>"connections"</code> — user is visible to friends and connections.</li>
 <li><code>"all"</code> — user is visible to everyone.</li>
 </ul>
<p></p></td></tr>
<tr><td><code>metaverseServerURL</code></td><td>string</td><td><p>The metaverse server that the user is authenticated against when logged in — typically <code>"https://vr.darkride.ai"</code>. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

### checkAndSignalForAccessToken {#checkAndSignalForAccessToken}

```js
AccountServices.checkAndSignalForAccessToken()
```

<div class="api-text" v-pre><p>The function returns the login status of the user and prompts the user to log in (with a login dialog) if they're not already logged in.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the user is logged in, <code>false</code> if not.</p></div>

### getDownloadInfo {#getDownloadInfo}

```js
AccountServices.getDownloadInfo()
```

<div class="api-text" v-pre><p>Gets information on the download progress of assets in the domain.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#DownloadInfoResult">AccountServices.DownloadInfoResult</a> <p>Information on the download progress of assets.</p></div>

### isLoggedIn {#isLoggedIn}

```js
AccountServices.isLoggedIn()
```

<div class="api-text" v-pre><p>Checks whether the user is logged in.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the user is logged in, <code>false</code> if not.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report whether you are logged in.</p></div>

```js
var isLoggedIn = AccountServices.isLoggedIn();
print("You are logged in: " + isLoggedIn);  // true or false
```

### logOut {#logOut}

```js
AccountServices.logOut()
```

<div class="api-text" v-pre><p>Logs the user out.</p></div>

### updateDownloadInfo {#updateDownloadInfo}

```js
AccountServices.updateDownloadInfo()
```

<div class="api-text" v-pre><p>Triggers a <a href="#downloadInfoChanged">downloadInfoChanged</a> signal with information on the current download progress of the assets in the domain.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### connected {#connected}

```js
AccountServices.connected.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Not currently used.</p></div>

### disconnected {#disconnected}

```js
AccountServices.disconnected.connect(function (reason) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user logs out.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>reason</code></td><td>string</td><td><p>Has the value, <code>"logout"</code>.</p></td></tr>
</tbody></table></div>

### downloadInfoChanged {#downloadInfoChanged}

```js
AccountServices.downloadInfoChanged.connect(function (downloadInfo) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the download progress of the assets in the domain changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>downloadInfo</code></td><td><a href="#DownloadInfoResult">AccountServices.DownloadInfoResult</a></td><td><p>Information on the download progress of assets.</p></td></tr>
</tbody></table></div>

### findableByChanged {#findableByChanged}

```js
AccountServices.findableByChanged.connect(function (findableBy) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user's visibility to others changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>findableBy</code></td><td>string</td><td><p>The user's visibility to other people: </p>
<ul> <li><code>"none"</code> — user appears offline.</li>
 <li><code>"friends"</code> — user is visible only to friends.</li>
 <li><code>"connections"</code> — user is visible to friends and connections.</li>
 <li><code>"all"</code> — user is visible to everyone.</li>
 </ul>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your visiblity changes.</p></div>

```js
AccountServices.findableByChanged.connect(function (findableBy) {
    print("Findable by changed: " + findableBy);
});

var originalFindableBy = AccountServices.findableBy;
Script.setTimeout(function () {
    // Change visiblity.
    AccountServices.findableBy = originalFindableBy === "none" ? "all" : "none";
}, 2000);
Script.setTimeout(function () {
    // Restore original visibility.
    AccountServices.findableBy = originalFindableBy;
}, 4000);
```

### loggedInChanged {#loggedInChanged}

```js
AccountServices.loggedInChanged.connect(function (loggedIn) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the login status of the user changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>loggedIn</code></td><td>boolean</td><td><p><code>true</code> if the user is logged in, <code>false</code> if not.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your login status changes.</p></div>

```js
AccountServices.loggedInChanged.connect(function(loggedIn) {
    print("Logged in: " + loggedIn);
});
```

### myUsernameChanged {#myUsernameChanged}

```js
AccountServices.myUsernameChanged.connect(function (username) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the username logged in with changes, i.e., when the user logs in or out.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>The user name of the user logged in. If there is no user logged in, it is <code>""</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your username changes.</p></div>

```js
AccountServices.myUsernameChanged.connect(function (username) {
    print("Username changed: " + username);
});
```

## Types {#types}

### DownloadInfoResult {#DownloadInfoResult}

<div class="api-text" v-pre><p>Information on the assets currently being downloaded and pending download.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>downloading</code></td><td>Array&lt;number&gt;</td><td><p>The download percentage remaining of each asset currently downloading.</p></td></tr>
<tr><td><code>pending</code></td><td>number</td><td><p>The number of assets pending download.</p></td></tr>
</tbody></table></div>
