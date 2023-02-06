import { Body, HttpStatus, Post, Version } from '@nestjs/common';
import { Controller, Inject, Injectable } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CadastrarClienteUseCase } from 'src/application/cliente/useCases/cadastrar-cliente-use-case';
import { CadastrarClienteDto } from 'src/domain/cliente/dtos/cadastrar-cliente.dto';
import { CADASTRAR_CLIENTE_USE_CASE } from './constants';
import { CadastrarClienteResponseSwagger } from './swagger/criar-cliente-response';

@Controller('cliente')
@ApiTags('Cliente')
@Injectable()
export class ClienteController {
  constructor(
    @Inject(CADASTRAR_CLIENTE_USE_CASE)
    private readonly cadastrarClienteUseCase: CadastrarClienteUseCase,
  ) {}

  @Post()
  @Version('1')
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CadastrarClienteResponseSwagger,
  })
  async cadastrarCliente(@Body() data: CadastrarClienteDto) {
    return await this.cadastrarClienteUseCase.execute(data);
  }
}
