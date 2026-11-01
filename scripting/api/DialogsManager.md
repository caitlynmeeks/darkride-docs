---
title: "DialogsManager"
description: "The DialogsMamnager API provides facilities to work with some key dialogs."
draft: true
---

# DialogsManager

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>DialogsMamnager</code> API provides facilities to work with some key dialogs.</p></div>

## Functions {#functions}

### hideAddressBar {#hideAddressBar}

```js
DialogsManager.hideAddressBar()
```

<div class="api-text" v-pre><p>Hides the "Goto" dialog.</p></div>

### showAddressBar {#showAddressBar}

```js
DialogsManager.showAddressBar()
```

<div class="api-text" v-pre><p>Shows the "Goto" dialog.</p></div>

### showFeed {#showFeed}

```js
DialogsManager.showFeed()
```

<div class="api-text" v-pre><p><em>Currently performs no action.</em></p></div>

### showLoginDialog {#showLoginDialog}

```js
DialogsManager.showLoginDialog()
```

<div class="api-text" v-pre><p>Shows the login dialog.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### addressBarShown {#addressBarShown}

```js
DialogsManager.addressBarShown.connect(function (visible) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the "Goto" dialog is opened or closed. </p>
<p><strong>Warning:</strong> Currently isn't always triggered.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>visible</code></td><td>boolean</td><td><p><code>true</code> if the Goto dialog has been opened, <code>false</code> if it has been closed.</p></td></tr>
</tbody></table></div>
