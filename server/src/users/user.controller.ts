import { Body, Controller, Get, Param, Patch, Query, Request, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { SearchUserDto } from './dto/searchg-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getProfile(@Request() req) {
        return this.userService.findById(req.user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('me')
    update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(req.user.id, updateUserDto)
    }

    @Get('search')
    search(@Query() dto: SearchUserDto) {
        return this.userService.search(dto)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findById(id)
    }
}
