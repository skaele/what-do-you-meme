import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty } from 'class-validator'

@InputType()
export class UpdateUserInput {
    @Field()
    id: string

    @Field()
    @IsEmail()
    email: string

    @Field()
    @IsNotEmpty()
    name: string
}
