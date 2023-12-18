import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthModel } from './auth.model';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
	constructor(@InjectModel(AuthModel.name) private readonly authModel: Model<AuthModel>) {}

	async create(dto: AuthDto): Promise<AuthModel> {
		return this.authModel.create(dto);
	}
}
