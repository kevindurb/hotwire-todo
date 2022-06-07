import { Controller, Get, Redirect } from 'routing-controllers';

@Controller('/')
export class AppController {
  @Get()
  @Redirect('/todos')
  async redirect() {}
}
