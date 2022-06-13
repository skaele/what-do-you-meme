import { IsNotEmpty } from 'class-validator'

export class UpdateImageDto {
    @IsNotEmpty()
    name: string
}
