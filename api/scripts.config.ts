import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";
import { config as env } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const config: DenonConfig = {
  $schema: "https://deno.land/x/denon/schema.json",
  allow: ["env", "read", "net", "write"],
  scripts: {
    start: {
      cmd: "deno run index.ts",
      desc: "run my index.ts file",
      env: env(),
    },
  },
  watcher: {
    // The number of milliseconds after the last change.
    interval: 350,
    // The file extensions that it will scan for.
    exts: ["js", "jsx", "ts", "tsx", "json"],
    // The globs that it will scan for.
    match: ["**/*.*"],
    // The globs that it will not scan for.
    skip: ["*/.git/*", "./db/*"],
    // Use the legacy file monitoring algorithm. (walking)
    legacy: false
  }
};

export default config;