import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp } from 'firebase-admin/app';
import { credential } from 'firebase-admin';

async function bootstrap() {
  initializeApp({
    credential: credential.applicationDefault(),
  });

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4444);
}
bootstrap();
