import { Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UserAuthDetails } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  login(@Req() req: Request & {user: UserAuthDetails}): UserAuthDetails {
    return req.user;
  }

  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
