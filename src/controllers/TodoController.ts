import {
  Controller,
  Get,
  Post,
  Render,
  Redirect,
  Body,
} from 'routing-controllers';
import { getTodoRepository } from '../repositories';
import { Todo } from '../entities/Todo';

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

  @Post('/todos')
  @Redirect('/todos')
  async createTodo(@Body({ validate: true }) todo: Todo) {
    const todoRepository = await getTodoRepository();
    await todoRepository.save(todo);
  }
}
