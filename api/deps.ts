export { Application, send, Router, Context, isHttpError, Status } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
export type { RouterContext } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
export { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
export { v4 as uuid } from "https://deno.land/std@0.138.0/uuid/mod.ts";
import * as log from "https://deno.land/std@0.138.0/log/mod.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("INFO"),
  },
  loggers: {
    // configure default logger available via short-hand methods above.あ
    default: {
      level: "INFO",
      handlers: ["console"],
    },
  },
});

export { log }