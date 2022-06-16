import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { router } from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(router);

export default app;
