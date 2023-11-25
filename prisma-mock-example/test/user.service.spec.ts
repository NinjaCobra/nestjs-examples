import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../src/user/user.service';
import { prismaMock, userMock } from "./db.mock";

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

    it('Should get an user', async () => {
        const id = "1";

        prismaMock.users.findUnique.mockResolvedValue(userMock);

        const result = await userService.getUser(id);
        expect(result!.id).toEqual(parseInt(id));
    });
});
