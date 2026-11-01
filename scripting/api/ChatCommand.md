---
title: "ChatCommand"
description: "A chat command."
---

# ChatCommand

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A chat command.</p>
 <p>Create a new command using <a href="Chat#addCommand"><code>Chat.addCommand</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>command</code></td><td>string</td><td><p><i>Read-only</i></p></td></tr>
<tr><td><code>description</code></td><td>string</td><td></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### run {#run}

```js
ChatCommand.run(params?)
```

<div class="api-text" v-pre><p>Sends the given message to all other users in world.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>params</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The parameters the user typed after the command.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### running {#running}

```js
ChatCommand.running.connect(function (params) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a keyboard key is pressed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>params</code></td><td>string</td><td><p>The parameters the user typed after the command.</p></td></tr>
</tbody></table></div>

</div>
