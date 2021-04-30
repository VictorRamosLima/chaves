import { Input } from './Input'

import '../styles/components/InputWithAction.css'

export const InputWithAction = ({actionClassName, onChange, onClick}) => (
  <div>
    <Input inputClass="search-contacts" onChange={onChange} />
    <button type="button" className={actionClassName} onClick={() => onClick()} />
  </div>
)
