import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'
import { IsEmail } from 'class-validator'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    login: string

    @Column({ nullable: true })
    @IsEmail()
    email?: string

    @Column()
    password: string
}
