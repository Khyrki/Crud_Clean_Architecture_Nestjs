import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger/dist';
import { AppModule } from './infra/modules/app/app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Crud Clean Architecture')
    .setDescription(
      'Api exemplo utilizando os conceitos de clean architecture com nestJS',
    )
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(port, () =>
    console.log(`API disponivel em: http://localhost:${port}/swagger`),
  );
}
bootstrap();
