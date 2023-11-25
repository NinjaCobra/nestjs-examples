import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../src/user/user.service';
import { users } from '@prisma/client';

describe('UserService Tests', () => {
  let userService: UserService;

  beforeAll(async () => {

    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [UserService]
    }).compile();

    userService = moduleFixture.get<UserService>(UserService);
  });

  it('Should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('Should add an user', async () => {
    const user = {
      age: 35,
      name: "ninjacobra",
      uf: "RS"
    } as users;

    const id: string = "1";

    userService.users.create = jest.fn().mockReturnValueOnce({ id, ...user });

    const result = await userService.addUser(user);

    expect(result.id).toEqual(id);
  });

  it('Should update an user', async () => {
    const user = {
      name: "ninjacobra"
    } as users;

    const id: string = "1";

    userService.users.update = jest.fn().mockReturnValueOnce({ id, ...user });

    const result = await userService.updateUser(id, user);

    expect(result.id).toEqual(id);
  });

  it('Should get an user', async () => {
    const id: string = "1";

    userService.users.findUnique = jest.fn().mockReturnValueOnce({ id, age: 35, name: "ninjacobra", uf: "RS" });

    const result = await userService.getUser(id);

    expect(result.id).toEqual(id);
  });

  it('Should get users', async () => {

    const id: string = "1";
    const users = [{ id, age: 35, name: "ninjacobra", uf: "RS" }];
    userService.users.findMany = jest.fn().mockReturnValueOnce(users);

    const result = await userService.getUsers();

    expect(result.length).toEqual(users.length);
    expect(result[0].id).toEqual(id);
  });

  it('Should delete an user', async () => {
    const id: string = "1";

    userService.users.delete = jest.fn().mockReturnValueOnce(true);

    const result = await userService.deleteUser(id);

    expect(result).toBeTruthy();
  });
});
