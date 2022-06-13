import { IsEmail, Length } from 'class-validator'
import { UniqueOnDatabase } from '../../auth/validations/unique-validation'
import { User } from '../entities/user.entity'

export class CreateUserDto {
    @Length(3)
    fullName: string

    @IsEmail(undefined, { message: 'Неверная почта' })
    @UniqueOnDatabase(User, {
        message: 'Такая почта уже есть',
    })
    email: string

    @Length(6, 32, { message: 'Пароль должен минимум 6 символов' })
    password?: string
}
