import { IsNotEmpty } from 'class-validator'
import { Solution } from 'src/quiz/entities/solution.entity'
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { Question } from './../../quiz/entities/question.entity'

@Entity()
export class Image {
    @PrimaryColumn('uuid')
    id: string

    @IsNotEmpty()
    @Column({ unique: false })
    name: string

    @IsNotEmpty()
    @Column({ unique: false })
    mimeType: string

    @IsNotEmpty()
    @Column({ unique: false })
    extension: string

    @IsNotEmpty()
    @OneToMany(() => Question, (question) => question.image)
    questions: Question[]

    @IsNotEmpty()
    @OneToMany(() => Solution, (solution) => solution.image)
    solutions: Solution[]
}
