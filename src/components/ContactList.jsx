import { Contact } from './Contact'

import '../styles/components/ContactList.css'

export const ContactList = ({handleRemoveContact, contacts}) => (
  <ul className="contact-list">
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        id={contact.id}
        picture={contact.picture}
        title={contact.name}
        subtitle={contact.telephone}
        onRemove={handleRemoveContact}
      />
    ))}
  </ul>
)
