import { Todo } from '../entities/Todo';
import { User } from '../entities/User';
import { getDataSource } from '../dataSource';

export const getTodoRepository = async () =>
  (await getDataSource()).getRepository(Todo);

export const getUserRepository = async () =>
  (await getDataSource()).getRepository(User);
