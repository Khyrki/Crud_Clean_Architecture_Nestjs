import { Provider } from '@nestjs/common';
import { CadastrarClienteUseCase } from 'src/application/cliente/useCases/cadastrar-cliente-use-case';
import { IClienteRepository } from 'src/domain/cliente/repositories/cliente-repository';
import { CADASTRAR_CLIENTE_USE_CASE } from '../../constants';
import { ClienteRepository } from '../../repositories/cliente.repository';

const useFactory = (clienteRepository: IClienteRepository) =>
  new CadastrarClienteUseCase(clienteRepository);

export const CadastrarClienteFactory: Provider = {
  provide: CADASTRAR_CLIENTE_USE_CASE,
  useFactory,
  inject: [ClienteRepository],
};
