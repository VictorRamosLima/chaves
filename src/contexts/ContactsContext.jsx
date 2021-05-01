import { createContext, useEffect, useMemo, useState } from 'react'

import { createContact, deleteContact, fetchContacts } from '../services/api/contacts'

export const ContactsContext = createContext({})

export const ContactsProvider = ({children}) => {
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState([])

  const getContacts = () => fetchContacts().then(({data}) => setContacts(data))

  useEffect(() => getContacts(), [])

  const filterContacts = value => setFilter(value.toLowerCase())
  const removeContact = id => deleteContact({id}).then(_ => getContacts())
  const addContact = contact => createContact(contact).then(_ => getContacts())

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
