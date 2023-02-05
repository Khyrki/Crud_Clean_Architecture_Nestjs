import { Module } from '@nestjs/common';
import { ClienteModule } from '../cliente/cliente.module';
import { HealthController } from './app.controller';

@Module({
  imports: [ClienteModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
