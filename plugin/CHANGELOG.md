# Changelog

Every release has a new version in `plugin/.claude-plugin/plugin.json`. Claude Code ignores new commits under an unchanged version, so a change with no bump never reaches anyone. The Build line under each heading is written by `npm run build:plugin`.

## 0.10.2 - 2026-10-08

Build: dist sha256 9d26c9081f79f8ed1f719d1ef2b0f08f0ecbe6576668e5bfd065500f5cc054b5; skills sha256 206d0c6c0519aea2758ca56f3d69836b66eeec74eac555f4eeb23f6d936cfd94

Find Your Roots asks for fewer roots when you have fewer calls, so your roots say different things instead of overlapping. A finding your calls showed the opposite of more often than they showed it is set aside instead of offered to you. A single badly worded note can no longer stop a run from saving, and frameworks are tested more reliably.

## 0.10.1 - 2026-10-08

Build: dist sha256 97d4d8b793ddf649502b5877f3c52a05f9ce02158f4e1ee28e1662412c0ffc01; skills sha256 206d0c6c0519aea2758ca56f3d69836b66eeec74eac555f4eeb23f6d936cfd94

If your dashboard is started twice at the same moment, for example when your Mac starts it at login while you ask Claude to open it, only one dashboard starts and you are taken to it. If a dashboard ever finds that another one has taken its CF folder, it stops within a few seconds and says why, so two never run on one folder.

## 0.10.0 - 2026-10-08

Build: dist sha256 65e02250a7dc98c39001df8e12da11c86b468e8946e8bb20efc8df9957bcd396; skills sha256 206d0c6c0519aea2758ca56f3d69836b66eeec74eac555f4eeb23f6d936cfd94

Find Your Roots now keeps your findings up to date. Once you have findings, it sends only the calls no earlier run used, tests your findings on them, and may reword a finding, fold two that say the same thing into one, split one that covers two things, or add a new one. Every change is tested across all your calls before it is kept, and a finding keeps its id and its earlier version. A change to a finding you kept waits for you under Suggested Changes in the Extraction Room. A finding the new calls mostly contradict is listed under Weakening.

Nothing from Find Your Roots reaches your AI tools until you press Confirm. A finding shows how many calls showed it, and you decide.

If Claude Code is not signed in on this computer, Find Your Roots says so before it starts and tells you to run claude auth login in Terminal.

The privacy page now says exactly what Find Your Roots sends: parts of the calls you chose, including what others said around your moments, during the run only. The CF service stores none of it.

Opening a finding shows the roots it comes from.

## 0.9.1 - 2026-10-08

Build: dist sha256 6bc2b1007c3de437057c9e8aa4deba8037dbfa73e8cda5f548097f6ffb2709d4; skills sha256 206d0c6c0519aea2758ca56f3d69836b66eeec74eac555f4eeb23f6d936cfd94

A finding's file no longer lists the roots it comes from by name, so a root you have not confirmed yet can never show up in your fingerprint through a confirmed pattern. The dashboard still shows how your findings connect.

## 0.9.0 - 2026-10-08

Build: dist sha256 86826fe9ba00311fe2f320384de46013fb69ed3926ef6f3e6ae1d1ad035def49; skills sha256 206d0c6c0519aea2758ca56f3d69836b66eeec74eac555f4eeb23f6d936cfd94

Find Your Roots now finds four kinds of things: roots (the beliefs under how you think), patterns (what you reliably do), frameworks (the steps you follow) and blind spots (what you tend to miss). Each is tested against the moments in your calls, and also against moments picked at random, so anything that would fit almost anyone is set aside. The Library shows each kind in its own section.

Blind spots stay provisional: you can read them, but they cannot be confirmed yet and your AI agents do not see them.

A run never removes anything. A later run adds new findings beside the ones you have, and every change to a finding keeps its earlier version in your folder. To start fresh, press Start Over in the Extraction Room: it sets your Find Your Roots findings aside without deleting them, and Restore brings any of them back.

Update before your next run: the CF service now speaks only to 0.9.0, and an older app is told to update without changing anything.

## 0.8.1 - 2026-10-08

Build: dist sha256 bba2964af68ceb2a66e0313d509831991ca30770d5ddf715bd73f0f9beee023b; skills sha256 206d0c6c0519aea2758ca56f3d69836b66eeec74eac555f4eeb23f6d936cfd94

Setting up now says what to do after your Foundation: open the Extraction Room, paste your CF service key under Find Your Roots, then add and choose your calls. Your CF folder is Documents/CF unless you set another one, and setting up no longer mixes up other settings with the folder.

## 0.8.0 - 2026-10-08

Build: dist sha256 21bae31342378341ed59a68f7db00625fd12cb44cc7e059080530ca6b8996d86; skills sha256 47aa448817c9b460fda14a90efc04449c15f64657747da040366e0f382804d33

Connecting is now one step. The first time you open Find Your Roots, paste the CF service key you were given and press Connect. The dashboard checks the key with the CF service right away and keeps it on this computer. There is no address to enter and nothing to set in Claude Code.

If the service turns your key away or is busy, the dashboard now says so in plain words instead of saying it could not reach the service.

## 0.7.0 - 2026-10-07

Build: dist sha256 af14a742efb532da4164966de462eba5aa33d79feb70f826dc2da712b7125797; skills sha256 3930c0a109b4974ff7acb1a4983108157cbf6ec7a460e06e8dfafb95c2237d9b

Your roots are now found by the CF service instead of on this computer.

In the Extraction Room, Find Your Roots lists your calls. Choose the ones to learn from and press Find Your Roots. Each chosen call is first read on your own Claude plan. Then only the calls you chose are sent to the CF service, which looks across them for the deep roots of how you think and keeps nothing. Each root it finds comes back with the moments in your calls that show it, and lands in your fingerprint like any other finding. You can take a call out at any time, even during a run, and nothing more from it is sent.

To connect, type /plugin in Claude Code, choose Cognitive Fingerprint, then Configure, and enter the CF service address and key you were given.

Calls are no longer extracted one at a time on this computer, so the Implicit Insights and To-Dos rows are gone.

## 0.6.0 - 2026-10-04

Build: dist sha256 8bf09494b204f2057e5c9b0c1db52a5eae6f918c119b26bcc81ef53480961248; skills sha256 b4f884c4058dc7ae9eb43011121285cfc80b1cc07ab89dbdc48a1a14a5dda963

A new look across the dashboard, and more ways to find your way around.

Every finding now opens in a panel with its quote in place in the call: the lines just before, the words that showed it picked out, and the line after. It shows how many calls showed it, 2 of 3 for example, and you can confirm or discard it from there. Review in the Extraction Room shows each finding as a card with Confirm and Discard. After a Discard you can say why, if you want to: not accurate, too few calls, already known, or wrong speaker. Undo still works for ten seconds.

Go to (Cmd+K) now finds findings, calls and skills as well as screens. The Extraction Room lists every call with what it showed. Home shows your last call as a timeline you can step through, one moment at a time.

The sidebar has Go to at the top and a card for your agent: what it is doing right now, or how many confirmed findings it can read. Your Foundation shows Start here until it is done, and walks you through its steps. Assets show a preview of each draft, with a compact list if you prefer. Empty screens explain themselves instead of sitting blank. Four milestones get their own moment, once each: your Foundation in place, your first call extracted, the first finding your agents can read, and your first asset.

## 0.5.0 - 2026-10-04

Build: dist sha256 9d63c2f0c28e76c346839070146c877370aa6e8660a3a2ff3812076491d072ce; skills sha256 b4f884c4058dc7ae9eb43011121285cfc80b1cc07ab89dbdc48a1a14a5dda963

The plugin is now named `cflab` (it was `cf`), so it installs as `cflab@cf-lab`. Skill names and your CF folder do not change. If you installed an earlier version, remove it and install `cflab@cf-lab`.

More ways to add calls. Transcripts from Zoom, Teams, Google Meet, Otter and Fireflies import, as do `.vtt`, `.srt` and Word (`.docx`) files. You can also paste a transcript and pick the app it came from. Each call remembers its app and shows that app's logo.

Claude now uses your CF folder when it helps you. Six read-only tools let it look up your findings, frameworks and Foundation, and a new `cf-expertise` skill tells it when to. The pill at the top of Home says Claude connected, with the Claude icon lit, as soon as a Claude Code session starts with your CF folder.

Your findings now speak to you directly. The first time a finding is confirmed from a call, Home shows what you said in Your Foundation next to what the call showed. After each extraction, the Extraction Room shows what changed, what was set aside and what still needs you.

The sidebar can collapse to a row of icons (Cmd+\ flips it). Help explains every message the dashboard can show; open it with Go to (Cmd+K). Feedback has Copy Report, so you can paste a report into the Feedback post on Skool. Say "keep my dashboard ready" in Claude Code and the dashboard starts whenever your Mac starts.

Fixes: speaker names with an asterisk now read back correctly, a Starting Point answer saved a moment ago is no longer picked up half written, and long runs of spaces in a Word file no longer slow the import.

## 0.4.0 - 2026-10-02

Build: dist sha256 b17ce4a95dd2663834e8cbde1be43bf926df71025c42da3b707867dbf35dd6ec; skills sha256 b051b61c4ab5d4806934c77f21a65d1c94f418ab24c42c8128b50ce0222770bb






Setup moves into the dashboard. After the install, a new member says "open my CF dashboard" once: `cf open` makes the CF folder on a new or empty folder, and Your Foundation takes it from there. It asks their name, then the ten Your Foundation questions on a focused card with a progress rail, one at a time. After an answer Claude may ask one follow-up, every third answer it checks it heard right, and at the end it writes the draft through the same checks as before, with the person's exact words kept. Each Claude call runs with every tool off, on the person's own plan, and a slow or failed one is skipped so the interview always goes on. Answers save as they go. The `cf-onboard` skill now just opens the dashboard; the chat route (`cf-starting-point` and its drop file) still works.

The MCP server now writes a small agent access record under `workshop/agent-access/` when an agent reads (at most once a minute per client). The dashboard uses it to show which agent is connected.

The Expertise Hub. A sidebar with words replaces the icon rail and runs in the order of the journey: Home, Your Foundation, Extraction Room, Your Expertise, Library, Assets, Skills and Roadmap. The Extraction Room shows a count of what is waiting, and Your Foundation shows when it is done. Home is named for you ("Dana's Expertise Hub") and shows where you stand: your expertise as a starfield that flies through your findings, what your last call showed, and how much of it your agents can read. The header shows which agent is connected, from real reads only. Next Up is gone; adding calls, extracting them and reviewing findings with a thumbs up or down all happen in the Extraction Room, where a thumbs up tells you your agents can now read that finding. Starting Point is now Your Foundation, and Extraction Hub is now the Extraction Room. Your Expertise opens full screen as a fly-through with a list view, and the 3D map is retired. Ready to make, your frameworks, mental models and assets, agent notices and Add One Yourself moved to Library; Decision DNA moved to Skills. Three looks: dark (the default), light and slate; a saved choice is kept. Sign in once and it lasts a year; Sign Out (this browser or everywhere) is in the account block, where you can also add a profile picture. Shooting stars cross Your Expertise. Skills now lists only what you add (it no longer reads your whole Claude skills folder), with All, My Skills, Skool Skills and Prompts; News and Updates has its own tab; Decision DNA sits on Home. Calls from Zoom and Otter show their logos. A rare merge failure (about 1 in 64) is fixed. Every failure says what happened, what is safe, and what to do next. Feedback now saves real reports in your CF folder; sending them to Max comes later. The dashboard now keeps one live-update connection for the whole page; before, a busy screen could use up the browser's connections and leave parts of it loading forever.

## 0.3.0 - 2026-10-02

Build: dist sha256 97bbf5c89866d692132038f6bdff8bf6e481f49e40b5cfe98cc52ba3b697e7d4; skills sha256 8dfc1e5bec6a0a87f09dd36ec9db9421ded90d9a83e8de172525edb2cef5d8ac


Fix round from Max's first onboarding run. Home now leads with Your Turn: the one place the dashboard asks for anything, one task at a time, with a count that goes down, Skip for Now, keyboard keys (K keep, D discard, S skip), Undo, Accept All for findings (it keeps, never confirms), a clear "You're all caught up", and a moment when a finding is confirmed. It gathers work from every call, not only the latest. Calls are added in the dashboard: drop files anywhere on Home or pick them, each is read on its own, a Granola note owned by someone else asks before it is added, a call with every voice on the person's mic is refused with the reason (it could never be read), a call too big to read back is refused before it is saved, and a watched folder adds new transcripts by itself (links are never followed, and a moved or swapped folder stops being read). Accept All is one all-or-nothing change, and its Undo takes back only what it kept. The "same habit?" question says where the habit was seen and takes one answer per quote. The Starting Point has Save where the instruction is and a clear saved state. The status panel counts what agents can actually read. Onboarding is plainer: question 9 says why it asks, the interview hands calls to the dashboard, and messages avoid system words. Agents can read the saved Starting Point (`cf_get_profile`). Jobs never use an `ANTHROPIC_API_KEY` from the shell, so they run on the Claude plan. A call read from the terminal (`cf process`, then `cf merge`) now ends its job as done, and the server ends older ones whose results are saved, so the dashboard no longer says a call is being read forever.

## 0.2.2 - 2026-10-01

Build: dist sha256 ac9d792663cba5a47d6df99c8b3352bde0d91d5f94ef78ef4a75ca46365f074d; skills sha256 3efdb9c7134e818591b93bac15b5663a52a6fb05060a629040e41bb577fd669a

Drop-file pickup runs under the folder lock, waits for a file that is still changing, never deletes a claimed file on a conflict (it sets it aside in workshop/quarantine), and replaces a waiting draft only with a strictly newer file. The instruction filter now refuses directives aimed at an AI and lets ordinary goals that mention shells, files, or terminals through.

## 0.2.1 - 2026-10-01

Build: dist sha256 dc612dc6bbe3ee898fe377f69cce1dca43249b267de73d69733985cd21e8ff64; skills sha256 3efdb9c7134e818591b93bac15b5663a52a6fb05060a629040e41bb577fd669a

Fix round for the Starting Point. The drop file is claimed atomically before it is read, so a replacement is never deleted. Save needs the hash of the file the screen read. The instruction-text check covers more command-shaped text. Validation messages are plain English and name the field or row. The Debrief panel leads with a waiting draft even when a file was saved. Save errors show beside the Save button, and lists in sections render as lists. `INDEX.md` links `life.md` and `business.md` only when they exist.

## 0.2.0 - 2026-10-01

Build: dist sha256 30be243afd4062719574dc85e1e0b240222cac150dfb6308968ad7ad25afb775; skills sha256 3efdb9c7134e818591b93bac15b5663a52a6fb05060a629040e41bb577fd669a

Onboarding from scratch. New `cf-onboard` skill (folder, Starting Point interview, three to five calls, dashboard). The Starting Point interview now saves its draft with `cf starting-point save`, and the dashboard has a Starting Point screen to read, edit, and save it. The Debrief shows a Working On panel, and Make drafts aim at the person's 90-day result and Working On list when one fits.

## 0.1.0 - 2026-09-30

First release. The dashboard, the `cf` command, the read-only MCP server, the extraction skill, and the community catalog, bundled with no install step.
