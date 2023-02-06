import { CadastrarClienteDto } from 'src/domain/cliente/dtos/cadastrar-cliente.dto';
import { IClienteRepository } from 'src/domain/cliente/repositories/cliente-repository';
import { BaseService } from 'src/domain/shared/entities/base-service';

export class CadastrarClienteUseCase implements BaseService<any, any> {
  constructor(readonly clienteRepository: IClienteRepository) {}
  async execute(data: CadastrarClienteDto): Promise<any> {
    return await this.clienteRepository.create(data);
  }
}
