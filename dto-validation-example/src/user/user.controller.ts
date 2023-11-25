import { Controller, Get, Post, Patch, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ReplaceUserDTO } from './dto/replace-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(":id")
  getUser(@Param("id", ParseIntPipe) id : number) {
    return this.userService.getUser(id);
  }

  @Post()
  addUser(@Body() user : CreateUserDTO) {
    return this.userService.addUser(user);
  }

  @Put(":id")
  replaceUser(@Param("id", ParseIntPipe) id : number, @Body() newData : ReplaceUserDTO) {
    return this.userService.replaceUser(id, newData);
  }

  @Patch(":id")
  updateUser(@Param("id", ParseIntPipe) id : number, @Body() newData: UpdateUserDTO) {
    return this.userService.updateUser(id, newData);
  }

  @Delete(":id")
  deleteUser(@Param("id", ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
