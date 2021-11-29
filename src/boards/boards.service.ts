import { Injectable } from '@nestjs/common';

import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    // Match the types. And in controller
    private boards: Board[] = [];
    
    getAllBoards(): Board[] {
        return this.boards;
    }
     
    createBoard(createBoardDto: CreateBoardDto) {
        const { title, description } = createBoardDto;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }
        
        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }

    deleteBoardById(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id); // Reuse getBoardById function and get it's all data
        board.status = status;
        return board;
    }
}
