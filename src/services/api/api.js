import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 15000,
})

export const imageBBApi = axios.create({
  baseURL: 'https://api.imgbb.com/1',
  timeout: 15000,
})
