import { api } from '../api'

export const fetchContact = ({id}) => api.get(`contacts/${id}`)
