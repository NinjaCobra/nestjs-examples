import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailerService } from '@nestjs-modules/mailer';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailerService: MailerService
  ) { }

  @Get()
  async getHello(): Promise<string> {

    await this.mailerService.sendMail({
      to: "destinatario@domain.com",
      subject: "Test subject",
      text: "Test message"
    })

    return this.appService.getHello();
  }
}
