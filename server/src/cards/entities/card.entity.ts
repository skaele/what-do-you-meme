import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity()
export class Card {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: false })
    text: string
}
