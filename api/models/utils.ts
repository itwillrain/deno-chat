/**
 *
 * @param data
 */
export function toMap<T extends { id: string}>(data: T[]): Map<string, T> {
  return data.reduce((p, d) => p.set(d.id, d), new Map())
}

/**
 *
 * @param data
 */
export function fromMap<T extends {id: string}>(data:Map<string, T>): T[] {
  const arr = [];
  for (const v of data.values()) {
    arr.push(v);
  }
  return arr;
}

/**
 * 取得
 * @param url
 */
export async function get<T>(url= ""):Promise<T>{
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${Deno.env.get("NOTION_SECRET")}`,
      "Content-Type": 'application/json',
      "Notion-Version": '2021-05-13'
    }
  })

  return response.json();
}

