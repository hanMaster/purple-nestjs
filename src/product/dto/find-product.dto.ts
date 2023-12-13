import { IsNumber, IsString } from 'class-validator';

export class FindProductDto {
	@IsString({ message: 'Не указана категория' })
	category: string;

	@IsNumber({}, { message: 'Не указан лимит' })
	limit: number;
}
