import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('/signup')
    signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signIn')
    signIn(@Body() AuthCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
        return this.authService.signIn(AuthCredentialsDto)
    }

    // @Post('/authTest') // Before user custom decorator to get user info
    // @UseGuards(AuthGuard())
    // authTest(@Req() req) {
    //     console.log('req.user:::', req.user);
    // }
    @Post('/authTest')
    @UseGuards(AuthGuard())
    // Guard는 인증 미들웨어 입니다.
    // UseGuards() 안에 @Nestjs/passport에서 가져온 AuthGuard()를 이용하면 요청 안에 유저 정보를 넣어줄 수 있습니다.
    authTest(@GetUser() user: User) {
        console.log('user:::', user);
    }
} 
