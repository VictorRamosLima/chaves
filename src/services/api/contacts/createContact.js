import { api } from '../api'

export const createContact = ({name, telephone, picture}) => api.post(
  'contacts',
  { name, telephone, picture },
  { headers: { 'Content-Type': 'application/json' } }
)
