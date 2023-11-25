import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppService Tests', () => {
    let appController: AppController;

    beforeAll(async () => {

        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [{
                provide: AppService,
                useValue: {
                    getHello: jest.fn().mockReturnValue("Hello World!")
                }
            }]
        }).compile();

        appController = moduleFixture.get<AppController>(AppController);
    });

    it('Should be defined', () => {
        expect(appController).toBeDefined();
    });

    it('Should Hello World', async () => {
        const result = appController.getHello();
        expect(result).toEqual("Hello World!");
    });
});
