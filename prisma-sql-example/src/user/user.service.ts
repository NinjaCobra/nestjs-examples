import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect();
  }

  getUsers() {
    return this.users.findMany();
  }

  getUser(id: string) {
    return this.users.findUnique({
      where: {
        id: parseInt(id)
      }
    })
  }

  addUser(newUser) {
    return this.users.create({
      data: newUser
    });
  }

  updateUser(id: string, newData) {
    return this.users.update({
      where: { id: parseInt(id) },
      data: newData
    })
  }

  async deleteUser(id: string): Promise<boolean> {
    await this.users.delete({
      where: { id: parseInt(id) }
    })
    return true;
  }
}
