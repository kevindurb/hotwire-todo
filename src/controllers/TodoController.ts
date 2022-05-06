import {
  Controller,
  Get,
  Post,
  Render,
  Redirect,
  Body,
  Param,
} from 'routing-controllers';
import { getTodoRepository } from '../repositories';
import { Todo } from '../entities/Todo';

@Controller('/todos')
export class TodoController {
  @Get()
  @Render('todoList.pug')
  async getList() {
    const todoRepository = await getTodoRepository();
    return {
      todos: await todoRepository.find(),
    };
  }

  @Post()
  @Redirect('/todos')
  async create(@Body({ validate: true }) todo: Todo) {
    const todoRepository = await getTodoRepository();
    await todoRepository.save(todo);
  }

  @Post('/:id')
  @Redirect('/todos')
  async update(
    @Param('id') id: number,
    @Body({ validate: { skipMissingProperties: true } }) updates: Todo,
  ) {
    const todoRepository = await getTodoRepository();
    await todoRepository.update({ id }, updates);
  }
}
