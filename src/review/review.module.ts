import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModel, ReviewModelSchema } from './review.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: ReviewModel.name, schema: ReviewModelSchema }])],
	controllers: [ReviewController],
})
export class ReviewModule {}
