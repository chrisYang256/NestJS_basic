import * as bcrypt from 'bcryptjs';
import { EntityRepository, Repository } from "typeorm";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { name, password } = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const hashedPassoword = await bcrypt.hash(password, salt);
        const user = this.create({ name, password: hashedPassoword });

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