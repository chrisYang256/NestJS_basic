import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardsService } from './boards.service';
import { AuthModule } from 'src/auth/auth.module';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';

@Module({
  providers: [BoardsService],
  controllers: [BoardsController],
  imports: [
    TypeOrmModule.forFeature([BoardRepository]),
    AuthModule // Import 후 @UseGuards(AuthGuard()) 사용 가능
  ],
})
export class BoardsModule {}
