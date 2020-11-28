import axios from 'axios'

const request = axios.create({ baseURL: process.env.VUE_APP_BASE_API })

export const api_index = data => request.post('/api/news/list', data)
export const api_message = data => request.post('/api/feedback/add', data)
export const api_mediaList = data => request.post('/api/news/list', data)
export const api_mediaDetail = data => request.post('/api/news/detail', data)
