import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ImagesService } from './images.service'
import { ImagesController } from './images.controller'
import { Image } from './entities/image.entity'

@Module({
    controllers: [ImagesController],
    providers: [ImagesService],
    imports: [TypeOrmModule.forFeature([Image])],
})
export class ImagesModule {}
