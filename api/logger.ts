import * as log from "https://deno.land/std@0.138.0/log/mod.ts";

// custom configuration with 2 loggers (the default and `tasks` loggers).
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

export default log;