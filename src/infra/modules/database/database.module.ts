import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoModule } from './mongodb/mongo.module';

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [MongoModule],
})
export class DatabaseModule {}
