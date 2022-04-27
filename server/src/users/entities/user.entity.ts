import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column()
    name: string

    @Field()
    @Column({ unique: true })
    login: string

    @Field()
    @Column({ unique: true })
    email: string

    @Field()
    @Column()
    password: string
}
