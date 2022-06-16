import { Request, Response } from 'express';
import { Todo } from '../types/Todo';
import { connection } from '../dbConnection';

export const todoController = {
  async getList(request: Request, response: Response) {
    return response.render('todoList.pug', { todos: [] });
  },
};
