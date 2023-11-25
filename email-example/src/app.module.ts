import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [MailerModule.forRoot({
    transport: "smtp://kattie.stoltenberg@ethereal.email:HdGNz5KCZMD9tKptS7@smtp.ethereal.email",
    defaults: {
      secure: false, //para usar 587 ou true para 465
      from: "kattie.stoltenberg@ethereal.email"
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
