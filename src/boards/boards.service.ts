// Service is like logic

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BoardStatus } from './boards-status.enum'; // delete { Board } after connect DB
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity'

import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository
    ) {}
     
    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;

    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }
        
    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string): Board {
    //     const post = this.boards.find((board) => board.id === id);

    //     if(!post) {
    //         throw new NotFoundException(`Cant find Board with id:${id}`);
    //     }

    //     return post;
    // }
    async getBoardById(id: number): Promise <Board> {
        const found = await this.boardRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Can't find Board id:${id}`);
        }

        return found;
    }

    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     // Already have been executed Error handling at getBoardById()
    //     const post = this.getBoardById(id); // Reuse getBoardById() and get it's all data

    //     post.status = status;
    //     return post;
    // }
}


// // Before Connect DB
// @Injectable()
// export class BoardsService {
    // // Match the types. And in controller
    // private boards: Board[] = [];
    
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }
     
    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;

    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }
        
    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string): Board {
    //     const post = this.boards.find((board) => board.id === id);

    //     if(!post) {
    //         throw new NotFoundException(`Cant find Board with id:${id}`);
    //     }

    //     return post;
    // }

    // deleteBoardById(id: string): void {
    //     if(this.getBoardById(id)) {
    //         this.boards = this.boards.filter((board) => board.id !== id);
    //     }
    //     // model answer
    //     // const found = this.getBoardById(id);
    //     // this.boards = this.boards.filter(board => board.id !== found.id);
    // }

    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     // Already have been executed Error handling at getBoardById()
    //     const post = this.getBoardById(id); // Reuse getBoardById() and get it's all data

    //     post.status = status;
    //     return post;
    // }
// }