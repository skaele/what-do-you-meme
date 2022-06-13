import { Quiz } from '@api/types/quiz/quiz'
import { api } from '@config/api'
import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

export const loadQuizFx = createEffect(async () => {
    const t = (await api.get<Quiz>('/quiz/get-quiz')).data

    return t
})

export const loadQuizResultFx = createEffect<Record<string, string>, number>(async (payload) => {
    const t = await api.post('/quiz/get-quiz-result', payload)
    return t.data
})

export const nextQuestion = createEvent()

const $quizStore = createStore<Quiz>([]).on(loadQuizFx.doneData, (_, next) => {
    return next
})
const $quizResult = createStore<number>(-1).on(loadQuizResultFx.doneData, (_, next) => {
    return next
})

export const useQuizStore = () => useStore($quizStore)
export const useQuiResultStore = () => useStore($quizResult)
