import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register') 
    async registerUser(@Body() dto: RegisterUserDto) {
        return await this.authService.registerUser(dto);
    }

    @Post('login')
    async loginUser(@Body() dto: RegisterUserDto) {
        return await this.authService.loginUser(dto);
    }
}
