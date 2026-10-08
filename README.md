# Install Guide

This guide is for a Cognitive Fingerprint Lab member. You do not need to code. Plan on 15 minutes.

This is the play version: an early build for Lab members to try and report on. Expect rough edges, and use Feedback in the dashboard sidebar to tell Max about them.

## What You Need First

1. Node 22 or newer. Check with `node --version` in Terminal. If it says v22 or higher, you are set. If not, install the current LTS from nodejs.org.
2. Claude Code, signed in. Check with `claude --version`, then open `claude` once and sign in if it asks.
3. Your CF folder is `Documents/CF`, made for you on first use. With iCloud Drive turned on for Documents, it also gets a synced copy. The folder stays on your computer; only the calls you choose are sent to the CF service, one run at a time.

## Install (Two Commands and One Setting)

Run these in Terminal, then turn on auto-update in step 3. Members who skip step 3 stay on their first version and miss every fix.

```
claude plugin marketplace add Fun-Stuff-Shared/cf-plugin#release
claude plugin install cflab@cognitive-fingerprint
```

`#release` means you get the versions Max has tested, and only those. With auto-update on (step 3), each new one reaches you at the next Claude Code start. Your CF folder is Documents/CF in your home folder. To keep it somewhere else, add ` --config cf_folder=<full path>` to the second command.

### Step 3: Turn On Auto-Update (Do Not Skip)

Plugins from outside Anthropic's marketplace do not update by themselves. Do this one time:

1. Open Claude Code and type `/plugin`.
2. Choose Marketplaces, then `cognitive-fingerprint`.
3. Choose Enable auto-update.

After that, each release reaches you at the next Claude Code start.

To start, say "open my CF dashboard" in Claude Code. On a new folder it makes your CF folder and opens the dashboard, which walks you through the rest: your name, ten short questions, and your calls.

## Connect to the CF Service

You were given a CF service key that starts with `cfk_`. In the dashboard, open the Extraction Room. Under Find Your Roots, paste the key and press Connect. The dashboard checks it with the CF service and keeps it on this computer, readable only by you. Do this once.

## Which Version You Are On

The dashboard footer shows your installed version and a build code (SHA-256). If Max asks "which version are you on?", read him that.

## Open Your Dashboard

There is one way in. In Claude Code, say:

> open my CF dashboard

Your browser opens on your dashboard, signed in. That is all you ever need to do.

- **Every time.** Say it whenever you want the dashboard, including after you restart your computer.
- **If a page says "Open Your CF Dashboard",** your sign-in has run out. Say the same sentence to Claude Code again.
- **If your browser says it cannot connect,** the dashboard is not running. Say the same sentence to Claude Code. It starts the dashboard and opens it.
- **Your calls stay on your computer.** The dashboard only answers on your own machine. When you press Find Your Roots, only the calls you chose are sent to the CF service for that one run, and the service keeps nothing.

## Keep Your Dashboard Ready

On a Mac you can have the dashboard start by itself whenever your Mac starts. Then a bookmark, or a Dock shortcut, always opens it, with no trip through Claude Code. It is off until you turn it on.

**On a Mac**

1. In Claude Code, say "open my CF dashboard". Your browser opens on your dashboard.
2. In Claude Code, say "keep my dashboard ready". It tells you what it is about to set up and asks for your yes. Your dashboard now starts whenever your Mac starts, quietly, without opening a browser.
3. Optional: in Safari, choose File, then Add to Dock. Now the dashboard is one click away in your Dock.
4. If a page ever says "Open Your CF Dashboard", say "open my CF dashboard" in Claude Code again. That is your sign-in running out, not the dashboard.

To stop it, say "stop keeping my dashboard ready" in Claude Code. Everything it added is removed.

What it adds, and nothing else: one start-up entry in `~/Library/LaunchAgents`, one small launcher in `~/Library/Application Support/CF Dashboard`, and one log in `~/Library/Logs/CF Dashboard`. Turning it off removes all three. If you ever want to check, ask Claude Code "is my dashboard set to start with my Mac?"

**On Windows or Linux (for now)**

1. In Claude Code, say "open my CF dashboard" each time you want it, including after a restart. It starts the dashboard and opens it.
2. While it is running, a bookmark of `http://127.0.0.1:47831/` works.
3. If your browser says it cannot connect, the dashboard is off. Say "open my CF dashboard" again.

Starting with Windows is being looked at.

## Which AI Tools Can Use It

| Tool | What it can do | How it connects |
|---|---|---|
| Claude Code | Reads your folder and your Confirmed items through MCP. Runs the skills. | The plugin registers the MCP server for you. Nothing to do. |
| Codex | Reads your CF folder. Reads Confirmed items through MCP. | Add the MCP server to `~/.codex/config.toml` (below). There is no Codex plugin yet. |
| Cowork on desktop | Reads your fingerprint folder only. No MCP, no dashboard. | Give Cowork your CF folder as its working folder. |
| Local bots | Reads Confirmed items through MCP. | Point the bot at the same server (below). |
| Cloud clients | Not supported in version 1. | Your folder stays on your computer. |

The MCP server can read Confirmed items and file requests. It cannot keep, discard, add, or delete anything. You do that in the dashboard.

Codex and local bots run the same command:

```
node ~/.claude/plugins/cache/cognitive-fingerprint/cflab/0.8.0/dist/mcp.mjs --cf ~/Documents/CF
```

For Codex, in `~/.codex/config.toml`:

```
[mcp_servers.cflab]
command = "node"
args = ["/Users/you/.claude/plugins/cache/cognitive-fingerprint/cflab/0.8.0/dist/mcp.mjs", "--cf", "/Users/you/Documents/CF"]
```

The version folder changes with each release, so update that path after an upgrade.

## Back Up Your Folder

iCloud Drive with "Keep Downloaded" gives you a second copy and a way to reach it from another Mac. Be clear about its limit: sync is not a backup. If you delete a file, or a bad edit syncs, every copy gets the same change. Once a month, copy the whole CF folder to an external drive or another cloud folder, then open the copy and run `cf doctor` on it to confirm it is readable.

The dashboard's doctor warns you when your folder is not in a synced location.

## One Device Per CF Folder

Use one computer for one CF folder at a time. Two computers writing to the same synced folder create conflict copies, and a Confirmed item could be lost in the merge. If you must switch computers, close the dashboard on the first one, wait for sync to finish, then open it on the second. Doctor puts any conflict copy aside before anything reads it.
