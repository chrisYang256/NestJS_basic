import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UserRepository } from './user.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // JwtStrategy를 여기서 사용할 수 있게 등록. 
  exports: [JwtStrategy, PassportModule], // JwtStrategy / PassportModule을 다른 모듈에서 사용할 수 있게 등록.
  imports: [
    JwtModule.register({
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: { expiresIn: '60m' }
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
})
export class AuthModule {}
