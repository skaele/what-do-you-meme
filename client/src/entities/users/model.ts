import { RegistateRequest } from './../../shared/api/types/user/registrate-request'
import { createEffect, createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'
import { message } from 'antd'
import { LoginRequest } from '../../shared/api/types/user/login-request'
import { userApi } from '@api'
import { User } from '@api/types/user/user'

interface UserStore {
    currentUser: User | null
    isAuthenticated: boolean | null
    error: string | null
}

const getUserTokenFx = createEffect<LoginRequest, User>(async (params) => {
    try {
        const tokenResponse = await userApi.authenticate(params)

        localStorage.setItem('userData', JSON.stringify(tokenResponse))

        message.success('Успешно!')

        return tokenResponse
    } catch (e) {
        message.warn('Неверный логин или пароль')
        throw new Error('Неверный логин или пароль')
    }
})

const registreateUserFx = createEffect<RegistateRequest, User>(async (params) => {
    try {
        const tokenResponse = await userApi.registerate(params)

        localStorage.setItem('userData', JSON.stringify(tokenResponse))

        message.success('Успешно!')

        return tokenResponse
    } catch (e) {
        message.warn('Не удалось зарегистрироваться')
        throw new Error('Не удалось зарегистрироваться')
    }
})

const getUserFx = createEffect<User, UserStore>(async (data): Promise<UserStore> => {
    return { currentUser: data, isAuthenticated: !!data, error: '' }
})

const logoutFx = createEffect(() => localStorage.removeItem('userData'))

const useUser = () => {
    const { currentUser: user, error, isAuthenticated } = useStore($userStore)
    return {
        data: { user, isAuthenticated },
        loading: useStore(getUserTokenFx.pending),
        error: error,
    }
}

const login = createEvent<LoginRequest>()
const registrate = createEvent<RegistateRequest>()
const logout = createEvent()

forward({ from: registrate, to: registreateUserFx })
forward({ from: registreateUserFx.doneData, to: getUserFx })

forward({ from: login, to: getUserTokenFx })
forward({ from: getUserTokenFx.doneData, to: getUserFx })
forward({ from: logout, to: logoutFx })

export const tokenInStorage = JSON.parse(localStorage.getItem('userData') ?? 'null')

!!tokenInStorage && getUserFx(tokenInStorage)

const $userStore = createStore<UserStore>({
    currentUser: null,
    error: null,
    isAuthenticated: !!tokenInStorage,
})
    .on(getUserFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getUserFx.doneData, (_, newData) => newData)
    .on(getUserFx.failData, (_, newData) => ({
        error: newData.message,
        currentUser: null,
        isAuthenticated: null,
    }))
    .on(getUserTokenFx.failData, (_, error) => ({ isAuthenticated: null, currentUser: null, error: error.message }))
    .on(logout, () => ({
        error: '',
        isAuthenticated: null,
        currentUser: null,
    }))

export const selectors = {
    useUser,
}

export const events = {
    login,
    logout,
    registrate,
}
