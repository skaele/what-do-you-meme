import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    create(createUserInput: CreateUserInput) {
        return this.userRepository.save(createUserInput)
    }

    findAll() {
        return this.userRepository.find()
    }

    findOne(id: string) {
        return this.userRepository.findOne(id)
    }

    async update(id: string, updateUserInput: UpdateUserInput) {
        const user = await this.userRepository.findOne(id)

        if (!user) {
            throw new HttpException('User is not found', HttpStatus.NOT_FOUND)
        }

        user.email = updateUserInput.email
        user.name = updateUserInput.name
        await user.save()

        return user
    }
}
