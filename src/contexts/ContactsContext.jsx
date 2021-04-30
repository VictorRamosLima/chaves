import { createContext, useMemo, useState } from 'react'

export const ContactsContext = createContext({})

export const ContactsProvider = ({children}) => {
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Chaves',
      telephone: '+52 1234-5671',
      picture: './fotos/chaves.jpg',
    },
    {
      id: 2,
      name: 'Chiquinha',
      telephone: '+52 1234-5672',
      picture: './fotos/chiquinha.jpg',
    },
    {
      id: 3,
      name: 'Sr. Barriga',
      telephone: '+52 1234-5673',
      picture: './fotos/barriga.jpg',
    }
  ])

  const filterContacts = value => setFilter(value.toLowerCase())
  const removeContact = id => setContacts(contacts.filter(contact => contact.id !== id))
  const addContact = contact => setContacts(
    [...contacts, {id: contacts[contacts.length - 1].id + 1, ...contact}]
  )

  const filteredContacts = useMemo(
    () => contacts.filter(contact => contact.name.toLowerCase().indexOf(filter) >= 0),
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
