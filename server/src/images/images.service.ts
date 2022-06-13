import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { extname } from 'path'
import { Repository } from 'typeorm'
import { Image } from './entities/image.entity'

@Injectable()
export class ImagesService {
    constructor(@InjectRepository(Image) private imageRepository: Repository<Image>) {}

    async create(forms: Express.Multer.File[]) {
        const models: Image[] = forms.map(({ filename, mimetype, originalname }) => ({
            id: filename.split('.')[0],
            mimeType: mimetype,
            name: originalname.split('.')[0],
            extension: extname(filename),
            questions: [],
            solutions: [],
        }))

        return await this.imageRepository.save(models)
    }

    findAll() {
        return `This action returns all images`
    }
}
