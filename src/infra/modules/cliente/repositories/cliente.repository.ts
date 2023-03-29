import { ClienteEntity } from '@infra/modules/database/mongodb/entities/cliente.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IClienteRepository } from 'src/domain/cliente/repositories/cliente-repository';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteRepository implements IClienteRepository {
  constructor(
    @InjectRepository(ClienteEntity, 'mongo')
    readonly clienteRepository: Repository<ClienteEntity>,
  ) {}

  async create(data: any): Promise<any> {
    return this.clienteRepository.save(data);
  }
}
