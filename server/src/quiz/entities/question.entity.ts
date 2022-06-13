import { Image } from 'src/images/entities/image.entity'
import { Solution } from 'src/quiz/entities/solution.entity'
import { Column, Entity, ManyToOne, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinTable } from 'typeorm'
import { Quiz } from './quiz.entity'

@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        unique: false,
    })
    text: string

    @ManyToOne(() => Image, (image) => image.questions, { eager: true, nullable: true })
    image?: Image

    @OneToMany(() => Solution, (solution) => solution.question, { nullable: true })
    solutions?: Solution[]

    @ManyToMany(() => Quiz, (quiz) => quiz.questions, { nullable: true })
    @JoinTable()
    quizzes?: Quiz[]
}
