/* eslint-disable no-console */
// This file is to automate deployment and trigger GitHub to make updates based on push requests.
import { execa } from "execa";
// import execa from "execa";

import { existsSync } from "fs";
// const fs = import("fs");
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "devprofile-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // await execa("yarn", ["build"]);
    // Specific build folder. Here docs instead of the usual dist
    const folderName = existsSync("docs") ? "docs" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "devprofile-pages"]);
    console.log("Pushing to devprofile-pages...");
    await execa("git", ["push", "origin", "main", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "devprofile-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();