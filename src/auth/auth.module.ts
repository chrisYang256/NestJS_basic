import * as config from 'config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UserRepository } from './user.repository';

const jwtConfig = config.get('jwt')

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || `${jwtConfig.secret}`,
      signOptions: { expiresIn: jwtConfig.expiresIn }
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // JwtStrategy를 여기서 사용할 수 있게 등록. 
  exports: [JwtStrategy, PassportModule], // JwtStrategy / PassportModule을 다른 모듈에서 사용할 수 있게 등록.
})
export class AuthModule {}
