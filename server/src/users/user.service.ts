import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LoginUserDto } from './dto/login-user.dto'
import { SearchUserDto } from './dto/searchg-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ) {}

    create(dto: CreateUserDto) {
        return this.repository.save(dto)
    }

    findById(id: string) {
        return this.repository.findOne(id)
    }

    findByCond(cond: LoginUserDto) {
        return this.repository.findOne(cond)
    }

    update(id: string, dto: UpdateUserDto) {
        return this.repository.update(id, dto)
    }

    async search(dto: SearchUserDto) {
        const qb = this.repository.createQueryBuilder('u')

        qb.limit(dto.limit || 0)
        qb.take(dto.take || 10)

        if (dto.fullName) {
            qb.andWhere(`u.fullName ILIKE :fullName`)
        }

        if (dto.email) {
            qb.andWhere(`u.email ILIKE :email`)
        }

        qb.setParameters({
            email: `%${dto.email}%`,
            fullName: `%${dto.fullName}%`,
        })

        const [items, total] = await qb.getManyAndCount()

        return { items, total }
    }
}
