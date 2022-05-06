import { Router } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import type {IMessage} from './models'

const router = new Router();

const messages: IMessage[] = [];

router
  .get('/', ({response}) => {
    response.body = `Chat Server`
  })
  .get('/messages', async({response}) => {
    response.body = messages;
  })
  .post('/messages', async ({response, request}) => {
    const message = await request.body().value;
    messages.push(message);
    response.body = messages;
  })

export default router;

