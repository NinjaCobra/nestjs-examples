import { users } from "@prisma/client";
import { UserService } from "../src/user/user.service";

export const userMock = {
    id: 1,
    age: 35,
    name: "ninjacobra",
    uf: "RS"
} as users;

export const userServiceMock = {
    provide: UserService,
    useValue: {
        getUsers: jest.fn().mockResolvedValue([userMock]),
        getUser: jest.fn().mockResolvedValue(userMock),
        addUser: jest.fn().mockResolvedValue(userMock),
        updateUser: jest.fn().mockResolvedValue(userMock),
        deleteUser: jest.fn().mockResolvedValue(true)
    }
}