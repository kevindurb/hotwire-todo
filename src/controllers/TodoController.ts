import { Controller, Get, Render, Redirect } from 'routing-controllers';
import { getTodoRepository } from '../repositories';

@Controller()
export class TodoController {
  @Get('/')
  @Redirect('/todos')
  async indexRedirect() {}

  @Get('/todos')
  @Render('todoList.pug')
  async getList() {
    const todoRepository = await getTodoRepository();
    return {
      todos: await todoRepository.find(),
    };
  }
}
