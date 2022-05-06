import { RouterContext, Status, log } from '../deps.ts';
import { todoModel } from '../models/mod.ts';
import {getParams, handleError, handleOK} from './utils.ts';


/**
 * 全件取得
 * @param ctx
 */
export async function getAll(ctx: RouterContext<'/todos'>) {
  const todos = await todoModel.getAll()
  handleOK(ctx, todos);
}

/**
 * 取得
 * @param ctx
 */
export async function get(ctx: RouterContext<'/todos/:id'>) {
  const params = await getParams(ctx);
  const [todo, error] = await todoModel.get(params);
  if(error) {
    return handleError(ctx, error);
  }

  handleOK(ctx, todo);
}

/**
 *
 * @param ctx
 */
export async function create(ctx: RouterContext<'/todos'>) {
  const params = await getParams(ctx);
  await todoModel.create(params)
  handleOK(ctx, "success")
}

/**
 *
 * @param ctx
 */
export async function update(ctx: RouterContext<'/todos/:id'>) {
  const params = await getParams(ctx);
  const [_, error] = await todoModel.update(params)

  if(error) {
    return handleError(ctx, error);
  }

  handleOK(ctx, "success");
}

/**
 *
 * @param ctx
 */
export async function remove(ctx: RouterContext<'/todos/:id'>) {
  const params = await getParams(ctx)
  const [_, error] = await todoModel.remove(params)

  if(error) {
    return handleError(ctx, error)
  }

  handleOK(ctx, "success")
}