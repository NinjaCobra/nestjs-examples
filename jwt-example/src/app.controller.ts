import { Controller, Get, Post, Body, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService) { }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard)
  @Get("clientes")
  getClientes() {
    return this.appService.getClientes();
  }

  @Post("login")
  async login(@Body() body) {
    if (body.user === 'luiz' && body.password === '123') {//esse teste seria feito no banco
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = await this.authService.createToken(id);
      return { auth: true, token: token };
    }

    throw new UnauthorizedException();
  }
}
