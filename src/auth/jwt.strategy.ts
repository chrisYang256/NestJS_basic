import * as config from 'config';
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";

import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

const jwtConfig = config.get('jwt')

// Nest는 의존성 주입 시스템(Dependency Injection system)을 통해 이 서비스를 필요로하는 어디서든 inject 할 수 있습니다.
@Injectable()
// 이 클래스는 @nestjs/passport package를 통해 정의된 PassportStrategy 클래스를 확장합니다.
// passport-jwt Node.js package를 통해 정의된 JWT Strategy를 통과합니다.
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        // 토큰이 유효한지 확인 후 payload 안에 들어있는 유저 이름을 통해 DB에서 유저정보를 가져오기 위해 UserRepository를 가져옵니다.
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {
        // 2가지 중요한 옵션을 전달합니다.
        super({
            // 토큰이 유효한지 체크합니다.
            // JWT Token 해독을 위해 JWT Stragegy가 사용할 시크릿키를 구성하고 Token에 접근합니다.
            secretOrKey: process.env.JWT_SECRET || `${jwtConfig.secret}`,
            // 토큰을 헤더에서 받아와서 위의 시크릿키로 유효한지 확인합니다.
            // Bearer token으로 전달된 현재 요청의 인증 헤더에서 JWT를 찾도록 Strategy(imported from passport-jwt package)를 설정합니다.
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    // 위에서 토큰이 유효한지 체크가 되면 validate method에서 payload에 있는 유저이름이 DB에 있는 유저인지 확인 후
    // 있다면 유저 객체를 return값으로 던져주고 return값은 @UseGuards(AuthGuard())를 이용한 모든 요청의 Request Object에 들어갑니다.
    async validate(payload) { 
        const { name } = payload;
        const user: User = await this.userRepository.findOne({ name });

        if(!user) {
            throw new UnauthorizedException(`Unauthorized user:${user}`);
        }

        return user; // return @UseGuards() to Controller
    }
}