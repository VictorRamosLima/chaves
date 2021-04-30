import { RoundedPicture } from './RoundedPicture'

export const Contact = ({id, picture, title, subtitle, onRemove}) => (
  <li className="contato-lista-item">
    <RoundedPicture path={picture} />
    <div className="contato-detalhes">
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
    <button className="contato-remover" onClick={() => onRemove(id)}>Remover</button>
  </li>
)
