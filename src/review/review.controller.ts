import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() body: Omit<ReviewModel, '_id'>) {
		console.log(body);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		console.log('Delete', id);
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {
		console.log(productId);
	}
}
