import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private repo: Repository<Message>) {}

  create(createMessageDto: CreateMessageDto) {
    const message = this.repo.create(createMessageDto);
    return this.repo.save(message);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const message = await this.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    Object.assign(message, updateMessageDto);
    return this.repo.save(message);
  }

  async remove(id: number) {
    const message = await this.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return this.repo.remove(message);
  }
}
