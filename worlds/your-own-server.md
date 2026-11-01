---
title: Run your own world server
description: Run a Darkride world on your own computer or a rented server, keep it updated, and back it up.
draft: true
---

<!--
FOR reviewers (docs, 2026-11-01; remove this block before publishing):
- Reworked for today's instances and 1.1.2 (Caity 12:4x via pm), from the website at 3ab3b21 and the server at
  1.1.2 (02429ffa29); facts: team/docs/checks/instancing-facts-2026-11-01.md. Kept from 10-31 (security APPROVED then;
  walked through on docs' sandbox): password first, the firewall before the start, the SSH tunnel, --max 7 (servers
  11-01: the password-first page and the spare-port fix aren't in the next server release, so both steps stay).
- New since security's read: what doesn't apply to a self-hosted world (instances, versions, the website's Instances
  settings and Bans); Explore lists it only when open to anyone or anyone signed in and on the visitor's version;
  friends-only = share the World link (metaverse 13:1x); the vehicle physics line (physics to check: "turn it on if
  your world has vehicles", servers 13:1x); file names 1.1.2; the token dialog's older networking notes.
- Waiting for security's public wording before adding 1.1.2's visitor rules to the update section.
-->

# Run your own world server

Most worlds don't need a server of their own: [Put up a world](/worlds/put-up-a-world) runs yours on Darkride's
servers, with nothing to install. Run your own when you want your world always open, on a machine you control, or
with your own changes to the server.

Your server runs the world and keeps it: what [Put up a world](/worlds/put-up-a-world) says about instances,
versions and **Save the World** doesn't apply. darkride.ai lists your world in Explore when it lets in anyone, or
anyone signed in, so people can find it and come in.

## What you need

- A computer that stays on: **Linux** (x64, Ubuntu 24.04 or newer) or **Windows** (64-bit). A rented server works
  too.
- A Darkride account, signed in at [darkride.ai](https://darkride.ai).
- Access to your router or your server's firewall, so you can open the server's ports to visitors.

## 1. Make the world on darkride.ai

1. On [darkride.ai](https://darkride.ai), open the **Apps** menu and choose **My Worlds**.
2. Click **Create new world**, give it a **Name**, choose **Empty** under **Start with**, and click **Create world**.
   (Your own server holds what's in the world, so the starting point doesn't matter.)
3. On the world's card, click **Edit details**, open **Instances**, set **Who can start and join instances** to
   **Nobody (off)**, and click **Save settings**. This tells darkride.ai that your server runs the world, not ours.
4. On the world's card, click **Generate new access token**. You'll see a **World ID** and an **Access token**. Keep
   this page open; you'll paste the token in step 3. (The dialog also has older notes about networking settings;
   you can skip them.)

Keep the token private: anyone who has it can run a server as your world. If it gets out, generate a new one; the
old one stops working.

## 2. Install and start the server

**On a rented server, turn its firewall on first.** Rented servers often come with no firewall at all. Allow only SSH
(port 22) and the UDP ports in [step 4](#_4-let-visitors-in), before you start the server. On Ubuntu, for example:

```sh
sudo ufw allow 22/tcp
sudo ufw allow 40102/udp
sudo ufw allow 40110:40116/udp
sudo ufw enable
```

Download the server for your computer from the
[latest release](https://github.com/caitlynmeeks/darkride-interface/releases/latest), and check it against the
**SHA-256** listed there: `sha256sum <file>` on Linux, `certutil -hashfile <file> SHA256` on Windows. The two should
match.

### Linux

```sh
tar xzf darkride-server-linux-x64-1.1.2-beta.tar.gz
nohup ./server.AppDir/domain-server > domain-server.log 2>&1 &
nohup ./server.AppDir/assignment-client -n 7 --max 7 --min-listen-port 40110 -a 127.0.0.1 --server-port 40102 > assignment-client.log 2>&1 &
```

The first command unpacks the server into `server.AppDir`. The second starts the **domain server**, which lets
visitors in and holds the world's settings. The third starts the **assignment clients**, the seven servers that run
the world itself (sound, avatars, messages, objects, scripts, physics and files). `--max 7` keeps them to seven, on ports
40110 to 40116. `nohup` keeps them running after
you log out, and their messages go to the two `.log` files.

### Windows

1. Unzip `Darkride-1.1.2-beta-windows.zip`. The server is in its `server` folder.
2. In that folder, start `domain-server.exe`.
3. Then start the assignment clients from a Command Prompt in the same folder:

   ```bat
   assignment-client.exe -n 7 --max 7 --min-listen-port 40110 -a 127.0.0.1 --server-port 40102
   ```

If Windows SmartScreen stops either program, click **More info**, then **Run anyway**. When Windows Defender
Firewall asks whether to allow each program, click **Allow** for **Private networks** (your home network).
Otherwise visitors can't reach the server, even with your router's ports open.

On a rented Windows server, don't click **Allow**. Open only the UDP ports from step 4 in Windows Defender Firewall
(an inbound rule for UDP 40102 and 40110 to 40116), so the settings page stays reachable only from the server itself.

## 3. Connect it to your world

1. **Open the server's settings page.** On the computer running the server, open `http://localhost:40100` in a
   browser. On a rented server, open it from your own computer over an SSH tunnel, then open
   `http://localhost:40100` on your computer:

   ```sh
   ssh -L 40100:localhost:40100 your-server
   ```

2. **Set a password first.** Open **Settings**, then **Access and permissions**. Under **Admin sign-in**, click
   **Set up a sign-in**, choose a username and a password, and click **Save sign-in**. Do this before anything else:
   the page holds your world's access token and every setting. From now on your browser asks you to sign in.
3. Under **Connection**, click **Connect to Darkride**. A new tab opens your worlds on darkride.ai.
4. Back on the settings page, paste your world's **access token** and confirm.
5. Click **Choose from my worlds**, pick your world, click **Use this world**, then **Save**.

The settings page says **Connected: your world can be listed in Places and visitors can find it**.

**Vehicles?** The physics assignment client runs only if you turn it on: if your world has vehicles, open
**Vehicle physics** on the settings page, tick **Run vehicle physics on the server**, and save.

## 4. Let visitors in

**Open the ports.** On your router, or your rented server's firewall, open these **UDP** ports to the server's
computer:

| Port | What uses it |
| --- | --- |
| UDP 40102 | the domain server: where visitors arrive |
| UDP 40110 to 40116 | the seven assignment clients |

Don't open TCP ports **40100** or **40101** (the settings page). You set its password in step 3, and you open it
from the server itself or [over an SSH tunnel](#_3-connect-it-to-your-world).

**Choose who can come in.** On the settings page, open **Access and permissions**. Under **Everyone, by kind of
visitor**, tick **Come in** for the visitors you want. We suggest **anyone signed in to Darkride**, as Darkride's own
worlds do. You can also let in anyone, or only your friends. A world open only to your friends isn't listed in
Explore: send them its link (on the world's card, **World link**).

Under **Connection**, leave **How visitors reach this server** on **My address only**. That's the default. Darkride
has no ICE server any more, so visitors connect straight to your address.

**Use this page, not darkride.ai, for who comes in.** The **Instances** settings and **Bans** on darkride.ai are for
worlds on Darkride's servers; they don't reach yours. Who can come in, and who's kept out, is set here, under
**Access and permissions**.

## 5. Check it works

Within a minute, your world's card on My Worlds stops saying **Offline** and shows how many people are in it ("0
people" to start). In Darkride, open **Explore**, find your world and click **Hop**, or share its link: on the card,
**World link**.

## Where to put your world's scripts

In 1.1.2: a world's scripts now load only from web addresses (http or https), the world's own assets (`atp:`) or
Darkride's file hosting (`tea:`, **My Files** on darkride.ai), or are written into the object itself; if you serve scripts from your own computer
or home network while building, move them to the world's assets.

Addresses on your own computer or home network include `file:`, `http://localhost`, `http://192.168.1.20`, names
ending `.local`, and names with no dot, such as `http://nas/`. This applies to everyone, the world's owner too, and no
setting turns it off. To put a script in the world's assets, use **Edit** > **Asset Browser** in Darkride.

## Update to a new version

Update your server with each Darkride version. If you run your own world server, update it to 1.1.2 for its safety
fixes. 1.1.2 apps work with 1.1.1 servers and the other way round. When a version can't join older servers, its
release notes say so.

Before you update to 1.1.2, move any scripts on your own computer or home network
([Where to put your world's scripts](#where-to-put-your-world-s-scripts)), and give each object its script's new
address. A 1.1.2 server loads your world without them, and the first save after any change forgets their old
addresses. Your backup from step 2 still has them if you need them.
Your world keeps its id, its token, its Explore listing and its link, so don't make a new world.

1. **Stop the server**: the assignment clients first, then the domain server.
2. **Back it up**: copy the server's whole data folder (see [Where your world is kept](#where-your-world-is-kept)).
   Each new version may update the world file to a newer format, so this copy is your way back.
3. **Swap in the new version.**
   - **Linux:** move your old `server.AppDir` aside, then unpack the new version's tarball
     (`darkride-server-linux-x64-<version>.tar.gz`) in its place.
   - **Windows:** unzip the new version's zip and use its `server` folder.
4. **Start it again** with the same commands, as the **same user** as before, so it finds the same data folder.
5. **Check it works**, as in step 5.

**Coming from 1.0?** Open the settings page, and under **Connection** set **How visitors reach this server** to
**My address only**. Start the assignment clients with the command above, which gives them fixed ports, and check
that all the ports in [Let visitors in](#_4-let-visitors-in) are open.

## Back up your world

On the settings page, open **World content**:

- **Back up now** saves the world as it is: its objects, its files and its content settings. Use it before a big
  change.
- Each backup's menu can **Download** it, or **Go back to it**.
- Your server also backs the world up by itself on a schedule, keeping the latest few. These are listed under **Made
  automatically**; **Change how often backups are made** sets the schedule.

To move your world to another computer, download a backup, then use **Replace the content** on the new server.

## Where your world is kept

The server's data folder holds the world, its files and its settings:

| Computer | Data folder |
| --- | --- |
| Linux | `~/.local/share/Tivoli Cloud VR - dev/` |
| Windows | `%APPDATA%\Tivoli Cloud VR\` |

(The folder still has Darkride's old name, Tivoli Cloud VR. It keeps that name so that updating doesn't lose your
world.)

Inside it:

- `assignment-client/entities/models.json.gz`: the world's objects
- `assignment-client/assets/`: its files (models, pictures, sounds)
- `domain-server/config.json`: its settings, including the World ID and the access token. Keep this file private.

## If something goes wrong

- **The card still says Offline.** Check that the domain server is running and that the settings page says
  **Connected**. If you generated a new token since, paste the new one.
- **The card never says Offline, and people can't get in when your server is down.** Step 1.3 was missed: set
  **Instances** to **Nobody (off)**.
- **People can't connect, or arrive to an empty world.** One or more UDP ports aren't open. Check all eight: 40102
  and 40110 to 40116.
- **A script doesn't load.** Check its address: see
  [Where to put your world's scripts](#where-to-put-your-world-s-scripts). The server leaves out a script it won't
  load and writes one line about it ("loaded without its script") in `assignment-client.log` (on Windows, in the
  assignment clients' Command Prompt window).
- **Your world is missing from Explore.** Explore lists it only when your server lets in anyone or anyone signed in
  (step 4), and only for apps on the same version as your server. Check who can come in, and update the server.
- **Something else?** Ask on our Discord, or open an issue at
  [github.com/caitlynmeeks/darkride-interface](https://github.com/caitlynmeeks/darkride-interface/issues).
