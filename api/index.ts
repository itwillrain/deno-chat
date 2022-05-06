import { Application, send } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import log from './logger.ts'

import api from './api.ts';

const app =  new Application();
const PORT = 8000;

app.use(api.routes());
app.use(api.allowedMethods());


// Logging
app.use(async(ctx, next) => {
  await next();
  log.info(`${ctx.request.method} ${ctx.request.url}`)
})

// Static files
app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname
  const fileWhitelist = [
    '/index.html'
  ]

  if(!fileWhitelist.includes(filePath)) {
    return;
  }

  await send(ctx, filePath, {
    root: `${Deno.cwd()}/public`,
  })
})

if(import.meta.main) {
  log.info(`Starting server on port ${PORT}....`)
  await app.listen({
    port: PORT,
  })
}