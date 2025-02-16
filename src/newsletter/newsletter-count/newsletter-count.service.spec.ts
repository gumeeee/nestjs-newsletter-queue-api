import { Test, TestingModule } from '@nestjs/testing';
import { NewsletterCountService } from './newsletter-count.service';

describe('NewsletterCountService', () => {
  let service: NewsletterCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsletterCountService],
    }).compile();

    service = module.get<NewsletterCountService>(NewsletterCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
