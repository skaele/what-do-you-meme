import { InputType, Field } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty } from 'class-validator'

@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    login: string

    @Field()
    @IsNotEmpty()
    name: string

    @Field()
    @IsEmail()
    email: string

    @Field()
    password: string
}
