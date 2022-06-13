import { Request } from 'express'
import { extname } from 'path'
import { v4 as uuid } from 'uuid'

export const generateFileName = (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void,
) => {
    callback(null, `${uuid()}${extname(file.originalname)}`)
}
