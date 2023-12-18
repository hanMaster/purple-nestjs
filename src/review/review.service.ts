import { Review } from './review.schema';
import { DeleteResult } from 'mongodb';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ModifyResult, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constants';

@Injectable()
export class ReviewService {
	constructor(@InjectModel(Review.name) private readonly reviewModel: Model<Review>) {}

	async create(dto: CreateReviewDto): Promise<Review> {
		return await this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<ModifyResult<Review>> {
		const deletedReview = await this.reviewModel.findByIdAndDelete(id).exec();
		if (!deletedReview) {
			throw new NotFoundException(REVIEW_NOT_FOUND);
		}
		return deletedReview;
	}

	async deleteByProductId(productId: string): Promise<DeleteResult> {
		const deleted = await this.reviewModel.deleteMany({ productId: new Types.ObjectId(productId) }).exec();
		return deleted;
	}

	async findByProductId(productId: string): Promise<Review[]> {
		const review = await this.reviewModel
			.find({
				productId: new Types.ObjectId(productId),
			})
			.exec();
		return review;
	}
}
