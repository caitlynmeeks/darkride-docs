---
title: "Panels"
description: "The window's panels, by name: Darkride's QML panels and chat."
draft: true
---

# Panels

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The window's panels, by name: Darkride's QML panels and chat. On the desktop each can float, dock beside the 3D view or be tabbed with another panel.</p></div>

## Functions {#functions}

<div class="api-entry">

### close {#close}

```js
Panels.close(name)
```

<div class="api-text" v-pre><p>Closes a panel.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The panel.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### isOpen {#isOpen}

```js
Panels.isOpen(name)
```

<div class="api-text" v-pre><p>Whether a panel is open: shown, or tabbed behind another panel.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The panel.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether it's open.</p></div>

</div>

<div class="api-entry">

### names {#names}

```js
Panels.names()
```

<div class="api-text" v-pre><p>The panels' names, in View &gt; Panels' order.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names: "Settings", "Avatar", "People", "Chat", "Explore", "Radio", "My Files", "Console", and Build mode's "Entities" and "Inspector" (which open only while it's on).</p></div>

</div>

<div class="api-entry">

### open {#open}

```js
Panels.open(name)
```

<div class="api-text" v-pre><p>Opens a panel in front: a floating one in front of the other windows, a tabbed one with its tab in front.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The panel.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### showProfile {#showProfile}

```js
Panels.showProfile(username)
```

<div class="api-text" v-pre><p>Opens the People panel in front on someone's profile: the card wherever a name appears (Explore's authors, chat's names).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>Their account name; "" for your own.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### toggle {#toggle}

```js
Panels.toggle(name)
```

<div class="api-text" v-pre><p>Closes a panel when it's open and in front, else opens it in front.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The panel.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### openChanged {#openChanged}

```js
Panels.openChanged.connect(function (name, open) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a panel opens or closes, however that happened (its close box, View &gt; Panels, a script).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The panel.</p></td></tr>
<tr><td><code>open</code></td><td>boolean</td><td><p>Whether it's open now.</p></td></tr>
</tbody></table></div>

</div>
