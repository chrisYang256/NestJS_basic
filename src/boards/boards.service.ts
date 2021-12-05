// The service is like API logic

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity'
import { BoardStatus } from './boards-status.enum';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository
    ) {}

    async getAllPosts(): Promise<Board[]> {
        return this.boardRepository.find();
    }
     
    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardRepository.createBoard(createBoardDto);
    }

    async getBoardById(id: number): Promise<Board> {
        const found = await this.boardRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Can't find Post id:${id}`);
        }

        return found;
    }

    async deleteBoardById(id: number): Promise<void> {
        const result = await this.boardRepository.delete(id);

        // Do validation check ourself because delete method doesn't spread error msg
        if(result.affected === 0) {
            throw new NotFoundException(`Can't find Post with id:${id}`)
        }

        console.log('deleteBoardById result:::', result);
    }

    async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
        const post = await this.getBoardById(id)

        post.status = status;
        await this.boardRepository.save(post);

        return post;
    }
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