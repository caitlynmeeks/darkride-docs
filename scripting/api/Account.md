---
title: "Account"
description: "The Account API provides functions that give information on user connectivity, visibility, and asset download progress."
draft: true
---

# Account

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Account</code> API provides functions that give information on user connectivity, visibility, and asset download progress.</p></div>

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

<div class="api-entry">

### checkAndSignalForAccessToken {#checkAndSignalForAccessToken}

```js
Account.checkAndSignalForAccessToken()
```

<div class="api-text" v-pre><p>The function returns the login status of the user and prompts the user to log in (with a login dialog) if they're not already logged in.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the user is logged in, <code>false</code> if not.</p></div>

</div>

<div class="api-entry">

### getDownloadInfo {#getDownloadInfo}

```js
Account.getDownloadInfo()
```

<div class="api-text" v-pre><p>Gets information on the download progress of assets in the world.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="AccountServices#DownloadInfoResult">AccountServices.DownloadInfoResult</a> <p>Information on the download progress of assets.</p></div>

</div>

<div class="api-entry">

### isLoggedIn {#isLoggedIn}

```js
Account.isLoggedIn()
```

<div class="api-text" v-pre><p>Checks whether the user is logged in.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the user is logged in, <code>false</code> if not.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report whether you are logged in.</p></div>

```js
var isLoggedIn = AccountServices.isLoggedIn();
print("You are logged in: " + isLoggedIn);  // true or false
```

</div>

<div class="api-entry">

### logOut {#logOut}

```js
Account.logOut()
```

<div class="api-text" v-pre><p>Logs the user out.</p></div>

</div>

<div class="api-entry">

### updateDownloadInfo {#updateDownloadInfo}

```js
Account.updateDownloadInfo()
```

<div class="api-text" v-pre><p>Triggers a <a href="AccountServices#downloadInfoChanged">downloadInfoChanged</a> signal with information on the current download progress of the assets in the world.</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### connected {#connected}

```js
Account.connected.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Not currently used.</p></div>

</div>

<div class="api-entry">

### disconnected {#disconnected}

```js
Account.disconnected.connect(function (reason) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user logs out.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>reason</code></td><td>string</td><td><p>Has the value, <code>"logout"</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### downloadInfoChanged {#downloadInfoChanged}

```js
Account.downloadInfoChanged.connect(function (downloadInfo) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the download progress of the assets in the world changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>downloadInfo</code></td><td><a href="AccountServices#DownloadInfoResult">AccountServices.DownloadInfoResult</a></td><td><p>Information on the download progress of assets.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### findableByChanged {#findableByChanged}

```js
Account.findableByChanged.connect(function (findableBy) {
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

</div>

<div class="api-entry">

### loggedInChanged {#loggedInChanged}

```js
Account.loggedInChanged.connect(function (loggedIn) {
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

</div>

<div class="api-entry">

### myUsernameChanged {#myUsernameChanged}

```js
Account.myUsernameChanged.connect(function (username) {
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

</div>
