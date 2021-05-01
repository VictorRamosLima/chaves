import { Contact } from './Contact'

import { useContacts } from '../state/ContactsContext'

import '../styles/components/ContactList.css'

export const ContactList = () => {
  const { filteredContacts: contacts } = useContacts()

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          picture={contact.picture}
          title={contact.name}
          subtitle={contact.telephone}
        />
      ))}
    </ul>
  )
}
