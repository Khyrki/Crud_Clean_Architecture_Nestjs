import { Module } from '@nestjs/common';
import { ClienteModule } from '../cliente/cliente.module';
import { DatabaseModule } from '../database/database.module';
import { HealthController } from './app.controller';

@Module({
  imports: [ClienteModule, DatabaseModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
