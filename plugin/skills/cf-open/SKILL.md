---
name: cf-open
description: Open the person's Cognitive Fingerprint dashboard in their browser. Use when they ask to open, show, or see their dashboard, Home screen, Your Expertise map, Library, or Skills.
---

# CF Open

Open the dashboard for the person's CF folder. It starts a small local server if none is running, then opens the browser. The server only listens on this computer. On a new folder it makes the CF folder first, and the dashboard walks the person through setup.

Run exactly this one command:

```
node ${CLAUDE_PLUGIN_ROOT}/dist/cf.mjs open "${user_config.cf_folder}"
```

Then send this message, as written:

> Your dashboard just opened in your browser. Switch to it now. You can close this window.
>
> No new tab in your browser? Say "open it again" here before you close this window.
>
> Next time, say "open my CF dashboard" again. It works every time, even after you restart your computer.

If they say "open it again", run the same command once more and send only the first line. The sign-in link works once, for 60 seconds, so never give them the address instead.

If it fails with a message about Node, tell the person the dashboard needs Node 22 or newer and stop. Do not try other commands.
