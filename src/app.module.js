import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Acervo, Metrics } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Acervo, Metrics],
})
export class AppModule {}
