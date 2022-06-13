import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { CreateQuestionDto } from './dto/create-question.dto'
import { Question } from './entities/question.entity'
import { Quiz } from './entities/quiz.entity'
import { Solution } from './entities/solution.entity'

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,

        @InjectRepository(Solution)
        private solutionRepository: Repository<Solution>,

        @InjectRepository(Quiz)
        private quizRepository: Repository<Quiz>,
    ) {}

    async getQuiz() {
        // const res = await this.questionRepository
        //     .createQueryBuilder()
        //     .select('question')
        //     .from(Question, 'question')
        //     .orderBy('RANDOM()')
        //     .leftJoinAndMapMany('question.solutions', Solution, 'solution', 'solution.questionId = question.id')
        //     .limit(4)
        //     .getMany()

        const res = await this.questionRepository.find({
            relations: ['solutions'],
            take: 3,
            select: ['id', 'text', 'image', 'solutions'],
        })

        return res
    }

    async getQuizResult(data: Record<string, string>) {
        const keys = Object.keys(data)
        let result = 0

        const questions = await this.questionRepository.find({ where: { id: In(keys) }, relations: ['solutions'] })

        for (const [key, value] of Object.entries(data)) {
            const right = questions.find((d) => d.id === key).solutions.find((d) => d.isRight)
            if (right.id === value) result++
        }

        return result
    }

    async createQuestion(createQuestion: CreateQuestionDto) {
        const question = await this.questionRepository.save({
            text: createQuestion.text,
            image: createQuestion.imageId ? { id: createQuestion.imageId } : null,
        })

        createQuestion.solutions.forEach(async (solution) => {
            await this.solutionRepository.save({
                image: solution.imageId ? { id: solution.imageId } : null,
                text: solution.text,
                question: question.id ? { id: question.id } : null,
                isRight: solution.isRight ?? false,
            })
        })
    }
}
