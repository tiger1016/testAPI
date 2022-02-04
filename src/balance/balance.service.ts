import { HttpException, Injectable } from '@nestjs/common';
import { BALANCES } from 'src/provider/balance.mock';

@Injectable()
export class BalanceService {
  private balances = BALANCES;

  findOneById(id: string): number {
    const item = this.balances.find(item => item.id === id);
    if (!item) {
      throw new HttpException('Not Found', 404)
    }
    return item.balance
  }
}
