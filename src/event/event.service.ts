import { Injectable } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { ResponseEvent } from './dto/response.dto';

@Injectable()
export class EventService {
  handleEvent(event: EventDto): ResponseEvent {
    return {}
  }
}
