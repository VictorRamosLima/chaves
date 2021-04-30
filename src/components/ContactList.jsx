import { Contact } from './Contact'

export const ContactList = ({handleRemoveContact, contacts}) => (
  <ul>
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
