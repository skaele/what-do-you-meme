import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { CardsService } from './cards.service'
import { CreateCardDto } from './dto/create-card.dto'
import { UpdateCardDto } from './dto/update-card.dto'

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) {}

    @Post()
    create(@Body() createCardDto: CreateCardDto) {
        return this.cardsService.create(createCardDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.cardsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cardsService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
        return this.cardsService.update(+id, updateCardDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cardsService.remove(+id)
    }
}
