import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalanceController } from './balance/balance.controller';
import { BalanceService } from './balance/balance.service';
import { EventController } from './event/event.controller';
import { EventService } from './event/event.service';

@Module({
  imports: [],
  controllers: [AppController, BalanceController, EventController],
  providers: [AppService, BalanceService, EventService],
})
export class AppModule {}
