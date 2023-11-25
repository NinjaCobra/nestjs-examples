import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export type User = { id: string; name: string; age: number; uf: string; }

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

    getUsers(): Promise<User[]> {
        return this.users.findMany();
    }

    getUser(id: string) {
        return this.users.findUnique({
            where: { id }
        })
    }

    addUser(newUser: User) {
        return this.users.create({
            data: newUser
        });
    }

    updateUser(id: string, newData: User) {
        return this.users.update({
            where: { id },
            data: newData
        })
    }

    async deleteUser(id: string): Promise<boolean> {
        await this.users.delete({
            where: { id }
        })
        return true;
    }
}
