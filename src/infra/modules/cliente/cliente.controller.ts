import { Body, HttpStatus, Post, Version } from '@nestjs/common';
import { Controller, Injectable } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CadastrarClienteDto } from 'src/domain/cliente/dtos/cadastrar-cliente.dto';
import { CadastrarClienteResponseSwagger } from './swagger/criar-cliente-response';

@Controller('cliente')
@ApiTags('Cliente')
@Injectable()
export class ClienteController {
  @Post()
  @Version('1')
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CadastrarClienteResponseSwagger,
  })
  cadastrarCliente(@Body() data: CadastrarClienteDto) {
    console.log(data);
    return { message: 'Cliente criado com sucesso' };
  }
}
