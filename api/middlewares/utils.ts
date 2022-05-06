import {RouterContext, Status, log} from '../deps.ts';

/**
 * パラメーター取得
 * @param ctx
 */
export async function getParams<R extends string>(ctx: RouterContext<R>) {
  const body =  ctx.request.body();
  const value = await body.value;

  return {
    ...ctx.params,
    ...value,
  };
}

/**
 *
 * @param ctx
 * @param data
 */
export function handleOK<R extends string>(ctx: RouterContext<R>, data: any) {
  ctx.response.status = Status.OK;
  ctx.response.body = { data }
}

/**
 *
 * @param ctx
 * @param error
 */
export function handleError<R extends string>(ctx: RouterContext<R>, error: Error) {
  ctx.response.status = Status.BadRequest;
  ctx.response.body = {
    error: {
      message: error.message,
      stack: error.stack
    }
  }
}