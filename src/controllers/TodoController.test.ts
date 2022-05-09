import request from 'supertest';
import { renderDOM, resetTestDB } from '../test/utils';
import app from '../app';

describe('TodoController', () => {
  beforeAll(async () => {
    await resetTestDB();
  });

  test('creating todos', async () => {
    await request(app).post('/todos').send('description=hello').expect(302);
  });

  test('showing todos', async () => {
    const response = await request(app).get('/todos');
    const { querySelector } = renderDOM(response.text);
    expect(querySelector('li')).toHaveTextContent('hello');
  });
});
