import { api } from '../api'

export const createPicture = ({contactId, url, deleteUrl}) => api.post(
  `contacts/${contactId}/pictures`,
  { url, deleteUrl },
  { headers: { 'Content-Type': 'application/json' } }
)
