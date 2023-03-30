import { CadastrarClienteResponse } from '@domain/cliente/dtos/cadastrar-cliente-response';
import { CadastrarClienteDto } from 'src/domain/cliente/dtos/cadastrar-cliente.dto';
import { IClienteRepository } from 'src/domain/cliente/repositories/cliente-repository';
import { BaseService } from 'src/domain/shared/entities/base-service';

export class CadastrarClienteUseCase
  implements BaseService<CadastrarClienteDto, CadastrarClienteResponse>
{
  constructor(readonly clienteRepository: IClienteRepository) {}
  async execute(data: CadastrarClienteDto): Promise<CadastrarClienteResponse> {
    return await this.clienteRepository.create(data);
  }
}
