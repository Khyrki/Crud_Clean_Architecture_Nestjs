import { ApiProperty } from '@nestjs/swagger';

export class CadastrarClienteResponseSwagger {
  @ApiProperty({
    type: String,
    example: 'asd1as35d45s4d5dsa54d3s',
  })
  id: string;

  @ApiProperty({
    type: String,
    example: 'Fulano de Tal',
  })
  nome: string;

  @ApiProperty({
    type: String,
    example: 'M',
  })
  sexo: string;

  @ApiProperty({
    type: Number,
    example: 18,
  })
  idade: number;
}
