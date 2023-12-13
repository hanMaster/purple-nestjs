import { IsString } from 'class-validator';

export class AuthDto {
	@IsString({ message: 'Не указан логин' })
	login: string;

	@IsString({ message: 'Не указан пароль' })
	password: string;
}
