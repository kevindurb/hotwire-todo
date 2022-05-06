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
import { User } from '../entities/User';

@Controller('/users')
export class UserController {
  @Post()
  async create(@Body({ validate: true }) user: User) {
    // create user
    // hash password (how do i have a field that is available for create
    // but not in the database
  }
}
