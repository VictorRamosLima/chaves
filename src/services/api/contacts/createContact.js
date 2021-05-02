import { api } from '../api'

export const createContact = ({name, telephone}) => api.post(
  'contacts',
  { name, telephone },
  { headers: { 'Content-Type': 'application/json' } }
)
