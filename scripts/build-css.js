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

async function main() {
  // 1) Compile SCSS -> LTR css
  await run("sass", [
    "scss/styles.scss",
    "assets/css/styles.ltr.css",
    "--style=compressed",
    "--no-source-map",
    "--quiet-deps"
  ]);

  // 2) Convert LTR -> RTL css (Bootstrap official RTL build is done via rtlcss)
  await run("rtlcss", ["assets/css/styles.ltr.css", "assets/css/styles.css"]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

