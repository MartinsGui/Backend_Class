import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Acervo } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Acervo],
})
export class AppModule {}
