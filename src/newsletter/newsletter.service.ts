import { Injectable } from '@nestjs/common';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Newsletter } from './entities/newsletter.entity';

@Injectable()
export class NewsletterService {
  constructor(
    @InjectModel(Newsletter)
    private newsletterModel: typeof Newsletter,
  ) {}

  create(createNewsletterDto: CreateNewsletterDto) {
    return this.newsletterModel.create(createNewsletterDto as any);
  }

  findAll() {
    return this.newsletterModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} newsletter`;
  }

  update(id: number, updateNewsletterDto: UpdateNewsletterDto) {
    return `This action updates a #${id} newsletter`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsletter`;
  }
}
