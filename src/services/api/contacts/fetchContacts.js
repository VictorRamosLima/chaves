import { api } from '../api'

export const fetchContacts = () => api.get('contacts')
