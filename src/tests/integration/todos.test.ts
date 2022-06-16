import request from 'supertest';
import { renderDOM } from '../utils';
import app from '../../app';

describe('todos', () => {
  test('creating todos', async () => {
    await request(app).post('/todos').send('description=hello').expect(302);
  });

  test('showing todos', async () => {
    const response = await request(app).get('/todos');
    const { querySelectorAll } = renderDOM(response.text);
    const todoItems = querySelectorAll('li.todo-item');
    expect(todoItems).toHaveLength(1);
    expect(todoItems[0]).toHaveTextContent('hello');
  });

  test('mark done', async () => {
    const response = await request(app).get('/todos');
    const document = renderDOM(response.text);
    const firstTodoItemForm = document.querySelector('li.todo-item form');
    expect(
      firstTodoItemForm.querySelector('input[type="submit"]'),
    ).toHaveAttribute('value', 'Mark Done');

    await request(app)
      .post(firstTodoItemForm.action)
      .send('isDone=true')
      .expect(302);

    const afterMarkDone = await request(app).get('/todos');
    const afterDocument = renderDOM(afterMarkDone.text);
    const firstTodoItemFormAfter =
      afterDocument.querySelector('li.todo-item form');

    expect(
      firstTodoItemFormAfter.querySelector('input[type="submit"]'),
    ).toHaveAttribute('value', 'Done');
  });
});
