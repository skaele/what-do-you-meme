import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { createDatabase } from 'typeorm-extension'
import postgresConnection from './app-settings/postgres-connection'
import { ConnectionOptions } from 'typeorm'

async function bootstrap() {
    await createDatabase({ ifNotExist: true, characterSet: 'UTF8' }, postgresConnection as ConnectionOptions)

    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
}

bootstrap()
