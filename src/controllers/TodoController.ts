import { Request, Response } from 'express';
import * as todoGateway from '../gateways/todoGateway';

export const getList = async (request: Request, response: Response) => {
  const todos = await todoGateway.getAllTodos();
  return response.render('todoList.pug', { todos });
};
