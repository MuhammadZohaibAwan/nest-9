import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.contrller';

@Module({
  imports: [],
  controllers: [AppController,EventsController],
  providers: [AppService],
})
export class AppModule {}
