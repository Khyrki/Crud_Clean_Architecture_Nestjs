import { CadastrarClienteDto } from 'src/domain/cliente/dtos/cadastrar-cliente.dto';
import { BaseService } from 'src/domain/shared/entities/base-service';

export class CadastrarClienteUseCase implements BaseService<any, any> {
  async execute(data: CadastrarClienteDto): Promise<any> {
    return {
      message: 'cliente cadastrado com sucesso',
      cliente: data,
    };
  }
}
