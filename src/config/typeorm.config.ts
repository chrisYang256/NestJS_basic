import * as config from 'config';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const dbConfig = config.get('db')

export const typeORMConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    host: process.env.RDS_HOST || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DATABASE || dbConfig.database,
    entities: [__dirname + '/../**/*.entity.{js, ts}'],
    synchronize: dbConfig.synchronize
}