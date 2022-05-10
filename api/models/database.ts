import { get } from "./utils.ts";
import { NOTION_API_URL } from './deps.ts'


interface Icon {
  type: 'emoji';
  emoji?: string;
  createdTime: string;
}

interface Database {
  id: string;
  cover: null | string;
  icon: Icon
}

/**
 *　全件取得
 */
export async function getAll(): Promise<Database[]> {
  return await get(`${NOTION_API_URL}/v1/databases`);
}
