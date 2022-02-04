import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

export enum RequestType {
  deposit = "deposit",
  withdraw = "withdraw",
  transfer = "transfer"
}
export class EventDto {
  @ApiProperty({
    enum: RequestType,
    isArray: false,
  })
  @IsEnum(RequestType)
  type: RequestType;

  @ApiProperty()
  @IsOptional()
  @IsString()
  destination?: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  origin?: string;
}