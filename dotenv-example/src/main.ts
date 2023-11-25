import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Configs from "./configs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Configs.PORT);
}
bootstrap();
