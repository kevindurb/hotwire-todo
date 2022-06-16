import type { Knex } from 'knex';
import path from 'path';
import humps from 'humps';

type environments = 'development';

const config: Record<environments, Knex.Config> = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: path.join(__dirname, '../db.sqlite3'),
    },

    postProcessResponse: (result) => {
      if (Array.isArray(result)) {
        return result.map((row) => humps.camelizeKeys(row));
      } else {
        return humps.camelizeKeys(result);
      }
    },
    wrapIdentifier: (value, origImpl) => origImpl(humps.decamelize(value)),
  },
};

export default config;
