import { Controller, Get, Post, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(":id")
  getUser(@Param("id") id: number): User {
    return this.userService.getUser(id);
  }

  @Post()
  addUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }

  @Put(":id")
  replaceUser(@Param("id") id: number, @Body() newData: User): User {
    return this.userService.replaceUser(id, newData);
  }

  @Patch(":id")
  updateUser(@Param("id") id: number, @Body() newData: User): User {
    return this.userService.updateUser(id, newData);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number): boolean {
    return this.userService.deleteUser(id);
  }
}
