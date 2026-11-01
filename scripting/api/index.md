---
title: "Scripting API reference"
description: "Every namespace, class and function a Darkride script can use, as of 1.1.2."
draft: true
---

# Scripting API reference

Every namespace, class, function and signal a Darkride script can use, as of Darkride 1.1.2. It's built from
the reference notes in Darkride's code (commit `02429ffa29`), so it says what that version does.

Scripts are JavaScript. Darkride runs them on its WebAssembly script engine (QuickJS), which understands modern
JavaScript (ES2023).

## The kinds of script

Each page says which kinds of script can use it.

| Kind | Where it runs |
| --- | --- |
| **Interface scripts** | In your copy of the Darkride app, for you alone: the scripts you run from **Edit** > **Running Scripts**. |
| **Client entity scripts** | In each visitor's app, attached to an entity in a world. |
| **Avatar scripts** | In each visitor's app, attached to an avatar. |
| **Server entity scripts** | On the world's server, attached to an entity; everyone sees what they do. |
| **Assignment client scripts** | On the world's server, on their own, such as a bot (an agent). |

Since 1.1.2, a world's own scripts (client entity scripts) can use only the parts of the API a world needs; your own
Interface scripts can use everything. The pages don't show this yet.

## Most used

| Namespace | What it's for |
| --- | --- |
| [Entities](./Entities) | The Entities API provides facilities to create and interact with entities. |
| [MyAvatar](./MyAvatar) | Your avatar is your in-world representation of you. |
| [AvatarList](./AvatarList) | The AvatarList API provides information about avatars within the current domain. |
| [Script](./Script) | The Script API provides facilities for working with scripts. |
| [Vec3](./Vec3) | The Vec3 API provides facilities for generating and manipulating 3-dimensional vectors. |
| [Quat](./Quat) | The Quat API provides facilities for generating and manipulating quaternions. |
| [Messages](./Messages) | The Messages API enables text and data to be sent between scripts over named "channels". |
| [Audio](./Audio) | The Audio API provides facilities to interact with audio inputs and outputs and to play sounds. |
| [SoundCache](./SoundCache) | The SoundCache API manages sound cache resources. |
| [Camera](./Camera) | The Camera API provides access to the "camera" that defines your view in desktop and HMD display modes. |
| [Controller](./Controller) | The Controller API provides facilities to interact with computer and controller hardware. |
| [Window](./Window) | The Window API provides various facilities not covered elsewhere, including: window dimensions, window focus, camera view, announcements, user connections, common dialog boxes, snapshots, file import, |
| [Overlays](./Overlays) | The Overlays API provides facilities to create and interact with overlays. |
| [Uuid](./Uuid) | The Uuid API provides facilities for working with UUIDs. |

## Everything, A to Z

| Namespace or class | What it's for |
| --- | --- |
| [About](./About) | The About API provides information about the version of Interface that is currently running. |
| [Account](./Account) | The Account API provides functions that give information on user connectivity, visibility, and asset download progress. |
| [AccountServices](./AccountServices) | The AccountServices API provides functions that give information on user connectivity, visibility, and asset download progress. |
| [AddressManager](./AddressManager) | The AddressManager API provides facilities related to your current location in the metaverse. |
| [Agent](./Agent) | The Agent API enables an assignment client to emulate an avatar. |
| [AnimationCache](./AnimationCache) | The AnimationCache API manages animation cache resources. |
| [AnimationFrameObject](./AnimationFrameObject) | Joint rotations in one frame of an AnimationObject. |
| [AnimationObject](./AnimationObject) | Information about an animation resource, created by AnimationCache.getAnimation. |
| [Assets](./Assets) | The Assets API provides facilities for interacting with the domain's asset server and the client cache. |
| [Audio](./Audio) | The Audio API provides facilities to interact with audio inputs and outputs and to play sounds. |
| [AudioEffectOptions](./AudioEffectOptions) | Audio effect options used by the Audio API. |
| [AudioInjector](./AudioInjector) | Plays or "injects" the content of an audio file. |
| [AudioStats](./AudioStats) | The AudioStats API provides statistics of the client and mixer audio. |
| [AudioStats.AudioStreamStats](./AudioStats-AudioStreamStats) | Statistics for an audio stream. |
| [Avatar](./Avatar) | The Avatar API is used to manipulate scriptable avatars on the domain. |
| [AvatarBookmarks](./AvatarBookmarks) | The AvatarBookmarks API provides facilities for working with avatar bookmarks ("favorites" in the Avatar app). |
| [AvatarInputs](./AvatarInputs) | The AvatarInputs API provides facilities to manage user inputs. |
| [AvatarList](./AvatarList) | The AvatarList API provides information about avatars within the current domain. |
| [AvatarManager](./AvatarManager) | The AvatarManager API provides information about avatars within the current domain. |
| [Camera](./Camera) | The Camera API provides access to the "camera" that defines your view in desktop and HMD display modes. |
| [Chat](./Chat) | The Chat API lets you use chat in world. |
| [ChatCommand](./ChatCommand) | A chat command. |
| [Clipboard](./Clipboard) | The Clipboard API enables you to export and import entities to and from JSON files. |
| [console](./console) | The console API provides program logging facilities. |
| [Controller](./Controller) | The Controller API provides facilities to interact with computer and controller hardware. |
| [DebugDraw](./DebugDraw) | The DebugDraw API renders debug markers and lines. |
| [Desktop](./Desktop) | The Desktop API provides the dimensions of the computer screen, sets the opacity of the HUD surface, and enables QML and HTML windows to be shown inside or outside of Interface. |
| [DialogsManager](./DialogsManager) | The DialogsMamnager API provides facilities to work with some key dialogs. |
| [DiskCache](./DiskCache) | The DiskCache API lets you manage your cache. |
| [DriveKeys](./DriveKeys) | The DriveKeys API provides constant numeric values that represent different logical keys that drive your avatar and camera. |
| [Entities](./Entities) | The Entities API provides facilities to create and interact with entities. |
| [EntityScriptServerLog](./EntityScriptServerLog) | The EntityScriptServerLog API makes server log file output written by server entity scripts available to client scripts. |
| [EntityViewer](./EntityViewer) | The EntityViewer API provides a headless viewer for assignment client scripts, so that they can "see" entities in order for them to be available in the Entities API. |
| [File](./File) | The File API provides some facilities for working with the file system. |
| [Friends](./Friends) | Your Darkride friends: the requests waiting for you, who sees you're online and where, and direct messages. |
| [GlobalServices](./GlobalServices) | The GlobalServices API provides functions that give information on user connectivity, visibility, and asset download progress. |
| [Graphics](./Graphics) | The Graphics API enables you to access and manipulate avatar, entity, and overlay models in the rendered scene. |
| [GraphicsMesh](./GraphicsMesh) | A handle to in-memory mesh data in a GraphicsModel. |
| [GraphicsMeshPart](./GraphicsMeshPart) | A handle to in-memory mesh part data in a GraphicsModel. |
| [GraphicsModel](./GraphicsModel) | A handle to in-memory model data such as may be used in displaying avatars, 3D entities, or 3D overlays in the rendered scene. |
| [HMD](./HMD) | The HMD API provides access to the HMD used in VR display mode. |
| [InteractiveWindow](./InteractiveWindow) | An InteractiveWindow can display either inside Interface or in its own window separate from the Interface window. |
| [Keyboard](./Keyboard) | The Keyboard API provides facilities to use an in-world, virtual keyboard. |
| [LaserPointers](./LaserPointers) | The LaserPointers API is a subset of the Pointers API. |
| [location](./location) | The location API provides facilities related to your current location in the metaverse. |
| [LocationBookmarks](./LocationBookmarks) | The LocationBookmarks API provides facilities for working with location bookmarks. |
| [LODManager](./LODManager) | The LODManager API manages the Level of Detail displayed in Interface. |
| [MappingObject](./MappingObject) | A Controller mapping object that can contain a set of routes that map: Controller.Standard outputs to Controller.Actions actions or script functions. |
| [Mat4](./Mat4) | The Mat4 API provides facilities for generating and using 4 x 4 matrices. |
| [MaterialCache](./MaterialCache) | The MaterialCache API manages material cache resources. |
| [Menu](./Menu) | The Menu API provides access to the menu that is displayed at the top of the window on a user's desktop and in the tablet when the "MENU" button is pressed. |
| [MeshProxy](./MeshProxy) | A handle for a mesh in an entity, such as returned by Entities.getMeshes. |
| [Messages](./Messages) | The Messages API enables text and data to be sent between scripts over named "channels". |
| [Midi](./Midi) | The Midi API provides the ability to connect Interface with musical instruments and other external or virtual devices via the MIDI protocol. |
| [Model](./Model) | The Model API provides the ability to manipulate meshes. |
| [ModelCache](./ModelCache) | The ModelCache API manages model cache resources. |
| [MyAvatar](./MyAvatar) | Your avatar is your in-world representation of you. |
| [OffscreenFlags](./OffscreenFlags) | The OffscreenFlags API enables gamepad joystick navigation of UI. |
| [Overlays](./Overlays) | The Overlays API provides facilities to create and interact with overlays. |
| [OverlayWebWindow](./OverlayWebWindow) | A OverlayWebWindow displays an HTML window inside Interface. |
| [OverlayWindow](./OverlayWindow) | A OverlayWindow displays a QML window inside Interface. |
| [Panels](./Panels) | The window's panels, by name: Darkride's QML panels and chat. |
| [Paths](./Paths) | The Paths API provides absolute paths to the scripts and resources directories. |
| [Performance](./Performance) | The Performance API provides control and information on graphics performance settings. |
| [Picks](./Picks) | The Picks API lets you create and manage objects for repeatedly calculating intersections. |
| [PickType](./PickType) | The PickType API provides constant numeric values that represent different types of picks. |
| [PlatformInfo](./PlatformInfo) | The PlatformInfo API provides information about the hardware platform being used. |
| [Pointers](./Pointers) | The Pointers API lets you create, manage, and visually represent objects for repeatedly calculating intersections with avatars, entities, and overlays. |
| [Quat](./Quat) | The Quat API provides facilities for generating and manipulating quaternions. |
| [Rates](./Rates) | The Rates API provides some information on current rendering performance. |
| [RayPick](./RayPick) | The RayPick API is a subset of the Picks API, as used for ray picks. |
| [Recording](./Recording) | The Recording API makes and plays back recordings of voice and avatar movements. |
| [Render](./Render) | The Render API enables you to configure the graphics engine. |
| [Resource](./Resource) | The Resource API provides values that define the possible loading states of a resource. |
| [ResourceObject](./ResourceObject) | Information about a cached resource. |
| [ResourceRequestObserver](./ResourceRequestObserver) | The ResourceRequestObserver API provides notifications when an observable resource request is made. |
| [Resources](./Resources) | The Resources API enables the default location for different resource types to be overridden. |
| [Reticle](./Reticle) | The Reticle API provides access to the mouse cursor. |
| [RouteObject](./RouteObject) | A route in a MappingObject used by the Controller API. |
| [Scene](./Scene) | The Scene API provides some control over what is rendered. |
| [Script](./Script) | The Script API provides facilities for working with scripts. |
| [ScriptAvatar](./ScriptAvatar) | Information about an avatar. |
| [ScriptDiscoveryService](./ScriptDiscoveryService) | The ScriptDiscoveryService API provides facilities to work with Interface scripts. |
| [ScriptsModel](./ScriptsModel) | Information on the scripts that are in the default scripts directory of the Interface installation. |
| [ScriptsModelFilter](./ScriptsModelFilter) | Sorted and filtered information on the scripts that are in the default scripts directory of the Interface installation. |
| [Selection](./Selection) | The Selection API provides a means of grouping together and highlighting avatars and entities in named lists. |
| [Settings](./Settings) | The Settings API provides a facility to store and retrieve values that persist between Interface runs. |
| [Snapshot](./Snapshot) | The Snapshot API provides access to the path that snapshots are saved to. |
| [SoundCache](./SoundCache) | The SoundCache API manages sound cache resources. |
| [SoundObject](./SoundObject) | An audio resource, created by SoundCache.getSound, to be played back using Audio.playSound. |
| [Stats](./Stats) | The Stats API provides statistics on Interface and domain operation, per the statistics overlay. |
| [Tablet](./Tablet) | The Tablet API provides the facilities to work with the system or other tablet. |
| [TabletButtonProxy](./TabletButtonProxy) | A tablet button. |
| [tabletInterface](./tabletInterface) | The tabletInterface API provides the facilities to work with the system or other tablet. |
| [TabletProxy](./TabletProxy) | An instance of a tablet. |
| [Test](./Test) | Here's how you could use the Test API: Write a script using the below and launch interface with: interface --testScript path/to/script.js Save the recorded events with Test.stopTracing to a .json or . |
| [TextToSpeech](./TextToSpeech) | The TextToSpeech API lets you use text to speech for your avatar in interface. |
| [TextureCache](./TextureCache) | The TextureCache API manages texture cache resources. |
| [ToolbarProxy](./ToolbarProxy) | An instance of a toolbar. |
| [Toolbars](./Toolbars) | The Toolbars API provides facilities to work with the system or other toolbar. |
| [Users](./Users) | The Users API provides features to regulate your interaction with other users. |
| [Uuid](./Uuid) | The Uuid API provides facilities for working with UUIDs. |
| [Vec3](./Vec3) | The Vec3 API provides facilities for generating and manipulating 3-dimensional vectors. |
| [WebSocket](./WebSocket) | Provides a bi-directional, event-driven communication session between the script and another WebSocket connection. |
| [WebSocketServer](./WebSocketServer) | Manages WebSockets in server entity and assignment client scripts. |
| [Window](./Window) | The Window API provides various facilities not covered elsewhere, including: window dimensions, window focus, camera view, announcements, user connections, common dialog boxes, snapshots, file import, |
| [Workload](./Workload) |  |
| [XMLHttpRequest](./XMLHttpRequest) | Provides a means to interact with web servers. |

[Global types and functions](./globals): `Vec2`, `Color`, the event types, `print`, `request` and the rest.
