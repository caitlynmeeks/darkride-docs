---
title: "AddressManager"
description: "The AddressManager API provides facilities related to your current location in the metaverse."
draft: true
---

# AddressManager

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>AddressManager</code> API provides facilities related to your current location in the metaverse.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>domainID</code></td><td><a href="Uuid">Uuid</a></td><td><p>A UUID uniquely identifying the domain you're visiting. Is <a href="Uuid">Uuid.NULL</a> if you're not connected to the domain or are in a serverless domain. <em>Read-only.</em></p></td></tr>
<tr><td><code>worldName</code></td><td>string</td><td><p>The name of the world you're connected to. <em>Read-only.</em></p></td></tr>
<tr><td><code>worldAuthor</code></td><td>string</td><td><p>The author's username of the world you're connected to. <em>Read-only.</em></p></td></tr>
<tr><td><code>worldDescription</code></td><td>string</td><td><p>The description of the world you're connected to. <em>Read-only.</em></p></td></tr>
<tr><td><code>hostname</code></td><td>string</td><td><p>The name of the domain for your current metaverse address (e.g., <code>"DomainName"</code>, <code>localhost</code>, or an IP address). Is blank if you're in a serverless domain. <em>Read-only.</em></p></td></tr>
<tr><td><code>href</code></td><td>string</td><td><p>Your current metaverse address (e.g., <code>"hifi://domainname/15,-10,26/0,0,0,1"</code>) regardless of whether or not you're connected to the domain. Starts with <code>"file:///"</code> if you're in a serverless domain. <em>Read-only.</em></p></td></tr>
<tr><td><code>isConnected</code></td><td>boolean</td><td><p><code>true</code> if you're connected to the domain in your current <code>href</code> metaverse address, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>pathname</code></td><td>string</td><td><p>The location and orientation in your current <code>href</code> metaverse address (e.g., <code>"/15,-10,26/0,0,0,1"</code>). <em>Read-only.</em></p></td></tr>
<tr><td><code>placename</code></td><td>string</td><td><p>The place name in your current <code>href</code> metaverse address (e.g., <code>"DomainName"</code>). Is blank if your <code>hostname</code> is an IP address. <em>Read-only.</em></p></td></tr>
<tr><td><code>protocol</code></td><td>string</td><td><p>The protocol of your current <code>href</code> metaverse address (e.g., <code>"hifi"</code>). <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

### canGoBack {#canGoBack}

```js
AddressManager.canGoBack()
```

<div class="api-text" v-pre><p>Checks if going back to the previous location is possible.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if going back is possible, <code>false</code> if it isn't.</p></div>

### copyAddress {#copyAddress}

```js
AddressManager.copyAddress()
```

<div class="api-text" v-pre><p>Copies your current metaverse address (i.e., <code>location.href</code> property value) to the OS clipboard.</p></div>

### copyPath {#copyPath}

```js
AddressManager.copyPath()
```

<div class="api-text" v-pre><p>Copies your current metaverse location and orientation (i.e., <code>location.pathname</code> property value) to the OS clipboard.</p></div>

### goBack {#goBack}

```js
AddressManager.goBack()
```

<div class="api-text" v-pre><p>Takes you back to the previous location in your navigation history, if there is one.</p></div>

### goForward {#goForward}

```js
AddressManager.goForward()
```

<div class="api-text" v-pre><p>Takes you forward to the next location in your navigation history, if there is one.</p></div>

### goToEntry {#goToEntry}

```js
AddressManager.goToEntry(trigger)
```

<div class="api-text" v-pre><p>Takes you to the default "welcome" metaverse address.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>trigger</code></td><td><a href="location#LookupTrigger">location.LookupTrigger</a></td><td><code>StartupFromSettings</code></td><td><p>The reason for the function call. Helps ensure that user's location history is correctly maintained.</p></td></tr>
</tbody></table></div>

### goToLastAddress {#goToLastAddress}

```js
AddressManager.goToLastAddress()
```

<div class="api-text" v-pre><p>Takes you to the last address tried. This will be the last URL tried from <code>location.handleLookupString</code>.</p></div>

### goToLocalSandbox {#goToLocalSandbox}

```js
AddressManager.goToLocalSandbox(path?, trigger?)
```

<div class="api-text" v-pre><p>Takes you to the local Sandbox server that's running on the same PC as Interface.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The position and orientation to go to (e.g., <code>"/0,0,0"</code>).</p></td></tr>
<tr><td><code>trigger</code> <em>optional</em></td><td><a href="location#LookupTrigger">location.LookupTrigger</a></td><td><code>StartupFromSettings</code></td><td><p>The reason for the function call. Helps ensure that user's location history is correctly maintained.</p></td></tr>
</tbody></table></div>

### goToUser {#goToUser}

```js
AddressManager.goToUser(username, matchOrientation?)
```

<div class="api-text" v-pre><p>Takes you to the specified user's location.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td></td><td><p>The user's username.</p></td></tr>
<tr><td><code>matchOrientation</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>If <code>true</code> then go to a location just in front of the user and turn to face them, otherwise go to the user's exact location and orientation.</p></td></tr>
</tbody></table></div>

### handleLookupString {#handleLookupString}

```js
AddressManager.handleLookupString(address, fromSuggestions?)
```

<div class="api-text" v-pre><p>Takes you to a specified metaverse address.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>address</code></td><td>string</td><td></td><td><p>The address to go to: a <code>"hifi://"</code> address, an IP address (e.g., <code>"127.0.0.1"</code> or <code>"localhost"</code>), a domain name, a named path on a domain (starts with <code>"/"</code>), a position or position and orientation, or a user (starts with <code>"@"</code>).</p></td></tr>
<tr><td><code>fromSuggestions</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Set to <code>true</code> if the address is obtained from the "Goto" dialog. Helps ensure that user's location history is correctly maintained.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

### storeCurrentAddress {#storeCurrentAddress}

```js
AddressManager.storeCurrentAddress()
```

<div class="api-text" v-pre><p>Updates your current metaverse location in Interface's <a href="Settings"><code>Settings</code></a> file as your last-known address. This can be used to ensure that you start up at that address if you exit Interface without a later address automatically being saved.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### goBackPossible {#goBackPossible}

```js
AddressManager.goBackPossible.connect(function (isPossible) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when there's a change in whether or not there's a previous location that can be navigated to using <a href="location#goBack">goBack</a>. (Reflects changes in the state of the "Goto" dialog's back arrow.)</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isPossible</code></td><td>boolean</td><td><p><code>true</code> if there's a previous location to navigate to, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when ability to navigate back changes.</p></div>

```js
function onGoBackPossible(isPossible) {
    print("Go back possible: " + isPossible);
}

location.goBackPossible.connect(onGoBackPossible);
```

### goForwardPossible {#goForwardPossible}

```js
AddressManager.goForwardPossible.connect(function (isPossible) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when there's a change in whether or not there's a forward location that can be navigated to using <a href="location#goForward">goForward</a>. (Reflects changes in the state of the "Goto" dialog's forward arrow.)</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isPossible</code></td><td>boolean</td><td><p><code>true</code> if there's a forward location to navigate to, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when ability to navigate forward changes.</p></div>

```js
function onGoForwardPossible(isPossible) {
    print("Go forward possible: " + isPossible);
}

location.goForwardPossible.connect(onGoForwardPossible);
```

### hostChanged {#hostChanged}

```js
AddressManager.hostChanged.connect(function (hostname) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when you navigate to a new domain.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>hostname</code></td><td>string</td><td><p>The new domain's host name.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when you navigate to a new domain.</p></div>

```js
function onHostChanged(host) {
    print("Host changed to: " + host);
}

location.hostChanged.connect(onHostChanged);
```

### locationChangeRequired {#locationChangeRequired}

```js
AddressManager.locationChangeRequired.connect(function (position, hasOrientationChange, orientation, shouldFaceLocation) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an attempt is made to send your avatar to a specified position on the current domain. For example, when you change domains or enter a position to go to in the "Goto" dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position to go to.</p></td></tr>
<tr><td><code>hasOrientationChange</code></td><td>boolean</td><td><p>If <code>true</code> then a new <code>orientation</code> has been requested.</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td><p>The orientation to change to. Is <a href="Quat">Quat.IDENTITY</a> if <code>hasOrientationChange</code> is <code>false</code>.</p></td></tr>
<tr><td><code>shouldFaceLocation</code></td><td>boolean</td><td><p>If <code>true</code> then the request is to go to a position near that specified and orient your avatar to face it. For example when you visit someone from the "People" dialog.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report location change requests.</p></div>

```js
function onLocationChangeRequired(newPosition, hasOrientationChange, newOrientation, shouldFaceLocation) {
    print("Location change required:");
    print("- New position = " + JSON.stringify(newPosition));
    print("- Has orientation change = " + hasOrientationChange);
    print("- New orientation = " + JSON.stringify(newOrientation));
    print("- Should face location = " + shouldFaceLocation);
}

location.locationChangeRequired.connect(onLocationChangeRequired);
```

### lookupResultIsNotFound {#lookupResultIsNotFound}

```js
AddressManager.lookupResultIsNotFound.connect(function (name, isUser) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when looking up the details of a metaverse user or location to go to has completed and the domain or user could not be found.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The place's or user's name that was looked up, or <code>""</code> for a domain ID.</p></td></tr>
<tr><td><code>isUser</code></td><td>boolean</td><td><p><code>true</code> if a user was looked up, <code>false</code> if a place or domain.</p></td></tr>
</tbody></table></div>

### lookupResultIsOffline {#lookupResultIsOffline}

```js
AddressManager.lookupResultIsOffline.connect(function (name, isUser) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when looking up the details of a metaverse user or location to go to has completed and the domain or user is offline.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The place's or user's name that was looked up, or <code>""</code> for a domain ID.</p></td></tr>
<tr><td><code>isUser</code></td><td>boolean</td><td><p><code>true</code> if a user was looked up, <code>false</code> if a place or domain.</p></td></tr>
</tbody></table></div>

### lookupResultsFinished {#lookupResultsFinished}

```js
AddressManager.lookupResultsFinished.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when looking up the details of a metaverse user or location to go to has completed (successfully or unsuccessfully).</p></div>

### pathChangeRequired {#pathChangeRequired}

```js
AddressManager.pathChangeRequired.connect(function (path) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an attempt is made to send your avatar to a new named path on the domain (set in the domain server's settings). For example, when you enter a "/" followed by the path's name in the "GOTO" dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The name of the path to go to.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report path change requests.</p></div>

```js
function onPathChangeRequired(newPath) {
    print("onPathChangeRequired: newPath = " + newPath);
}

location.pathChangeRequired.connect(onPathChangeRequired);
```

### possibleDomainChangeRequired {#possibleDomainChangeRequired}

```js
AddressManager.possibleDomainChangeRequired.connect(function (domainURL, domainID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a request is made to go to an IP address.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>domainURL</code></td><td>Url</td><td><p>URL for domain</p></td></tr>
<tr><td><code>domainID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The UUID of the domain to go to.</p></td></tr>
</tbody></table></div>

### possibleDomainChangeRequiredViaICEForID {#possibleDomainChangeRequiredViaICEForID}

```js
AddressManager.possibleDomainChangeRequiredViaICEForID.connect(function (iceServerHostName, domainID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a request is made to go to a named domain or user.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>iceServerHostName</code></td><td>string</td><td><p>IP address of the ICE server.</p></td></tr>
<tr><td><code>domainID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The UUID of the domain to go to.</p></td></tr>
</tbody></table></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### goToViewpointForPath {#goToViewpointForPath}

```js
AddressManager.goToViewpointForPath(path, namedPath)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Takes you to a position and orientation resulting from a lookup for a named path in the domain (set in the domain server's settings).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The position and orientation corresponding to the named path.</p></td></tr>
<tr><td><code>namedPath</code></td><td>string</td><td><p>The named path that was looked up on the server.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

### lookupShareableNameForDomainID {#lookupShareableNameForDomainID}

```js
AddressManager.lookupShareableNameForDomainID(domainID)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Retrieves and remembers the place name for the given domain ID if the place name is not already known.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>domainID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The UUID of the domain.</p></td></tr>
</tbody></table></div>

### refreshPreviousLookup {#refreshPreviousLookup}

```js
AddressManager.refreshPreviousLookup()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Refreshes the current address, e.g., after connecting to a domain in order to position the user to the desired location.</p></div>
