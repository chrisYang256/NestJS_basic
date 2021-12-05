import { EntityRepository, Repository } from "typeorm";

import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { Console } from "console";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { name, password } = authCredentialsDto;
        const user = this.create({ name, password });

        try {
            await this.save(user)
        } catch(err) {
            console.log('err:::', err) // severity: 'ERROR', code: '23505',
            if(err.code === '23505') {
                throw new ConflictException(`Existing name: ${name}`)
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}