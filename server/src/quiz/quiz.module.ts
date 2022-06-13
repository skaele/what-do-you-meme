import { Question } from './entities/question.entity'
import { Quiz } from './entities/quiz.entity'
import { Solution } from './entities/solution.entity'
import { Module } from '@nestjs/common'
import { QuizService } from './quiz.service'
import { QuizController } from './quiz.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([Question, Quiz, Solution])],
    controllers: [QuizController],
    providers: [QuizService],
})
export class QuizModule {}
