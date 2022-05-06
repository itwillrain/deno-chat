import { Context, log} from '../deps.ts';

/**
 * Logger
 * @param response
 * @param request
 * @param next
 */
export const logger = async ({response, request} :Context, next: () => Promise<unknown>) => {
  await next();
  log.info(`${request.method} ${request.url.pathname}`);
}