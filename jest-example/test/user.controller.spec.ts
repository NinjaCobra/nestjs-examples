import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../src/user/user.controller';
import { userMock, userServiceMock } from "./user.service.mock";
import { UserService } from '../src/user/user.service';

describe('UserController Tests', () => {
    let userController: UserController;

    beforeAll(async () => {

        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [userServiceMock]
        }).compile();

        userController = moduleFixture.get<UserController>(UserController);
    });

    it('Should be defined', () => {
        expect(userController).toBeDefined();
    });

    it('Should get user', async () => {
        const result = await userController.getUser(userMock.id);
        expect(result.id).toEqual(userMock.id);
    });

    it('Should get users', async () => {
        const result = await userController.getUsers();
        expect(result.length).toEqual(1);
        expect(result[0].id).toEqual(userMock.id);
    });

    it('Should add user', async () => {
        const newUser = { ...userMock };
        delete newUser.id;
        const result = await userController.addUser(newUser);
        expect(result.id).toEqual(userMock.id);
    });

    it('Should update user', async () => {
        const userData = { ...userMock };
        delete userData.id;
        const result = await userController.updateUser(userMock.id, userData);
        expect(result.id).toEqual(userMock.id);
    });

    it('Should delete user', async () => {
        const result = await userController.deleteUser(userMock.id);
        expect(result).toBeTruthy();
    });
});
