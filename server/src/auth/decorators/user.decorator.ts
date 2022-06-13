import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User as UserEntity } from '../../users/entities/user.entity'

export const UserData = createParamDecorator((_: unknown, ctx: ExecutionContext): UserEntity => {
    const request = ctx.switchToHttp().getRequest()
    return request.user.id
})
