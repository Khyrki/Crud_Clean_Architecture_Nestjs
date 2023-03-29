import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from '../database/mongodb/entities/cliente.entity';
import { ClienteController } from './cliente.controller';
import {
  clienteProviders,
  clienteProvidersExports,
} from './providers/factories';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity], 'mongo')],
  controllers: [ClienteController],
  providers: clienteProviders,
  exports: clienteProvidersExports,
})
export class ClienteModule {}
