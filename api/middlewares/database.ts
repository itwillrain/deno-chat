import { RouterContext } from "../deps.ts";
import { databaseModel } from "../models/mod.ts";
import { handleError, handleOK } from "./utils.ts";

/**
 * 全件取得
 * @param ctx
 */
export async function getAll(ctx: RouterContext<'/database'>) {
  try {
    const todos = await databaseModel.getAll();
    handleOK(ctx, todos)
  } catch(error) {
    handleError(ctx, error);
  }
}
