---
title: "Window"
description: "The Window API provides various facilities not covered elsewhere, including: window dimensions, window focus, camera view, announcements, user connections, common dialog boxes, snapshots, file import,"
draft: true
---

# Window

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Window</code> API provides various facilities not covered elsewhere, including: window dimensions, window focus, camera view, announcements, user connections, common dialog boxes, snapshots, file import, world navigation, world changes, world physics, OS clipboard, build number.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>innerWidth</code></td><td>number</td><td></td><td><p>The width of the drawable area of the Interface window (i.e., without borders or other chrome), in pixels. <em>Read-only.</em></p></td></tr>
<tr><td><code>innerHeight</code></td><td>number</td><td></td><td><p>The height of the drawable area of the Interface window (i.e., without borders or other chrome), in pixels. <em>Read-only.</em></p></td></tr>
<tr><td><code>x</code></td><td>number</td><td></td><td><p>The x display coordinate of the top left corner of the drawable area of the Interface window. <em>Read-only.</em></p></td></tr>
<tr><td><code>y</code></td><td>number</td><td></td><td><p>The y display coordinate of the top left corner of the drawable area of the Interface window. <em>Read-only.</em></p></td></tr>
<tr><td><code>interstitialModeEnabled</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the interstitial graphics are displayed when a world is loading, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>location</code></td><td><a href="location">location</a></td><td></td><td><p>Provides facilities for working with your current metaverse location.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### alert {#alert}

```js
Window.alert(message?)
```

<div class="api-text" v-pre><p>Displays a dialog with the specified message and an "OK" button. The dialog is non-modal; the script continues without waiting for a user response.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The message to display.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Display a friendly greeting.</p></div>

```js
Window.alert("Welcome!");
print("Script continues without waiting");
```

</div>

<div class="api-entry">

### browse {#browse}

```js
Window.browse(title?, directory?, nameFilter?)
```

<div class="api-text" v-pre><p>Prompts the user to choose a file. Displays a modal dialog that navigates the directory tree.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The title to display at the top of the dialog.</p></td></tr>
<tr><td><code>directory</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The initial directory to start browsing at.</p></td></tr>
<tr><td><code>nameFilter</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The types of files to display. Examples: <code>"*.json"</code> and <code>"Images (*.png *.jpg *.svg)"</code>. All files are displayed if a filter isn't specified.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The path and name of the file if one is chosen, otherwise <code>null</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user to choose an image file.</p></div>

```js
var filename = Window.browse("Select Image File", Paths.resources, "Images (*.png *.jpg *.svg)");
print("File: " + filename);
```

</div>

<div class="api-entry">

### browseAssets {#browseAssets}

```js
Window.browseAssets(title?, directory?, nameFilter?)
```

<div class="api-text" v-pre><p>Prompts the user to choose an Asset Server item. Displays a modal dialog that navigates the tree of assets on the Asset Server.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The title to display at the top of the dialog.</p></td></tr>
<tr><td><code>directory</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The initial directory to start browsing at.</p></td></tr>
<tr><td><code>nameFilter</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The types of files to display. Examples: <code>"*.json"</code> and <code>"Images (*.png *.jpg *.svg)"</code>. All files are displayed if a filter isn't specified.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The path and name of the asset if one is chosen, otherwise <code>null</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user to select an FBX asset.</p></div>

```js
var asset = Window.browseAssets("Select FBX File", "/", "*.fbx");
print("FBX file: " + asset);
```

</div>

<div class="api-entry">

### browseAssetsAsync {#browseAssetsAsync}

```js
Window.browseAssetsAsync(title?, directory?, nameFilter?)
```

<div class="api-text" v-pre><p>Prompts the user to choose an Asset Server item. Displays a non-modal dialog that navigates the tree of assets on the Asset Server. An <a href="#assetsDirChanged">assetsDirChanged</a> signal is emitted when an asset is chosen; no signal is emitted if the user cancels the dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The title to display at the top of the dialog.</p></td></tr>
<tr><td><code>directory</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The initial directory to start browsing at.</p></td></tr>
<tr><td><code>nameFilter</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The types of files to display. Examples: <code>"*.json"</code> and <code>"Images (*.png *.jpg *.svg)"</code>. All files are displayed if a filter isn't specified.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example</strong> </div>

```js
function onAssetsDirChanged(asset) {
    print("FBX file: " + asset);
}
Window.assetsDirChanged.connect(onAssetsDirChanged);

Window.browseAssetsAsync("Select FBX File", "/", "*.fbx");
print("Script continues without waiting");
```

</div>

<div class="api-entry">

### browseAsync {#browseAsync}

```js
Window.browseAsync(title?, directory?, nameFilter?)
```

<div class="api-text" v-pre><p>Prompts the user to choose a file. Displays a non-modal dialog that navigates the directory tree. A <a href="#browseChanged">browseChanged</a> signal is emitted when a file is chosen; no signal is emitted if the user cancels the dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The title to display at the top of the dialog.</p></td></tr>
<tr><td><code>directory</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The initial directory to start browsing at.</p></td></tr>
<tr><td><code>nameFilter</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The types of files to display. Examples: <code>"*.json"</code> and <code>"Images (*.png *.jpg *.svg)"</code>. All files are displayed if a filter isn't specified.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user to choose an image file without waiting for the answer.</p></div>

```js
function onBrowseChanged(filename) {
    print("File: " + filename);
}
Window.browseChanged.connect(onBrowseChanged);

Window.browseAsync("Select Image File", Paths.resources, "Images (*.png *.jpg *.svg)");
print("Script continues without waiting");
```

</div>

<div class="api-entry">

### browseDir {#browseDir}

```js
Window.browseDir(title?, directory?)
```

<div class="api-text" v-pre><p>Prompts the user to choose a directory. Displays a modal dialog that navigates the directory tree.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The title to display at the top of the dialog.</p></td></tr>
<tr><td><code>directory</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The initial directory to start browsing at.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The path of the directory if one is chosen, otherwise <code>null</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user to choose a directory.</p></div>

```js
var directory = Window.browseDir("Select Directory", Paths.resources);
print("Directory: " + directory);
```

</div>

<div class="api-entry">

### browseDirAsync {#browseDirAsync}

```js
Window.browseDirAsync(title?, directory?)
```

<div class="api-text" v-pre><p>Prompts the user to choose a directory. Displays a non-modal dialog that navigates the directory tree. A <a href="#browseDirChanged">browseDirChanged</a> signal is emitted when a directory is chosen; no signal is emitted if the user cancels the dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The title to display at the top of the dialog.</p></td></tr>
<tr><td><code>directory</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The initial directory to start browsing at.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user to choose a directory without waiting for the answer.</p></div>

```js
function onBrowseDirChanged(directory) {
    print("Directory: " + directory);
}
Window.browseDirChanged.connect(onBrowseDirChanged);

Window.browseDirAsync("Select Directory", Paths.resources);
print("Script continues without waiting");
```

</div>

<div class="api-entry">

### checkVersion {#checkVersion}

```js
Window.checkVersion()
```

<div class="api-text" v-pre><p>Gets Interface's build number.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>Interface's build number.</p></div>

</div>

<div class="api-entry">

### closeMessageBox {#closeMessageBox}

```js
Window.closeMessageBox(id)
```

<div class="api-text" v-pre><p>Closes a message box that was opened with <a href="#openMessageBox">openMessageBox</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the message box.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### confirm {#confirm}

```js
Window.confirm(message?)
```

<div class="api-text" v-pre><p>Prompts the user to confirm something. Displays a modal dialog with a message plus "Yes" and "No" buttons.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The question to display.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the user selects "Yes", otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user a question requiring a yes/no answer.</p></div>

```js
var answer = Window.confirm("Are you sure?");
print(answer);  // true or false
```

</div>

<div class="api-entry">

### copyToClipboard {#copyToClipboard}

```js
Window.copyToClipboard(text)
```

<div class="api-text" v-pre><p>Copies text to the operating system's clipboard.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>text</code></td><td>string</td><td><p>The text to copy to the operating system's clipboard.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### displayAnnouncement {#displayAnnouncement}

```js
Window.displayAnnouncement(message)
```

<div class="api-text" v-pre><p>Displays a notification message. Notifications are displayed in panels by the default script, nofications.js. An <a href="#announcement">announcement</a> signal is emitted when this function is called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The announcement message.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Send and capture an announcement message.</p></div>

```js
function onAnnouncement(message) {
    // The message is also displayed as a notification by notifications.js.
    print("Announcement: " + message);
}
Window.announcement.connect(onAnnouncement);

Window.displayAnnouncement("Hello");
```

</div>

<div class="api-entry">

### getActiveDisplayPlugin {#getActiveDisplayPlugin}

```js
Window.getActiveDisplayPlugin()
```

<div class="api-text" v-pre><p>Gets the index of the currently active display plugin.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The index of the currently active display plugin. The first display plugin has an index of <code>0</code>.</p></div>

</div>

<div class="api-entry">

### getDeviceSize {#getDeviceSize}

```js
Window.getDeviceSize()
```

<div class="api-text" v-pre><p>Gets the size of the drawable area of the Interface window if in desktop mode or the HMD rendering surface if in HMD mode.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The width and height of the Interface window or HMD rendering surface, in pixels.</p></div>

</div>

<div class="api-entry">

### getDisplayPluginCount {#getDisplayPluginCount}

```js
Window.getDisplayPluginCount()
```

<div class="api-text" v-pre><p>Gets the number of display plugins currently available.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of display plugins currently available.</p></div>

</div>

<div class="api-entry">

### getDisplayPluginName {#getDisplayPluginName}

```js
Window.getDisplayPluginName(index)
```

<div class="api-text" v-pre><p>Gets the name of a display plugin.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the display plugin. Must be less than the value returned by <a href="#getDisplayPluginCount">getDisplayPluginCount</a>. The first display plugin has an index of <code>0</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The name of the display plugin.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Print the names of all available display plugins.</p></div>

```js
for (var i = 0, length = Window.getDisplayPluginCount(); i < length; i++) {
    print(Window.getDisplayPluginName(i));
}
```

</div>

<div class="api-entry">

### getLastDomainConnectionError {#getLastDomainConnectionError}

```js
Window.getLastDomainConnectionError()
```

<div class="api-text" v-pre><p>Gets the last world connection error when a connection is refused.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#ConnectionRefusedReason">Window.ConnectionRefusedReason</a> <p>Integer number that enumerates the last world connection refused.</p></div>

</div>

<div class="api-entry">

### getWorldLoading {#getWorldLoading}

```js
Window.getWorldLoading()
```

<div class="api-text" v-pre><p>Gets the state of whole-world loading.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#WorldLoading">Window.WorldLoading</a> <p>The state; only <code>active</code> when no loading screen is wanted.</p></div>

</div>

<div class="api-entry">

### hasFocus {#hasFocus}

```js
Window.hasFocus()
```

<div class="api-text" v-pre><p>Checks whether the Interface window has focus.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the Interface window has focus, <code>false</code> if it doesn't.</p></div>

</div>

<div class="api-entry">

### isDisplayPluginHmd {#isDisplayPluginHmd}

```js
Window.isDisplayPluginHmd(index)
```

<div class="api-text" v-pre><p>Checks whether a display plugin is an HMD.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the display plugin. Must be less than the value returned by <a href="#getDisplayPluginCount">getDisplayPluginCount</a>. The first display plugin has an index of <code>0</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the display plugin is a HMD, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isPhysicsEnabled {#isPhysicsEnabled}

```js
Window.isPhysicsEnabled()
```

<div class="api-text" v-pre><p>Checks to see if physics is active for you in the world you're visiting - there is a delay between your arrival at a world and physics becoming active for you in that world.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if physics is currently active for you, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Wait for physics to be enabled when you change worlds.</p></div>

```js
function checkForPhysics() {
    var isPhysicsEnabled = Window.isPhysicsEnabled();
    print("Physics enabled: " + isPhysicsEnabled);
    if (!isPhysicsEnabled) {
        Script.setTimeout(checkForPhysics, 1000);
    }
}

function onDomainChanged(domain) {
    print("Domain changed: " + domain);
    Script.setTimeout(checkForPhysics, 1000);
}

Window.domainChanged.connect(onDomainChanged);
```

</div>

<div class="api-entry">

### isPointOnDesktopWindow {#isPointOnDesktopWindow}

```js
Window.isPointOnDesktopWindow(point)
```

<div class="api-text" v-pre><p>Checks if a 2D point is within the desktop window if in desktop mode, or the drawable area of the HUD overlay if in HMD mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>point</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The point to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the point is within the window or HUD, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### makeConnection {#makeConnection}

```js
Window.makeConnection(success, description)
```

<div class="api-text" v-pre><p>Emits a <a href="#connectionAdded">connectionAdded</a> or a <a href="#connectionError">connectionError</a> signal that indicates whether or not a user connection was successfully made using the Web API.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>success</code></td><td>boolean</td><td><p>If <code>true</code> then <a href="#connectionAdded">connectionAdded</a> is emitted, otherwise <a href="#connectionError">connectionError</a> is emitted.</p></td></tr>
<tr><td><code>description</code></td><td>string</td><td><p>Descriptive text about the connection success or error. This is sent in the signal emitted.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### openAndroidActivity {#openAndroidActivity}

```js
Window.openAndroidActivity(activityName, backToScene)
```

<div class="api-text" v-pre><p>Opens an Android activity and optionally return back to the scene when the activity is completed. <em>Android only.</em></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>activityName</code></td><td>string</td><td><p>The name of the activity to open: one of <code>"Home"</code>, <code>"Login"</code>, or <code>"Privacy Policy"</code>.</p></td></tr>
<tr><td><code>backToScene</code></td><td>boolean</td><td><p>If <code>true</code>, the user is automatically returned back to the scene when the activity is completed.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### openMessageBox {#openMessageBox}

```js
Window.openMessageBox(title, text, buttons, defaultButton)
```

<div class="api-text" v-pre><p>Opens a non-modal message box that can have a variety of button combinations. See also, <a href="#updateMessageBox">updateMessageBox</a> and <a href="#closeMessageBox">closeMessageBox</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code></td><td>string</td><td><p>The title to display for the message box.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><p>Text to display in the message box.</p></td></tr>
<tr><td><code>buttons</code></td><td><a href="#MessageBoxButton">Window.MessageBoxButton</a></td><td><p>The buttons to display on the message box; one or more button values added together.</p></td></tr>
<tr><td><code>defaultButton</code></td><td><a href="#MessageBoxButton">Window.MessageBoxButton</a></td><td><p>The button that has focus when the message box is opened.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The ID of the message box created.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user whether that want to reset something.</p></div>

```js
var messageBox;
var resetButton = 0x4000000;
var cancelButton = 0x400000;

function onMessageBoxClosed(id, button) {
    if (id === messageBox) {
        if (button === resetButton) {
            print("Reset");
        } else {
            print("Don't reset");
        }
    }
}
Window.messageBoxClosed.connect(onMessageBoxClosed);

messageBox = Window.openMessageBox("Reset Something", 
    "Do you want to reset something?",
    resetButton + cancelButton, cancelButton);
```

</div>

<div class="api-entry">

### openUrl {#openUrl}

```js
Window.openUrl(url)
```

<div class="api-text" v-pre><p>Opens a URL in the Interface window or other application, depending on the URL's scheme. The following schemes are supported: </p>
<ul> <li><code>hifi</code>: Navigate to the URL in Interface.</li>
 <li><code>hifiapp</code>: Open a system app in Interface.</li>
 </ul>
 <p>Other schemes will either be handled by the OS (e.g. <code>http</code>, <code>https</code>, or <code>mailto</code>) or will display a dialog asking the user to confirm that they want to try to open the URL.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL to open.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### openWebBrowser {#openWebBrowser}

```js
Window.openWebBrowser()
```

<div class="api-text" v-pre><p>Opens a web browser in a pop-up window.</p></div>

</div>

<div class="api-entry">

### pressLoadingScreenButton {#pressLoadingScreenButton}

```js
Window.pressLoadingScreenButton(button)
```

<div class="api-text" v-pre><p>Says that a button on the loading screen was pressed; the screen calls it, and scripts hear it as <a href="#loadingScreenButtonPressed">loadingScreenButtonPressed</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>button</code></td><td>string</td><td><p><code>"cancel"</code> or <code>"showNow"</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### prompt {#prompt}

```js
Window.prompt(message, defaultText, options?)
```

<div class="api-text" v-pre><p>Prompts the user to enter some text. Displays a modal dialog with a message and a text box, plus "OK" and "Cancel" buttons.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The question to display.</p></td></tr>
<tr><td><code>defaultText</code></td><td>string</td><td><p>The default answer text.</p></td></tr>
<tr><td><code>options</code> <em>optional</em></td><td><a href="#PromptOptions">Window.PromptOptions</a></td><td><p>How the prompt looks.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The text that the user entered if they select "OK", otherwise "".</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user a question requiring a text answer.</p></div>

```js
var answer = Window.prompt("Question", "answer");
if (answer === "") {
    print("User canceled");
} else {
    print("User answer: " + answer);
}
```

</div>

<div class="api-entry">

### promptAsync {#promptAsync}

```js
Window.promptAsync(message?, defaultText?, options?)
```

<div class="api-text" v-pre><p>Prompts the user to enter some text. Displays a non-modal dialog with a message and a text box, plus "OK" and "Cancel" buttons. A <a href="#promptTextChanged">promptTextChanged</a> signal is emitted when the user OKs the dialog; no signal is emitted if the user cancels the dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The question to display.</p></td></tr>
<tr><td><code>defaultText</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The default answer text.</p></td></tr>
<tr><td><code>options</code> <em>optional</em></td><td><a href="#PromptOptions">Window.PromptOptions</a></td><td></td><td><p>How the prompt looks.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user a question requiring a text answer without waiting for the answer.</p></div>

```js
function onPromptTextChanged(text) {
    print("User answer: " + text);
}
Window.promptTextChanged.connect(onPromptTextChanged);

Window.promptAsync("Question", "answer");
print("Script continues without waiting");
```

</div>

<div class="api-entry">

### protocolSignature {#protocolSignature}

```js
Window.protocolSignature()
```

<div class="api-text" v-pre><p>Gets the signature for Interface's protocol version.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>A string uniquely identifying the version of the metaverse protocol that Interface is using.</p></div>

</div>

<div class="api-entry">

### raise {#raise}

```js
Window.raise()
```

<div class="api-text" v-pre><p>Raises the Interface window if it is minimized. If raised, the window gains focus.</p></div>

</div>

<div class="api-entry">

### save {#save}

```js
Window.save(title?, directory?, nameFilter?)
```

<div class="api-text" v-pre><p>Prompts the user to specify the path and name of a file to save to. Displays a modal dialog that navigates the directory tree and allows the user to type in a file name.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The title to display at the top of the dialog.</p></td></tr>
<tr><td><code>directory</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The initial directory to start browsing at.</p></td></tr>
<tr><td><code>nameFilter</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The types of files to display. Examples: <code>"*.json"</code> and <code>"Images (*.png *.jpg *.svg)"</code>. All files are displayed if a filter isn't specified.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The path and name of the file if one is specified, otherwise <code>null</code>. If a single file type is specified in the nameFilter, that file type extension is automatically appended to the result when appropriate.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user to specify a file to save to.</p></div>

```js
var filename = Window.save("Save to JSON file", Paths.resources, "*.json");
print("File: " + filename);
```

</div>

<div class="api-entry">

### saveAsync {#saveAsync}

```js
Window.saveAsync(title?, directory?, nameFilter?)
```

<div class="api-text" v-pre><p>Prompts the user to specify the path and name of a file to save to. Displays a non-modal dialog that navigates the directory tree and allows the user to type in a file name. A <a href="#saveFileChanged">saveFileChanged</a> signal is emitted when a file is specified; no signal is emitted if the user cancels the dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The title to display at the top of the dialog.</p></td></tr>
<tr><td><code>directory</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The initial directory to start browsing at.</p></td></tr>
<tr><td><code>nameFilter</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The types of files to display. Examples: <code>"*.json"</code> and <code>"Images (*.png *.jpg *.svg)"</code>. All files are displayed if a filter isn't specified.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Ask the user to specify a file to save to without waiting for an answer.</p></div>

```js
function onSaveFileChanged(filename) {
    print("File: " + filename);
}
Window.saveFileChanged.connect(onSaveFileChanged);

Window.saveAsync("Save to JSON file", Paths.resources, "*.json");
print("Script continues without waiting");
```

</div>

<div class="api-entry">

### setActiveDisplayPlugin {#setActiveDisplayPlugin}

```js
Window.setActiveDisplayPlugin(index)
```

<div class="api-text" v-pre><p>Sets the currently active display plugin.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the display plugin. Must be less than the value returned by <a href="#getDisplayPluginCount">getDisplayPluginCount</a>. The first display plugin has an index of <code>0</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setArrivalWaitsForNearby {#setArrivalWaitsForNearby}

```js
Window.setArrivalWaitsForNearby(wait)
```

<div class="api-text" v-pre><p>Makes the arrival in a world wait, while a loading screen is up, for what is near the avatar: physics starts only once the nearby entities are ready for physics and drawn (their models and textures loaded), as interstitial mode does, even where the zone allows moving at once (ghosting).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>wait</code></td><td>boolean</td><td><p><code>true</code> while the loading screen is up, <code>false</code> once it has gone.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setDisplayTexture {#setDisplayTexture}

```js
Window.setDisplayTexture(texture)
```

<div class="api-text" v-pre><p>Sets what to show on the PC display. For entity camera view, the entity camera is configured using <a href="Camera#setCameraEntity"><code>Camera.setCameraEntity</code></a> and <a href="Camera">Camera.mode</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>texture</code></td><td><a href="#DisplayTexture">Window.DisplayTexture</a></td><td><p>The view to display.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the display texture was successfully set, otherwise <code>false</code>.</p></div>

</div>

<div class="api-entry">

### setFocus {#setFocus}

```js
Window.setFocus()
```

<div class="api-text" v-pre><p>Makes the Interface window have focus. On Windows, if Interface doesn't already have focus, the task bar icon flashes to indicate that Interface wants attention but focus isn't taken away from the application that the user is using.</p></div>

</div>

<div class="api-entry">

### setLoadingScreen {#setLoadingScreen}

```js
Window.setLoadingScreen(state)
```

<div class="api-text" v-pre><p>Shows, updates or hides Darkride's loading screen over the window (<code>WorldLoadingScreen.qml</code>). A field left out keeps its last value.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>state</code></td><td>object</td><td><p><code>up</code> (boolean), the strings <code>world</code>, <code>author</code>, <code>picture</code> (a URL) and <code>status</code>, <code>progress</code>: 0 to 1 and the bar fills, or negative and it glides, and the buttons it offers, <code>canCancel</code> and <code>canShowNow</code> (booleans).</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### shareSnapshot {#shareSnapshot}

```js
Window.shareSnapshot(path, href?)
```

<div class="api-text" v-pre><p>Prepares a snapshot ready for sharing. A <a href="#snapshotShared">snapshotShared</a> signal is emitted when the snapshot has been prepared.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td></td><td><p>The path and name of the image file to share.</p></td></tr>
<tr><td><code>href</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The metaverse location where the snapshot was taken.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### showAssetServer {#showAssetServer}

```js
Window.showAssetServer(uploadFile?)
```

<div class="api-text" v-pre><p>Opens the Asset Browser dialog. If a file to upload is specified, the user is prompted to enter the folder and name to map the file to on the asset server.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>uploadFile</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The path and name of a file to upload to the asset server.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Upload a file to the asset server.</p></div>

```js
var filename = Window.browse("Select File to Add to Asset Server", Paths.resources);
print("File: " + filename);
Window.showAssetServer(filename);
```

</div>

<div class="api-entry">

### showWorldNow {#showWorldNow}

```js
Window.showWorldNow()
```

<div class="api-text" v-pre><p>Lifts the whole-world loading screen now ("Show me now"); the rest of the world streams in as usual.</p></div>

</div>

<div class="api-entry">

### takeSecondaryCamera360Snapshot {#takeSecondaryCamera360Snapshot}

```js
Window.takeSecondaryCamera360Snapshot(cameraPosition, cubemapOutputFormat?, notify?, filename?)
```

<div class="api-text" v-pre><p>Takes a 360° snapshot at a given position for the secondary camera. The secondary camera does not need to have been set up. </p>
<p>Snapshots are saved to the path specified in Settings &gt; General &gt; Snapshots, which can be accessed via the <a href="Snapshot"><code>Snapshot</code></a> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>cameraPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the camera for the snapshot.</p></td></tr>
<tr><td><code>cubemapOutputFormat</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code> then the snapshot is saved as a cube map image, otherwise it is saved as an equirectangular image.</p></td></tr>
<tr><td><code>notify</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>This value is passed on through the <a href="#stillSnapshotTaken">stillSnapshotTaken</a> signal.</p></td></tr>
<tr><td><code>filename</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>If a filename is not provided, the image is saved as "tivoli-snap-by-&lt;user name&gt;-on-YYYY-MM-DD_HH-MM-SS". </p>
<p>Images are saved in JPEG or PNG format according to the extension provided — <code>".jpg"</code>, <code>".jpeg"</code>, or <code>".png"</code> — or if not provided then in JPEG format with an extension of <code>".jpg"</code>.</p>
<p></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### takeSecondaryCameraSnapshot {#takeSecondaryCameraSnapshot}

```js
Window.takeSecondaryCameraSnapshot(notify?, filename?)
```

<div class="api-text" v-pre><p>Takes a still snapshot of the current view from the secondary camera that can be set up through the <a href="Render"><code>Render</code></a> API. </p>
<p>Snapshots are saved to the path specified in Settings &gt; General &gt; Snapshots, which can be accessed via the <a href="Snapshot"><code>Snapshot</code></a> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>notify</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>This value is passed on through the <a href="#stillSnapshotTaken">stillSnapshotTaken</a> signal.</p></td></tr>
<tr><td><code>filename</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>If a filename is not provided, the image is saved as "tivoli-snap-by-&lt;user name&gt;-on-YYYY-MM-DD_HH-MM-SS". </p>
<p>Images are saved in JPEG or PNG format according to the extension provided — <code>".jpg"</code>, <code>".jpeg"</code>, or <code>".png"</code> — or if not provided then in JPEG format with an extension of <code>".jpg"</code>.</p>
<p></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### takeSnapshot {#takeSnapshot}

```js
Window.takeSnapshot(notify?, includeAnimated?, aspectRatio?, filename?)
```

<div class="api-text" v-pre><p>Takes a snapshot of the current Interface view from the primary camera. When a still image only is captured, <a href="#stillSnapshotTaken">stillSnapshotTaken</a> is emitted; when a still image plus moving images are captured, <a href="#processingGifStarted">processingGifStarted</a> and <a href="#processingGifCompleted">processingGifCompleted</a> are emitted. </p>
<p>Snapshots are saved to the path specified in Settings &gt; General &gt; Snapshots, which can be accessed via the <a href="Snapshot"><code>Snapshot</code></a> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>notify</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>This value is passed on through the <a href="#stillSnapshotTaken">stillSnapshotTaken</a> signal.</p></td></tr>
<tr><td><code>includeAnimated</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code>, a moving image is captured as an animated GIF in addition to a still image.</p></td></tr>
<tr><td><code>aspectRatio</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The width/height ratio of the snapshot required. If the value is <code>0</code>, the full resolution is used (window dimensions in desktop mode; HMD display dimensions in HMD mode), otherwise one of the dimensions is adjusted in order to match the aspect ratio.</p></td></tr>
<tr><td><code>filename</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>If a filename is not provided, the image is saved as "tivoli-snap-by-&lt;user name&gt;-on-YYYY-MM-DD_HH-MM-SS". </p>
<p>Still images are saved in JPEG or PNG format according to the extension provided — <code>".jpg"</code>, <code>".jpeg"</code>, or <code>".png"</code> — or if not provided then in JPEG format with an extension of <code>".jpg"</code>. Animated images are saved in GIF format.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Using the snapshot function and signals.</p></div>

```js
function onStillSnapshotTaken(path, notify) {
    print("Still snapshot taken: " + path);
    print("Notify: " + notify);
}

function onProcessingGifStarted(stillPath) {
    print("Still snapshot taken: " + stillPath);
}

function onProcessingGifCompleted(animatedPath) {
    print("Animated snapshot taken: " + animatedPath);
}

Window.stillSnapshotTaken.connect(onStillSnapshotTaken);
Window.processingGifStarted.connect(onProcessingGifStarted);
Window.processingGifCompleted.connect(onProcessingGifCompleted);

var notify = true;
var animated = true;
var aspect = 1920 / 1080;
var filename = "example-snapshot";
Window.takeSnapshot(notify, animated, aspect, filename);
```

</div>

<div class="api-entry">

### updateMessageBox {#updateMessageBox}

```js
Window.updateMessageBox(id, title, text, buttons, defaultButton)
```

<div class="api-text" v-pre><p>Updates the content of a message box that was opened with <a href="#openMessageBox">openMessageBox</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the message box.</p></td></tr>
<tr><td><code>title</code></td><td>string</td><td><p>The title to display for the message box.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><p>Text to display in the message box.</p></td></tr>
<tr><td><code>buttons</code></td><td><a href="#MessageBoxButton">Window.MessageBoxButton</a></td><td><p>The buttons to display on the message box; one or more button values added together.</p></td></tr>
<tr><td><code>defaultButton</code></td><td><a href="#MessageBoxButton">Window.MessageBoxButton</a></td><td><p>The button that has focus when the message box is opened.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### announcement {#announcement}

```js
Window.announcement.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message is announced by <a href="#displayAnnouncement">displayAnnouncement</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The message text.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### assetsDirChanged {#assetsDirChanged}

```js
Window.assetsDirChanged.connect(function (asset) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user chooses an asset in a <a href="#browseAssetsAsync">browseAssetsAsync</a> dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>asset</code></td><td>string</td><td><p>The path and name of the asset the user chose in the dialog.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### browseChanged {#browseChanged}

```js
Window.browseChanged.connect(function (filename) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user chooses a file in a <a href="#browseAsync">browseAsync</a> dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>The path and name of the file the user chose in the dialog.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### browseDirChanged {#browseDirChanged}

```js
Window.browseDirChanged.connect(function (directory) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user chooses a directory in a <a href="#browseDirAsync">browseDirAsync</a> dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>directory</code></td><td>string</td><td><p>The directory the user chose in the dialog.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### connectionAdded {#connectionAdded}

```js
Window.connectionAdded.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when you've successfully made a user connection.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>A description of the success.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### connectionError {#connectionError}

```js
Window.connectionError.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when you failed to make a user connection.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>A description of the error.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### domainChanged {#domainChanged}

```js
Window.domainChanged.connect(function (domainURL) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when you change the world you're visiting. </p>
<p><strong>Warning:</strong> Is not emitted if you go to a world that isn't running.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>domainURL</code></td><td>string</td><td><p>The world's URL.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when you change worlds.</p></div>

```js
function onDomainChanged(domain) {
    print("Domain changed: " + domain);
}

Window.domainChanged.connect(onDomainChanged);
```

</div>

<div class="api-entry">

### domainConnectionRefused {#domainConnectionRefused}

```js
Window.domainConnectionRefused.connect(function (reasonMessage, reasonCode, extraInfo) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when you try to visit a world but are refused connection.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>reasonMessage</code></td><td>string</td><td><p>A description of the refusal.</p></td></tr>
<tr><td><code>reasonCode</code></td><td><a href="#ConnectionRefusedReason">Window.ConnectionRefusedReason</a></td><td><p>Integer number that enumerates the reason for the refusal.</p></td></tr>
<tr><td><code>extraInfo</code></td><td>string</td><td><p>Extra information about the refusal.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### domainConnectionTimedOut {#domainConnectionTimedOut}

```js
Window.domainConnectionTimedOut.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a world you're visiting or connected to hasn't answered for long enough that Interface gives up on it for now and shows its connection failure window (or goes to the error world). The connection keeps being tried: if the world answers later, <a href="#domainChanged"><code>Window.domainChanged</code></a> follows.</p></div>

</div>

<div class="api-entry">

### geometryChanged {#geometryChanged}

```js
Window.geometryChanged.connect(function (geometry) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the position or size of the Interface window changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>geometry</code></td><td><a href="globals#Rect">Rect</a></td><td><p>The position and size of the drawable area of the Interface window.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the position of size of the Interface window when it changes.</p></div>

```js
function onWindowGeometryChanged(rect) {
    print("Window geometry: " + JSON.stringify(rect));
}

Window.geometryChanged.connect(onWindowGeometryChanged);
```

</div>

<div class="api-entry">

### interstitialModeChanged {#interstitialModeChanged}

```js
Window.interstitialModeChanged.connect(function (interstitialMode) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the interstitial mode changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>interstitialMode</code></td><td>boolean</td><td><p><code>true</code> if the interstitial graphics are displayed when the world is loading, <code>false</code> if they are not.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadingScreenButtonPressed {#loadingScreenButtonPressed}

```js
Window.loadingScreenButtonPressed.connect(function (button) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a button on the loading screen is pressed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>button</code></td><td>string</td><td><p><code>"cancel"</code> (go back where you came from) or <code>"showNow"</code> (stop waiting for the whole world).</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadingScreenChanged {#loadingScreenChanged}

```js
Window.loadingScreenChanged.connect(function (state) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a script changes the loading screen with <a href="#setLoadingScreen">setLoadingScreen</a>; the screen listens to it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>state</code></td><td>object</td><td><p>The fields that changed.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### messageBoxClosed {#messageBoxClosed}

```js
Window.messageBoxClosed.connect(function (id, button) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user closes a message box that was opened with <a href="#openMessageBox">openMessageBox</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the message box that was closed.</p></td></tr>
<tr><td><code>button</code></td><td>number</td><td><p>The button that the user clicked. If the user presses Esc, the Cancel button value is returned, whether or not the Cancel button is displayed in the message box.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### minimizedChanged {#minimizedChanged}

```js
Window.minimizedChanged.connect(function (isMinimized) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when "minimized" state of the Interface window changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isMinimized</code></td><td>boolean</td><td><p><code>true</code> if the Interface window is minimized, <code>false</code> if it isn't.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the "minimized" state of the Interface window when it changes.</p></div>

```js
function onWindowMinimizedChanged(minimized) {
    print("Window minimized: " + minimized);
}

Window.minimizedChanged.connect(onWindowMinimizedChanged);
```

</div>

<div class="api-entry">

### processingGifCompleted {#processingGifCompleted}

```js
Window.processingGifCompleted.connect(function (pathAnimatedSnapshot) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a GIF has been prepared of the snapshot images captured by <a href="#takeSnapshot">takeSnapshot</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pathAnimatedSnapshot</code></td><td>string</td><td><p>The path and name of the moving snapshot GIF file.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### processingGifStarted {#processingGifStarted}

```js
Window.processingGifStarted.connect(function (pathStillSnapshot) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the snapshot images have been captured by <a href="#takeSnapshot">takeSnapshot</a> and the GIF is starting to be processed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pathStillSnapshot</code></td><td>string</td><td><p>The path and name of the still snapshot image file.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### promptTextChanged {#promptTextChanged}

```js
Window.promptTextChanged.connect(function (text) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user OKs a <a href="#promptAsync">promptAsync</a> dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>text</code></td><td>string</td><td><p>The text the user entered in the dialog.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### redirectErrorStateChanged {#redirectErrorStateChanged}

```js
Window.redirectErrorStateChanged.connect(function (isInErrorState) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when you try to visit a world but are redirected into the error state.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isInErrorState</code></td><td>boolean</td><td><p><code>true</code> if the user has been redirected to the error URL, <code>false</code> if they haven't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### saveFileChanged {#saveFileChanged}

```js
Window.saveFileChanged.connect(function (filename) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user specifies a file in a <a href="#saveAsync">saveAsync</a> dialog.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>The path and name of the file that the user specified in the dialog.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### snapshot360Taken {#snapshot360Taken}

```js
Window.snapshot360Taken.connect(function (pathStillSnapshot, notify) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a still 360° snapshot has been taken by calling <a href="#takeSecondaryCamera360Snapshot">takeSecondaryCamera360Snapshot</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pathStillSnapshot</code></td><td>string</td><td><p>The path and name of the snapshot image file.</p></td></tr>
<tr><td><code>notify</code></td><td>boolean</td><td><p>The value of the <code>notify</code> parameter that <a href="#takeSecondaryCamera360Snapshot">takeSecondaryCamera360Snapshot</a> was called with.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### snapshotShared {#snapshotShared}

```js
Window.snapshotShared.connect(function (isError, reply) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a snapshot submitted via <a href="#shareSnapshot">shareSnapshot</a> is ready for sharing. The snapshot may then be shared via the <a href="Account#properties"><code>Account.metaverseServerURL</code></a> Web API.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isError</code></td><td>boolean</td><td><p><code>true</code> if an error was encountered preparing the snapshot for sharing, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>reply</code></td><td>string</td><td><p>JSON-formatted information about the snapshot.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### startUpWorldUnreachable {#startUpWorldUnreachable}

```js
Window.startUpWorldUnreachable.connect(function (from) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the world Interface started in (the last world you were in, or your home, by Settings &gt; General &gt; Start in) hasn't answered: Interface goes to the entry world instead, without its connection failure window. <a href="#domainConnectionTimedOut"><code>Window.domainConnectionTimedOut</code></a> is not triggered for it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>from</code></td><td>string</td><td><p><code>"last"</code> for the last world you were in, <code>"home"</code> for your home.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### stillSnapshotTaken {#stillSnapshotTaken}

```js
Window.stillSnapshotTaken.connect(function (pathStillSnapshot, notify) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a still snapshot has been taken by calling <a href="#takeSnapshot">takeSnapshot</a> with <code>includeAnimated = false</code> or <a href="#takeSecondaryCameraSnapshot">takeSecondaryCameraSnapshot</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pathStillSnapshot</code></td><td>string</td><td><p>The path and name of the snapshot image file.</p></td></tr>
<tr><td><code>notify</code></td><td>boolean</td><td><p>The value of the <code>notify</code> parameter that <a href="#takeSnapshot">takeSnapshot</a> was called with.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### svoImportRequested {#svoImportRequested}

```js
Window.svoImportRequested.connect(function (url) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when you try to navigate to a *.json, *.svo, or *.svo.json URL in a Web browser within Interface.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the file to import.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### worldLoadingChanged {#worldLoadingChanged}

```js
Window.worldLoadingChanged.connect(function (loading) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when whole-world loading starts or ends.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>loading</code></td><td>boolean</td><td><p><code>true</code> when the loading screen should go up, <code>false</code> when it should lift.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### ConnectionRefusedReason {#ConnectionRefusedReason}

<div class="api-text" v-pre><p>The reasons that you may be refused connection to a world are defined by numeric values:</p>
 <table> <thead> <tr> <th>Reason</th> <th>Value</th> <th>Description</th> </tr>
 </thead>
 <tbody> <tr> <td><strong>Unknown</strong></td> <td><code>0</code></td> <td>Some unknown reason.</td> </tr>
 <tr> <td><strong>ProtocolMismatch</strong></td> <td><code>1</code></td> <td>The communications protocols of the world and your Interface are not the same.</td> </tr>
 <tr> <td><strong>LoginError</strong></td> <td><code>2</code></td> <td>You could not be logged into the world.</td> </tr>
 <tr> <td><strong>NotAuthorized</strong></td> <td><code>3</code></td> <td>You are not authorized to connect to the world.</td> </tr>
 <tr> <td><strong>TooManyUsers</strong></td> <td><code>4</code></td> <td>The world already has its maximum number of users.</td> </tr>
 <tr> <td><strong>TimedOut</strong></td> <td><code>5</code></td> <td>Connecting to the world timed out.</td> </tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### DisplayTexture {#DisplayTexture}

<div class="api-text" v-pre><p>The views that may be visible on the PC display.</p>
 <table> <thead> <tr> <th>Value</th> <th>View Displayed</th> </tr>
 </thead>
 <tbody> <tr> <td><code>""</code></td> <td>Normal view.</td> </tr>
 <tr> <td><code>"resource://hmdPreviewFrame"</code></td> <td>HMD preview.</td> </tr>
 <tr> <td><code>"resource://spectatorCameraFrame"</code></td> <td>Entity camera view.</td> </tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### MessageBoxButton {#MessageBoxButton}

<div class="api-text" v-pre><p>The buttons that may be included in a message box created by <a href="#openMessageBox">openMessageBox</a> are defined by numeric values: </p>
<table> <thead> <tr> <th>Button</th> <th>Value</th> <th>Description</th> </tr>
 </thead>
 <tbody> <tr> <td><strong>NoButton</strong></td> <td><code>0x0</code></td> <td>An invalid button.</td> </tr>
 <tr> <td><strong>Ok</strong></td> <td><code>0x400</code></td> <td>"OK"</td> </tr>
 <tr> <td><strong>Save</strong></td> <td><code>0x800</code></td> <td>"Save"</td> </tr>
 <tr> <td><strong>SaveAll</strong></td> <td><code>0x1000</code></td> <td>"Save All"</td> </tr>
 <tr> <td><strong>Open</strong></td> <td><code>0x2000</code></td> <td>"Open"</td> </tr>
 <tr> <td><strong>Yes</strong></td> <td><code>0x4000</code></td> <td>"Yes"</td> </tr>
 <tr> <td><strong>YesToAll</strong></td> <td><code>0x8000</code></td> <td>"Yes to All"</td> </tr>
 <tr> <td><strong>No</strong></td> <td><code>0x10000</code></td> <td>"No"</td> </tr>
 <tr> <td><strong>NoToAll</strong></td> <td><code>0x20000</code></td> <td>"No to All"</td> </tr>
 <tr> <td><strong>Abort</strong></td> <td><code>0x40000</code></td> <td>"Abort"</td> </tr>
 <tr> <td><strong>Retry</strong></td> <td><code>0x80000</code></td> <td>"Retry"</td> </tr>
 <tr> <td><strong>Ignore</strong></td> <td><code>0x100000</code></td> <td>"Ignore"</td> </tr>
 <tr> <td><strong>Close</strong></td> <td><code>0x200000</code></td> <td>"Close"</td> </tr>
 <tr> <td><strong>Cancel</strong></td> <td><code>0x400000</code></td> <td>"Cancel"</td> </tr>
 <tr> <td><strong>Discard</strong></td> <td><code>0x800000</code></td> <td>"Discard" or "Don't Save"</td> </tr>
 <tr> <td><strong>Help</strong></td> <td><code>0x1000000</code></td> <td>"Help"</td> </tr>
 <tr> <td><strong>Apply</strong></td> <td><code>0x2000000</code></td> <td>"Apply"</td> </tr>
 <tr> <td><strong>Reset</strong></td> <td><code>0x4000000</code></td> <td>"Reset"</td> </tr>
 <tr> <td><strong>RestoreDefaults</strong></td> <td><code>0x8000000</code></td> <td>"Restore Defaults"</td> </tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### PromptOptions {#PromptOptions}

<div class="api-text" v-pre><p>How a <a href="#prompt">prompt</a> or <a href="#promptAsync">promptAsync</a> dialog looks.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>placeholderText</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Grey words in the empty text box, such as an example of what to type.</p></td></tr>
<tr><td><code>buttonText</code> <em>optional</em></td><td>string</td><td><code>&quot;OK&quot;</code></td><td><p>The words on the button that answers.</p></td></tr>
<tr><td><code>monospace</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to show the text in a fixed-width face, for paths and addresses.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### WorldLoading {#WorldLoading}

<div class="api-text" v-pre><p>The state of whole-world loading. A world's owner can ask (its settings, Loading) that visitors see a loading screen on arrival until the whole world has arrived and its models and textures have loaded.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>active</code></td><td>boolean</td><td><p><code>true</code> while the loading screen should be up.</p></td></tr>
<tr><td><code>received</code></td><td>number</td><td><p>The entities received so far (while <code>active</code>).</p></td></tr>
<tr><td><code>ready</code></td><td>number</td><td><p>Of those, the ones drawn and ready for physics.</p></td></tr>
<tr><td><code>serverDone</code></td><td>boolean</td><td><p><code>true</code> once the entity server has sent the whole world, so <code>received</code> is the world's total.</p></td></tr>
<tr><td><code>seconds</code></td><td>number</td><td><p>The seconds since loading began.</p></td></tr>
<tr><td><code>secondsLeft</code></td><td>number</td><td><p>The seconds until the time limit lifts the loading screen anyway.</p></td></tr>
<tr><td><code>timeLimit</code></td><td>number</td><td><p>The world's time limit, in seconds.</p></td></tr>
<tr><td><code>radius</code></td><td>number</td><td><p>The distance in metres within which the screen waits for models and textures (<code>0</code>: everywhere); <code>ready</code> counts the farther ones as ready.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### domainLoadingProgress {#domainLoadingProgress}

```js
Window.domainLoadingProgress()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Progress.</p></div>

</div>
