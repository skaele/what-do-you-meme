import { Image } from 'src/images/entities/image.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Question } from './question.entity'

@Entity('solutions')
export class Solution {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        unique: false,
    })
    text: string

    @Column()
    isRight: boolean

    @ManyToOne(() => Image, (image) => image.solutions, { eager: true, nullable: true })
    image?: Image

    @ManyToOne(() => Question, (question) => question.solutions, { eager: true, nullable: true })
    question?: Question
}
