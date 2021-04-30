import { useState } from 'react'

import { Input } from './Input'

export const RegisterForm = ({onRegister, onClickBackButton}) => {
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [picture, setPicture] = useState('')

  handleNameChange = value => setName(value)
  handleTelephoneChange = value => setTelephone(value)
  handlePictureChange = value => setPicture(value)

  return (
    <div id="cadastro">
      <form className="criar-contato-form">
        <h1>Criar novo contato</h1>

        <label>Nome: </label>
        <Input onChange={handleNameChange} />

        <label>Telefone: </label>
        <Input onChange={handleTelephoneChange} />

        <label>Foto: </label>
        <Input onChange={handlePictureChange} />

        <button className="voltar" type="button" onClick={() => onClickBackButton()}>
          Voltar
        </button>
        <button
          className="cadastrar"
          type="button"
          onClick={() => onRegister({name, telephone, picture})}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
