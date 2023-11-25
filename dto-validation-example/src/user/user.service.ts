import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { ReplaceUserDTO } from './dto/replace-user.dto';

export type User = {
    id?: number;
    name: string;
    age: number;
    uf: string;
}

@Injectable()
export class UserService {

    users: User[] = [];

    getUsers(): User[] {
        return this.users;
    }

    getUser(id: number): User {
        return this.users.find(u => u.id === id);
    }

    addUser(newUser: CreateUserDTO): User {
        const nextId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
        const userWithId: User = { ...newUser };
        userWithId.id = nextId;
        this.users.push(userWithId);
        return userWithId;
    }

    replaceUser(id: number, newData: ReplaceUserDTO): User {
        const index = this.users.findIndex(u => u.id == id);
        if (index === -1) throw new NotFoundException();

        const userWithId: User = { ...newData };
        userWithId.id = id;
        this.users[index] = userWithId;

        return userWithId;
    }

    updateUser(id: number, newData: UpdateUserDTO): User {
        const index = this.users.findIndex(u => u.id == id);
        if (index === -1) throw new NotFoundException();

        const user = this.users[index];

        if (newData.name) user.name = newData.name;
        if (newData.age) user.age = newData.age;
        if (newData.uf) user.uf = newData.uf;
        this.users[index] = user;

        return user;
    }

    deleteUser(id: number): boolean {
        const index = this.users.findIndex(u => u.id == id);
        if (index === -1) throw new NotFoundException();

        this.users.splice(index, 1);
        return true;
    }
}
