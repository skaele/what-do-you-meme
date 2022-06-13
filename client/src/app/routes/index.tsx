import React from 'react'
import { privateRoutes, publicRoutes } from './configs'
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom'
import { userModel } from '@entities/users'

const Routes = () => {
    const { data } = userModel.selectors.useUser()
    const routes = !data.isAuthenticated ? publicRoutes : privateRoutes

    return (
        <RouterRoutes>
            {routes.map((path) => (
                <Route key={path.path} {...path} />
            ))}
            {/* {!data.isAuthenticated && <Route path="*" element={<Navigate to="/login" replace />} />} */}
            {!!data.isAuthenticated && <Route path="*" element={<Navigate to="/home" replace />} />}
        </RouterRoutes>
    )
}

export default Routes
