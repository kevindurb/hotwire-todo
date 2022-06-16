import { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('todos', (table) => {
    table.increments();
    table.text('description').defaultTo('');
    table.boolean('done').defaultTo(false);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('todos');
}
