import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [],
  exports: [],
})
export class ClienteModule {}
