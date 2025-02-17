import { Inject, Injectable } from '@nestjs/common';
import { Newsletter } from '../entities/newsletter.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Interval } from '@nestjs/schedule';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class NewsletterCountService {
  private limit: number = 10;

  constructor(
    @InjectModel(Newsletter)
    private newsletter: typeof Newsletter,

    @Inject(CACHE_MANAGER)
    private cacheManger: Cache,

    @InjectQueue('emails')
    private emailsQueue: Queue,
  ) {}

  @Interval(10000)
  async countNewsletters() {
    console.log('Procurando por newsletters');

    let offset: number | null = await this.cacheManger.get('newsletter-offset');
    offset = offset ? offset : 0;

    console.log(`Offsets: ${offset}`);

    const newsletters: Newsletter[] = await this.newsletter.findAll({
      offset,
      limit: this.limit,
    });

    console.log(`Encontradas ${newsletters.length} newsletters`);

    const ttl: number = 1 * 60 * 10;
    if (newsletters.length === this.limit) {
      await this.cacheManger.set('newsletter-offset', offset + this.limit, ttl);

      console.log(`Achou mais ${this.limit} newsletters`);
      this.emailsQueue.add({ newsletters: newsletters.map((n) => n.toJSON()) });
    }
  }
}
