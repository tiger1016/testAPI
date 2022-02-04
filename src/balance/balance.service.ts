import { HttpException, Injectable } from '@nestjs/common';
import { BALANCES } from 'src/balance/balance.mock';

@Injectable()
export class BalanceService {
  private balances = BALANCES;

  findAll() {
    return this.balances;
  }

  findOneById(id: string): number {
    const item = this.balances.find(item => item.id === id);
    if (!item) {
      throw new HttpException('Not Found', 404)
    }
    return item.balance
  }

  updateOne(id: string, value: number) {
    const index = this.balances.findIndex(item => item.id === id);
    if (index > -1) {
      const updated = this.balances[index].balance + value
      this.balances = [...this.balances.slice(0, index), {id, balance: updated}, ...this.balances.slice(index + 1)]
      return {
        destination: {
          id,
          balance: updated
        }
      }
    }
    this.balances.push({ id, balance: value })
    return {
      destination: {
        id, 
        balance: value
      }
    }
  }

  withdrawOne(id: string, value: number) {
    const index = this.balances.findIndex(item => item.id === id);
    if (index > -1) {
      const updated = this.balances[index].balance + value
      this.balances = [...this.balances.slice(0, index), {id, balance: updated}, ...this.balances.slice(index + 1)]
      return {
        destination: {
          id,
          balance: updated
        }
      }
    }
    this.balances.push({ id, balance: value })
    return {
      destination: {
        id, 
        balance: value
      }
    }
  }
}
