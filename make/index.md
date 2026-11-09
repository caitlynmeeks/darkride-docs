---
title: Make things with Claude
description: Make builds models and scripts in your world from what you type, with your own Claude account, Claude Code and Blender.
---

# Make things with Claude

**Make** builds things in your world from what you type. Ask for "a wooden market stall with a striped awning" and the
stall appears in front of you. Ask to "make the door open when I knock" and the door gets a script that does it.

Make runs on your own computer, with your own Claude account. It uses **Claude Code**, Anthropic's AI assistant for
building with code, and **Blender**, the free 3D modelling program, to make models. Make doesn't run on Darkride's
servers. It works on the desktop, not in a headset.

## What you need

- Darkride 1.1.4 or later, on a Mac with Apple silicon (macOS 13 or later), or on 64-bit Windows 10 (version 1809
  or later) or Windows 11.
- Claude Code, and Blender for making models. You install each once (below).
- To have Make save models and scripts, sign in to Darkride: Make keeps them in your **My Files**.
- One of these, to pay for Make's work:
  - an **Anthropic API key**, from a Claude Console account: you pay Anthropic for what Make uses; or
  - a **Claude plan** that includes Claude Code (Pro, Max or Ultra, Team or Enterprise): Make's work is part of your
    plan. The free plan doesn't include Claude Code.

## 1. Install Claude Code

1. Open a terminal: **Terminal** on a Mac (in **Applications** > **Utilities**), or **PowerShell** on Windows (from the
   Start menu).
2. Paste the line for your computer and press Return. It's Anthropic's own installer, and it keeps Claude Code up to
   date by itself:

   ::: code-group

   ```sh [Mac]
   curl -fsSL https://claude.ai/install.sh | bash
   ```

   ```powershell [Windows]
   irm https://claude.ai/install.ps1 | iex
   ```

   :::

   Claude Code needs macOS 13 or later, or Windows 10 (version 1809) or later. For other ways to install it, see
   Anthropic's [Claude Code setup page](https://code.claude.com/docs/en/setup).
3. If you'll use your Claude plan, sign in: type `claude` and press Return, and sign in in the browser window that
   opens. When Claude Code says you're signed in, type `/exit` and press Return. (With an API key, you can skip this.)

## 2. Install Blender

1. Download Blender 5.2 or newer for your computer from [blender.org/download](https://www.blender.org/download/).
2. Install it:
   - **Mac:** drag **Blender** into your **Applications** folder.
   - **Windows:** run Blender's installer, or unpack the blender.org zip in your **Downloads** folder or on your
     **Desktop**, and Make finds it. The Microsoft Store version doesn't work with Make.

You don't need to open Blender or learn it: Make runs it in the background. Without Blender, Make still builds with
your world's own things and writes scripts; it tells you when a request needs Blender.

## 3. Connect Make

You do this once on each computer.

1. In Darkride, go into Build mode and click **Make** in the toolbar (or choose **View** > **Panels** > **Make**). Make
   opens as a panel on the right; drag its title to move it to the left.
2. Click **Connect**. Make checks that Claude Code and Blender are installed. Then, under **How Make reaches your
   Claude**, choose one:
   - **With your Claude plan, in Terminal:** copy the line Make shows you (click **Copy**), paste it into your terminal
     (PowerShell on Windows) and press Return. It starts Claude Code for Make, with only Make's tools and none of your
     own Claude Code settings. Use only the line Make shows: a line from anywhere else isn't Make's.
     You type your requests in the terminal, and the Make panel shows the work, with Stop and Undo. Keep that terminal
     window open while you use Make.
   - **With your Claude plan, in Darkride:** you start Claude in Terminal once, then type your requests in the Make
     panel. Click **Copy**, paste the line into your terminal (PowerShell on Windows) and press Return.
     Claude Code then shows a warning about loading a development channel. A channel is how Make's panel talks to
     Claude Code, and Claude Code warns because Darkride's channel isn't on Anthropic's approved list yet. The warning
     should name only server:darkride. If it does, choose **I am using this for local development**. If it names
     anything else, choose **Exit**.
     Do this only for the line you copied from Darkride's Make panel. Darkride never gives this line anywhere else, so
     if a world, a website, a video or a person gives you a line with "dangerously" in it, don't run it.
     Keep the terminal window open while you use Make; it can go behind your other windows. On a Team or Enterprise
     plan, this works only once an Owner of your organization turns on Channels for Claude Code (Organization
     settings > Claude Code > Channels).
   - **With your API key:** paste your key. Everything happens in Darkride: you type your requests in the Make panel.
3. Make asks **Allow Make to build here as you?** Claude can add, change and remove things you could change yourself,
   and write their scripts. It can't open your files, run commands on your computer or browse the web. To make models
   it uses Blender, closed off from the internet and your files, and it asks before a script it writes uses the web.
   Click **Allow**.

The panel shows **Connected**. To end the connection, choose **Disconnect** from the panel's **•••** menu.

### Your API key

- Make a key just for Darkride, in a [Claude Console](https://platform.claude.com) workspace of its own with a
  monthly spend limit. Then the most it can ever cost is that limit, and you can turn it off without touching your
  other keys.
- On a Mac, Make keeps the key in your Keychain, on this Mac only (never in iCloud). On Windows it's kept in Credential
  Manager, on this computer only; other programs you run can read a stored key there, which is one more reason to
  give Make a key of its own with a monthly limit. Make never shows the key again. To remove it, click
  **Forget my key**.
- A token from a Claude plan (`claude setup-token`) doesn't work here: connect with your Claude plan instead.
- If you think your key has leaked, delete it in the Console; Make asks for a new one.

## 4. Ask for something

Type what you want and press Return: in the terminal if you chose **in Terminal**, or in the Make panel's text box if
you chose **in Darkride** or your API key.

- **A model:** "a wooden market stall with a striped awning", "a stone fountain about 3 metres across".
- **A model from an image** (when you type in the Make panel): drag an image (PNG, JPEG or WebP) into the panel,
  or click **+** beside the text box, then say what to make from it. Images you add are sent to Claude to guide the
  build.
- **Something that works:** "make the door open when I knock", "turn the lamps on at night".

Make works better when you:

- say the size, the colours and the style;
- ask for one thing at a time, then for changes ("make the awning blue");
- stand where you want it: the model appears in front of you.

While it works, the panel shows each step ("adding the awning"). For a model, Make writes a Blender script, looks at
the result from four sides and fixes what's wrong, up to three times, before it puts the model in your world. The
finished model shows in the panel as four views: front, side, back and top. For a
script, it tries it out (clicking, walking up to things) before it says it's done. A finished request folds to one
line. If a step doesn't work, its row says so and why ("Couldn't …"), and the request ends with **Couldn't finish**.

When the Make panel is out of sight, a badge in the bottom-right corner of the view shows **Working**,
**Needs you**, **Done** or **Couldn't finish**. Click it to open the panel.

## When Make asks first

Make builds with your own building rights: it can add, change and remove things only where you could yourself. In your
own world, building, looking around and testing never ask. A few things do, and the panel shows exactly what Make wants to do,
under **Claude asks**. For example:

- "Claude wants to give 'Weather sign' a script that reads from api.example.com. Allow?"
- "Claude wants to remove 12 things (Market stall, Awning, …). Allow?"
- "Claude wants to build in 'Harbour Market', which isn't your world. Allow?"

Click **Allow** to let it, or **Don't Allow** to say no; Make carries on without it.

## Stop and Undo

- **Stop**, at the bottom of the panel while a request runs, ends it at once. What it made so far stays, and you can
  undo that too.
- **Undo**, on each thing Make made, takes back everything that request did, in one step. It goes back from your newest
  request, one at a time, because a later request can build on an earlier one. Undo also deletes the files that
  request saved in your My Files, unless something in this world still uses them. Files saved in this world's own
  files stay.

## Where things go

The models and scripts Make makes go in your **My Files**, in **Make**, then a folder named for the world, so they work
in any world you take them to. Anyone with a file's link can read it, so the scripts Make saves there are marked with
the date, not your name.

To keep Make's work in this world's own files instead, click **My Files** beside **Keep Make's work in:**, above the
text box, and choose **This World's Files**. You can choose it in a world whose files you can change, while no request
is working. Make remembers your choice and saves there with your own rights. In worlds whose files you can't change,
Make keeps using My Files.

In a world opened from a file on your computer, Make saves models and client scripts (scripts that run on each
visitor's computer) to your My Files, but won't write a server script: such a world has no server to run it.

The **Made** tab lists what Make has made; **Show me** takes you to it. The scripts Make writes open in the **Code**
panel, beside Make (click **Open in Code**).

In the Code panel and in Make, a world's server scripts open only for its editors. That doesn't make a script secret:
a script is private only if the place it's stored keeps it private. So never put a password or a key in any script.

## What it costs

Make's work is paid for by your own Claude account. Darkride charges nothing for Make.

- **With your API key,** you pay Anthropic for what Make uses. Each request shows its cost while it runs and when it's
  done. What a request costs depends on the Claude model: Make uses Claude Code's default model, and the panel shows
  which one. Each connection has a spending limit of $2. When Make reaches it, it stops and says so; click **Connect**
  to go on with a fresh $2. The cost Claude Code reports is its own estimate and can run slightly past Make's limit, so your key's
  monthly limit in the Console is what keeps the total safe.
- **With your Claude plan,** Make's work is part of your plan. It counts toward your plan's usage limits, and costs
  nothing extra unless you've turned on extra usage. Make's spending limit doesn't apply here: your plan's own limits do.

Nothing runs, and nothing is charged, while you aren't using Make.

## What Make sends to Claude, and what it keeps

- What you type, the images you add, and what's around you in the world go to Claude. Text that comes from the world
  is marked as the world's, so Claude treats it as information, never as your instructions.
- Make's Claude Code can use only Darkride's building tools and Blender: no Terminal commands, no web browsing, and no
  files outside Make's own folder.
- Make runs Blender only closed off from the internet and from your other files. On a computer where it can't do
  that, Make doesn't make models there, and says so.
- The scripts Make writes are saved as files you can read, marked "made with Claude".
- With your API key, Make's Claude Code uses only the key you saved in Make: never your Claude sign-in, and none of
  your own Claude Code settings. It keeps no record of your requests. With your Claude plan, Claude Code keeps its usual
  record of each session on your computer, as it does for all your Claude Code work: in its `.claude` folder, for 30
  days unless you change it. That record also holds what you typed to Claude (in the terminal or the Make panel), what
  Make read from the world and the images you added.
- Make's folder keeps the scripts it wrote and the images you added, as cleaned copies with no location data, until
  you remove them. To see it, choose **Show Make Folder in Finder** (**Show Make Folder in File Explorer** on Windows)
  from the panel's **•••** menu.

## If something goes wrong

- **Connect can't find Claude Code:** in a terminal, type `claude --version`. If that fails, install it again (step 1).
- **Connect's Blender row shows a cross:** if it says Blender isn't installed, isn't available or is older than Make
  needs, install Blender 5.2 or newer from blender.org in the usual place (step 2), then click **Connect** again. If
  Blender is installed and Make still leaves it out, Make couldn't close Blender off from the internet and your files
  on this computer. Make still builds with your world's own things and writes scripts; only new models need Blender.
- **Make refuses your key:** check that it's an API key from the Claude Console (it starts with `sk-ant-api`).
- **The panel says "Not connected":** click **Connect** and follow its steps again. With your Claude plan, check that
  the terminal window is still open.
- **You chose Exit at Claude Code's warning:** nothing connects. Click **Copy** in the Make panel and paste the line
  again.
- **The panel says "Claude didn't get your message":** your Claude account may not allow chat in Darkride. On a Team
  or Enterprise plan, ask an Owner of your organization to turn on Channels for Claude Code (Organization settings >
  Claude Code > Channels). Until then, click **Type in Terminal** under the message, then **Connect**, and start
  Claude Code again with the line Make shows (type `/exit` in the terminal first). Or click **Use API Key**, then
  **Connect**, and paste your key.
- **The panel says "This Claude was started without the chat":** to chat in Darkride, close Claude Code (type
  `/exit`), click **Copy** in the Make panel and paste the line again. To type in the terminal instead, click
  **Type in Terminal** under the message, then **Connect**, and start Claude Code again with the line Make shows.
- **The panel says "Claude was started with a different line":** close that Claude Code (type `/exit`), then click
  **Copy** in the Make panel and paste Make's line.
- **The panel says "Update Claude Code":** in a terminal, type `claude update` and press Return, then start Claude
  again with Make's line.
- **Connect says it can't make the Make folder private** (or can't place Make's helper there): quit Darkride and
  rename its **Make** folder:
  - Mac: `~/Library/Application Support/Tivoli Cloud VR/Interface/Make` (in Finder, hold Option and choose **Go** >
    **Library**);
  - Windows: type `%APPDATA%` in File Explorer's address bar, then open **Tivoli Cloud VR** > **Interface**.

  Then start Darkride again and click **Connect**. Make makes a fresh folder for you alone, and the renamed one keeps
  anything you saved there. If it happens again, tell us on
  [Darkride's Discord](https://darkride.ai/discord), with the reason Make shows.
- Anything else: see [Known issues](/known-issues), or tell us on [Darkride's Discord](https://darkride.ai/discord).
