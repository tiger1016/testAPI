import { Injectable } from '@nestjs/common';
import { BalanceService } from 'src/balance/balance.service';
import { EventDto } from './dto/event.dto';
import { ResponseEvent } from './dto/response.dto';
import { RequestType } from './types/type';

@Injectable()
export class EventService {
  constructor(
    private readonly balanceService: BalanceService
  ) { }
  handleEvent(event: EventDto): ResponseEvent {
    console.log(event)
    switch (event.type) {
      case RequestType.deposit:
        const updated = this.balanceService.updateOne(event.destination, event.amount)
        return updated
      case RequestType.withdraw:
        const withdrawn = this.balanceService.withdrawOne(event.origin, event.amount)
        return withdrawn
      case RequestType.transfer:
        const transfer = this.balanceService.transferOne(event.origin, event.destination, event.amount)
        return transfer
        break;
      default:
        break;
    }
  }
}
