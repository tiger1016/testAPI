import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { BalanceType } from "../../provider/type";

export class ResponseEvent {
  @ApiProperty({
    description: 'Origin from withdraw'
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => BalanceType)
  origin?: BalanceType

  @ApiProperty({
    description: 'Destination for deposit, transfer'
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => BalanceType)
  destination?: BalanceType
}