// The repository is like ..logic and...

import { EntityRepository, Repository } from "typeorm";

import { Board } from "./board.entity";
import { BoardStatus } from "./boards-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";

@EntityRepository(Board)
// connect it to "App.Module.ts" to be used everywhere
export class BoardRepository extends Repository<Board> { 
    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        const { title, description } = createBoardDto

        const post = this.create({ // "this" points to Repository<Board>
            title,
            description,
            status: BoardStatus.PUBLIC
        })

        await this.save(post);
        return post;
    }
}