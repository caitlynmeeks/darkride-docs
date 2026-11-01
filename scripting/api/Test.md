---
title: "Test"
description: "Here's how you could use the Test API: Write a script using the below and launch interface with: interface --testScript path/to/script.js Save the recorded events with Test.stopTracing to a .json or ."
---

# Test

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts.</div>

<div class="api-text" v-pre><p>Here's how you could use the Test API:</p>
 <ul> <li>Write a script using the below and launch interface with: <code>interface --testScript path/to/script.js</code></li>
 <li>Save the recorded events with <a href="#stopTracing"><code>Test.stopTracing</code></a> to a <code>.json</code> or <code>.json.gz</code> file</li>
 <li>Open Chrome, visit <span>chrome://tracing</span> and load your file</li>
 </ul></div>

## Functions {#functions}

<div class="api-entry">

### acceptPanelText {#acceptPanelText}

```js
Test.acceptPanelText(objectName)
```

<div class="api-text" v-pre><p>Presses Return in a text field of the desktop's QML panels: its accepted signal.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>objectName</code></td><td>string</td><td><p>The field's objectName.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether a field of that name was found.</p></div>

</div>

<div class="api-entry">

### answerNextAlert {#answerNextAlert}

```js
Test.answerNextAlert(button, fieldText?, picturePath?)
```

<div class="api-text" v-pre><p>Answers the next of Darkride's alerts (ui/Popup.h) to open within 15 s, as a click would: after it has drawn, saves its picture, types into its field, and presses the named button. Call it before what opens the alert (an alert waits for its answer, so a call that opens one returns only once it is answered).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>button</code></td><td>string</td><td></td><td><p>The label of the button to press.</p></td></tr>
<tr><td><code>fieldText</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>What to type into the alert's field first, if it has one.</p></td></tr>
<tr><td><code>picturePath</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Where to save the alert's picture (PNG), if anywhere.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### answerNextPrompt {#answerNextPrompt}

```js
Test.answerNextPrompt(text)
```

<div class="api-text" v-pre><p>Answers the next text prompt (Window.prompt's) with the given text, as its OK button would, once it is open: for a script that then asks, and waits.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>text</code></td><td>string</td><td><p>The answer.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### barButton {#barButton}

```js
Test.barButton(text, click?)
```

<div class="api-text" v-pre><p>Finds a button on the docked bar (ui/SystemToolbar.h) by its text, and clicks it as the mouse would.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>text</code></td><td>string</td><td></td><td><p>The button's text, such as "People".</p></td></tr>
<tr><td><code>click</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Whether to click it.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p><code>{ active, badge, x, y, width, height, barWidth, barHeight }</code>: whether it shows active (before the click's effect), the count on its red badge (0 for none), its cell in the bar and the bar's size; empty when there's no such button.</p></div>

</div>

<div class="api-entry">

### chooseTrackPoint {#chooseTrackPoint}

```js
Test.chooseTrackPoint(index)
```

<div class="api-text" v-pre><p>Chooses a control point of the Track selected on its own in the editor (-1 for none), as a click on its diamond does: bright in the viewport, the Move gizmo on it, the Inspector's Points list on its row.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The point's index, from 0.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### chosenTrackPoint {#chosenTrackPoint}

```js
Test.chosenTrackPoint()
```

<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The chosen control point's index, -1 for none.</p></div>

</div>

<div class="api-entry">

### clear {#clear}

```js
Test.clear()
```

<div class="api-text" v-pre><p>Clears all caches</p></div>

</div>

<div class="api-entry">

### clearCaches {#clearCaches}

```js
Test.clearCaches()
```

<div class="api-text" v-pre><p>Clear all caches (menu command Reload Content)</p></div>

</div>

<div class="api-entry">

### clickHierarchyRow {#clickHierarchyRow}

```js
Test.clickHierarchyRow(id)
```

<div class="api-text" v-pre><p>Does what a click on the entity's row in the build-mode Hierarchy does: selects it, or, for a row that is not loaded, flies the build camera to it and selects it when it arrives.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### commitInspectorEdit {#commitInspectorEdit}

```js
Test.commitInspectorEdit(key, value)
```

<div class="api-text" v-pre><p>Edits a property of the editor's selection as its Inspector field does when a list's + button or a field commits: the undo point taken, the value sent, one step recorded.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td><p>The Inspector's key for the property (e.g. "trackPoints").</p></td></tr>
<tr><td><code>value</code></td><td>string | number | boolean</td><td><p>The value as the field holds it.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### consoleRun {#consoleRun}

```js
Test.consoleRun(command)
```

<div class="api-text" v-pre><p>Runs a line in the scripting console's panel as if it were typed there (ui/StandAloneJSConsole.h).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>command</code></td><td>string</td><td><p>The line.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether the console's panel exists.</p></div>

</div>

<div class="api-entry">

### deleteTrackPoint {#deleteTrackPoint}

```js
Test.deleteTrackPoint()
```

<div class="api-text" v-pre><p>Removes the selected Track's chosen control point, as Delete does.</p></div>

</div>

<div class="api-entry">

### dockAction {#dockAction}

```js
Test.dockAction(objectName, action)
```

<div class="api-text" v-pre><p>Does what a dock panel's title bar button does (ui/DockTitleBar.h): "dock", "float" or "close"; or "tab:<object name="">", tabbed behind that docked panel, as a drag onto its title does; or "drag:<x>,<y>", a drag by its title that many points, in Qt's events only (the real mouse untouched).<p></p>
</y></x></object></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>objectName</code></td><td>string</td><td><p>The panel's object name, such as "ChatDock".</p></td></tr>
<tr><td><code>action</code></td><td>string</td><td><p>"dock", "float", "close", "tab:<object name="">" or "drag:<x>,<y>".<p></p>
</y></x></object></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether the panel has such a title bar.</p></div>

</div>

<div class="api-entry">

### dumpDraws {#dumpDraws}

```js
Test.dumpDraws(frames)
```

<div class="api-text" v-pre><p>Logs every main-view draw of a model part for the next frames (INSTANCING-DUMP lines: the model file, mesh, part, level of detail, indices and each instance's position), to diff a frame with GPU instancing on against one with it off (tests-manual/instancing/diff-dump.py).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>frames</code></td><td>number</td><td><p>How many frames to log.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### dumpFrameTrace {#dumpFrameTrace}

```js
Test.dumpFrameTrace(path)
```

<div class="api-text" v-pre><p>Writes the frame trace's records as a CSV: a header of "frame", "t_us" and one column per name written, then one line per frame with blank cells where that frame has no value. The records stay.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The file to write.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The rows written, or -1 when the file could not be written.</p></div>

</div>

<div class="api-entry">

### editorCreate {#editorCreate}

```js
Test.editorCreate(key)
```

<div class="api-text" v-pre><p>Does what an item of build mode's Create menu does: makes the entity (or a ready-made family of them, a vehicle), placed at the middle of the view, selected, one undo step.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td><p>The item's key in the catalogue (editor/EditorCreate.cpp): <code>"cube"</code>, <code>"vehicle-car"</code>, …</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### editorDrag {#editorDrag}

```js
Test.editorDrag(delta, yawDegrees, rollDegrees, begin, final)
```

<div class="api-text" v-pre><p>Drags the editor's selection as the gizmo would, from a script: turns build mode on, and with begin captures the selection as a press on the gizmo does; every call applies the move or the rotation (a roll about the selection's own centre) as the pointer's motion does; final takes the undo step as the release does.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>delta</code></td><td><a href="Vec3">Vec3</a></td><td><p>The move, in metres (ignored when the rotation is not zero).</p></td></tr>
<tr><td><code>yawDegrees</code></td><td>number</td><td><p>A rotation about the vertical.</p></td></tr>
<tr><td><code>rollDegrees</code></td><td>number</td><td><p>A rotation about the forward axis.</p></td></tr>
<tr><td><code>begin</code></td><td>boolean</td><td><p>The first call of a drag.</p></td></tr>
<tr><td><code>final</code></td><td>boolean</td><td><p>The last call of a drag.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### editorExportSelection {#editorExportSelection}

```js
Test.editorExportSelection(path)
```

<div class="api-text" v-pre><p>Exports the editor's selection and its descendants as Build &gt; Export Selected Entities… does once the path is chosen.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The file to write (.json).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>How many entities were written, -1 for none.</p></div>

</div>

<div class="api-entry">

### editorImportEntities {#editorImportEntities}

```js
Test.editorImportEntities(url)
```

<div class="api-text" v-pre><p>Imports an entities file into the world as Build &gt; Import Entities… does once the file is chosen: placed under the cursor (or in front of the camera), selected, one undo step; build mode comes on for it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The file's URL (file:///…, https://…, atp:…).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether any entities were made.</p></div>

</div>

<div class="api-entry">

### editorLoadProblem {#editorLoadProblem}

```js
Test.editorLoadProblem(id)
```

<div class="api-text" v-pre><p>What build mode's Hierarchy says the entity could not load (its row red, these lines in its tooltip): its model, image or textures that failed, with the reasons; empty when nothing has. Build mode checks once a second.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The failures, one per line.</p></div>

</div>

<div class="api-entry">

### editorMarqueeIds {#editorMarqueeIds}

```js
Test.editorMarqueeIds()
```

<div class="api-text" v-pre><p>What a marquee over build mode's whole viewport would select.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Uuid">Uuid</a>&gt; <p>The entities.</p></div>

</div>

<div class="api-entry">

### editorPickAt {#editorPickAt}

```js
Test.editorPickAt(id)
```

<div class="api-text" v-pre><p>What a click in build mode's viewport at the entity's middle would select.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The entity picked there, null for none.</p></div>

</div>

<div class="api-entry">

### editorScaleDrag {#editorScaleDrag}

```js
Test.editorScaleDrag(scale, begin, final)
```

<div class="api-text" v-pre><p>Scales the editor's selection as a drag on the gizmo's scale handles would, from a script: as <a href="#editorDrag"><code>Test.editorDrag</code></a>, begin captures the selection and final takes the undo step.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scale</code></td><td><a href="Vec3">Vec3</a></td><td><p>The scale so far, along the gizmo's axes (1 is the size the drag began at).</p></td></tr>
<tr><td><code>begin</code></td><td>boolean</td><td><p>The first call of a drag.</p></td></tr>
<tr><td><code>final</code></td><td>boolean</td><td><p>The last call of a drag.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### editorScriptStatus {#editorScriptStatus}

```js
Test.editorScriptStatus(key)
```

<div class="api-text" v-pre><p>What the Inspector's Script or Server Script row says the script is doing now (its status line), for the entities selected in the editor.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td><p><code>"script"</code> or <code>"serverScripts"</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The status line, <code>""</code> when the row shows none.</p></div>

</div>

<div class="api-entry">

### editorStatus {#editorStatus}

```js
Test.editorStatus()
```

<div class="api-text" v-pre><p>What Build mode's status bar says now ("" for nothing).</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The status bar's text.</p></div>

</div>

<div class="api-entry">

### editorUndo {#editorUndo}

```js
Test.editorUndo()
```

<div class="api-text" v-pre><p>Undoes the editor's last step, as Cmd+Z does in build mode.</p></div>

</div>

<div class="api-entry">

### editorUploadFiles {#editorUploadFiles}

```js
Test.editorUploadFiles(paths)
```

<div class="api-text" v-pre><p>Uploads files from this computer into the Assets panel's folder, as its Upload… button does after its file dialog. Build mode must be on.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>paths</code></td><td>Array&lt;string&gt;</td><td><p>The files' paths on this computer.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### endTraceEvent {#endTraceEvent}

```js
Test.endTraceEvent(name)
```

<div class="api-text" v-pre><p>Stop a specific name event</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Name of event</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### frameEditorSelection {#frameEditorSelection}

```js
Test.frameEditorSelection()
```

<div class="api-text" v-pre><p>Frames the editor's selection in the viewport, as the F key does in build mode.</p></div>

</div>

<div class="api-entry">

### frameTrace {#frameTrace}

```js
Test.frameTrace(on)
```

<div class="api-text" v-pre><p>Starts or stops the frame trace (FrameTrace.h; team/performance/INSTRUMENTS-PLAN.md item 1): a ring buffer of the last frames (about 14 s), each a record of the named numbers the engine's instruments write while it is on (the frame's own times, the physics step, the camera boom, the avatar's carry in a vehicle, the entity render-update budget, the presents); off, each writer pays one check. Starting drops the records held so far. Thread-safe by construction, so no hop to the game loop.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>on</code></td><td>boolean</td><td><p>Whether to record.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getDisplayRefreshRate {#getDisplayRefreshRate}

```js
Test.getDisplayRefreshRate()
```

<div class="api-text" v-pre><p>The refresh rate of the display the window is on, in Hz, as the platform reports it (0 when it does not).</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The refresh rate.</p></div>

</div>

<div class="api-entry">

### getGameLoopRate {#getGameLoopRate}

```js
Test.getGameLoopRate()
```

<div class="api-text" v-pre><p>The rate of the game loop (simulation and script updates), in frames per second, as the stats show it.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

</div>

<div class="api-entry">

### getHierarchyCounts {#getHierarchyCounts}

```js
Test.getHierarchyCounts()
```

<div class="api-text" v-pre><p>The build-mode Hierarchy's rows: how many in all and how many loaded, whether the entity server's list of every entity has arrived, the list request's state, and the editor's selection.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p><code>{ entities, loaded, listed, state, selected }</code>; <code>state</code> is "none", "waiting", "answered" or "unanswered".</p></div>

</div>

<div class="api-entry">

### getOtherAvatarsReplicaCount {#getOtherAvatarsReplicaCount}

```js
Test.getOtherAvatarsReplicaCount()
```

<div class="api-text" v-pre><p>Return the number of replicas that are being created of other-avatars when entering a world</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Current number of replicas of other-avatars.</p></div>

</div>

<div class="api-entry">

### getPresentPeriod {#getPresentPeriod}

```js
Test.getPresentPeriod()
```

<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The period the presents are paced at, in seconds, as the physics reads it; 0 while they are not paced (vsync, an HMD, or a schedule that restarted after a present overran).</p></div>

</div>

<div class="api-entry">

### getRenderLoopRate {#getRenderLoopRate}

```js
Test.getRenderLoopRate()
```

<div class="api-text" v-pre><p>The rate at which frames are presented, in frames per second.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

</div>

<div class="api-entry">

### hierarchyRowColor {#hierarchyRowColor}

```js
Test.hierarchyRowColor(id)
```

<div class="api-text" v-pre><p>The colour an entity's row in build mode's Hierarchy is drawn in: red for one that couldn't load, grey for one listed but not loaded yet (both from the skin while one is on), "" for the panel's own colour.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>"#rrggbb", or "".</p></div>

</div>

<div class="api-entry">

### hierarchyShowAll {#hierarchyShowAll}

```js
Test.hierarchyShowAll()
```

<div class="api-text" v-pre><p>Does what a click on the Hierarchy note's Show All does.</p></div>

</div>

<div class="api-entry">

### hierarchyToggle {#hierarchyToggle}

```js
Test.hierarchyToggle(id, which, onlyThis?)
```

<div class="api-text" v-pre><p>Does what a click on a build-mode Hierarchy row's eye, hand, lock or script mark does: hides it in this builder's view only, makes it unpickable by their clicks in the 3D view, locks it for everyone, or turns its scripts off for everyone (or the reverse), with everything under it, or alone as an Alt-click does.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The row's entity.</p></td></tr>
<tr><td><code>which</code></td><td>string</td><td></td><td><p><code>"hide"</code>, <code>"pick"</code>, <code>"lock"</code> or <code>"scripts"</code>.</p></td></tr>
<tr><td><code>onlyThis</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>As an Alt-click: the row alone.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether the row was there and the toggle could change.</p></div>

</div>

<div class="api-entry">

### hierarchyToggles {#hierarchyToggles}

```js
Test.hierarchyToggles(id)
```

<div class="api-text" v-pre><p>A build-mode Hierarchy row's toggles and what they amount to.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The row's entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p><code>{ hidden, noPick, locked, scriptsOff, drawn, hiddenCount, note, scriptsOffReminder }</code>: hidden in this view, unpickable, locked, its scripts off, whether the entity is drawn here, how many of this world's rows are hidden here, the note under the Hierarchy, and the reminder shown when build mode last closed with scripts off ("" for none).</p></div>

</div>

<div class="api-entry">

### holdPresents {#holdPresents}

```js
Test.holdPresents(milliseconds)
```

<div class="api-text" v-pre><p>Holds the present loop off for a while, as a stall would: nothing is presented, so no new frames are made. The deadlock watchdog's report names the loop as held for a test once a second has passed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>milliseconds</code></td><td>number</td><td><p>How long; 0 lets presents go at once.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### importAvatar {#importAvatar}

```js
Test.importAvatar(path)
```

<div class="api-text" v-pre><p>Imports an avatar file as File &gt; Import Avatar… does after its file dialog. An .fst goes straight to the question whether to wear and keep it, which waits for its answer: call Test.answerNextAlert first.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The file's path on this computer.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### insertTrackPoint {#insertTrackPoint}

```js
Test.insertTrackPoint(arcLength)
```

<div class="api-text" v-pre><p>Inserts a control point on the selected Track's curve at an arc length, as Shift+click on the curve does.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>arcLength</code></td><td>number</td><td><p>Metres along the curve from its first point.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### inspectorField {#inspectorField}

```js
Test.inspectorField(key)
```

<div class="api-text" v-pre><p>An Inspector field of the editor's selection, as the panel shows it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td><p>The Inspector's key for the property (e.g. "locked").</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p><code>{ found, shown, enabled, inHeader, value, mixed, tip, lockNote }</code>: whether the field is there and shown, whether it can be changed, whether it's in the header (Unity's: Visible, the name, Locked, Ignore Picking), its value, whether the selection's values differ, its tooltip, and the note the header shows while everything selected is locked (<code>""</code> when none).</p></div>

</div>

<div class="api-entry">

### inspectorToggle {#inspectorToggle}

```js
Test.inspectorToggle(name, click?)
```

<div class="api-text" v-pre><p>One of the Inspector header's toggle icons for the editor's selection (the Hierarchy rows' four), as the panel shows it, and a click on it as the mouse's.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>"Hide", "NoPick", "Lock" or "Scripts".</p></td></tr>
<tr><td><code>click</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Whether to click it.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p><code>{ found, shown, look, usable, tip }</code>: whether it's there and shown, "on", "off" or "mixed" (before the click's effect), whether a click would change something, and its tooltip.</p></div>

</div>

<div class="api-entry">

### isTextureLoadingComplete {#isTextureLoadingComplete}

```js
Test.isTextureLoadingComplete()
```

<div class="api-text" v-pre><p>Check whether all textures have been loaded</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> texture memory usage is not increasing</p></div>

</div>

<div class="api-entry">

### isVsyncEnabled {#isVsyncEnabled}

```js
Test.isVsyncEnabled()
```

<div class="api-text" v-pre><p>Whether the swap waits for the display's refresh (Render.vsyncEnabled, or TIVOLI_VSYNC in the environment).</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether vsync is on.</p></div>

</div>

<div class="api-entry">

### loadTestScene {#loadTestScene}

```js
Test.loadTestScene(sceneFile)
```

<div class="api-text" v-pre><p>Waits for all pending downloads, parsing and texture transfers to be complete</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sceneFile</code></td><td>string</td><td><p>URL of scene to load</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### panelTexts {#panelTexts}

```js
Test.panelTexts(name)
```

<div class="api-text" v-pre><p>The words one of Darkride's QML panels shows now (ui/QmlDock.h): every text in it that's shown, in order.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The panel, such as "People".</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The texts; empty when the panel hasn't been made or is closed.</p></div>

</div>

<div class="api-entry">

### quit {#quit}

```js
Test.quit()
```

<div class="api-text" v-pre><p>Exits the application</p></div>

</div>

<div class="api-entry">

### reloadEditorScript {#reloadEditorScript}

```js
Test.reloadEditorScript(key)
```

<div class="api-text" v-pre><p>Presses Reload on the Inspector's Script or Server Script row, as a click would.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td><p><code>"script"</code> or <code>"serverScripts"</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether the row and its button were there to press.</p></div>

</div>

<div class="api-entry">

### saveDockPicture {#saveDockPicture}

```js
Test.saveDockPicture(objectName, path)
```

<div class="api-text" v-pre><p>Saves a picture of one dock panel as its widgets draw it, floating or docked, its title bar too.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>objectName</code></td><td>string</td><td><p>The panel's object name, such as "ChatDock".</p></td></tr>
<tr><td><code>path</code></td><td>string</td><td><p>Where to save it (PNG).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether it was saved.</p></div>

</div>

<div class="api-entry">

### saveInspectorPicture {#saveInspectorPicture}

```js
Test.saveInspectorPicture(path)
```

<div class="api-text" v-pre><p>Saves a picture of the Inspector's whole content, whatever is scrolled into view, as the panel draws it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>Where to save it (PNG).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether it was saved.</p></div>

</div>

<div class="api-entry">

### saveObject {#saveObject}

```js
Test.saveObject(name, filename)
```

<div class="api-text" v-pre><p>Save a JSON object to a file in the test results location</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Name of the object</p></td></tr>
<tr><td><code>filename</code></td><td>string</td><td><p>Name of file to save to</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### savePhysicsSimulationStats {#savePhysicsSimulationStats}

```js
Test.savePhysicsSimulationStats(filename)
```

<div class="api-text" v-pre><p>Write detailed timing stats of next physics stepSimulation() to filename</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>Name of file to save to</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### savePhysicsSimulationStats {#savePhysicsSimulationStats-2}

```js
Test.savePhysicsSimulationStats(name, function)
```

<div class="api-text" v-pre><p>Profiles a specific function</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Name used to reference the function</p></td></tr>
<tr><td><code>function</code></td><td>function</td><td><p>Function to profile</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### saveWindowPicture {#saveWindowPicture}

```js
Test.saveWindowPicture(path)
```

<div class="api-text" v-pre><p>Saves a picture of the client's window as its widgets draw it (the editor's panels; the viewport itself may come out blank, being drawn by the GPU: Window.takeSnapshot pictures that).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>Where to save it (PNG).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether it was saved.</p></div>

</div>

<div class="api-entry">

### selectInEditor {#selectInEditor}

```js
Test.selectInEditor(ids)
```

<div class="api-text" v-pre><p>Turns build mode on and selects these entities in the editor, so a scripted test can picture the Inspector.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>ids</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The entities to select.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setBuildMode {#setBuildMode}

```js
Test.setBuildMode(on)
```

<div class="api-text" v-pre><p>Turns build mode on or off, as Build &gt; Build Mode does.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>on</code></td><td>boolean</td><td><p>Whether build mode is on.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setChatBadge {#setChatBadge}

```js
Test.setChatBadge(count)
```

<div class="api-text" v-pre><p>Shows a count on the bar's Chat button's badge (ui/ChatButton.h), as chat's unread count would, until chat's next count.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>count</code></td><td>number</td><td><p>0 shows none.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether the bar has a Chat button.</p></div>

</div>

<div class="api-entry">

### setMinimumGPUTextureMemStabilityCount {#setMinimumGPUTextureMemStabilityCount}

```js
Test.setMinimumGPUTextureMemStabilityCount(count)
```

<div class="api-text" v-pre><p>Set number of cycles texture size is required to be stable</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>count</code></td><td>number</td><td><p>Number of cycles to wait</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setOtherAvatarsReplicaCount {#setOtherAvatarsReplicaCount}

```js
Test.setOtherAvatarsReplicaCount(count)
```

<div class="api-text" v-pre><p>Values higher than 0 will create replicas of other-avatars when entering a world for testing purpouses</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>count</code></td><td>number</td><td><p>Number of replicas we want to create</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setPanelText {#setPanelText}

```js
Test.setPanelText(objectName, text)
```

<div class="api-text" v-pre><p>Types into a text field of the desktop's QML panels (a SearchBar's "searchField"), as if typed: its text set.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>objectName</code></td><td>string</td><td><p>The field's objectName; the first found in the desktop's panels.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><p>What it holds after.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether a field of that name was found.</p></div>

</div>

<div class="api-entry">

### setPresentLoad {#setPresentLoad}

```js
Test.setPresentLoad(microseconds)
```

<div class="api-text" v-pre><p>Makes every present cost this many microseconds more, busy-waited, as a heavy scene's would: for measuring the frame pacing when presents overrun their period. 0 is none. TIVOLI_PRESENT_LOAD_US in the environment sets it at start.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>microseconds</code></td><td>number</td><td><p>The extra time each present takes.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setSkin {#setSkin}

```js
Test.setSkin(id)
```

<div class="api-text" v-pre><p>Puts an installed skin on (ui/Skins.h), or Darkride's own look with "", as the Skins panel does, so a scripted test can picture build mode's panels under a skin and back.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>string</td><td><p>The installed skin's id (its folder's name under the app data's skins/), or "".</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>"" when it is on, else what is wrong with it.</p></div>

</div>

<div class="api-entry">

### showAlert {#showAlert}

```js
Test.showAlert(title, text, details, buttons, fieldPlaceholder?)
```

<div class="api-text" v-pre><p>Shows one of Darkride's alerts (ui/Popup.h) with Darkride's logo, and waits for its answer: a look at the alert's design without the action that asks it. Answer it with Test.answerNextAlert, called first.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code></td><td>string</td><td><p>The bold line.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><p>The short line under it.</p></td></tr>
<tr><td><code>details</code></td><td>string</td><td><p>What the Details fold-out holds ("" for none).</p></td></tr>
<tr><td><code>buttons</code></td><td>Array&lt;object&gt;</td><td><p>Each <code>{ label, role }</code>, role "default", "cancel", "plain" or "destructive".</p></td></tr>
<tr><td><code>fieldPlaceholder</code> <em>optional</em></td><td>string</td><td><p>Given, the alert has a field with this placeholder.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The pressed button's place in the list, -1 for none.</p></div>

</div>

<div class="api-entry">

### showMaximized {#showMaximized}

```js
Test.showMaximized()
```

<div class="api-text" v-pre><p>Maximizes the window</p></div>

</div>

<div class="api-entry">

### showSignInScreen {#showSignInScreen}

```js
Test.showSignInScreen()
```

<div class="api-text" v-pre><p>Brings the sign-in screen up as signing out does: out of the world, the avatar hidden, the screen over the window. Scripts go on running. For a test client, which skips the screen at start (--tokens) and isn't signed out.</p></div>

</div>

<div class="api-entry">

### startTraceEvent {#startTraceEvent}

```js
Test.startTraceEvent(name)
```

<div class="api-text" v-pre><p>Starts a specific trace event</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Name of event</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### startTracing {#startTracing}

```js
Test.startTracing(logrules?)
```

<div class="api-text" v-pre><p>Start recording Chrome compatible tracing events<br> <code>logrules</code> can be used to specify a set of logging category rules to limit what gets captured</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>logrules</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>See implementation for explanation</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### stopTracing {#stopTracing}

```js
Test.stopTracing(filename)
```

<div class="api-text" v-pre><p>Stop recording Chrome compatible tracing events and serialize recorded events to a file<br> Using a filename with <code>.gz</code> extension will automatically compress the output file</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>Name of file to save to ending with <code>.json</code> or <code>.json.gz</code></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> bool <p>True if successful.</p></div>

</div>

<div class="api-entry">

### takeFrameTrace {#takeFrameTrace}

```js
Test.takeFrameTrace()
```

<div class="api-text" v-pre><p>Takes the frame trace's records: the column names first, then one row per frame, oldest first, in that order (a cell is a number, a string, or undefined where the frame has no value: test it with <code>cell == null</code>). The records are cleared in the same step; the trace stays on or off as it was.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;Array&lt;(number|string)&gt;&gt; <p>[columns, row, row, ...].</p></div>

</div>

<div class="api-entry">

### takePresentTrace {#takePresentTrace}

```js
Test.takePresentTrace()
```

<div class="api-text" v-pre><p>Takes the presents recorded so far: each is [time in ms, the rendered frame's index (as in the render trace), 1 if that frame was new or 0 if the last frame was shown again, the present's whole duration in ms, the swap's own duration in ms (its wait for the display, with vsync), the GPU's averaged time per frame in ms].</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;Array&lt;number&gt;&gt; <p>The samples, oldest first.</p></div>

</div>

<div class="api-entry">

### takeRefreshTrace {#takeRefreshTrace}

```js
Test.takeRefreshTrace()
```

<div class="api-text" v-pre><p>Takes the refreshes recorded so far: the time of each in ms, on the clock of the present trace.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;number&gt; <p>The refresh times, oldest first; empty where the display gives no signal.</p></div>

</div>

<div class="api-entry">

### takeRenderTrace {#takeRenderTrace}

```js
Test.takeRenderTrace()
```

<div class="api-text" v-pre><p>Takes the samples traced so far: each is [time in ms, camera x, y, z, item x, y, z, frame index].</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;Array&lt;number&gt;&gt; <p>The samples, oldest first.</p></div>

</div>

<div class="api-entry">

### terrainNextAngle {#terrainNextAngle}

```js
Test.terrainNextAngle()
```

<div class="api-text" v-pre><p>The angle (degrees) the Terrain tool's next stroke will turn the brush's picture by, which its outline shows.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The angle.</p></div>

</div>

<div class="api-entry">

### terrainRandomAngle {#terrainRandomAngle}

```js
Test.terrainRandomAngle(on)
```

<div class="api-text" v-pre><p>Sets the Terrain tool's Random tick (a new angle for each stroke) as a click on it does. Build mode must be on.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>on</code></td><td>boolean</td><td><p>Ticked or not.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p><code>{ found, angleEnabled }</code>: whether the tick and the Angle field are there, and whether the Angle field can be changed after.</p></div>

</div>

<div class="api-entry">

### terrainStroke {#terrainStroke}

```js
Test.terrainStroke(id)
```

<div class="api-text" v-pre><p>A stroke of the Terrain tool straight down onto the entity's middle, pressed and let go at once.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td><p>The terrain.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The angle (degrees) the stroke turned the brush's picture by, -1 when no terrain was there.</p></div>

</div>

<div class="api-entry">

### tracePresents {#tracePresents}

```js
Test.tracePresents(on)
```

<div class="api-text" v-pre><p>Starts or stops recording the presents: one sample per present, taken on the present thread once the swap has returned (with vsync on, at the display's refresh). Starting clears what was recorded.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>on</code></td><td>boolean</td><td><p>Whether to record.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### traceRefreshes {#traceRefreshes}

```js
Test.traceRefreshes(on)
```

<div class="api-text" v-pre><p>Starts or stops recording the display's refreshes (macOS: the display link's callbacks, each with the instant of the refresh it announces). Starting clears what was recorded.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>on</code></td><td>boolean</td><td><p>Whether to record.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### traceRenderedEntity {#traceRenderedEntity}

```js
Test.traceRenderedEntity(entityID)
```

<div class="api-text" v-pre><p>Starts tracing an entity as it is drawn: one sample per rendered frame, taken on the render thread once the frame's scene is in place, of the frame's camera position and the centre of the entity's drawn bound. A null id stops it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Whether the entity has a render item to trace.</p></div>

</div>

<div class="api-entry">

### typeKeys {#typeKeys}

```js
Test.typeKeys(text, toView?)
```

<div class="api-text" v-pre><p>Keys, as if typed: to the 3D view (as Enter or "/" pressed there), or to the widget that has the keyboard (chat's message box). "\n" is Return, "\u001b" Escape.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>text</code></td><td>string</td><td></td><td><p>The keys.</p></td></tr>
<tr><td><code>toView</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>To the 3D view.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### wait {#wait}

```js
Test.wait(milliseconds)
```

<div class="api-text" v-pre><p>Waits a specific number of milliseconds</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>milliseconds</code></td><td>number</td><td><p>Number of milliseconds to wait</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### waitForConnection {#waitForConnection}

```js
Test.waitForConnection(maxWaitMs?)
```

<div class="api-text" v-pre><p>Waits for establishment of connection to server</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>maxWaitMs</code> <em>optional</em></td><td>number</td><td><code>10000</code></td><td><p>Number of milliseconds to wait</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### waitForDownloadIdle {#waitForDownloadIdle}

```js
Test.waitForDownloadIdle()
```

<div class="api-text" v-pre><p>Waits for all pending downloads to be complete</p></div>

</div>

<div class="api-entry">

### waitForProcessingIdle {#waitForProcessingIdle}

```js
Test.waitForProcessingIdle()
```

<div class="api-text" v-pre><p>Waits for all file parsing operations to be complete</p></div>

</div>

<div class="api-entry">

### waitForTextureIdle {#waitForTextureIdle}

```js
Test.waitForTextureIdle()
```

<div class="api-text" v-pre><p>Waits for all texture transfers to be complete</p></div>

</div>

<div class="api-entry">

### waitIdle {#waitIdle}

```js
Test.waitIdle()
```

<div class="api-text" v-pre><p>Waits for all pending downloads, parsing and texture transfers to be complete</p></div>

</div>

<div class="api-entry">

### windowLayout {#windowLayout}

```js
Test.windowLayout()
```

<div class="api-text" v-pre><p>Where the window's dock panels are (ui/WindowLayout.h): chat's ("chat") and Build mode's ("hierarchy", "inspector", "assets"), each <code>{ open, floating, area, x, y, width, height }</code> (area "left", "right", "top", "bottom" or "none"; x and y on the screen), the side of the bar of app buttons ("bar"), and the width of the edges between the panels and the 3D view ("separator", px).</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The panels, by name; a panel not made yet is missing.</p></div>

</div>

<div class="api-entry">

### windowLayoutAction {#windowLayoutAction}

```js
Test.windowLayoutAction(action, name?)
```

<div class="api-text" v-pre><p>Does what View &gt; Layouts does (ui/WindowLayout.h), without its popups: "save" (under the name), "apply", "forget", "reset" (Reset to Default), or "names".</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>action</code></td><td>string</td><td></td><td><p>"save", "apply", "forget", "reset" or "names".</p></td></tr>
<tr><td><code>name</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The layout's name.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The current mode's saved layouts' names, after the action.</p></div>

</div>

<div class="api-entry">

### worldChat {#worldChat}

```js
Test.worldChat()
```

<div class="api-text" v-pre><p>This world in chat (chat/WorldChat.h): its lines and unseen count, whether the chat panel is open, and the widget that has the keyboard (its object name, and its text when it is chat's message box).</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p><code>{items, unread, chatOpen, focus, focusText}</code></p></div>

</div>
