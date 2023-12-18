import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductModelDocument = HydratedDocument<ProductModel>;

@Schema()
class ProductCharacteristic {
	@Prop()
	namer: string;

	@Prop()
	value: string;
}

export const ProductCharacteristicSchema = SchemaFactory.createForClass(ProductCharacteristic);

@Schema()
export class ProductModel {
	_id: string;

	@Prop()
	image: string;

	@Prop()
	title: string;

	@Prop()
	price: number;

	@Prop()
	oldPrice: number;

	@Prop()
	credit: number;

	@Prop()
	calculatedRating: number;

	@Prop()
	descripotion: string;

	@Prop()
	advantages: string;

	@Prop()
	disadvantages: string;

	@Prop({ type: [String] })
	categories: string[];

	@Prop({ type: [String] })
	tags: string[];

	@Prop({ type: [ProductCharacteristicSchema], _id: false })
	characteristics: ProductCharacteristic[];
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);
