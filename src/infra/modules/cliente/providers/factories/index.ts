import { Provider } from '@nestjs/common';
import { ClienteRepository } from '../../repositories/cliente.repository';
import { CadastrarClienteFactory } from './cadastrar-cliente-factory';

export const clienteProviders: Provider[] = [
  CadastrarClienteFactory,
  ClienteRepository,
];

export const clienteProvidersExports: Provider[] = [];
