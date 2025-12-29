const chokidar = require("chokidar");
const { spawn } = require("node:child_process");

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: "inherit", shell: process.platform === "win32" });
    p.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
  });
}

let timer = null;
let running = false;
let queued = false;

async function buildOnce() {
  if (running) {
    queued = true;
    return;
  }
  running = true;
  try {
    await run("node", ["scripts/build-css.js"]);
  } finally {
    running = false;
    if (queued) {
      queued = false;
      await buildOnce();
    }
  }
}

async function main() {
  await buildOnce();

  chokidar
    .watch(["scss/**/*.scss"], { ignoreInitial: true })
    .on("all", () => {
      clearTimeout(timer);
      timer = setTimeout(() => void buildOnce(), 75);
    });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

