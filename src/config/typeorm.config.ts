import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5423,
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'NestJS_CRUD',
    entities: [__dirname + '/../**/*.entity.{js, ts}'],
    synchronize: true
}