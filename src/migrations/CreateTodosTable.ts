import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTodosTable implements MigrationInterface {
  async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'todos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          { name: 'description', type: 'text' },
          { name: 'is_done', type: 'integer' },
        ],
      }),
    );
  }

  async down(queryRunner: QueryRunner) {
    await queryRunner.dropTable('todos');
  }
}
