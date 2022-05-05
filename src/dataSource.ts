import { DataSource } from 'typeorm';
import * as path from 'path';
import { migrations } from './migrations';
import { entities } from './entities';

const dataSource = new DataSource({
  type: 'sqlite',
  database: path.join(__dirname, './db.sqlite'),
  migrations,
  entities,
  synchronize: true,
});

export const getDataSource = async () => {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  return dataSource;
};
