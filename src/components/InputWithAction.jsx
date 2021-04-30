import { Input } from './Input'

export const InputWithAction = ({actionClassName, onChange, onClick}) => (
  <div>
    <Input inputClass="buscar-contatos" onChange={() => onChange(value)} />
    <button type="button" className={actionClassName} onClick={() => onClick()} />
  </div>
)
