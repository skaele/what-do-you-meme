import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import postgresConnection from './core/postgres-connection'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { UsersModule } from './users/users.module'
import { User } from './users/entities/user.entity'
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...postgresConnection,
            entities: [User],
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/schema.gql',
            playground: false,
            sortSchema: true,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
