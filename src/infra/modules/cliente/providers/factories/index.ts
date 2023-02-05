import { Provider } from '@nestjs/common';
import { CadastrarClienteFactory } from './cadastrar-cliente-factory';

export const clienteProviders: Provider[] = [CadastrarClienteFactory];

export const clienteProvidersExports: Provider[] = [];
