import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'

import {
  createContact,
  deleteContact,
  fetchContacts,
} from '../services/api/contacts'

const initialState = {
  filter: '',
  contacts: [],
}

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'FILTER':
      return {
        ...currentState,
        filter: action.payload,
      }
    case 'SET_CONTACTS':
      return {
        ...currentState,
        contacts: action.payload,
      }
    default:
      return currentState
  }
}

export const ContactsContext = createContext({})

export const ContactsProvider = ({children}) => {
  const [{ filter, contacts }, dispatch] = useReducer(reducer, initialState)

  const getContacts = () => fetchContacts().then(({data}) => dispatch({
    type: 'SET_CONTACTS',
    payload: data,
  }))

  useEffect(() => getContacts(), [])

  const filterContacts = value => dispatch({ type: 'FILTER', payload: value })
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

export const useContacts = () => useContext(ContactsContext)
