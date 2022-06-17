import { connection } from '../dbConnection';
import { Todo } from '../entities/todo';

export const getAllTodos = () => connection('todos').select('*');

export const createTodo = (data: Omit<Todo, 'id'>) =>
  connection('todos').insert(data);

export const getTodo = async (id: number) =>
  (await connection('todos').select('*').where({ id }))[0];

export const updateTodo = (id: number, updates: Partial<Todo>) =>
  connection('todos').where({ id }).update(updates);
