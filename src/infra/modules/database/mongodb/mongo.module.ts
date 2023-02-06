import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongoConfigEnviroments } from './config/envs';
import { MongoTypeOrmConfig } from './config/typeorm-config';

@Global()
@Module({
  providers: [ConfigService],
  exports: [
    ConfigService,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongoTypeOrmConfig,
      name: 'mongo',
    }),
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfigEnviroments],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongoTypeOrmConfig,
      name: 'mongo',
    }),
  ],
})
export class MongoModule {}
