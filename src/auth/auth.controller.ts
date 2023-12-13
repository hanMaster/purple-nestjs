import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	@Post('register')
	async register(@Body() body: AuthDto) {
		console.log(body);
	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() body: AuthDto) {
		console.log(body);
	}
}
