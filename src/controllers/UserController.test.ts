import request from 'supertest';
import { renderDOM, resetTestDB } from '../test/utils';
import app from '../app';

describe('UserController', () => {
  beforeAll(async () => {
    await resetTestDB();
  });

  test('creating users', async () => {
    await request(app)
      .post('/users')
      .send('username=kevin&password=test')
      .expect(201);
  });
});
