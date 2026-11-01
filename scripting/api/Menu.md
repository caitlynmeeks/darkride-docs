---
title: "Menu"
description: "The Menu API provides access to the menu that is displayed at the top of the window on a user's desktop and in the tablet when the \"MENU\" button is pressed."
---

# Menu

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Menu</code> API provides access to the menu that is displayed at the top of the window on a user's desktop and in the tablet when the "MENU" button is pressed.</p>
 <h3>Groupings</h3>
 <p>A "grouping" provides a way to group a set of menus or menu items together so that they can all be set visible or invisible as a group.</p>
 <p>There is currently only one available group: <code>"Developer"</code>. This grouping can be toggled in the "Settings" menu.</p>
 <p>If a menu item doesn't belong to a group, it is always displayed.</p></div>

## Functions {#functions}

<div class="api-entry">

### addMenu {#addMenu}

```js
Menu.addMenu(menuName, grouping?)
```

<div class="api-text" v-pre><p>Adds a new top-level menu.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>Name that will be displayed for the menu. Nested menus can be specified using the <code>"&gt;"</code> character.</p></td></tr>
<tr><td><code>grouping</code> <em>optional</em></td><td>string</td><td><p>Name of the grouping, if any, to add this menu to.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add a menu and a nested submenu.</p></div>

```js
Menu.addMenu("Test Menu");
Menu.addMenu("Test Menu > Test Sub Menu");
```

<div class="api-example" v-pre><strong>Example:</strong> <p>Add a menu to the Settings menu that is only visible if Settings &gt; Developer is enabled.</p></div>

```js
Menu.addMenu("Settings > Test Grouping Menu", "Developer");
```

</div>

<div class="api-entry">

### addMenuItem {#addMenuItem}

```js
Menu.addMenuItem(properties)
```

<div class="api-text" v-pre><p>Adds a new menu item to a menu. The menu item is specified using <a href="#MenuItemProperties"><code>Menu.MenuItemProperties</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="#MenuItemProperties">Menu.MenuItemProperties</a></td><td><p>Properties of the menu item to create.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add a menu item at a particular position in the "Developer" menu.</p></div>

```js
Menu.addMenuItem({
    menuName:     "Developer",
    menuItemName: "Test",
    afterItem:    "Log",
    shortcutKey:  "Ctrl+Shift+T"
});
```

</div>

<div class="api-entry">

### addMenuItem {#addMenuItem-2}

```js
Menu.addMenuItem(menuName, menuItem, shortcutKey?)
```

<div class="api-text" v-pre><p>Adds a new menu item to a menu. The new item is added at the end of the menu.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>Name of the menu to add the menu item to.</p></td></tr>
<tr><td><code>menuItem</code></td><td>string</td><td><p>Name of the menu item. This is what will be displayed in the menu.</p></td></tr>
<tr><td><code>shortcutKey</code> <em>optional</em></td><td>string</td><td><p>A shortcut key that can be used to trigger the menu item.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add a menu item to the end of the "Developer" menu.</p></div>

```js
Menu.addMenuItem("Developer", "Test", "Ctrl+Shift+T");
```

</div>

<div class="api-entry">

### addSeparator {#addSeparator}

```js
Menu.addSeparator(menuName, separatorName)
```

<div class="api-text" v-pre><p>Adds a separator with an unclickable label below it. The separator will be placed at the bottom of the menu. To add a separator at a specific point in the menu, use <a href="#addMenuItem"><code>Menu.addMenuItem</code></a> with <a href="#MenuItemProperties"><code>Menu.MenuItemProperties</code></a> instead.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>Name of the menu to add the separator to.</p></td></tr>
<tr><td><code>separatorName</code></td><td>string</td><td><p>Name of the separator that will be displayed as the label below the separator line.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add a separator.</p></div>

```js
Menu.addSeparator("Developer", "Test Separator");
```

</div>

<div class="api-entry">

### isMenuEnabled {#isMenuEnabled}

```js
Menu.isMenuEnabled(menuName)
```

<div class="api-text" v-pre><p>Checks whether a menu or menu item is enabled. If disabled, the item is grayed out and unusable. Menus are enabled by default.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>The name of the menu or menu item to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the menu is enabled, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report whether the Settings &gt; Developer Menu item is enabled.</p></div>

```js
print("Developer Menu item enabled: " + Menu.isMenuEnabled("Settings > Developer Menu"));
```

</div>

<div class="api-entry">

### isOptionChecked {#isOptionChecked}

```js
Menu.isOptionChecked(menuOption)
```

<div class="api-text" v-pre><p>Checks whether a checkable menu item is checked.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuOption</code></td><td>string</td><td><p>The name of the menu item.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the option is checked, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report whether the Settings &gt; Developer menu item is turned on.</p></div>

```js
print("Developer menu showing: " + Menu.isOptionChecked("Developer Menu"));
```

</div>

<div class="api-entry">

### menuExists {#menuExists}

```js
Menu.menuExists(menuName)
```

<div class="api-text" v-pre><p>Checks whether a top-level menu exists.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>Name of the menu to check exists.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the menu exists, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Check if the "Developer" menu exists.</p></div>

```js
if (Menu.menuExists("Developer")) {
    print("Developer menu exists.");
}
```

</div>

<div class="api-entry">

### menuItemExists {#menuItemExists}

```js
Menu.menuItemExists(menuName, menuItem)
```

<div class="api-text" v-pre><p>Checks whether a menu item exists.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>Name of the menu that the menu item is in.</p></td></tr>
<tr><td><code>menuItem</code></td><td>string</td><td><p>Name of the menu item to check for existence of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the menu item exists, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Determine if the Developer &gt; Stats menu exists.</p></div>

```js
if (Menu.menuItemExists("Developer", "Stats")) {
    print("Developer > Stats menu item exists.");
}
```

</div>

<div class="api-entry">

### removeMenu {#removeMenu}

```js
Menu.removeMenu(menuName)
```

<div class="api-text" v-pre><p>Removes a top-level menu.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>Name of the menu to remove.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Remove a menu and nested submenu.</p></div>

```js
Menu.removeMenu("Test Menu > Test Sub Menu");
Menu.removeMenu("Test Menu");
```

</div>

<div class="api-entry">

### removeMenuItem {#removeMenuItem}

```js
Menu.removeMenuItem(menuName, menuItem)
```

<div class="api-text" v-pre><p>Removes a menu item from a menu.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>Name of the menu to remove a menu item from.</p></td></tr>
<tr><td><code>menuItem</code></td><td>string</td><td><p>Name of the menu item to remove.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Remove a menu item from the "Developer" menu.</p></div>

```js
Menu.removeMenuItem("Developer", "Test");
```

</div>

<div class="api-entry">

### removeSeparator {#removeSeparator}

```js
Menu.removeSeparator(menuName, separatorName)
```

<div class="api-text" v-pre><p>Removes a separator from a menu.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>Name of the menu to remove the separator from.</p></td></tr>
<tr><td><code>separatorName</code></td><td>string</td><td><p>Name of the separator to remove.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Remove a separator.</p></div>

```js
Menu.removeSeparator("Developer", "Test Separator");
```

</div>

<div class="api-entry">

### setIsOptionChecked {#setIsOptionChecked}

```js
Menu.setIsOptionChecked(menuOption, isChecked)
```

<div class="api-text" v-pre><p>Sets a checkable menu item as checked or unchecked.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuOption</code></td><td>string</td><td><p>The name of the menu item to modify.</p></td></tr>
<tr><td><code>isChecked</code></td><td>boolean</td><td><p>If <code>true</code>, the menu item will be checked, otherwise it will not be checked.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Turn on Settings &gt; Developer Menu.</p></div>

```js
Menu.setIsOptionChecked("Developer Menu", true);
print("Developer menu showing: " + Menu.isOptionChecked("Developer Menu"));
```

</div>

<div class="api-entry">

### setMenuEnabled {#setMenuEnabled}

```js
Menu.setMenuEnabled(menuName, isEnabled)
```

<div class="api-text" v-pre><p>Sets a menu or menu item to be enabled or disabled. If disabled, the item is grayed out and unusable.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td><p>The name of the menu or menu item to modify.</p></td></tr>
<tr><td><code>isEnabled</code></td><td>boolean</td><td><p>If <code>true</code>, the menu will be enabled, otherwise it will be disabled.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Disable the Settings &gt; Developer Menu item.</p></div>

```js
Menu.setMenuEnabled("Settings > Developer Menu", false);
print("Developer Menu item enabled: " + Menu.isMenuEnabled("Settings > Developer Menu"));
```

</div>

<div class="api-entry">

### triggerOption {#triggerOption}

```js
Menu.triggerOption(menuOption)
```

<div class="api-text" v-pre><p>Triggers a menu item as if the user clicked on it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuOption</code></td><td>string</td><td><p>The name of the menu item to trigger.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Open the Asset Browser dialog.</p></div>

```js
Menu.triggerOption('Asset Browser');
```

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### menuItemEvent {#menuItemEvent}

```js
Menu.menuItemEvent.connect(function (menuItem) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a menu item is clicked or triggered by <a href="#triggerOption"><code>Menu.triggerOption</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuItem</code></td><td>string</td><td><p>Name of the menu item that was clicked or triggered.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Detect menu item events.</p></div>

```js
function onMenuItemEvent(menuItem) {
    print("Menu item clicked: " + menuItem);
}

Menu.menuItemEvent.connect(onMenuItemEvent);
```

</div>

## Types {#types}

<div class="api-entry">

### MenuItemProperties {#MenuItemProperties}

<div class="api-text" v-pre><p>A set of properties that can be passed to <a href="#addMenuItem"><code>Menu.addMenuItem</code></a> to create a new menu item.</p>
 <p>If none of the properties, <code>position</code>, <code>beforeItem</code>, <code>afterItem</code>, or <code>grouping</code> are specified, the menu item will be placed at the end of the menu.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuName</code></td><td>string</td><td></td><td><p>Name of the menu. Nested menus can be described using the "&gt;" character.</p></td></tr>
<tr><td><code>menuItemName</code></td><td>string</td><td></td><td><p>Name of the menu item.</p></td></tr>
<tr><td><code>isCheckable</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Whether or not the menu item is checkable.</p></td></tr>
<tr><td><code>isChecked</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Whether or not the menu item is checked.</p></td></tr>
<tr><td><code>isSeparator</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Whether or not the menu item is a separator.</p></td></tr>
<tr><td><code>shortcutKey</code> <em>optional</em></td><td>string</td><td></td><td><p>A shortcut key that triggers the menu item.</p></td></tr>
<tr><td><code>shortcutKeyEvent</code> <em>optional</em></td><td><a href="globals#KeyEvent">KeyEvent</a></td><td></td><td><p>A <a href="globals#KeyEvent"><code>KeyEvent</code></a> that specifies a key that triggers the menu item.</p></td></tr>
<tr><td><code>position</code> <em>optional</em></td><td>number</td><td></td><td><p>The position to place the new menu item. An integer number with <code>0</code> being the first menu item.</p></td></tr>
<tr><td><code>beforeItem</code> <em>optional</em></td><td>string</td><td></td><td><p>The name of the menu item to place this menu item before.</p></td></tr>
<tr><td><code>afterItem</code> <em>optional</em></td><td>string</td><td></td><td><p>The name of the menu item to place this menu item after.</p></td></tr>
<tr><td><code>grouping</code> <em>optional</em></td><td>string</td><td></td><td><p>The name of grouping to add this menu item to.</p></td></tr>
</tbody></table></div>

</div>
