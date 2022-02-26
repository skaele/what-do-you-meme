import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto)
    }

    findAll() {
        return this.userRepository.find()
    }

    findOne(id: string) {
        return `This action returns a #${id} user`
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: string) {
        return `This action removes a #${id} user`
    }
}
