import { watch } from "fs";
import { exec } from "child_process";

const build = () => {
  exec("ts-node ./src/build.ts", (err, stdout) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Build complete!");
    if (stdout) console.log(stdout);
  });
};

build();
watch(__dirname, { recursive: true }, build);
