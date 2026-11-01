---
title: "Keyboard"
description: "The Keyboard API provides facilities to use an in-world, virtual keyboard."
draft: true
---

# Keyboard

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Keyboard</code> API provides facilities to use an in-world, virtual keyboard. When enabled, this keyboard is displayed instead of the 2D keyboard that raises at the bottom of the tablet or Web entities when a text input field has focus and you're in HMD mode.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>raised</code></td><td>boolean</td><td><p><code>true</code> if the virtual keyboard is visible, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>password</code></td><td>boolean</td><td><p><code>true</code> if <code>"*"</code>s are displayed on the virtual keyboard's display instead of the characters typed, <code>false</code> if the actual characters are displayed.</p></td></tr>
<tr><td><code>use3DKeyboard</code></td><td>boolean</td><td><p><code>true</code> if user settings have "Use Virtual Keyboard" enabled, <code>false</code> if it's disabled. <em>Read-only.</em></p></td></tr>
<tr><td><code>preferMalletsOverLasers</code></td><td>boolean</td><td><p><code>true</code> if user settings for the virtual keyboard have "Mallets" selected, <code>false</code> if "Lasers" is selected. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### containsID {#containsID}

```js
Keyboard.containsID(entityID)
```

<div class="api-text" v-pre><p>Checks whether an entity is part of the virtual keyboard.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity ID.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity is part of the virtual keyboard, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### disableLeftMallet {#disableLeftMallet}

```js
Keyboard.disableLeftMallet()
```

<div class="api-text" v-pre><p>Disables the left mallet so that it is not displayed when in HMD mode.</p></div>

</div>

<div class="api-entry">

### disableRightMallet {#disableRightMallet}

```js
Keyboard.disableRightMallet()
```

<div class="api-text" v-pre><p>Disables the right mallet so that it is not displayed when in HMD mode.</p></div>

</div>

<div class="api-entry">

### enableLeftMallet {#enableLeftMallet}

```js
Keyboard.enableLeftMallet()
```

<div class="api-text" v-pre><p>Enables the left mallet so that it is displayed when in HMD mode.</p></div>

</div>

<div class="api-entry">

### enableRightMallet {#enableRightMallet}

```js
Keyboard.enableRightMallet()
```

<div class="api-text" v-pre><p>Enables the right mallet so that it is displayed when in HMD mode.</p></div>

</div>

<div class="api-entry">

### loadKeyboardFile {#loadKeyboardFile}

```js
Keyboard.loadKeyboardFile(path)
```

<div class="api-text" v-pre><p>Loads a JSON file that defines the virtual keyboard's layout. The default JSON file used is <a href="https://github.com/highfidelity/hifi/blob/master/interface/resources/config/keyboard.json" target="_blank" rel="noopener">https://github.com/highfidelity/hifi/.../keyboard.json</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The keyboard JSON file.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setLeftHandLaser {#setLeftHandLaser}

```js
Keyboard.setLeftHandLaser(leftHandLaser)
```

<div class="api-text" v-pre><p>Configures the virtual keyboard to recognize a ray pointer as the left hand's laser.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>leftHandLaser</code></td><td>number</td><td><p>The ID of a ray pointer created by <a href="Pointers#createPointer"><code>Pointers.createPointer</code></a>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setRightHandLaser {#setRightHandLaser}

```js
Keyboard.setRightHandLaser(rightHandLaser)
```

<div class="api-text" v-pre><p>Configures the virtual keyboard to recognize a ray pointer as the right hand's laser.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rightHandLaser</code></td><td>number</td><td><p>The ID of a ray pointer created by <a href="Pointers#createPointer"><code>Pointers.createPointer</code></a>.</p></td></tr>
</tbody></table></div>

</div>
