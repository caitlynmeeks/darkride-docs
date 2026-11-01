---
title: "Friends"
description: "Your Darkride friends: the requests waiting for you, who sees you're online and where, and direct messages."
draft: true
---

# Friends

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>Your Darkride friends: the requests waiting for you, who sees you're online and where, and direct messages.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>requestCount</code></td><td>number</td><td><p>The friend requests waiting for you to accept or decline; <code>0</code> while signed out. Asked for at sign-in and once a minute after. <em>Read-only.</em></p></td></tr>
<tr><td><code>availability</code></td><td>string</td><td><p>Who sees you're online, and where: <code>"all"</code> (everyone), <code>"friends"</code> or <code>"none"</code> (no one: you look offline); <code>""</code> until Darkride has said. <em>Read-only.</em> Change it with <a href="#setAvailability"><code>Friends.setAvailability</code></a>.</p></td></tr>
<tr><td><code>canMessage</code></td><td>boolean</td><td><p>Whether <a href="#openDirectMessage"><code>Friends.openDirectMessage</code></a> can open a conversation: you're signed in and chat hasn't turned you away. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

### openDirectMessage {#openDirectMessage}

```js
Friends.openDirectMessage(username)
```

<div class="api-text" v-pre><p>Opens chat in front on your direct message with someone, started if you have none yet. While chat is still signing in, it opens as soon as chat is ready.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>Their Darkride username.</p></td></tr>
</tbody></table></div>

### refresh {#refresh}

```js
Friends.refresh()
```

<div class="api-text" v-pre><p>Asks Darkride again for your friends, the requests and your setting, after a friend action made elsewhere, so <a href="#properties"><code>Friends.requestCount</code></a> and chat's list follow at once.</p></div>

### setAvailability {#setAvailability}

```js
Friends.setAvailability(availability)
```

<div class="api-text" v-pre><p>Changes who sees you're online, and where, on Darkride's server. <a href="#availabilityChanged"><code>Friends.availabilityChanged</code></a> follows when the server has it, or with the old value when it refused.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>availability</code></td><td>string</td><td><p><code>"all"</code>, <code>"friends"</code> or <code>"none"</code>.</p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### availabilityChanged {#availabilityChanged}

```js
Friends.availabilityChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when Darkride says what <a href="#properties"><code>Friends.availability</code></a> is, or refuses a change of it.</p></div>

### canMessageChanged {#canMessageChanged}

```js
Friends.canMessageChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when <a href="#properties"><code>Friends.canMessage</code></a> changes.</p></div>

### requestCountChanged {#requestCountChanged}

```js
Friends.requestCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when <a href="#properties"><code>Friends.requestCount</code></a> changes.</p></div>
