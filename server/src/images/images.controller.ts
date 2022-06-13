import { Body, Controller, Get, Param, Patch, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { generateFileName } from './helpers/generate-file-name'
import { imageFileFilter } from './helpers/image-file-filter'
import { ImagesService } from './images.service'

@Controller('images')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) {}

    @UseInterceptors(
        FilesInterceptor('files', 20, {
            storage: diskStorage({
                destination: './uploads',
                filename: generateFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    @Post()
    create(@UploadedFiles() files: Express.Multer.File[]) {
        return this.imagesService.create(files)
    }

    @Get()
    findAll() {
        return this.imagesService.findAll()
    }

    @Get(':img')
    seeUploadedFile(@Param('img') image, @Res() res) {
        return res.sendFile(image, { root: './uploads' })
    }
    Te
}
