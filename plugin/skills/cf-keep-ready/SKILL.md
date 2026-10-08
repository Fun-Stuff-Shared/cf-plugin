---
name: cf-keep-ready
description: Start the person's Cognitive Fingerprint dashboard whenever their Mac starts, stop doing that, or say whether it is set up. Use when they say "keep my dashboard ready", "start my dashboard with my Mac", "stop keeping my dashboard ready", "turn off auto-start", or ask whether their dashboard starts with their computer.
---

# CF Keep Ready

Keep Your Dashboard Ready means the dashboard starts by itself whenever the person's Mac starts, quietly, so a bookmark or a Dock shortcut always opens it. It is off until they turn it on, and turning it off removes everything it added. Mac only for now.

## Turning It On

This writes three small things outside their CF folder (a start-up entry, a launcher, a log), so it needs their yes first. Send this, as written, and wait:

> I can set your dashboard to start whenever your Mac starts, so a bookmark always opens it. It adds one start-up entry, one small launcher and one log file to your own Library folder, and nothing else. Turning it off later removes all three. Shall I?

On a yes, run exactly this one command:

```
node ${CLAUDE_PLUGIN_ROOT}/dist/cf.mjs autostart on "${user_config.cf_folder}"
```

Then send:

> Done. Your dashboard now starts whenever your Mac starts. Want it in your Dock? In Safari, open your dashboard, then choose File, then Add to Dock.

If the command says "Available on Mac for now", tell them that in those words and that "open my CF dashboard" is the way in on their computer. Do not try other commands.

## Turning It Off

Run exactly this one command, then say that the start-up entry, its launcher and its log were removed:

```
node ${CLAUDE_PLUGIN_ROOT}/dist/cf.mjs autostart off "${user_config.cf_folder}"
```

## Checking

```
node ${CLAUDE_PLUGIN_ROOT}/dist/cf.mjs autostart status "${user_config.cf_folder}"
```

Read them the one line it prints, in those words. If it says "needs fix", offer to turn it on again, which fixes it.

Never run the on or off command without the person asking for it in this conversation. Never mention LaunchAgents, launchd or plists; say "start-up entry".
