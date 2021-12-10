// The repository is In charge of CRUD

import { EntityRepository, Repository } from "typeorm";

import { Board } from "./board.entity";
import { User } from "src/auth/user.entity";
import { BoardStatus } from "./boards-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";

@EntityRepository(Board)
// connect it to "App.Module.ts" to be used everywhere
export class BoardRepository extends Repository<Board> { 
    async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
        const { title, description } = createBoardDto;

        const post = this.create({ // "this" points to Repository<Board>
            title,
            description,
            status: BoardStatus.PUBLIC,
            user
        })

        await this.save(post);
        return post;
    }
}