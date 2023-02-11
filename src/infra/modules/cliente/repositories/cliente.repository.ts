import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IClienteRepository } from 'src/domain/cliente/repositories/cliente-repository';
import { ClienteEntityRepository } from './cliente-entity.repository';

@Injectable()
export class ClienteRepository implements IClienteRepository {
  constructor(
    @InjectRepository(ClienteEntityRepository, 'mongo')
    readonly clienteRepository: ClienteEntityRepository,
  ) {}

  async create(data: any): Promise<any> {
    return this.clienteRepository.save(data);
  }
}
