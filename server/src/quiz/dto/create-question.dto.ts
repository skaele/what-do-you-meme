export class CreateQuestionDto {
    text?: string

    imageId?: string

    solutions: { text?: string; imageId?: string; isRight?: boolean }[]
}
