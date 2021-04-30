import { RoundedPicture } from './RoundedPicture'

import '../styles/components/Contact.css'

export const Contact = ({id, picture, title, subtitle, onRemove}) => (
  <li className="contact-item">
    <RoundedPicture path={picture} />
    <div className="contact-details">
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
    <button className="remove-contact" onClick={() => onRemove(id)}>Remover</button>
  </li>
)
