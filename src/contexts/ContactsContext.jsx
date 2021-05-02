import { createContext, useEffect, useMemo, useState } from 'react'

import { createContact, deleteContact } from '../services/use_cases'

export const ContactsContext = createContext({})

export const ContactsProvider = ({children}) => {
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState([])

  useEffect(() => fetchContacts().then(({data}) => setContacts(data)), [])

  const filterContacts = value => setFilter(value.toLowerCase())
  const removeContact = id => deleteContact(setContacts)(id)
  const addContact = contact => createContact(setContacts)(contact)

  const filteredContacts = useMemo(
    () => contacts.filter(({name}) => name.toLowerCase().indexOf(filter) >= 0),
    [contacts, filter]
  )

  return (
    <ContactsContext.Provider value={{
      addContact,
      removeContact,
      filterContacts,
      filteredContacts,
    }}>
      {children}
    </ContactsContext.Provider>
  )
}
