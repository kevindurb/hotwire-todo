import { Todo } from '../entities/todo';

declare module 'knex/types/tables' {
  interface Tables {
    todos: Todo;
  }
}
