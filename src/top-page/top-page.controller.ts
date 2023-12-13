import { TopPageModel } from './top-page.model';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
	@Post('create')
	async create(@Body() body: Omit<TopPageModel, '_id'>) {
		console.log(body);
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		console.log(id);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		console.log('Delete', id);
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() body: TopPageModel) {
		console.log('Patch', id, body);
	}

	@HttpCode(200)
	@Post()
	async find(@Body() body: FindTopPageDto) {
		console.log(body);
	}
}
