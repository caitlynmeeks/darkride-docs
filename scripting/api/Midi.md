---
title: "Midi"
description: "The Midi API provides the ability to connect Interface with musical instruments and other external or virtual devices via the MIDI protocol."
draft: true
---

# Midi

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Midi</code> API provides the ability to connect Interface with musical instruments and other external or virtual devices via the MIDI protocol. For further information and examples, see the tutorial: <span>Use MIDI to Control Your Environment</span>.</p>
 <p><strong>Note:</strong> Only works on Windows.</p></div>

## Functions {#functions}

### allNotesOff {#allNotesOff}

```js
Midi.allNotesOff()
```

<div class="api-text" v-pre><p>Turns off all notes on all connected MIDI devices.</p></div>

### blockMidiDevice {#blockMidiDevice}

```js
Midi.blockMidiDevice(name, output)
```

<div class="api-text" v-pre><p>Blocks a MIDI device's input or output.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the MIDI device to block.</p></td></tr>
<tr><td><code>output</code></td><td>boolean</td><td><p><code>true</code> to block the device's output, <code>false</code> to block its input.</p></td></tr>
</tbody></table></div>

### broadcastEnable {#broadcastEnable}

```js
Midi.broadcastEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables broadcasts to all unblocked devices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to have "send" functions broadcast to all devices, <code>false</code> to have them send to specific output devices.</p></td></tr>
</tbody></table></div>

### listMidiDevices {#listMidiDevices}

```js
Midi.listMidiDevices(output)
```

<div class="api-text" v-pre><p>Gets a list of MIDI input or output devices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>output</code></td><td>boolean</td><td><p><code>true</code> to list output devices, <code>false</code> to list input devices.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; </div>

### playMidiNote {#playMidiNote}

```js
Midi.playMidiNote(status, note, velocity)
```

<div class="api-text" v-pre><p>Plays a note on all connected devices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>status</code></td><td>MidiStatus</td><td><p>Note status.</p></td></tr>
<tr><td><code>note</code></td><td>number</td><td><p>Note number.</p></td></tr>
<tr><td><code>velocity</code></td><td>number</td><td><p>Note velocity. (<code>0</code> means "note off".)</p></td></tr>
</tbody></table></div>

### resetDevices {#resetDevices}

```js
Midi.resetDevices()
```

<div class="api-text" v-pre><p>Cleans up and rediscovers attached MIDI devices.</p></div>

### sendMidiMessage {#sendMidiMessage}

```js
Midi.sendMidiMessage(device, channel, type, note, velocity)
```

<div class="api-text" v-pre><p>Sends a MIDI message to a particular device.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>device</code></td><td>number</td><td><p>Integer device number.</p></td></tr>
<tr><td><code>channel</code></td><td>number</td><td><p>Integer channel number.</p></td></tr>
<tr><td><code>type</code></td><td><a href="#MidiStatus">Midi.MidiStatus</a></td><td><p>Integer status value.</p></td></tr>
<tr><td><code>note</code></td><td>number</td><td><p>Note number.</p></td></tr>
<tr><td><code>velocity</code></td><td>number</td><td><p>Note velocity. (<code>0</code> means "note off".)</p></td></tr>
</tbody></table></div>

### sendRawDword {#sendRawDword}

```js
Midi.sendRawDword(device, raw)
```

<div class="api-text" v-pre><p>Sends a raw MIDI packet to a particular device.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>device</code></td><td>number</td><td><p>Integer device number.</p></td></tr>
<tr><td><code>raw</code></td><td><a href="#RawMidiMessage">Midi.RawMidiMessage</a></td><td><p>Raw MIDI message.</p></td></tr>
</tbody></table></div>

### thruModeEnable {#thruModeEnable}

```js
Midi.thruModeEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables repeating all incoming notes to all outputs. (Default is disabled.)</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable repeating all incoming notes to all output, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### typeChanPressureEnable {#typeChanPressureEnable}

```js
Midi.typeChanPressureEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables channel pressure events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### typeControlChangeEnable {#typeControlChangeEnable}

```js
Midi.typeControlChangeEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables control change events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### typeNoteOffEnable {#typeNoteOffEnable}

```js
Midi.typeNoteOffEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables note off events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### typeNoteOnEnable {#typeNoteOnEnable}

```js
Midi.typeNoteOnEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables note on events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### typePitchBendEnable {#typePitchBendEnable}

```js
Midi.typePitchBendEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables pitch bend events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### typePolyKeyPressureEnable {#typePolyKeyPressureEnable}

```js
Midi.typePolyKeyPressureEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables poly key pressure events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### typeProgramChangeEnable {#typeProgramChangeEnable}

```js
Midi.typeProgramChangeEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables program change events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### typeSystemMessageEnable {#typeSystemMessageEnable}

```js
Midi.typeSystemMessageEnable(enable)
```

<div class="api-text" v-pre><p>Enables or disables system message events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### unblockMidiDevice {#unblockMidiDevice}

```js
Midi.unblockMidiDevice(name-, output)
```

<div class="api-text" v-pre><p>Unblocks a MIDI device's input or output.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name-</code></td><td>string</td><td><p>The name of the MIDI device to unblock.</p></td></tr>
<tr><td><code>output</code></td><td>boolean</td><td><p><code>true</code> to unblock the device's output, <code>false</code> to unblock its input.</p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### midiMessage {#midiMessage}

```js
Midi.midiMessage.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a connected device sends an output.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td><a href="#MidiMessage">Midi.MidiMessage</a></td><td><p>The MIDI message.</p></td></tr>
</tbody></table></div>

### midiReset {#midiReset}

```js
Midi.midiReset.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the system detects there was a reset such as when a device is plugged in or unplugged.</p></div>

## Types {#types}

### MidiMessage {#MidiMessage}

<div class="api-text" v-pre><p>A MIDI message. </p>
<p><strong>Warning:</strong> The <code>status</code> property is NOT a MIDI status value.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>device</code></td><td>number</td><td><p>Device number.</p></td></tr>
<tr><td><code>raw</code></td><td><a href="#RawMidiMessage">Midi.RawMidiMessage</a></td><td><p>Raw MIDI message.</p></td></tr>
<tr><td><code>status</code></td><td>number</td><td><p>Channel + status. <em>Legacy value.</em></p></td></tr>
<tr><td><code>channel</code></td><td>number</td><td><p>Channel: <code>1</code> – <code>16</code>.</p></td></tr>
<tr><td><code>type</code></td><td>number</td><td><p>Status: <a href="#MidiStatus"><code>Midi.MidiStatus</code></a>; <code>8</code> – <code>15</code>.</p></td></tr>
<tr><td><code>note</code></td><td>number</td><td><p>Note: <code>0</code> – <code>127</code>.</p></td></tr>
<tr><td><code>velocity</code></td><td>number</td><td><p>Note velocity: <code>0</code> – <code>127</code>. (<code>0</code> means "note off".)</p></td></tr>
<tr><td><code>bend</code></td><td>number</td><td><p>Pitch bend: <code>-8192</code> – <code>8191</code>.</p></td></tr>
<tr><td><code>program</code></td><td>number</td><td><p>Program change: <code>0</code> – <code>127</code>.</p></td></tr>
</tbody></table></div>

### MidiStatus {#MidiStatus}

<div class="api-text" v-pre><p>A MIDI status value. The following MIDI status values are supported:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th> </tr>
</thead>
 <tbody> <tr><td><code>8</code></td><td>Note off.</td></tr>
 <tr><td><code>9</code></td><td>Note on.</td></tr>
 <tr><td><code>10</code></td><td>Polyphonic key pressure.</td></tr>
 <tr><td><code>11</code></td><td>Control change.</td></tr>
 <tr><td><code>12</code></td><td>Program change.</td></tr>
 <tr><td><code>13</code></td><td>Channel pressure.</td></tr>
 <tr><td><code>14</code></td><td>Pitch bend.</td></tr>
 <tr><td><code>15</code></td><td>System message.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

### RawMidiMessage {#RawMidiMessage}

<div class="api-text" v-pre><p>An integer DWORD (unsigned 32 bit) message with bits having values as follows: </p>
<table> <tbody> <tr> <td width="25%"><code>00000000</code></td> <td width="25%"><code>0vvvvvvv</code></td> <td width="25%"><code>0nnnnnnn</code></td> <td width="12%"><code>1sss</code></td> <td width="12%"><code>cccc</code></td> </tr>
</tbody>
 </table>
 <p>Where:</p>
 <ul> <li><code>v</code> = Velocity. </li>
<li><code>n</code> = Note. </li>
<li><code>s</code> = Status - <a href="#MidiStatus"><code>Midi.MidiStatus</code></a> </li>
<li><code>c</code> = Channel. </li>
</ul>
 <p>The number in the first bit of each byte denotes whether it is a command (1) or data (0).</p></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### midiNote {#midiNote}

```js
Midi.midiNote.connect(function (message) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed. Use <a href="#midiMessage">midiMessage</a> instead.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when a connected device sends an output.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td><a href="#MidiMessage">Midi.MidiMessage</a></td><td><p>The MIDI message.</p></td></tr>
</tbody></table></div>
