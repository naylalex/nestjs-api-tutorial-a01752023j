import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const config = new DocumentBuilder()
  .setTitle('TC2005/CEM/401 API')
  .setDescription('A sample API for class')
  .setVersion('0.1')
  .build()

}
bootstrap();
