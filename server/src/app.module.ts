import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import postgresConnection from './app-settings/postgres-connection'
import { User } from './user/entities/user.entity'
import { PostModule } from './post/post.module';

@Module({
    imports: [UserModule, TypeOrmModule.forRoot({ ...postgresConnection, entities: [User] }), PostModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
