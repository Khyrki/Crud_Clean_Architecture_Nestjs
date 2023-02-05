import { Controller, Get, Injectable, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('Health')
@Injectable()
export class HealthController {
  @Get()
  @Version('1')
  async checkStatus() {
    return { status: 'API Running' };
  }
}
