import React from 'react'
import { PathRouteProps } from 'react-router-dom'

const LoginPage = React.lazy(() => import('@pages/login'))
const RegistrationPage = React.lazy(() => import('@pages/registration'))

export const publicRoutes: PathRouteProps[] = [
    { path: '/login', element: <LoginPage /> },
    { path: '/registration', element: <RegistrationPage /> },
]
