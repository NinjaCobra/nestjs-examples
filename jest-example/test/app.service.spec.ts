import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../src/app.service';

describe('AppService Tests', () => {
  let appService: AppService;

  beforeAll(async () => {

    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    appService = moduleFixture.get<AppService>(AppService);
  });

  it('Should be defined', () => {
    expect(appService).toBeDefined();
  });

  it('Should Hello World', async () => {

    const result = appService.getHello()

    expect(result).toEqual("Hello World!");
  });
});
