---
title: "EntityScriptServerLog"
description: "The EntityScriptServerLog API makes server log file output written by server entity scripts available to client scripts."
draft: true
---

# EntityScriptServerLog

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>EntityScriptServerLog</code> API makes server log file output written by server entity scripts available to client scripts.</p></div>

## Functions {#functions}

### receivedNewLogLines {#receivedNewLogLines}

```js
EntityScriptServerLog.receivedNewLogLines(logLines)
```

<div class="api-text" v-pre><p>Triggered when one or more lines are written to the server log by server entity scripts.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>logLines</code></td><td>string</td><td><p>The server log lines written by server entity scripts. If there are multiple lines they are separated by <code>"\n"</code>s.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Echo server entity script program log output to Interface's program log.</p></div>

```js
EntityScriptServerLog.receivedNewLogLines.connect(function (logLines) {
    print("Log lines from server entity scripts:", logLines);
});
```

<div class="api-example" v-pre><strong>Example:</strong> <p>A server entity script to test with. Copy the code into an entity's "Server Script" property.</p></div>

```js
(function () {
    print("Hello from a server entity script!");
})
```
