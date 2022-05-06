import { Status, RouterContext } from '../deps.ts'

export function getHome(ctx: RouterContext<any>) {
  ctx.response.status = Status.OK;
  ctx.response.body = "Todo LIST API with 🦕"
}