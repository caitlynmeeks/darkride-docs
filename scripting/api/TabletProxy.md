---
title: "TabletProxy"
description: "An instance of a tablet."
---

# TabletProxy

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>An instance of a tablet. In toolbar mode (see Developer &gt; UI options), the tablet's menu buttons are displayed in a toolbar and other tablet content is displayed in a dialog.</p>
 <p>Retrieve an existing tablet or create a new tablet using <a href="Tablet#getTablet"><code>Tablet.getTablet</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>A unique name that identifies the tablet. <em>Read-only.</em></p></td></tr>
<tr><td><code>toolbarMode</code></td><td>boolean</td><td><p><code>true</code> if the tablet is in toolbar mode, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>landscape</code></td><td>boolean</td><td><p><code>true</code> if the tablet is displayed in landscape mode, <code>false</code> if it is displayed in portrait mode. </p>
<p>Note: This property isn't used in toolbar mode.</p>
<p></p></td></tr>
<tr><td><code>tabletShown</code></td><td>boolean</td><td><p><code>true</code> if the tablet is currently displayed, <code>false</code> if it isn't. </p>
<p>Note: This property isn't used in toolbar mode.</p>
<p></p></td></tr>
<tr><td><code>buttons</code></td><td><a href="#TabletButtonListModel">TabletProxy.TabletButtonListModel</a></td><td><p>Information on the buttons in the tablet main menu (or toolbar in toolbar mode) for use in QML. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### addButton {#addButton}

```js
addButton(properties)
```

<div class="api-text" v-pre><p>Adds a new button to the tablet menu.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="TabletButtonProxy#ButtonProperties">TabletButtonProxy.ButtonProperties</a></td><td><p>Button properties.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="TabletButtonProxy">TabletButtonProxy</a> <p>The button added.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add a menu button.</p></div>

```js
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
var button = tablet.addButton({ text: "TEST" });

button.clicked.connect(function () {
    print("TEST button clicked");
});

Script.scriptEnding.connect(function () {
    tablet.removeButton(button);
});
```

</div>

<div class="api-entry">

### closeDialog {#closeDialog}

```js
closeDialog()
```

<div class="api-text" v-pre><p>Closes any open modal, non-modal, or message dialog, opened by <a href="Window#prompt"><code>Window.prompt</code></a>, <a href="Window#promptAsync"><code>Window.promptAsync</code></a>, <a href="Window#openMessageBox"><code>Window.openMessageBox</code></a>, or similar.</p></div>

</div>

<div class="api-entry">

### emitScriptEvent {#emitScriptEvent}

```js
emitScriptEvent(message)
```

<div class="api-text" v-pre><p>Sends a message to the current web page. To receive the message, the web page's script must connect to the <code>EventBridge</code> that is automatically provided to the script: </p>
<pre class="prettyprint"><code>EventBridge.scriptEventReceived.connect(function(message) {&#10;    ...&#10;});</code></pre>
 <p><strong>Warning:</strong> The <code>EventBridge</code> object is not necessarily set up immediately ready for the web page's script to use. A simple workaround that normally works is to add a delay before calling <code>EventBridge.scriptEventReceived.connect(...)</code>. A better solution is to periodically call <code>EventBridge.scriptEventReceived.connect(...)</code> and then <code>EventBridge.emitWebEvent(...)</code> to send a message to the client script, and have that send a message back using <code>emitScriptEvent(...)</code>; when the return message is received, the <code>EventBridge</code> is ready for use.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send to the web page.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getLandscape {#getLandscape}

```js
getLandscape()
```

<div class="api-text" v-pre><p>Gets whether the tablet is displayed in landscape or portrait mode. </p>
<p>Note: The setting isn't used in toolbar mode.</p>
<p></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the tablet is displayed in landscape mode, <code>false</code> if it is displayed in portrait mode.</p></div>

</div>

<div class="api-entry">

### gotoHomeScreen {#gotoHomeScreen}

```js
gotoHomeScreen()
```

<div class="api-text" v-pre><p>Displays the tablet home screen, if the tablet is open.</p></div>

</div>

<div class="api-entry">

### gotoMenuScreen {#gotoMenuScreen}

```js
gotoMenuScreen(submenu?)
```

<div class="api-text" v-pre><p>Displays the tablet menu. The tablet is opened if it isn't already open.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>submenu</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The name of a submenu to display, if any.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Go to the "View" menu.</p></div>

```js
tablet.gotoMenuScreen("View");
```

</div>

<div class="api-entry">

### gotoWebScreen {#gotoWebScreen}

```js
gotoWebScreen(url, injectedJavaScriptUrl?, loadOtherBase?)
```

<div class="api-text" v-pre><p>Opens a web app or page in addition to any current app. In tablet mode, the app or page is displayed over the top of the current app; in toolbar mode, the app is opened in a new window that replaces any current window open. If in tablet mode, the app or page can be closed using <a href="#returnToPreviousApp"><code>TabletProxy#returnToPreviousApp</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The URL of the web page or app.</p></td></tr>
<tr><td><code>injectedJavaScriptUrl</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of JavaScript to inject into the web page.</p></td></tr>
<tr><td><code>loadOtherBase</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code>, the web page or app is displayed in a frame with "back" and "close" buttons. </p>
<p class="important">Deprecated: This parameter is deprecated and will be removed.</p>
<p></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### isMessageDialogOpen {#isMessageDialogOpen}

```js
isMessageDialogOpen()
```

<div class="api-text" v-pre><p>Checks if the tablet has a modal, non-modal, or message dialog open.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if a modal, non-modal, or message dialog is open, <code>false</code> if there isn't.</p></div>

</div>

<div class="api-entry">

### isPathLoaded {#isPathLoaded}

```js
isPathLoaded(path)
```

<div class="api-text" v-pre><p>Checks if a path is the current app or dialog displayed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The path to test.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if <code>path</code> is the current app or dialog, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### loadQMLOnTop {#loadQMLOnTop}

```js
loadQMLOnTop(path)
```

<div class="api-text" v-pre><p>Opens a QML app or dialog in addition to any current app. In tablet mode, the app or dialog is displayed over the top of the current app; in toolbar mode, the app or dialog is opened in a new window. If in tablet mode, the app can be closed using <a href="#returnToPreviousApp"><code>TabletProxy#returnToPreviousApp</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The path to the app's QML.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadQMLSource {#loadQMLSource}

```js
loadQMLSource(path, resizable?)
```

<div class="api-text" v-pre><p>Opens a QML app or dialog on the tablet.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td></td><td><p>The path of the QML app or dialog.</p></td></tr>
<tr><td><code>resizable</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to make the dialog resizable in toolbar mode, <code>false</code> to have it not resizable.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadWebScreenOnTop {#loadWebScreenOnTop}

```js
loadWebScreenOnTop(path, injectedJavaScriptURL?)
```

<div class="api-text" v-pre><p>Opens a web app or page in addition to any current app. In tablet mode, the app or page is displayed over the top of the current app; in toolbar mode, the app is opened in a new window that replaces any current window open. If in tablet mode, the app or page can be closed using <a href="#returnToPreviousApp"><code>TabletProxy#returnToPreviousApp</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td></td><td><p>The URL of the web page or HTML app.</p></td></tr>
<tr><td><code>injectedJavaScriptURL</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of JavaScript to inject into the web page.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onHomeScreen {#onHomeScreen}

```js
onHomeScreen()
```

<div class="api-text" v-pre><p>Checks if the tablet is on the home screen.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the tablet is on the home screen, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### popFromStack {#popFromStack}

```js
popFromStack()
```

<div class="api-text" v-pre><p>Closes a QML dialog that was displayed using pushOntoStack with a dialog implementing a QML <code>StackView</code>; otherwise, no action is taken. </p>
<p>If using a QML <code>StackView</code>, its <code>popSource()</code> function is called.</p>
<p></p></div>

</div>

<div class="api-entry">

### pushOntoStack {#pushOntoStack}

```js
pushOntoStack(path)
```

<div class="api-text" v-pre><p>Displays a QML dialog over the top of the current dialog, without closing the current dialog. Use <a href="#popFromStack">popFromStack</a> to close the dialog. </p>
<p>If the current dialog or its ancestors contain a QML <code>StackView</code> with <code>objectName: "stack"</code> and function <code>pushSource(path)</code>, that function is called; otherwise, <a href="#loadQMLSource">loadQMLSource</a> is called. The Create app provides an example of using a QML <code>StackView</code>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The path to the dialog's QML.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the dialog was successfully opened, <code>false</code> if it wasn't.</p></div>

</div>

<div class="api-entry">

### removeButton {#removeButton}

```js
removeButton(button)
```

<div class="api-text" v-pre><p>Removes a button from the tablet menu.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>button</code></td><td><a href="TabletButtonProxy">TabletButtonProxy</a></td><td><p>The button to remove.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### returnToPreviousApp {#returnToPreviousApp}

```js
returnToPreviousApp()
```

<div class="api-text" v-pre><p>Closes the current app and returns to the previous app, if in tablet mode and the current app was loaded using <a href="#loadQMLOnTop">loadQMLOnTop</a> or <a href="#loadWebScreenOnTop">loadWebScreenOnTop</a>.</p></div>

</div>

<div class="api-entry">

### sendToQml {#sendToQml}

```js
sendToQml(message)
```

<div class="api-text" v-pre><p>Sends a message to the current QML page. To receive the message, the QML page must implement a function: </p>
<pre class="prettyprint"><code>function fromScript(message) {&#10;  ...&#10;}</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send to the QML page.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setLandscape {#setLandscape}

```js
setLandscape(landscape)
```

<div class="api-text" v-pre><p>Sets whether the tablet is displayed in landscape or portrait mode. </p>
<p>Note: The setting isn't used in toolbar mode.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>landscape</code></td><td>boolean</td><td><p><code>true</code> to display the tablet in landscape mode, <code>false</code> to display it in portrait mode.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### fromQml {#fromQml}

```js
TabletProxy.fromQml.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message from the current QML page displayed on the tablet is received. The QML page can send a message (string or object) by calling: </p>
<pre class="prettyprint"><code>sendToScript(message);</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### screenChanged {#screenChanged}

```js
TabletProxy.screenChanged.connect(function (type, url) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the tablet's screen changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>string</td><td><p>The type of the new screen or change: <code>"Home"</code>, <code>"Menu"</code>, <code>"QML"</code>, <code>"Web"</code>, <code>"Closed"</code>, or <code>"Unknown"</code>.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td><p>The url of the page displayed. Only valid for Web and QML.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### tabletShownChanged {#tabletShownChanged}

```js
TabletProxy.tabletShownChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the tablet is opened or closed. </p>
<p>Note: Doesn't apply in toolbar mode.</p>
<p></p></div>

</div>

<div class="api-entry">

### toolbarModeChanged {#toolbarModeChanged}

```js
TabletProxy.toolbarModeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the tablet's toolbar mode changes.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when the system tablet's toolbar mode changes.</p></div>

```js
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
tablet.toolbarModeChanged.connect(function () {
    print("Tablet toolbar mode changed to: " + tablet.toolbarMode);
});
// Use Developer > UI > Tablet Becomes Toolbar to change the toolbar mode.
```

</div>

<div class="api-entry">

### webEventReceived {#webEventReceived}

```js
TabletProxy.webEventReceived.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message from the current HTML web page displayed on the tablet is received. The HTML web page can send a message by calling: </p>
<pre class="prettyprint"><code>EventBridge.emitWebEvent(message);</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### TabletButtonListModel {#TabletButtonListModel}

<div class="api-text" v-pre><p>Information on the buttons in the tablet main menu (toolbar in toolbar mode) for use in QML. Has properties and functions per <a href="http://doc.qt.io/qt-5/qabstractlistmodel.html" target="_blank" rel="noopener">http://doc.qt.io/qt-5/qabstractlistmodel.html</a>.</p></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### desktopWindowClosed {#desktopWindowClosed}

```js
desktopWindowClosed()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### emitWebEvent {#emitWebEvent}

```js
emitWebEvent(message)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object | string</td><td><p>Message</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### initialScreen {#initialScreen}

```js
initialScreen(url)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>URL.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadHTMLSourceOnTopImpl {#loadHTMLSourceOnTopImpl}

```js
loadHTMLSourceOnTopImpl()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### loadQMLOnTopImpl {#loadQMLOnTopImpl}

```js
loadQMLOnTopImpl()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### loadQMLSourceImpl {#loadQMLSourceImpl}

```js
loadQMLSourceImpl()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### onTabletShown {#onTabletShown}

```js
onTabletShown()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### returnToPreviousAppImpl {#returnToPreviousAppImpl}

```js
returnToPreviousAppImpl()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

::: tip Names from the engine's history
Names and addresses with `hifi` or `tivoli` in them, such as `hifi_pbr`, a `hifi://` address or an example file's address, come from the engine's history and still work. Type them as they are.
:::
