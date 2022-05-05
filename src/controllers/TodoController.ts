import { Controller, Get, Render } from 'routing-controllers';
import { getTodoRepository } from '../repositories';

@Controller()
export class TodoController {
  @Get('/todos')
  @Render('todoList.pug')
  async getList() {
    const todoRepository = await getTodoRepository();
    return {
      todos: await todoRepository.find(),
    };
  }
}
