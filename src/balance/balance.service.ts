import { HttpException, Injectable } from '@nestjs/common';
import { BALANCES } from './balance.mock';

@Injectable()
export class BalanceService {
  private balances = BALANCES;

  findOneById(id: string): number {
    const balance = this.balances.find(item => item.id === id);
    if (!balance) {
      throw new HttpException('Not Found', 404)
    }
    return balance.value
  }
}
