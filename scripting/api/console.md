---
title: "console"
description: "The console API provides program logging facilities."
draft: true
---

# console

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>console</code> API provides program logging facilities.</p></div>

## Functions {#functions}

### assert {#assert}

```js
console.assert(assertion, ...message?)
```

<div class="api-text" v-pre><p>Logs an "ERROR" message to the program log and triggers <a href="Script#errorMessage"><code>Script.errorMessage</code></a>, if a test condition fails. The message logged is "ERROR - Assertion failed : " followed by the message values separated by spaces. </p>
<p>Note: Script execution continues whether or not the test condition fails.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>assertion</code></td><td>boolean</td><td><p>The test condition value.</p></td></tr>
<tr><td><code>message</code> <em>optional</em></td><td>*</td><td><p>The message values to log if the assertion evaluates to <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Demonstrate assertion behavior.</p></div>

```js
Script.errorMessage.connect(function (message, scriptName) {
    console.info("Error message logged:", "\"" + message + "\"", "in", "[" + scriptName + "]");
});

console.assert(5 === 5, "5 equals 5.", "This assertion will succeed.");  // No log output.
console.assert(5 > 6, "5 is not greater than 6.", "This assertion will fail.");  // Log output is generated.
console.info("Script continues running.");

// ERROR - Assertion failed :  5 is not greater than 6. This assertion will fail.
// INFO - Error message logged: "Assertion failed :  5 is not greater than 6. This assertion will fail." in [console.js]
// INFO - Script continues running.
```

### clear {#clear}

```js
console.clear()
```

<div class="api-text" v-pre><p>Clears the Developer &gt; Scripting &gt; Script Log debug window.</p></div>

### debug {#debug}

```js
console.debug(...message?)
```

<div class="api-text" v-pre><p>Logs a message to the program log and triggers <a href="Script#printedMessage"><code>Script.printedMessage</code></a>. The message logged is the message values separated by spaces.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>*</td><td><p>The message values to log.</p></td></tr>
</tbody></table></div>

### error {#error}

```js
console.error(...message?)
```

<div class="api-text" v-pre><p>Logs an "ERROR" message to the program log and triggers <a href="Script#errorMessage"><code>Script.errorMessage</code></a>. The message logged is "ERROR - " followed by the message values separated by spaces.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>*</td><td><p>The message values to log.</p></td></tr>
</tbody></table></div>

### exception {#exception}

```js
console.exception(...message?)
```

<div class="api-text" v-pre><p>A synonym of <a href="#error"><code>console.error</code></a>. Logs an "ERROR" message to the program log and triggers <a href="Script#errorMessage"><code>Script.errorMessage</code></a>. The message logged is "ERROR - " followed by the message values separated by spaces.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>*</td><td><p>The message values to log.</p></td></tr>
</tbody></table></div>

### group {#group}

```js
console.group(message)
```

<div class="api-text" v-pre><p>Logs a message to the program log and triggers <a href="Script#printedMessage"><code>Script.printedMessage</code></a>, then starts indenting subsequent <a href="#log"><code>console.log</code></a> messages until a <a href="#groupEnd"><code>console.groupEnd</code></a>. Groups may be nested.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>*</td><td><p>The message value to log.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Nested groups.</p></div>

```js
console.group("Group 1");
console.log("Sentence 1");
console.log("Sentence 2");
console.group("Group 2");
console.log("Sentence 3");
console.log("Sentence 4");
console.groupEnd();
console.log("Sentence 5");
console.groupEnd();
console.log("Sentence 6");

//Group 1
//   Sentence 1
//   Sentence 2
//   Group 2
//      Sentence 3
//      Sentence 4
//   Sentence 5
//Sentence 6
```

### groupCollapsed {#groupCollapsed}

```js
console.groupCollapsed(message)
```

<div class="api-text" v-pre><p>Has the same behavior as <a href="#group"><code>console.group</code></a>. Logs a message to the program log and triggers <a href="Script#printedMessage"><code>Script.printedMessage</code></a>, then starts indenting subsequent <a href="#log"><code>console.log</code></a> messages until a <a href="#groupEnd"><code>console.groupEnd</code></a>. Groups may be nested.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>*</td><td><p>The message value to log.</p></td></tr>
</tbody></table></div>

### groupEnd {#groupEnd}

```js
console.groupEnd()
```

<div class="api-text" v-pre><p>Finishes a group of indented <a href="#log"><code>console.log</code></a> messages.</p></div>

### info {#info}

```js
console.info(...message?)
```

<div class="api-text" v-pre><p>Logs an "INFO" message to the program log and triggers <a href="Script#infoMessage"><code>Script.infoMessage</code></a>. The message logged is "INFO -" followed by the message values separated by spaces.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>*</td><td><p>The message values to log.</p></td></tr>
</tbody></table></div>

### log {#log}

```js
console.log(...message?)
```

<div class="api-text" v-pre><p>Logs a message to the program log and triggers <a href="Script#printedMessage"><code>Script.printedMessage</code></a>. The message logged is the message values separated by spaces. </p>
<p>If a <a href="#group"><code>console.group</code></a> is in effect, the message is indented by an amount proportional to the group level.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>*</td><td><p>The message values to log.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Log some values.</p></div>

```js
Script.printedMessage.connect(function (message, scriptName) {
    console.info("Console.log message:", "\"" + message + "\"", "in", "[" + scriptName + "]");
});

console.log("string", 7, true);

// string 7 true
// INFO - Console.log message: "string 7 true" in [console.js]
```

### time {#time}

```js
console.time(name)
```

<div class="api-text" v-pre><p>Starts a timer, logs a message to the program log, and triggers <a href="Script#printedMessage"><code>Script.printedMessage</code></a>. The message logged has the timer name and "Timer started".</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the timer.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Time some processing.</p></div>

```js
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

console.time("MyTimer");
sleep(1000);  // Do some processing.
console.timeEnd("MyTimer");

// MyTimer: Timer started
// MyTimer: 1001ms
```

### timeEnd {#timeEnd}

```js
console.timeEnd(name)
```

<div class="api-text" v-pre><p>Finishes a timer, logs a message to the program log, and triggers <a href="Script#printedMessage"><code>Script.printedMessage</code></a>. The message logged has the timer name and the number of milliseconds since the timer was started.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the timer.</p></td></tr>
</tbody></table></div>

### trace {#trace}

```js
console.trace()
```

<div class="api-text" v-pre><p>Logs the JavaScript call stack at the point of call to the program log.</p></div>

### warn {#warn}

```js
console.warn(...message?)
```

<div class="api-text" v-pre><p>Logs a "WARNING" message to the program log and triggers <a href="Script#warningMessage"><code>Script.warningMessage</code></a>. The message logged is "WARNING - " followed by the message values separated by spaces.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code> <em>optional</em></td><td>*</td><td><p>The message values to log.</p></td></tr>
</tbody></table></div>
