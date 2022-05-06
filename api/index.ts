import {oakCors, Application, send, log} from './deps.ts';
import { router } from './router.ts';
import { logger, errorHandler } from './middlewares/mod.ts';

const app =  new Application();
const PORT =  parseInt( Deno.env.get("PORT") ?? "8000");

app.use(logger)
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(errorHandler)

// Static files
app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname
  // const fileWhitelist = [
  //   '/index.html'
  // ]
  //
  // if(!fileWhitelist.includes(filePath)) {
  //   return;
  // }

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