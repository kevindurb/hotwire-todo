import { DataSource } from 'typeorm';
import * as path from 'path';
import { migrations } from './migrations';
import { entities } from './entities';

let dataSource: DataSource | undefined;

export const getDataSource = async () => {
  if (!dataSource) {
    buildDataSource(path.join(__dirname, '../db.sqlite'));
  }

  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  return dataSource;
};

export const buildDataSource = async (dbPath: string) => {
  dataSource = new DataSource({
    type: 'sqlite',
    database: dbPath,
    migrations,
    entities,
    synchronize: true,
  });
};
