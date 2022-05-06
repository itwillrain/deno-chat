import { Application, send } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import api from './api.ts';

const app =  new Application();
const port = 8000;

app.use(api.routes());

app.use(async(ctx, next) => {
  await next();
  console.log(`${ctx.request.method} ${ctx.request.url}`)
})

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
  await app.listen({
    port,
  })
}