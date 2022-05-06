import { Router } from 'https://deno.land/x/oak@v10.5.1/mod.ts';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = `Hello, Takeshi!`
})

export default router;

