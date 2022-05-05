import { useExpressServer } from 'routing-controllers';
import express from 'express';
import { controllers } from './controllers';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

useExpressServer(app, {
  controllers,
});

app.listen(3000);
