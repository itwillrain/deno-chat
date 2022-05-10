import { get } from './utils.ts'
import { NOTION_API_URL } from './deps.ts'

/** Todo */
interface Todo {
  "id": string;
  "done": boolean;
  "title":  string;
  "createdAt": string;
  "updatedAt": string;
}

/**　Result */
type Result<T> = [T, undefined] | [undefined, Error]


/**
 *　全件取得
 */
export async function getAll(): Promise<Todo[]> {
  return await get(`${NOTION_API_URL}/v1/databases`);
}
