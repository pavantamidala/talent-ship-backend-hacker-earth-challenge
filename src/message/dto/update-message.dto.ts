import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty()
  @IsString()
  message: string;
  @ApiProperty()
  @IsNumber()
  sendTitme: number;
  @ApiProperty()
  @IsNumber()
  createdOn: number;
  @ApiProperty()
  @IsNumber()
  modifiedOn: number;
  @ApiProperty()
  @IsString()
  status: string;
}
