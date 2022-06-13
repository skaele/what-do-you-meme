export interface Question {
    id: string
    text: string
    imageId: string
    solutions: { id: string; text: string; image: { id: string; extension: string } }[]
}

export type Quiz = Array<Question>
