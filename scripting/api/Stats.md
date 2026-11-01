---
title: "Stats"
description: "The Stats API provides statistics on Interface and domain operation, per the statistics overlay."
draft: true
---

# Stats

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>Stats</code> API provides statistics on Interface and domain operation, per the statistics overlay.</p>
 <p><strong>Note:</strong> This API is primarily an internal diagnostics tool and is provided "as is".</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>expanded</code></td><td>boolean</td><td><p><code>true</code> if the statistics overlay should be in expanded form when the overlay is displayed, <code>false</code> if it shouldn't be expanded.</p></td></tr>
<tr><td><code>timingExpanded</code></td><td>boolean</td><td><p><code>true</code> if timing details should be displayed when the statistics overlay is displayed in expanded form, <code>false</code> if timing details should not be displayed. Set by the menu item, Developer &gt; Timing &gt; Performance Timer &gt; Display Timing Details. <em>Read-only.</em></p></td></tr>
<tr><td><code>monospaceFont</code></td><td>string</td><td><p>The name of the monospace font used in the statistics overlay. <em>Read-only.</em></p></td></tr>
<tr><td><code>serverCount</code></td><td>number</td><td><p>The number of servers that Interface is connected to. <em>Read-only.</em></p></td></tr>
<tr><td><code>renderrate</code></td><td>number</td><td><p>The rate at which new GPU frames are being created, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>presentrate</code></td><td>number</td><td><p>The rate at which the display plugin is presenting to the display device, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>stutterrate</code></td><td>number</td><td><p>The rate at which the display plugin is reprojecting old GPU frames, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>appdropped</code></td><td>number</td><td><p>The number of times a frame has not been provided to the display device in time. <em>Read-only.</em></p></td></tr>
<tr><td><code>longsubmits</code></td><td>number</td><td><p>The number of times the display device has taken longer than 11ms to return after being given a frame. <em>Read-only.</em></p></td></tr>
<tr><td><code>longrenders</code></td><td>number</td><td><p>The number of times it has taken longer than 11ms to submit a new frame to the display device. <em>Read-only.</em></p></td></tr>
<tr><td><code>longframes</code></td><td>number</td><td><p>The number of times <code>longsubmits + longrenders</code> has taken longer than 15ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>presentnewrate</code></td><td>number</td><td><p>The rate at which the display plugin is presenting new GPU frames, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>presentdroprate</code></td><td>number</td><td><p>The rate at which the display plugin is dropping GPU frames, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>bypassPrioritySorting</code></td><td>boolean</td><td><p>Whether or not the game loop spends CPU prioritizing what to draw, boolean. <em>Read-only.</em></p></td></tr>
<tr><td><code>gameLoopRate</code></td><td>number</td><td><p>The rate at which the game loop is running, in Hz.</p></td></tr>
<tr><td><code>frameTraceLines</code></td><td>Array&lt;string&gt;</td><td><p>The frame trace's columns, one line each with the newest finished frame's value and the number's maximum over the last second, while the trace is on or holds records (Test.frameTrace). <em>Read-only.</em> <em>Read-only.</em></p></td></tr>
<tr><td><code>refreshRateTarget</code></td><td>number</td><td><p>The current target refresh rate, in Hz, per the current <code>refreshRateMode</code> and <code>refreshRateRegime</code> if in desktop mode; a higher rate if in VR mode. <em>Read-only.</em></p></td></tr>
<tr><td><code>refreshRateMode</code></td><td><a href="globals#RefreshRateProfileName">RefreshRateProfileName</a></td><td><p>The current refresh rate profile. <em>Read-only.</em></p></td></tr>
<tr><td><code>refreshRateRegime</code></td><td><a href="globals#RefreshRateRegimeName">RefreshRateRegimeName</a></td><td><p>The current refresh rate regime. <em>Read-only.</em></p></td></tr>
<tr><td><code>uxMode</code></td><td><a href="globals#UXModeName">UXModeName</a></td><td><p>The user experience (UX) mode that Interface is running in. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarCount</code></td><td>number</td><td><p>The number of avatars in the domain other than the client's. <em>Read-only.</em></p></td></tr>
<tr><td><code>heroAvatarCount</code></td><td>number</td><td><p>The number avatars in a "hero" zone in the domain, other than the client's. <em>Read-only.</em></p></td></tr>
<tr><td><code>physicsObjectCount</code></td><td>number</td><td><p>The number of objects that have collisions enabled. <em>Read-only.</em></p></td></tr>
<tr><td><code>updatedAvatarCount</code></td><td>number</td><td><p>The number of avatars in the domain, other than the client's, that were updated in the most recent game loop. <em>Read-only.</em></p></td></tr>
<tr><td><code>updatedHeroAvatarCount</code></td><td>number</td><td><p>The number of avatars in a "hero" zone in the domain, other than the client's, that were updated in the most recent game loop. <em>Read-only.</em></p></td></tr>
<tr><td><code>notUpdatedAvatarCount</code></td><td>number</td><td><p>The number of avatars in the domain, other than the client's, that weren't able to be updated in the most recent game loop because there wasn't enough time to. <em>Read-only.</em></p></td></tr>
<tr><td><code>packetInCount</code></td><td>number</td><td><p>The number of packets being received from the domain server, in packets per second. <em>Read-only.</em></p></td></tr>
<tr><td><code>packetOutCount</code></td><td>number</td><td><p>The number of packets being sent to the domain server, in packets per second. <em>Read-only.</em></p></td></tr>
<tr><td><code>mbpsIn</code></td><td>number</td><td><p>The amount of data being received from the domain server, in megabits per second. <em>Read-only.</em></p></td></tr>
<tr><td><code>mbpsOut</code></td><td>number</td><td><p>The amount of data being sent to the domain server, in megabits per second. <em>Read-only.</em></p></td></tr>
<tr><td><code>assetMbpsIn</code></td><td>number</td><td><p>The amount of data being received from the asset server, in megabits per second. <code>0.0</code> if not connected to an avatar mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>assetMbpsOut</code></td><td>number</td><td><p>The amount of data being sent to the asset server, in megabits per second. <code>0.0</code> if not connected to an avatar mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioPing</code></td><td>number</td><td><p>The ping time to the audio mixer, in ms. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarPing</code></td><td>number</td><td><p>The ping time to the avatar mixer, in ms. <code>-1</code> if not connected to an avatar mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>entitiesPing</code></td><td>number</td><td><p>The average ping time to the entity servers, in ms. <code>-1</code> if not connected to an entity server. <em>Read-only.</em></p></td></tr>
<tr><td><code>assetPing</code></td><td>number</td><td><p>The ping time to the asset server, in ms. <code>-1</code> if not connected to an asset server. <em>Read-only.</em></p></td></tr>
<tr><td><code>messagePing</code></td><td>number</td><td><p>The ping time to the message mixer, in ms. <code>-1</code> if not connected to a message mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of the user's avatar. <em>Read-only.</em> </p>
<p><strong>Note:</strong> Property not available in the API.</p>
<p></p></td></tr>
<tr><td><code>speed</code></td><td>number</td><td><p>The speed of the user's avatar, in m/s. <em>Read-only.</em></p></td></tr>
<tr><td><code>yaw</code></td><td>number</td><td><p>The yaw of the user's avatar body, in degrees. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarMixerInKbps</code></td><td>number</td><td><p>The amount of data being received from the avatar mixer, in kilobits per second. <code>-1</code> if not connected to an avatar mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarMixerInPps</code></td><td>number</td><td><p>The number of packets being received from the avatar mixer, in packets per second. <code>-1</code> if not connected to an avatar mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarMixerOutKbps</code></td><td>number</td><td><p>The amount of data being sent to the avatar mixer, in kilobits per second. <code>-1</code> if not connected to an avatar mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarMixerOutPps</code></td><td>number</td><td><p>The number of packets being sent to the avatar mixer, in packets per second. <code>-1</code> if not connected to an avatar mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>myAvatarSendRate</code></td><td>number</td><td><p>The number of avatar packets being sent by the user's avatar, in packets per second. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioMixerInKbps</code></td><td>number</td><td><p>The amount of data being received from the audio mixer, in kilobits per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioMixerInPps</code></td><td>number</td><td><p>The number of packets being received from the audio mixer, in packets per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioMixerOutKbps</code></td><td>number</td><td><p>The amount of data being sent to the audio mixer, in kilobits per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioMixerOutPps</code></td><td>number</td><td><p>The number of packets being sent to the audio mixer, in packets per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioMixerKbps</code></td><td>number</td><td><p>The total amount of data being sent to and received from the audio mixer, in kilobits per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioMixerPps</code></td><td>number</td><td><p>The total number of packets being sent to and received from the audio mixer, in packets per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioOutboundPPS</code></td><td>number</td><td><p>The number of non-silent audio packets being sent by the user, in packets per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioSilentOutboundPPS</code></td><td>number</td><td><p>The number of silent audio packets being sent by the user, in packets per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioInboundPPS</code></td><td>number</td><td><p>The number of non-silent audio packets being received by the user, in packets per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioAudioInboundPPS</code></td><td>number</td><td><p>The number of non-silent audio packets being received by the user, in packets per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed. Use <code>audioInboundPPS</code> instead.</p>
<p></p></td></tr>
<tr><td><code>audioSilentInboundPPS</code></td><td>number</td><td><p>The number of silent audio packets being received by the user, in packets per second. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioPacketLoss</code></td><td>number</td><td><p>The number of audio packets being lost, sent to or received from the audio mixer, in %. <code>-1</code> if not connected to an audio mixer. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioCodec</code></td><td>string</td><td><p>The name of the audio codec. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioNoiseGate</code></td><td>string</td><td><p>The status of the audio noise gate: <code>"Open"</code> or <code>"Closed"</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>audioInjectors</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The number of audio injectors, local and non-local. <em>Read-only.</em> </p>
<p><strong>Note:</strong> Property not available in the API.</p>
<p></p></td></tr>
<tr><td><code>entityPacketsInKbps</code></td><td>number</td><td><p>The average amount of data being received from entity servers, in kilobits per second. (Multiply by the number of entity servers to get the total amount of data being received.) <code>-1</code> if not connected to an entity server. <em>Read-only.</em></p></td></tr>
<tr><td><code>downloads</code></td><td>number</td><td><p>The number of downloads in progress. <em>Read-only.</em></p></td></tr>
<tr><td><code>downloadLimit</code></td><td>number</td><td><p>The maximum number of concurrent downloads. <em>Read-only.</em></p></td></tr>
<tr><td><code>downloadsPending</code></td><td>number</td><td><p>The number of downloads pending. <em>Read-only.</em></p></td></tr>
<tr><td><code>downloadUrls</code></td><td>Array&lt;string&gt;</td><td><p>The download URLs. <em>Read-only.</em> </p>
<p><strong>Note:</strong> Property not available in the API.</p>
<p></p></td></tr>
<tr><td><code>processing</code></td><td>number</td><td><p>The number of completed downloads being processed. <em>Read-only.</em></p></td></tr>
<tr><td><code>processingPending</code></td><td>number</td><td><p>The number of completed downloads waiting to be processed. <em>Read-only.</em></p></td></tr>
<tr><td><code>triangles</code></td><td>number</td><td><p>The number of triangles in the rendered scene. <em>Read-only.</em></p></td></tr>
<tr><td><code>drawcalls</code></td><td>number</td><td><p>The number of draw calls made for the rendered scene, counting each instance of an instanced draw.</p></td></tr>
<tr><td><code>apiDrawcalls</code></td><td>number</td><td><p>The number of draw calls the graphics API was given for the rendered scene: an instanced draw counts once (GPU instancing).</p></td></tr>
<tr><td><code>instancedDrawcalls</code></td><td>number</td><td><p>The number of those draws that took an instance list of models' copies.</p></td></tr>
<tr><td><code>instances</code></td><td>number</td><td><p>The copies of models those draws drew. <em>Read-only.</em></p></td></tr>
<tr><td><code>materialSwitches</code></td><td>number</td><td><p>The number of material switches performed for the rendered scene. <em>Read-only.</em></p></td></tr>
<tr><td><code>itemConsidered</code></td><td>number</td><td><p>The number of item considerations made for rendering. <em>Read-only.</em></p></td></tr>
<tr><td><code>itemOutOfView</code></td><td>number</td><td><p>The number of items out of view. <em>Read-only.</em></p></td></tr>
<tr><td><code>itemTooSmall</code></td><td>number</td><td><p>The number of items too small to render. <em>Read-only.</em></p></td></tr>
<tr><td><code>itemRendered</code></td><td>number</td><td><p>The number of items rendered. <em>Read-only.</em></p></td></tr>
<tr><td><code>shadowConsidered</code></td><td>number</td><td><p>The number of shadow considerations made for rendering. <em>Read-only.</em></p></td></tr>
<tr><td><code>shadowOutOfView</code></td><td>number</td><td><p>The number of shadows out of view. <em>Read-only.</em></p></td></tr>
<tr><td><code>shadowTooSmall</code></td><td>number</td><td><p>The number of shadows too small to render. <em>Read-only.</em></p></td></tr>
<tr><td><code>shadowRendered</code></td><td>number</td><td><p>The number of shadows rendered. <em>Read-only.</em></p></td></tr>
<tr><td><code>localShadowMaps</code></td><td>number</td><td><p>The number of shadow maps spot and point lights have this frame: one for a spot light, six for a point light. <em>Read-only.</em></p></td></tr>
<tr><td><code>localShadowMapsDrawn</code></td><td>number</td><td><p>The number of those shadow maps drawn again this frame; the rest were kept from earlier frames, nothing in their view having changed. <em>Read-only.</em></p></td></tr>
<tr><td><code>localShadowStaticMapsDrawn</code></td><td>number</td><td><p>The number of those drawn again whose static casters (the ones that haven't changed for a while) were drawn again too; the rest copied their static map and drew only the dynamic casters over it. <em>Read-only.</em></p></td></tr>
<tr><td><code>mirrorsDrawn</code></td><td>number</td><td><p>The number of mirrors drawn this frame, a view each (up to four). <em>Read-only.</em></p></td></tr>
<tr><td><code>mirrorPixels</code></td><td>number</td><td><p>The pixels those mirrors' pictures add up to this frame: a Screen mirror's picture covers its glass's rectangle on screen, a Picture mirror's its size on screen. <em>Read-only.</em></p></td></tr>
<tr><td><code>sendingMode</code></td><td>string</td><td><p>Description of the octree sending mode. <em>Read-only.</em></p></td></tr>
<tr><td><code>packetStats</code></td><td>string</td><td><p>Description of the octree packet processing state. <em>Read-only.</em></p></td></tr>
<tr><td><code>lodAngle</code></td><td>number</td><td><p>The target LOD angle, in degrees. <em>Read-only.</em></p></td></tr>
<tr><td><code>lodTargetFramerate</code></td><td>number</td><td><p>The target LOD frame rate, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>lodStatus</code></td><td>string</td><td><p>Description of the current LOD. <em>Read-only.</em></p></td></tr>
<tr><td><code>numEntityUpdates</code></td><td>string</td><td><p>The number of entity updates that happened last frame. <em>Read-only.</em></p></td></tr>
<tr><td><code>numNeededEntityUpdates</code></td><td>string</td><td><p>The total number of entity updates scheduled for last frame. <em>Read-only.</em></p></td></tr>
<tr><td><code>timingStats</code></td><td>string</td><td><p>Details of the average time (ms) spent in and number of calls made to different parts of the code. Provided only if <code>timingExpanded</code> is <code>true</code>. Only the top 10 items are provided if Developer &gt; Timing &gt; Performance Timer &gt; Only Display Top 10 is enabled. <em>Read-only.</em></p></td></tr>
<tr><td><code>gameUpdateStats</code></td><td>string</td><td><p>Details of the average time (ms) spent in different parts of the game loop. <em>Read-only.</em></p></td></tr>
<tr><td><code>serverElements</code></td><td>number</td><td><p>The total number of elements in the server octree. <em>Read-only.</em></p></td></tr>
<tr><td><code>serverInternal</code></td><td>number</td><td><p>The number of internal elements in the server octree. <em>Read-only.</em></p></td></tr>
<tr><td><code>serverLeaves</code></td><td>number</td><td><p>The number of leaf elements in the server octree. <em>Read-only.</em></p></td></tr>
<tr><td><code>localElements</code></td><td>number</td><td><p>The total number of elements in the client octree. <em>Read-only.</em></p></td></tr>
<tr><td><code>localInternal</code></td><td>number</td><td><p>The number of internal elements in the client octree. <em>Read-only.</em></p></td></tr>
<tr><td><code>localLeaves</code></td><td>number</td><td><p>The number of leaf elements in the client octree. <em>Read-only.</em></p></td></tr>
<tr><td><code>rectifiedTextureCount</code></td><td>number</td><td><p>The number of textures that have been resized so that their dimensions is a power of 2 if smaller than 128 pixels, or a multiple of 128 if greater than 128 pixels. <em>Read-only.</em></p></td></tr>
<tr><td><code>decimatedTextureCount</code></td><td>number</td><td><p>The number of textures that have been reduced in size because they were over the maximum allowed dimensions of 8192 pixels on desktop or 2048 pixels on mobile. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuBuffers</code></td><td>number</td><td><p>The number of OpenGL buffer objects managed by the GPU back-end. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuBufferMemory</code></td><td>number</td><td><p>The total memory size of the <code>gpuBuffers</code>, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTextures</code></td><td>number</td><td><p>The number of OpenGL textures managed by the GPU back-end. This is the sum of the number of textures managed for <code>gpuTextureResidentMemory</code>, <code>gpuTextureResourceMemory</code>, and <code>gpuTextureFramebufferMemory</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTextureMemory</code></td><td>number</td><td><p>The total memory size of the <code>gpuTextures</code>, in MB. This is the sum of <code>gpuTextureResidentMemory</code>, <code>gpuTextureResourceMemory</code>, and <code>gpuTextureFramebufferMemory</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>glContextSwapchainMemory</code></td><td>number</td><td><p>The estimated memory used by the default OpenGL frame buffer, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>qmlTextureMemory</code></td><td>number</td><td><p>The memory size of textures managed by the offscreen QML surface, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>texturePendingTransfers</code></td><td>number</td><td><p>The memory size of textures pending transfer to the GPU, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTextureResidentMemory</code></td><td>number</td><td><p>The memory size of the "strict" textures that always have their full resolution in GPU memory, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTextureFramebufferMemory</code></td><td>number</td><td><p>The memory size of the frame buffer on the GPU, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTextureResourceMemory</code></td><td>number</td><td><p>The amount of GPU memory that has been allocated for "variable" textures that don't necessarily always have their full resolution in GPU memory, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTextureResourceIdealMemory</code></td><td>number</td><td><p>The amount of memory that "variable" textures would take up if they were all completely loaded, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTextureResourcePopulatedMemory</code></td><td>number</td><td><p>How much of the GPU memory allocated has actually been populated, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTextureMemoryPressureState</code></td><td>string</td><td><p>The stats of the texture transfer engine. </p>
<ul> <li><code>"Undersubscribed"</code>: There is texture data that can fit in memory but that isn't on the GPU, so more GPU texture memory should be allocated if possible.</li>
 <li><code>"Transfer"</code>: More GPU texture memory has been allocated and texture data is being transferred.</li>
 <li><code>"Idle"</code>: Either all texture data has been transferred to the GPU or there is nor more space available.</li>
 </ul>
 <em>Read-only.</em><p></p></td></tr>
<tr><td><code>gpuFreeMemory</code></td><td>number</td><td><p>The amount of GPU memory available after all allocations, in MB. <em>Read-only.</em> </p>
<p><strong>Note:</strong> This is not a reliable number because OpenGL doesn't have an official method of getting this information.</p>
<p></p></td></tr>
<tr><td><code>gpuTextureExternalMemory</code></td><td>number</td><td><p>The estimated amount of memory consumed by textures being used but that are not managed by the GPU library, in MB. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuFrameSize</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The dimensions of the frames being rendered, in pixels. <em>Read-only.</em> </p>
<p><strong>Note:</strong> Property not available in the API.</p>
<p></p></td></tr>
<tr><td><code>gpuFrameTime</code></td><td>number</td><td><p>The time the GPU is spending on a frame, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuFrameTimePerPixel</code></td><td>number</td><td><p>The time the GPU is spending on a pixel, in ns. <em>Read-only.</em></p></td></tr>
<tr><td><code>batchFrameTime</code></td><td>number</td><td><p>The time being spent batch processing each frame, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>engineFrameTime</code></td><td>number</td><td><p>The time being spent in the render engine each frame, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarSimulationTime</code></td><td>number</td><td><p>The time being spent simulating avatars each frame, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>stylusPicksCount</code></td><td>number</td><td><p>The number of stylus picks currently in effect. <em>Read-only.</em></p></td></tr>
<tr><td><code>rayPicksCount</code></td><td>number</td><td><p>The number of ray picks currently in effect. <em>Read-only.</em></p></td></tr>
<tr><td><code>parabolaPicksCount</code></td><td>number</td><td><p>The number of parabola picks currently in effect. <em>Read-only.</em></p></td></tr>
<tr><td><code>collisionPicksCount</code></td><td>number</td><td><p>The number of collision picks currently in effect. <em>Read-only.</em></p></td></tr>
<tr><td><code>stylusPicksUpdated</code></td><td><a href="Vec3">Vec3</a></td><td><p>The number of stylus pick intersection that were found in the most recent game loop: </p>
<ul> <li><code>x</code> = entity intersections.</li>
 <li><code>y</code> = avatar intersections.</li>
 <li><code>z</code> = HUD intersections.</li>
 </ul>
 <em>Read-only.</em> <p><strong>Note:</strong> Property not available in the API.</p>
<p></p></td></tr>
<tr><td><code>rayPicksUpdated</code></td><td><a href="Vec3">Vec3</a></td><td><p>The number of ray pick intersections that were found in the most recent game loop: </p>
<ul> <li><code>x</code> = entity intersections.</li>
 <li><code>y</code> = avatar intersections.</li>
 <li><code>z</code> = HUD intersections.</li>
 </ul>
 <em>Read-only.</em> <p><strong>Note:</strong> Property not available in the API.</p>
<p></p></td></tr>
<tr><td><code>parabolaPicksUpdated</code></td><td><a href="Vec3">Vec3</a></td><td><p>The number of parabola pick intersections that were found in the most recent game loop: </p>
<ul> <li><code>x</code> = entity intersections.</li>
 <li><code>y</code> = avatar intersections.</li>
 <li><code>z</code> = HUD intersections.</li>
 </ul>
 <em>Read-only.</em> <p><strong>Note:</strong> Property not available in the API.</p>
<p></p></td></tr>
<tr><td><code>collisionPicksUpdated</code></td><td><a href="Vec3">Vec3</a></td><td><p>The number of collision pick intersections that were found in the most recent game loop: </p>
<ul> <li><code>x</code> = entity intersections.</li>
 <li><code>y</code> = avatar intersections.</li>
 <li><code>z</code> = HUD intersections.</li>
 </ul>
 <em>Read-only.</em> <p><strong>Note:</strong> Property not available in the API.</p>
<p></p></td></tr>
<tr><td><code>eventQueueDebuggingOn</code></td><td>boolean</td><td><p><code>true</code> if event queue statistics are provided, <code>false</code> if they're not. <em>Read-only.</em></p></td></tr>
<tr><td><code>mainThreadQueueDepth</code></td><td>number</td><td><p>The number of events in the main thread's event queue. Only provided if <code>eventQueueDebuggingOn</code> is <code>true</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>nodeListThreadQueueDepth</code></td><td>number</td><td><p>The number of events in the node list thread's event queue. Only provided if <code>eventQueueDebuggingOn</code> is <code>true</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>bgColor</code></td><td>string</td><td><p><em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>activeFocus</code></td><td>boolean</td><td><p><em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>activeFocusOnTab</code></td><td>boolean</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>anchors</code></td><td>object</td><td><p><em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>antialiasing</code></td><td>boolean</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>baselineOffset</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>children</code></td><td>Array&lt;object&gt;</td><td><p><em>Read-only.</em> </p>
<p><strong>Note:</strong> Property not available in the API.</p>
 <p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>clip</code></td><td>boolean</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>containmentMask</code></td><td>object</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>enabled</code></td><td>boolean</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>focus</code></td><td>boolean</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>height</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>implicitHeight</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>implicitWidth</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>layer</code></td><td>object</td><td><p><em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>opacity</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>rotation</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>scale</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>smooth</code></td><td>boolean</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>state</code></td><td>string</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>transformOrigin</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>visible</code></td><td>boolean</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>width</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>x</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>z</code></td><td>number</td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### forceUpdateStats {#forceUpdateStats}

```js
Stats.forceUpdateStats()
```

<div class="api-text" v-pre><p>Updates statistics to make current values available to scripts even though the statistics overlay may not be displayed. (Many statistics values are normally updated only if the statistics overlay is displayed.) </p>
<p><strong>Note:</strong> Not all statistics values are updated when the statistics overlay isn't displayed or expanded.</p>
<p></p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report avatar mixer data and packet rates.</p></div>

```js
// The statistics to report.
var stats = [
    "avatarMixerInKbps",
    "avatarMixerInPps",
    "avatarMixerOutKbps",
    "avatarMixerOutPps"
];

// Update the statistics for the script.
Stats.forceUpdateStats();

// Report the statistics.
for (var i = 0; i < stats.length; i++) {
    print(stats[i], "=", Stats[stats[i]]);
}
```

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### apiDrawcallsChanged {#apiDrawcallsChanged}

```js
Stats.apiDrawcallsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>apiDrawcalls</code> property changes.</p></div>

### appdroppedChanged {#appdroppedChanged}

```js
Stats.appdroppedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>appdropped</code> property changes.</p></div>

### assetMbpsInChanged {#assetMbpsInChanged}

```js
Stats.assetMbpsInChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>assetMbpsIn</code> property changes.</p></div>

### assetMbpsOutChanged {#assetMbpsOutChanged}

```js
Stats.assetMbpsOutChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>assetMbpsOut</code> property changes.</p></div>

### assetPingChanged {#assetPingChanged}

```js
Stats.assetPingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>assetPing</code> property changes.</p></div>

### audioCodecChanged {#audioCodecChanged}

```js
Stats.audioCodecChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioCodec</code> property changes.</p></div>

### audioInboundPPSChanged {#audioInboundPPSChanged}

```js
Stats.audioInboundPPSChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioInboundPPS</code> property changes.</p></div>

### audioInjectorsChanged {#audioInjectorsChanged}

```js
Stats.audioInjectorsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioInjectors</code> property changes.</p></div>

### audioMixerInKbpsChanged {#audioMixerInKbpsChanged}

```js
Stats.audioMixerInKbpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioMixerInKbps</code> property changes.</p></div>

### audioMixerInPpsChanged {#audioMixerInPpsChanged}

```js
Stats.audioMixerInPpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioMixerInPps</code> property changes.</p></div>

### audioMixerKbpsChanged {#audioMixerKbpsChanged}

```js
Stats.audioMixerKbpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioMixerKbps</code> property changes.</p></div>

### audioMixerOutKbpsChanged {#audioMixerOutKbpsChanged}

```js
Stats.audioMixerOutKbpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioMixerOutKbps</code> property changes.</p></div>

### audioMixerOutPpsChanged {#audioMixerOutPpsChanged}

```js
Stats.audioMixerOutPpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioMixerOutPps</code> property changes.</p></div>

### audioMixerPpsChanged {#audioMixerPpsChanged}

```js
Stats.audioMixerPpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioMixerPps</code> property changes.</p></div>

### audioNoiseGateChanged {#audioNoiseGateChanged}

```js
Stats.audioNoiseGateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioNoiseGate</code> property changes.</p></div>

### audioOutboundPPSChanged {#audioOutboundPPSChanged}

```js
Stats.audioOutboundPPSChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioOutboundPPS</code> property changes.</p></div>

### audioPacketLossChanged {#audioPacketLossChanged}

```js
Stats.audioPacketLossChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioPacketLoss</code> property changes.</p></div>

### audioPingChanged {#audioPingChanged}

```js
Stats.audioPingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioPing</code> property changes.</p></div>

### audioSilentInboundPPSChanged {#audioSilentInboundPPSChanged}

```js
Stats.audioSilentInboundPPSChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioSilentInboundPPS</code> property changes.</p></div>

### audioSilentOutboundPPSChanged {#audioSilentOutboundPPSChanged}

```js
Stats.audioSilentOutboundPPSChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioSilentOutboundPPS</code> property changes.</p></div>

### avatarCountChanged {#avatarCountChanged}

```js
Stats.avatarCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>avatarCount</code> property changes.</p></div>

### avatarMixerInKbpsChanged {#avatarMixerInKbpsChanged}

```js
Stats.avatarMixerInKbpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>avatarMixerInKbps</code> property changes.</p></div>

### avatarMixerInPpsChanged {#avatarMixerInPpsChanged}

```js
Stats.avatarMixerInPpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>avatarMixerInPps</code> property changes.</p></div>

### avatarMixerOutKbpsChanged {#avatarMixerOutKbpsChanged}

```js
Stats.avatarMixerOutKbpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>avatarMixerOutKbps</code> property changes.</p></div>

### avatarMixerOutPpsChanged {#avatarMixerOutPpsChanged}

```js
Stats.avatarMixerOutPpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>avatarMixerOutPps</code> property changes.</p></div>

### avatarPingChanged {#avatarPingChanged}

```js
Stats.avatarPingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>avatarPing</code> property changes.</p></div>

### avatarSimulationTimeChanged {#avatarSimulationTimeChanged}

```js
Stats.avatarSimulationTimeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>avatarSimulationTime</code> property changes.</p></div>

### batchFrameTimeChanged {#batchFrameTimeChanged}

```js
Stats.batchFrameTimeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>batchFrameTime</code> property changes.</p></div>

### bypassPrioritySortingChanged {#bypassPrioritySortingChanged}

```js
Stats.bypassPrioritySortingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>bypassPrioritySorting</code> property changes.</p></div>

### collisionPicksCountChanged {#collisionPicksCountChanged}

```js
Stats.collisionPicksCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>collisionPicksCount</code> property changes.</p></div>

### collisionPicksUpdatedChanged {#collisionPicksUpdatedChanged}

```js
Stats.collisionPicksUpdatedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>collisionPicksUpdated</code> property changes.</p></div>

### decimatedTextureCountChanged {#decimatedTextureCountChanged}

```js
Stats.decimatedTextureCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>decimatedTextureCount</code> property changes.</p></div>

### downloadLimitChanged {#downloadLimitChanged}

```js
Stats.downloadLimitChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>downloadLimit</code> property changes.</p></div>

### downloadsChanged {#downloadsChanged}

```js
Stats.downloadsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>downloads</code> property changes.</p></div>

### downloadsPendingChanged {#downloadsPendingChanged}

```js
Stats.downloadsPendingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>downloadsPending</code> property changes.</p></div>

### downloadUrlsChanged {#downloadUrlsChanged}

```js
Stats.downloadUrlsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>downloadUrls</code> property changes.</p></div>

### drawcallsChanged {#drawcallsChanged}

```js
Stats.drawcallsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>drawcalls</code> property changes.</p></div>

### engineFrameTimeChanged {#engineFrameTimeChanged}

```js
Stats.engineFrameTimeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>engineFrameTime</code> property changes.</p></div>

### entitiesPingChanged {#entitiesPingChanged}

```js
Stats.entitiesPingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>entitiesPing</code> property changes.</p></div>

### entityPacketsInKbpsChanged {#entityPacketsInKbpsChanged}

```js
Stats.entityPacketsInKbpsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>entityPacketsInKbps</code> property changes.</p></div>

### eventQueueDebuggingOnChanged {#eventQueueDebuggingOnChanged}

```js
Stats.eventQueueDebuggingOnChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>eventQueueDebuggingOn</code> property changes.</p></div>

### expandedChanged {#expandedChanged}

```js
Stats.expandedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>expanded</code> property changes.</p></div>

### gameLoopRateChanged {#gameLoopRateChanged}

```js
Stats.gameLoopRateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gameLoopRate</code> property changes.</p></div>

### gameUpdateStatsChanged {#gameUpdateStatsChanged}

```js
Stats.gameUpdateStatsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gameUpdateStats</code> property changes.</p></div>

### glContextSwapchainMemoryChanged {#glContextSwapchainMemoryChanged}

```js
Stats.glContextSwapchainMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>glContextSwapchainMemory</code> property changes.</p></div>

### gpuBufferMemoryChanged {#gpuBufferMemoryChanged}

```js
Stats.gpuBufferMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuBufferMemory</code> property changes.</p></div>

### gpuBuffersChanged {#gpuBuffersChanged}

```js
Stats.gpuBuffersChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuBuffers</code> property changes.</p></div>

### gpuFrameSizeChanged {#gpuFrameSizeChanged}

```js
Stats.gpuFrameSizeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuFrameSize</code> property changes.</p></div>

### gpuFrameTimeChanged {#gpuFrameTimeChanged}

```js
Stats.gpuFrameTimeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuFrameTime</code> property changes.</p></div>

### gpuFrameTimePerPixelChanged {#gpuFrameTimePerPixelChanged}

```js
Stats.gpuFrameTimePerPixelChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuFrameTimePerPixel</code> property changes.</p></div>

### gpuFreeMemoryChanged {#gpuFreeMemoryChanged}

```js
Stats.gpuFreeMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuFreeMemory</code> property changes.</p></div>

### gpuTextureExternalMemoryChanged {#gpuTextureExternalMemoryChanged}

```js
Stats.gpuTextureExternalMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextureExternalMemory</code> property changes.</p></div>

### gpuTextureFramebufferMemoryChanged {#gpuTextureFramebufferMemoryChanged}

```js
Stats.gpuTextureFramebufferMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextureFramebufferMemory</code> property changes.</p></div>

### gpuTextureMemoryChanged {#gpuTextureMemoryChanged}

```js
Stats.gpuTextureMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextureMemory</code> property changes.</p></div>

### gpuTextureMemoryPressureStateChanged {#gpuTextureMemoryPressureStateChanged}

```js
Stats.gpuTextureMemoryPressureStateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextureMemoryPressureState</code> property changes.</p></div>

### gpuTextureResidentMemoryChanged {#gpuTextureResidentMemoryChanged}

```js
Stats.gpuTextureResidentMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextureResidentMemory</code> property changes.</p></div>

### gpuTextureResourceIdealMemoryChanged {#gpuTextureResourceIdealMemoryChanged}

```js
Stats.gpuTextureResourceIdealMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextureResourceIdealMemory</code> property changes.</p></div>

### gpuTextureResourceMemoryChanged {#gpuTextureResourceMemoryChanged}

```js
Stats.gpuTextureResourceMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextureResourceMemory</code> property changes.</p></div>

### gpuTextureResourcePopulatedMemoryChanged {#gpuTextureResourcePopulatedMemoryChanged}

```js
Stats.gpuTextureResourcePopulatedMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextureResourcePopulatedMemory</code> property changes.</p></div>

### gpuTexturesChanged {#gpuTexturesChanged}

```js
Stats.gpuTexturesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>gpuTextures</code> property changes.</p></div>

### heroAvatarCountChanged {#heroAvatarCountChanged}

```js
Stats.heroAvatarCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>heroAvatarCount</code> property changes.</p></div>

### instancedDrawcallsChanged {#instancedDrawcallsChanged}

```js
Stats.instancedDrawcallsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>instancedDrawcalls</code> property changes.</p></div>

### instancesChanged {#instancesChanged}

```js
Stats.instancesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>instances</code> property changes.</p></div>

### itemConsideredChanged {#itemConsideredChanged}

```js
Stats.itemConsideredChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>itemConsidered</code> property changes.</p></div>

### itemOutOfViewChanged {#itemOutOfViewChanged}

```js
Stats.itemOutOfViewChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>itemOutOfView</code> property changes.</p></div>

### itemRenderedChanged {#itemRenderedChanged}

```js
Stats.itemRenderedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>itemRendered</code> property changes.</p></div>

### itemTooSmallChanged {#itemTooSmallChanged}

```js
Stats.itemTooSmallChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>itemTooSmall</code> property changes.</p></div>

### localElementsChanged {#localElementsChanged}

```js
Stats.localElementsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>localElements</code> property changes.</p></div>

### localInternalChanged {#localInternalChanged}

```js
Stats.localInternalChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>localInternal</code> property changes.</p></div>

### localLeavesChanged {#localLeavesChanged}

```js
Stats.localLeavesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>localLeaves</code> property changes.</p></div>

### localShadowMapsChanged {#localShadowMapsChanged}

```js
Stats.localShadowMapsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>localShadowMaps</code> property changes.</p></div>

### localShadowMapsDrawnChanged {#localShadowMapsDrawnChanged}

```js
Stats.localShadowMapsDrawnChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>localShadowMapsDrawn</code> property changes.</p></div>

### localShadowStaticMapsDrawnChanged {#localShadowStaticMapsDrawnChanged}

```js
Stats.localShadowStaticMapsDrawnChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>localShadowStaticMapsDrawn</code> property changes.</p></div>

### lodAngleChanged {#lodAngleChanged}

```js
Stats.lodAngleChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>lodAngle</code> property changes.</p></div>

### lodStatusChanged {#lodStatusChanged}

```js
Stats.lodStatusChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>lodStatus</code> property changes.</p></div>

### lodTargetFramerateChanged {#lodTargetFramerateChanged}

```js
Stats.lodTargetFramerateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>lodTargetFramerate</code> property changes.</p></div>

### longframesChanged {#longframesChanged}

```js
Stats.longframesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>longframes</code> property changes.</p></div>

### longrendersChanged {#longrendersChanged}

```js
Stats.longrendersChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>longrenders</code> property changes.</p></div>

### longsubmitsChanged {#longsubmitsChanged}

```js
Stats.longsubmitsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>longsubmits</code> property changes.</p></div>

### mainThreadQueueDepthChanged {#mainThreadQueueDepthChanged}

```js
Stats.mainThreadQueueDepthChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>mainThreadQueueDepth</code> property changes.</p></div>

### materialSwitchesChanged {#materialSwitchesChanged}

```js
Stats.materialSwitchesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>materialSwitches</code> property changes.</p></div>

### mbpsInChanged {#mbpsInChanged}

```js
Stats.mbpsInChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>mbpsIn</code> property changes.</p></div>

### mbpsOutChanged {#mbpsOutChanged}

```js
Stats.mbpsOutChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>mbpsOut</code> property changes.</p></div>

### messagePingChanged {#messagePingChanged}

```js
Stats.messagePingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>messagePing</code> property changes.</p></div>

### mirrorPixelsChanged {#mirrorPixelsChanged}

```js
Stats.mirrorPixelsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>mirrorPixels</code> property changes.</p></div>

### mirrorsDrawnChanged {#mirrorsDrawnChanged}

```js
Stats.mirrorsDrawnChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>mirrorsDrawn</code> property changes.</p></div>

### myAvatarSendRateChanged {#myAvatarSendRateChanged}

```js
Stats.myAvatarSendRateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>myAvatarSendRate</code> property changes.</p></div>

### nodeListThreadQueueDepth {#nodeListThreadQueueDepth}

```js
Stats.nodeListThreadQueueDepth.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>nodeListThreadQueueDepth</code> property changes.</p></div>

### notUpdatedAvatarCountChanged {#notUpdatedAvatarCountChanged}

```js
Stats.notUpdatedAvatarCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>notUpdatedAvatarCount</code> property changes.</p></div>

### numEntityUpdatesChanged {#numEntityUpdatesChanged}

```js
Stats.numEntityUpdatesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>numEntityUpdates</code> property changes.</p></div>

### numNeededEntityUpdatesChanged {#numNeededEntityUpdatesChanged}

```js
Stats.numNeededEntityUpdatesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>numNeededEntityUpdates</code> property changes.</p></div>

### packetInCountChanged {#packetInCountChanged}

```js
Stats.packetInCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>packetInCount</code> property changes.</p></div>

### packetOutCountChanged {#packetOutCountChanged}

```js
Stats.packetOutCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>packetOutCount</code> property changes.</p></div>

### packetStatsChanged {#packetStatsChanged}

```js
Stats.packetStatsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>packetStats</code> property changes.</p></div>

### parabolaPicksCountChanged {#parabolaPicksCountChanged}

```js
Stats.parabolaPicksCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>parabolaPicksCount</code> property changes.</p></div>

### parabolaPicksUpdatedChanged {#parabolaPicksUpdatedChanged}

```js
Stats.parabolaPicksUpdatedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>parabolaPicksUpdated</code> property changes.</p></div>

### physicsObjectCountChanged {#physicsObjectCountChanged}

```js
Stats.physicsObjectCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>physicsObjectCount</code> property changes.</p></div>

### positionChanged {#positionChanged}

```js
Stats.positionChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>position</code> property changes.</p></div>

### presentdroprateChanged {#presentdroprateChanged}

```js
Stats.presentdroprateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>presentdroprate</code> property changes.</p></div>

### presentnewrateChanged {#presentnewrateChanged}

```js
Stats.presentnewrateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>presentnewrate</code> property changes.</p></div>

### presentrateChanged {#presentrateChanged}

```js
Stats.presentrateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>presentrate</code> property changes.</p></div>

### processingChanged {#processingChanged}

```js
Stats.processingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>processing</code> property changes.</p></div>

### processingPendingChanged {#processingPendingChanged}

```js
Stats.processingPendingChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>processingPending</code> property changes.</p></div>

### qmlTextureMemoryChanged {#qmlTextureMemoryChanged}

```js
Stats.qmlTextureMemoryChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>qmlTextureMemory</code> property changes.</p></div>

### rayPicksCountChanged {#rayPicksCountChanged}

```js
Stats.rayPicksCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>rayPicksCount</code> property changes.</p></div>

### rayPicksUpdatedChanged {#rayPicksUpdatedChanged}

```js
Stats.rayPicksUpdatedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>rayPicksUpdated</code> property changes.</p></div>

### rectifiedTextureCountChanged {#rectifiedTextureCountChanged}

```js
Stats.rectifiedTextureCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>rectifiedTextureCount</code> property changes.</p></div>

### refreshRateModeChanged {#refreshRateModeChanged}

```js
Stats.refreshRateModeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>refreshRateMode</code> property changes.</p></div>

### refreshRateRegimeChanged {#refreshRateRegimeChanged}

```js
Stats.refreshRateRegimeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>refreshRateRegime</code> property changes.</p></div>

### refreshRateTargetChanged {#refreshRateTargetChanged}

```js
Stats.refreshRateTargetChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>refreshRateTarget</code> property changes.</p></div>

### renderrateChanged {#renderrateChanged}

```js
Stats.renderrateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>renderrate</code> property changes.</p></div>

### sendingModeChanged {#sendingModeChanged}

```js
Stats.sendingModeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>sendingMode</code> property changes.</p></div>

### serverCountChanged {#serverCountChanged}

```js
Stats.serverCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>serverCount</code> property changes.</p></div>

### serverElementsChanged {#serverElementsChanged}

```js
Stats.serverElementsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>serverElements</code> property changes.</p></div>

### serverInternalChanged {#serverInternalChanged}

```js
Stats.serverInternalChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>serverInternal</code> property changes.</p></div>

### serverLeavesChanged {#serverLeavesChanged}

```js
Stats.serverLeavesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>serverLeaves</code> property changes.</p></div>

### shadowConsideredChanged {#shadowConsideredChanged}

```js
Stats.shadowConsideredChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>shadowConsidered</code> property changes.</p></div>

### shadowOutOfViewChanged {#shadowOutOfViewChanged}

```js
Stats.shadowOutOfViewChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>shadowOutOfView</code> property changes.</p></div>

### shadowRenderedChanged {#shadowRenderedChanged}

```js
Stats.shadowRenderedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>shadowRendered</code> property changes.</p></div>

### shadowTooSmallChanged {#shadowTooSmallChanged}

```js
Stats.shadowTooSmallChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>shadowTooSmall</code> property changes.</p></div>

### speedChanged {#speedChanged}

```js
Stats.speedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>speed</code> property changes.</p></div>

### stutterrateChanged {#stutterrateChanged}

```js
Stats.stutterrateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>stutterrate</code> property changes.</p></div>

### stylusPicksCountChanged {#stylusPicksCountChanged}

```js
Stats.stylusPicksCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>stylusPicksCount</code> property changes.</p></div>

### stylusPicksUpdatedChanged {#stylusPicksUpdatedChanged}

```js
Stats.stylusPicksUpdatedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>stylusPicksUpdated</code> property changes.</p></div>

### texturePendingTransfersChanged {#texturePendingTransfersChanged}

```js
Stats.texturePendingTransfersChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>texturePendingTransfers</code> property changes.</p></div>

### timingExpandedChanged {#timingExpandedChanged}

```js
Stats.timingExpandedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>timingExpanded</code> property changes.</p></div>

### timingStatsChanged {#timingStatsChanged}

```js
Stats.timingStatsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>timingStats</code> property changes.</p></div>

### trianglesChanged {#trianglesChanged}

```js
Stats.trianglesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>triangles</code> property changes.</p></div>

### updatedAvatarCountChanged {#updatedAvatarCountChanged}

```js
Stats.updatedAvatarCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>updatedAvatarCount</code> property changes.</p></div>

### updatedHeroAvatarCountChanged {#updatedHeroAvatarCountChanged}

```js
Stats.updatedHeroAvatarCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>updatedHeroAvatarCount</code> property changes.</p></div>

### uxModeChanged {#uxModeChanged}

```js
Stats.uxModeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>uxMode</code> property changes.</p></div>

### yawChanged {#yawChanged}

```js
Stats.yawChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>yaw</code> property changes.</p></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### childAt {#childAt}

```js
Stats.childAt(x, y)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>X.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Y.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object </div>

### contains {#contains}

```js
Stats.contains(point)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>point</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>Point</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

### forceActiveFocus {#forceActiveFocus}

```js
Stats.forceActiveFocus(reason?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>reason</code> <em>optional</em></td><td>number</td><td><code>7</code></td><td><p>Reason</p></td></tr>
</tbody></table></div>

### grabToImage {#grabToImage}

```js
Stats.grabToImage(callback, targetSize?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>callback</code></td><td>object</td><td></td><td><p>Callback.</p></td></tr>
<tr><td><code>targetSize</code> <em>optional</em></td><td><a href="globals#Size">Size</a></td><td><code>0,0</code></td><td><p>Target size.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

### mapFromGlobal {#mapFromGlobal}

```js
Stats.mapFromGlobal(global)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>global</code></td><td>object</td><td><p>Global.</p></td></tr>
</tbody></table></div>

### mapFromItem {#mapFromItem}

```js
Stats.mapFromItem(item)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>item</code></td><td>object</td><td><p>Item.</p></td></tr>
</tbody></table></div>

### mapToGlobal {#mapToGlobal}

```js
Stats.mapToGlobal(global)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>global</code></td><td>object</td><td><p>Global.</p></td></tr>
</tbody></table></div>

### mapToItem {#mapToItem}

```js
Stats.mapToItem(item)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>item</code></td><td>object</td><td><p>Item</p></td></tr>
</tbody></table></div>

### nextItemInFocusChain {#nextItemInFocusChain}

```js
Stats.nextItemInFocusChain(forward?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>forward</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>Forward.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object </div>

### update {#update}

```js
Stats.update()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::


### activeFocusChanged {#activeFocusChanged}

```js
Stats.activeFocusChanged.connect(function (activeFocus) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>activeFocus</code> property changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>activeFocus</code></td><td>boolean</td><td><p>Active focus.</p></td></tr>
</tbody></table></div>

### activeFocusOnTabChanged {#activeFocusOnTabChanged}

```js
Stats.activeFocusOnTabChanged.connect(function (activeFocusOnTab) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>activeFocusOnTab</code> property changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>activeFocusOnTab</code></td><td>boolean</td><td><p>Active focus on tab.</p></td></tr>
</tbody></table></div>

### antialiasingChanged {#antialiasingChanged}

```js
Stats.antialiasingChanged.connect(function (antialiasing) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>antialiasing</code> property changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>antialiasing</code></td><td>boolean</td><td><p>Antialiasing.</p></td></tr>
</tbody></table></div>

### audioAudioInboundPPSChanged {#audioAudioInboundPPSChanged}

```js
Stats.audioAudioInboundPPSChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed. Use <a href="#audioInboundPPSChanged">audioInboundPPSChanged</a> instead.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>audioAudioInboundPPS</code> property changes.</p></div>

### baselineOffsetChanged {#baselineOffsetChanged}

```js
Stats.baselineOffsetChanged.connect(function (baselineOffset) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>baselineOffset</code> property changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>baselineOffset</code></td><td>number</td><td><p>Baseline offset.</p></td></tr>
</tbody></table></div>

### bgColorChanged {#bgColorChanged}

```js
Stats.bgColorChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>bgColor</code> property changes.</p></div>

### childrenChanged {#childrenChanged}

```js
Stats.childrenChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>children</code> property changes.</p></div>

### childrenRectChanged {#childrenRectChanged}

```js
Stats.childrenRectChanged.connect(function (childrenRect) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the position and size of the rectangle containing the children changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>childrenRect</code></td><td><a href="globals#Rect">Rect</a></td><td><p>Children rect.</p></td></tr>
</tbody></table></div>

### clipChanged {#clipChanged}

```js
Stats.clipChanged.connect(function (clip) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>clip</code> property changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>clip</code></td><td>boolean</td><td><p>Clip.</p></td></tr>
</tbody></table></div>

### containmentMaskChanged {#containmentMaskChanged}

```js
Stats.containmentMaskChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>containmentMask</code> property changes.</p></div>

### enabledChanged {#enabledChanged}

```js
Stats.enabledChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>enabled</code> property changes.</p></div>

### focusChanged {#focusChanged}

```js
Stats.focusChanged.connect(function (focus) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>focus</code> property changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>focus</code></td><td>boolean</td><td><p>Focus.</p></td></tr>
</tbody></table></div>

### heightChanged {#heightChanged}

```js
Stats.heightChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>height</code> property changes.</p></div>

### implicitHeightChanged {#implicitHeightChanged}

```js
Stats.implicitHeightChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>implicitHeight</code> property changes.</p></div>

### implicitWidthChanged {#implicitWidthChanged}

```js
Stats.implicitWidthChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>implicitWidth</code> property changes.</p></div>

### opacityChanged {#opacityChanged}

```js
Stats.opacityChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>opacity</code> property changes.</p></div>

### parentChanged {#parentChanged}

```js
Stats.parentChanged.connect(function (parent) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the parent item changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>parent</code></td><td>object</td><td><p>Parent.</p></td></tr>
</tbody></table></div>

### rotationChanged {#rotationChanged}

```js
Stats.rotationChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>rotation</code> property changes.</p></div>

### scaleChanged {#scaleChanged}

```js
Stats.scaleChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>scale</code> property changes.</p></div>

### smoothChanged {#smoothChanged}

```js
Stats.smoothChanged.connect(function (smooth) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>smooth</code> property changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>smooth</code></td><td>boolean</td><td><p>Smooth.</p></td></tr>
</tbody></table></div>

### stateChanged {#stateChanged}

```js
Stats.stateChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>state</code> property changes.</p></div>

### transformOriginChanged {#transformOriginChanged}

```js
Stats.transformOriginChanged.connect(function (transformOrigin) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>transformOrigin</code> property changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>transformOrigin</code></td><td>number</td><td><p>Transformm origin.</p></td></tr>
</tbody></table></div>

### visibleChanged {#visibleChanged}

```js
Stats.visibleChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>visibleChanged</code> property changes.</p></div>

### visibleChildrenChanged {#visibleChildrenChanged}

```js
Stats.visibleChildrenChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the list of visible children changes.</p></div>

### widthChanged {#widthChanged}

```js
Stats.widthChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>width</code> property changes.</p></div>

### windowChanged {#windowChanged}

```js
Stats.windowChanged.connect(function (window) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the stats window changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>window</code></td><td>object</td><td><p>Window.</p></td></tr>
</tbody></table></div>

### xChanged {#xChanged}

```js
Stats.xChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>x</code> property changes.</p></div>

### yChanged {#yChanged}

```js
Stats.yChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>y</code> property changes.</p></div>

### zChanged {#zChanged}

```js
Stats.zChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the value of the <code>z</code> property changes.</p></div>
