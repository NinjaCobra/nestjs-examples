import { Controller, Get, Post, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Get(":id")
    getUser(@Param("id") id: string): Promise<User> {
        return this.userService.getUser(id);
    }

    @Post()
    addUser(@Body() user: User): Promise<User> {
        return this.userService.addUser(user);
    }

    @Patch(":id")
    updateUser(@Param("id") id: string, @Body() newData: User): Promise<User> {
        return this.userService.updateUser(id, newData);
    }

    @Delete(":id")
    deleteUser(@Param("id") id: string): Promise<boolean> {
        return this.userService.deleteUser(id);
    }
}
