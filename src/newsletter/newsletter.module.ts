import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Newsletter } from './entities/newsletter.entity';

@Module({
  imports: [SequelizeModule.forFeature([Newsletter])],
  controllers: [NewsletterController],
  providers: [NewsletterService],
})
export class NewsletterModule {}
