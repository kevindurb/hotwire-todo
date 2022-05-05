import { Todo } from '../entities/Todo';
import { getDataSource } from '../dataSource';

export const getTodoRepository = async () =>
  (await getDataSource()).getRepository(Todo);
