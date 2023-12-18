import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	async register(@Body() body: AuthDto) {
		return this.authService.create(body);
	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() body: AuthDto) {
		console.log(body);
	}
}
