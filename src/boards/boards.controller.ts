import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';

import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board, BoardStatus } from './boards.model';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards') // "/boards"
export class BoardsController {
    constructor(private boardsService: BoardsService) {}
    
    // client request(/boards) -> controller -> getAllBoard() -> boardsService handle the requests -> controller response -> client
    @Get('/')
    // getAllBoards::: handler
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    // The way to get Express to body:::  app.post('/', (req, res) => { console.log(req.body) })
    // Another way in NestJS:::  createBoard(@Body() body)...
    // Before use DTO:::  createBoard(@Body('title') title: string, @Body('description') description: string)
    @Post('/')
    @UsePipes(ValidationPipe)
    // Set DTO and have to set it in service, too.
    // Do not write as "Board[]" because just return One at service.
    createBoard(@Body() createBoardDto: CreateBoardDto): Board {
        return this.boardsService.createBoard(createBoardDto); // It call service
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    // void::: Use it when there is no return value.
    deleteBoardById(@Param('id') id: string): void {
        this.boardsService.deleteBoardById(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    ) {
        return this.boardsService.updateBoardStatus(id, status);
    }
}