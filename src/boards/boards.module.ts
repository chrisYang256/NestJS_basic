import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardsService } from './boards.service';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';

@Module({
  providers: [BoardsService],
  controllers: [BoardsController],
  imports: [
    TypeOrmModule.forFeature([BoardRepository])
  ],
})
export class BoardsModule {}
