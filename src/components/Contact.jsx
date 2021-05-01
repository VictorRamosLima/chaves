import { RoundedPicture } from './RoundedPicture'

import { useContacts } from '../state/ContactsContext'

import '../styles/components/Contact.css'

export const Contact = ({id, picture, title, subtitle}) => {
  const { removeContact } = useContacts()

  return (
    <li className="contact-item">
      <RoundedPicture path={picture} />
      <div className="contact-details">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <button className="remove-contact" onClick={() => removeContact(id)}>
        Remover
      </button>
    </li>
  )
}
