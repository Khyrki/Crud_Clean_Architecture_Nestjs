import { Cliente } from '@domain/cliente/entities/cliente';

export const clienteFactory = () => new Cliente('Fulano', 'M', 20);
