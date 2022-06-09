import {
  Controller,
  Get,
  Post,
  Render,
  Redirect,
  Body,
  Param,
} from 'routing-controllers';
import { Expose } from 'class-transformer';
import { getUserRepository } from '../repositories';
import { User } from '../entities/User';

export class CreateUser {
  @Expose()
  username: string;

  @Expose()
  password: string;
}

@Controller('/users')
export class UserController {
  @Post()
  async create(
    @Body({ validate: true, transform: { excludeExtraneousValues: true } })
    user: CreateUser,
  ) {
    console.log(user);
    const userRepository = await getUserRepository();
    await userRepository.save(user);
    // create user
    // hash password (how do i have a field that is available for create
    // but not in the database
  }
}
