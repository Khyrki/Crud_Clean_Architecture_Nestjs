import { CadastrarClienteResponse } from '../dtos/cadastrar-cliente-response';
import { CadastrarClienteDto } from '../dtos/cadastrar-cliente.dto';

export interface IClienteRepository {
  create(data: CadastrarClienteDto): Promise<CadastrarClienteResponse>;
}
