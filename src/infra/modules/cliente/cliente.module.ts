import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from '../database/mongodb/entities/cliente.entity';
import { ClienteController } from './cliente.controller';
import {
  clienteProviders,
  clienteProvidersExports,
} from './providers/factories';
import { ClienteEntityRepository } from './repositories/cliente-entity.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClienteEntity, ClienteEntityRepository], 'mongo'),
  ],
  controllers: [ClienteController],
  providers: clienteProviders,
  exports: clienteProvidersExports,
})
export class ClienteModule {}
