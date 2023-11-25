import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, users } from '@prisma/client';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {

  /* istanbul ignore next */
  async onModuleInit() {
    await this.$connect();
  }

  getUsers() : Promise<users[]> {
    return this.users.findMany();
  }

  getUser(id: string): Promise<users> {
    return this.users.findUnique({
      where: {
        id: parseInt(id)
      }
    })
  }

  addUser(newUser: users): Promise<users> {
    return this.users.create({
      data: newUser
    });
  }

  updateUser(id: string, newData: users): Promise<users> {
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
