import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(":id")
  getUser(@Param("id") id) {
    return this.userService.getUser(id);
  }

  @Post()
  addUser(@Body() user) {
    return this.userService.addUser(user);
  }

  @Patch(":id")
  updateUser(@Param("id") id, @Body() newData) {
    return this.userService.updateUser(id, newData);
  }

  @Delete(":id")
  deleteUser(@Param("id") id): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}
