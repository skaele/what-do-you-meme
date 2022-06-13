import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { CardsModule } from './cards/cards.module'
import { Card } from './cards/entities/card.entity'
import postgresConnection from './core/postgres-connection'
import { Image } from './images/entities/image.entity'
import { ImagesModule } from './images/images.module'
import { User } from './users/entities/user.entity'
import { UserModule } from './users/user.module'
import { QuizModule } from './quiz/quiz.module'
import { Question } from './quiz/entities/question.entity'
import { Quiz } from './quiz/entities/quiz.entity'
import { Solution } from './quiz/entities/solution.entity'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...postgresConnection,
            entities: [User, Image, Card, Question, Quiz, Solution],
        }),
        UserModule,
        AuthModule,
        CardsModule,
        ImagesModule,
        QuizModule,
    ],
})
export class AppModule {}
