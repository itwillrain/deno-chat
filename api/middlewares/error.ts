import { Context, isHttpError, Status } from '../deps.ts';

export async function errorHandler({response} : Context, next: () => Promise<unknown>) {
  try {
    await next();
  } catch(error) {
    if(!isHttpError(error)) {
      response.status = Status.InternalServerError;
      response.body = {
        error: {
          message: error.message,
          stack: error.stack
        }
      }
      return;
    }

  }
}