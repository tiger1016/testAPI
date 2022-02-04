import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Test API : MingLai')
    .setDescription('Testing Application interface for ENBX')
    .setVersion('0.0.1')
    .setContact('MingLai Li', 'https://github.com/tiger1016', 'applejuicy1016@gmail.com')
    .addTag('Status and Monitoring API', 'These functions are used to test event and balance')
    .build()
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
