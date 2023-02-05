import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDefined, IsNumber } from 'class-validator';

export class CadastrarClienteDto {
  @ApiProperty({
    type: String,
    example: 'Fulado de Tal',
  })
  @IsString()
  @IsDefined()
  nome: string;

  @ApiProperty({
    type: String,
    example: 'M',
  })
  @IsString()
  @IsDefined()
  sexo: string;

  @ApiProperty({
    type: Number,
    example: 18,
  })
  @IsNumber()
  @IsDefined()
  idade: number;
}
