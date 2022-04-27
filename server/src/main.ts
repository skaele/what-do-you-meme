import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { createDatabase } from 'typeorm-extension'
import postgresConnection from './core/postgres-connection'
import { ConnectionOptions } from 'typeorm'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
    await createDatabase({ ifNotExist: true, characterSet: 'UTF8' }, postgresConnection as ConnectionOptions)

    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(5000)
}

bootstrap()
