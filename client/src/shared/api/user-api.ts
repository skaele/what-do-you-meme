import { api } from '@config/api'
import { LoginRequest } from './types/user/login-request'
import { RegistateRequest } from './types/user/registrate-request'
import { User } from './types/user/user'

export const get = (id: string) => api.get<User>(`users/${id}`)

export const authenticate = (input: LoginRequest) => api.post<LoginRequest, User>(`auth/login`, input)

export const registerate = (input: RegistateRequest) => api.post<RegistateRequest, User>(`auth/register`, input)
