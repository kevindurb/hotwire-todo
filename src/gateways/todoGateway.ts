import { connection } from '../dbConnection';
import { Todo } from '../entities/todo';

export const getAllTodos = async () => {
  return await connection('todos').select('*');
};

export const createTodo = async (data: Omit<Todo, 'id'>) => {
  await connection('todos').insert(data);
};

export const getTodo = async (id: number): Promise<Todo | undefined> => {
  return await connection('todos').where({ id })[0];
};

export const updateTodo = async (id: number, updates: Partial<Todo>) => {
  await connection('todos').where({ id }).update(updates);
};
