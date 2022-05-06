import {
  Controller,
  Get,
  Post,
  Render,
  Redirect,
  Body,
} from 'routing-controllers';
import { Length } from 'class-validator';

class LoginBody {
  @Length(6)
  username: string;

  @Length(8)
  password: string;
}

@Controller('/login')
export class SessionController {
  @Get()
  @Render('login.pug')
  async loginPage() {}

  @Post()
  @Redirect('/todos')
  async login(@Body({ validate: true }) body: LoginBody) {}
}
