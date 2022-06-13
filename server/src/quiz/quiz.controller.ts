import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateQuestionDto } from './dto/create-question.dto'
import { QuizService } from './quiz.service'

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}

    @Get('get-quiz')
    getQuiz() {
        return this.quizService.getQuiz()
    }

    @Post('create-question')
    createQuestion(@Body() createQuestion: CreateQuestionDto) {
        return this.quizService.createQuestion(createQuestion)
    }

    @Post('get-quiz-result')
    getQuizResult(@Body() data: Record<string, string>) {
        return this.quizService.getQuizResult(data)
    }
}
