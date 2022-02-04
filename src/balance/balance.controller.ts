import { Controller, Get, Param, Post } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {
  constructor(
    private readonly balanceService: BalanceService
  ) {}
  @Get(':account_id')
  findId(@Param('account_id') account_id: string) {
    return this.balanceService.findOneById(account_id);
  }
}
