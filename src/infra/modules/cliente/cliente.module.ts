import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import {
  clienteProviders,
  clienteProvidersExports,
} from './providers/factories';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: clienteProviders,
  exports: clienteProvidersExports,
})
export class ClienteModule {}
