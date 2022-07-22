import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, isString, IsString } from 'class-validator';

export class CreateMessageDto {
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
