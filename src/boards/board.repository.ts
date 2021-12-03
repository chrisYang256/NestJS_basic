import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";

@EntityRepository(Board)
// connect it to "App.Module.ts" to be used everywhere
export class BoardRepository extends Repository<Board> { 
    
}