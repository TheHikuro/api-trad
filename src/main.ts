import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder()
    .setTitle('API Traductions')
    .setVersion('1.0.0')
    .build()

  if (process.env.NODE_ENV !== 'production') {
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('', app, document)
  }
  await app.listen(3000)
}
bootstrap()
