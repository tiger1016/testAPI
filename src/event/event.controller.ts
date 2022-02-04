import { Body, Controller, Post } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { ResponseEvent } from './dto/response.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(
    private readonly eventService: EventService
  ) { }
  
  @Post()
  handleEvent(@Body() eventObj: EventDto): ResponseEvent {
    return this.eventService.handleEvent(eventObj)
  }
}
