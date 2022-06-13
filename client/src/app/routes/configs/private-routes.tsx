import React from 'react'
import { PathRouteProps } from 'react-router-dom'

const GamePage = React.lazy(() => import('@pages/game'))
const HomePage = React.lazy(() => import('@pages/home'))
const QuizResultPage = React.lazy(() => import('@pages/quiz-result'))

export const privateRoutes: PathRouteProps[] = [
    { path: '/quiz', element: <GamePage /> },
    { path: '/home', element: <HomePage /> },
    { path: '/quiz-result', element: <QuizResultPage /> },
]
