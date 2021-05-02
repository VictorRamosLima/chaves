import { api } from '../api'

export const fetchPicture = contactId => api.get(`contacts/${contactId}/picture`)
