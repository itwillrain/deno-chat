import { RouterContext } from "../deps.ts";
import { todoModel } from "../models/mod.ts";
import { handleError, handleOK } from "./utils.ts";

/**
 * 全件取得
 * @param ctx
 */
export async function getAll(ctx: RouterContext<'/todos'>) {
  try {
    const todos = await todoModel.getAll();
    handleOK(ctx, todos)
  } catch(error) {
    handleError(ctx, error);
  }
}
