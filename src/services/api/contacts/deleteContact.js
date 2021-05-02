import { api } from '../api'

export const deleteContact = id => api.delete(`contacts/${id}`)
