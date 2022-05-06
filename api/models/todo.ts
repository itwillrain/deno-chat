
import { toMap, fromMap } from './utils.ts';
import { uuid, log } from '../deps.ts'


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

const FILE_PATH = "./db/todos.json";


/**
 *　全件取得
 */
export async function getAll(): Promise<Todo[]> {
  const data = await Deno.readFile(FILE_PATH);
  const decoder = new TextDecoder();
  return JSON.parse(decoder.decode(data))
}

/**
 *　取得
 * @param id
 */
export async function get({id}: Pick<Todo, "id">): Promise<Result<Todo>>{
  const todos = await getAll();
  const todo = toMap(todos).get(id);
  if(!todo) {
    return [undefined, new Error("Cannot find item")];
  }
  return [todo, undefined];
}

/**
 *　作成
 * @param title
 */
export async function create({title}: Pick<Todo, "title">): Promise<true> {
  const todos = await getAll();
  const id = uuid.generate();
  const now = new Date().toISOString();

  await updateAll([...todos, {
    id,
    title,
    done: false,
    createdAt: now,
    updatedAt: now
  }])

  return true;
}

/**
 *　全件更新
 * @param todos
 */
async function updateAll(todos: Todo[]): Promise<true> {
  const encoder = new TextEncoder();
  Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)))

  return true;
}


/**
 *　更新
 * @param params
 */
export async function update(params: Partial<Todo> & Pick<Todo, 'id'>): Promise<Result<true>>  {
  const todos = await getAll();
  const todosMap = toMap(todos)
  const current = todosMap.get(params.id);

  log.info({params})

  if(!current) {
    return [undefined, new Error("cannot find item")];
  }

  todosMap.set(params.id, {
    ...current,
    ...params,
    updatedAt: new Date().toISOString()
  })


  await updateAll(fromMap(todosMap))

  return [true, undefined];
}


/**
 * 削除
 * @param id
 */
export async function remove({id}: Pick<Todo, 'id'>): Promise<Result<true>>  {
  const todos = await getAll();
  const todosMap = toMap(todos);

  if(!todosMap.has(id)) {
    return [undefined, new Error('cannot find item')];
  }

  todosMap.delete(id);
  await updateAll(fromMap(todosMap));
  return [true, undefined];
}