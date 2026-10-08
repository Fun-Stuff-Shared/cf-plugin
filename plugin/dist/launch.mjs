// The CF Dashboard launcher. launchd runs this at login when the member turned auto-start on
// (src/cli/auto-start.ts copies it to ~/Library/Application Support/CF Dashboard/launch.mjs).
// Plain Node, no dependencies, so it keeps working after the plugin updates: at each start it reads
// launch.json next to it, picks the newest installed plugin version, and runs `cf serve` on the
// member's CF folder. launchd restarts it only after a crash (KeepAlive SuccessfulExit false), so
// it exits 0 whenever there is nothing it can do: no config, no installed version, the CF folder
// gone, or a server already running for that folder (the server lock refuses a second one).
import { spawn } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const VERSION_FOLDER = /^(\d+)\.(\d+)\.(\d+)$/;

function log(line) {
  process.stdout.write(`[cf-launcher ${new Date().toISOString()}] ${line}\n`);
}

/** Reads launch.json. Returns null, with the reason, when it is missing or damaged. */
export function readLaunchConfig(path) {
  if (!existsSync(path)) return { config: null, reason: `no config at ${path}` };
  try {
    const config = JSON.parse(readFileSync(path, "utf8"));
    if (!config || typeof config.cf_folder !== "string" || config.cf_folder === "") return { config: null, reason: "launch.json has no cf_folder" };
    return { config, reason: null };
  } catch (err) {
    return { config: null, reason: `launch.json could not be read: ${err && err.message ? err.message : String(err)}` };
  }
}

/**
 * The newest installed `dist/cf.mjs` under the plugin cache (`<cache>/<version>/dist/cf.mjs`).
 * Versions compare as numbers, so 0.10.0 beats 0.9.2. A version folder without dist/cf.mjs is
 * skipped (Claude Code may be half way through an update). Null when none is usable.
 */
export function pickNewestCli(cacheDir) {
  if (!cacheDir || !existsSync(cacheDir)) return null;
  let best = null;
  for (const name of readdirSync(cacheDir)) {
    const m = VERSION_FOLDER.exec(name);
    if (!m) continue;
    const cli = join(cacheDir, name, "dist", "cf.mjs");
    if (!existsSync(cli)) continue;
    const key = [Number(m[1]), Number(m[2]), Number(m[3])];
    if (!best || compare(key, best.key) > 0) best = { key, version: name, cli };
  }
  return best ? { version: best.version, cli: best.cli } : null;
}

function compare(a, b) {
  for (let i = 0; i < 3; i++) if (a[i] !== b[i]) return a[i] - b[i];
  return 0;
}

/** Runs the dashboard server. Resolves with the exit code launchd should see. */
export function main(configPath) {
  const { config, reason } = readLaunchConfig(configPath);
  if (!config) {
    log(`Nothing to start: ${reason}. Turn auto-start on again from the dashboard or Claude Code.`);
    return Promise.resolve(0);
  }
  if (!existsSync(join(config.cf_folder, "workshop"))) {
    log(`Nothing to start: the CF folder ${config.cf_folder} is not there (no workshop/ inside). Turn auto-start on again once it is back.`);
    return Promise.resolve(0);
  }
  const picked = pickNewestCli(config.plugin_cache);
  const cli = picked ? picked.cli : typeof config.cli === "string" && existsSync(config.cli) ? config.cli : null;
  if (!cli) {
    log(`Nothing to start: no installed CF plugin under ${config.plugin_cache || "(no plugin cache set)"}. Open the dashboard through Claude Code once to fix it.`);
    return Promise.resolve(0);
  }
  const node = typeof config.node === "string" && existsSync(config.node) ? config.node : process.execPath;
  log(`Starting the dashboard: ${node} ${cli} serve ${config.cf_folder}${picked ? ` (plugin ${picked.version})` : ""}`);
  return new Promise((resolve) => {
    const child = spawn(node, [cli, "serve", config.cf_folder], { stdio: "inherit" });
    const forward = (sig) => () => {
      if (child.exitCode === null && child.signalCode === null) child.kill(sig);
    };
    for (const sig of ["SIGTERM", "SIGINT", "SIGHUP"]) process.on(sig, forward(sig));
    child.on("error", (err) => {
      log(`The dashboard could not start: ${err.message}`);
      resolve(1);
    });
    child.on("exit", (code, signal) => {
      if (signal) {
        log(`The dashboard stopped (${signal}).`);
        resolve(0);
      } else if (code === 2) {
        // The CLI answers 2 when it refuses to start: a server already holds this folder, or the
        // folder is not a CF folder. Neither is a crash, so launchd must not restart in a loop.
        log("The dashboard did not start because one is already running for this folder, or the folder was refused. Nothing to do.");
        resolve(0);
      } else {
        log(`The dashboard exited with code ${code}.`);
        resolve(code === null ? 1 : code);
      }
    });
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const here = dirname(fileURLToPath(import.meta.url));
  main(process.argv[2] || join(here, "launch.json")).then((code) => {
    process.exitCode = code;
  });
}
