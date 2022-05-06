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
  async createTodo(@Body() body: any) {
    const todo = new Todo();
    todo.description = body.description ?? '';
    const todoRepository = await getTodoRepository();
    todoRepository.save(todo);
  }
}
