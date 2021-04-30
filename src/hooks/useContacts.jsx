import { useContext } from 'react'

import { ContactsContext } from '../contexts/ContactsContext'

export const useContacts = () => useContext(ContactsContext)
