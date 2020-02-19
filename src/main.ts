import { NestFactory } from '@nestjs/core';
import { CalculationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(CalculationModule);
  await app.listen(3000);
}
bootstrap();
