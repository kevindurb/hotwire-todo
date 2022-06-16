import { Knex } from 'knex';
import { Todo } from './Todo';

declare module 'knex/types/tables' {
  interface Tables {
    todos: Todo;
  }
}
