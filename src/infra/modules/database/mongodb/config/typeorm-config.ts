import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class MongoTypeOrmConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const host = this.configService.get('MONGO_DB_HOST');
    const port = this.configService.get('MONGO_DB_PORT');
    const username = this.configService.get('MONGO_DB_USER');
    const password = this.configService.get('MONGO_DB_PASS');
    const database = this.configService.get('MONGO_DB_NAME');

    return {
      name: 'mongo',
      type: 'mongodb',
      host,
      port: Number(port),
      username,
      password,
      database,
      logging: true,
      entities: [`./dist/src/infra/module/database/mongodb/entities/*.js`],
      retryWrites: true,
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
