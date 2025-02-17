import { Module } from '@nestjs/common';
import { SendEmailWithNewslettersJob } from './send-email-with-newsletters.job';

@Module({
  providers: [SendEmailWithNewslettersJob],
})
export class MailingModule {}
