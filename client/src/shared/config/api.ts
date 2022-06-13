import { getToken } from '@entities/users/lib'
import axios from 'axios'

export const api = axios.create({ baseURL: `http://localhost:5000` })

api.interceptors.request.use((config) => {
    if (config.headers) config.headers.Authorization = `Bearer ${getToken()}`
    return config
})
