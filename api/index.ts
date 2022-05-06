import { Application } from 'https://deno.land/x/oak@v10.5.1/mod.ts';

const app =  new Application();

const port = 8000;

app.use((ctx) => {
  ctx.response.body = `hello? there`;
});

if(import.meta.main) {
  await app.listen({
    port,
  })
}