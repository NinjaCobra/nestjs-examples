import { Controller, Get, Post, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService, User } from './app.service';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Get(":id")
  getUser(@Param("id") id: number): User {
    return this.appService.getUser(id);
  }

  @Post()
  addUser(@Body() user: User): User {
    return this.appService.addUser(user);
  }

  @Put(":id")
  replaceUser(@Param("id") id: number, @Body() newData: User): User {
    return this.appService.replaceUser(id, newData);
  }

  @Patch(":id")
  updateUser(@Param("id") id: number, @Body() newData: User): User {
    return this.appService.updateUser(id, newData);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number): boolean {
    return this.appService.deleteUser(id);
  }
}
