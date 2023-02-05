import { Provider } from '@nestjs/common';
import { CadastrarClienteUseCase } from 'src/application/cliente/useCases/cadastrar-cliente-use-case';
import { CADASTRAR_CLIENTE_USE_CASE } from '../constants';

const useFactory = () => new CadastrarClienteUseCase();

export const CadastrarClienteFactory: Provider = {
  provide: CADASTRAR_CLIENTE_USE_CASE,
  useFactory,
  inject: [],
};
