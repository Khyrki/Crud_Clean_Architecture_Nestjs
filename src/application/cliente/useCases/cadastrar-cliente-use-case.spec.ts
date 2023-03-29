import { clienteFactory } from '@utils/cliente/factory/cliente-factory';
import { clienteRepositoryMock } from '@utils/cliente/mock/cliente-reposytory.mock';
import { CadastrarClienteUseCase } from './cadastrar-cliente-use-case';

describe('CadastrarClienteUseCase', () => {
  let sut: CadastrarClienteUseCase;
  beforeEach(() => {
    sut = new CadastrarClienteUseCase(clienteRepositoryMock);
  });

  test('Should register a new client', async () => {
    const cliente = clienteFactory();
    console.log(cliente);
    clienteRepositoryMock.create.mockResolvedValueOnce(cliente);
    const payload = {
      nome: 'Fulano',
      sexo: 'M',
      idade: 20,
    };
    const result = await sut.execute(payload);
    expect(result.nome).toBe('Fulano');
    expect(result.sexo).toBe('M');
    expect(result.idade).toBe(20);
  });
});
