import { MockProxy } from 'jest-mock-extended';
import mock from 'jest-mock-extended/lib/Mock';
import { ClienteRepository } from 'src/infra/modules/cliente/repositories/cliente.repository';

export const clienteRepositoryMock: MockProxy<ClienteRepository> = mock();
