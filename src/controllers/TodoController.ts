import { Router } from 'express';
import * as routingUtils from '../utils/routing';
import * as todoGateway from '../gateways/todoGateway';
import { createTodoValidator } from '../entities/todo';

export const router = Router();

router.get(
  '/',
  routingUtils.asyncHandler(async (request, response) => {
    const todos = await todoGateway.getAllTodos();
    response.render('todoList.pug', { todos });
  }),
);

router.post(
  '/:id',
  routingUtils.asyncHandler(async (request, response) => {
    const id = parseInt(request.params.id);
    const data = request.body;
    await createTodoValidator.validate(data);
    const todo = todoGateway.getTodo(id);

    if (todo) {
      await todoGateway.updateTodo(id, data);
    }

    response.redirect('/todos');
  }),
);

router.post(
  '/',
  routingUtils.asyncHandler(async (request, response) => {
    const data = request.body;
    await createTodoValidator.validate(data);
    await todoGateway.createTodo(data);

    response.redirect('/todos');
  }),
);
