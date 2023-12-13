import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
	@Post('create')
	async create(@Body() body: Omit<ProductModel, '_id'>) {
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
	async patch(@Param('id') id: string, @Body() body: ProductModel) {
		console.log('Patch', id, body);
	}

	@HttpCode(200)
	@Post()
	async find(@Body() body: FindProductDto) {
		console.log(body);
	}
}
