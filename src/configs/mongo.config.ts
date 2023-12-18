import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleFactoryOptions> => {
	return { uri: getUri(configService), ...getMongoOptions() };
};

const getUri = (configService: ConfigService): string => {
	const login = configService.get('MONGO_LOGIN');
	const password = configService.get('MONGO_PASSWORD');
	const host = configService.get('MONGO_HOST');
	const port = configService.get('MONGO_PORT');
	const db = configService.get('MONGO_AUTHDATABASE');
	return `mongodb://${login}:${password}@${host}:${port}/${db}`;
};

const getMongoOptions = () => ({ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
