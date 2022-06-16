import { connection } from '../dbConnection';

export const getAllTodos = async () => {
  return await connection('todos').select('*');
};
