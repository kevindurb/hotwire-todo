import knex from 'knex';

export const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: ':memory:',
  },
});
