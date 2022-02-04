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
      const updated = this.balances[index].balance - value
      this.balances = [...this.balances.slice(0, index), {id, balance: updated}, ...this.balances.slice(index + 1)]
      return {
        origin: {
          id,
          balance: updated
        }
      }
    }
    throw new HttpException('Not Found', 404)
  }

  transferOne(from: string, to: string, value: number) {
    const indexFrom = this.balances.findIndex(item => item.id === from);
    if (indexFrom > -1) {
      const updatedFrom = this.balances[indexFrom].balance - value
      const indexTo = this.balances.findIndex(item => item.id === to);
      
      if (indexTo > -1) {
        const updatedTo = this.balances[indexTo].balance + value
        this.balances = [...this.balances.slice(0, indexFrom), {id: from, balance: updatedFrom}, ...this.balances.slice(indexFrom + 1)]
        this.balances = [...this.balances.slice(0, indexTo), { id: to, balance: updatedTo }, ...this.balances.slice(indexTo + 1)]
        return {
          origin: {
            id: from,
            balance: updatedFrom
          },
          destination: {
            id: to,
            balance: updatedTo
          }
        }
      }

      this.balances = [...this.balances.slice(0, indexFrom), { id: from, balance: updatedFrom }, ...this.balances.slice(indexFrom + 1), {
        id: to,
        balance: value
      }]
      return {
        origin: {
          id: from,
          balance: updatedFrom
        },
        destination: {
          id: to,
          balance: value
        }
      }
    }

    throw new HttpException('Not Found', 404)
  }
}
