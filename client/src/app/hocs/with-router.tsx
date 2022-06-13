import React from 'react'
import { NavigateFunction, useLocation, useNavigate, useParams } from 'react-router'

export interface RoutedProps<Params = unknown, State = unknown> {
    location: State
    navigate: NavigateFunction
    params: Params
}

export const withRouter = <P extends RoutedProps>(Child: React.FC<P>) => {
    // eslint-disable-next-line react/display-name
    return (props: Omit<P, keyof RoutedProps>) => {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return <Child {...(props as P)} navigate={navigate} location={location} params={params} />
    }
}
