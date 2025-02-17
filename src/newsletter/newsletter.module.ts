import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Newsletter } from './entities/newsletter.entity';
import { NewsletterCountService } from './newsletter-count/newsletter-count.service';
import { CacheModule } from '@nestjs/cache-manager';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    CacheModule.register(),
    SequelizeModule.forFeature([Newsletter]),
    BullModule.registerQueue({ name: 'emails' }),
  ],
  controllers: [NewsletterController],
  providers: [NewsletterService, NewsletterCountService],
})
export class NewsletterModule {}
