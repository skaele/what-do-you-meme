import { Question } from './question.entity'
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('quizzes')
export class Quiz {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(() => Question, (question) => question.quizzes, {
        eager: false,
    })
    @JoinTable()
    questions: Question[]
}
