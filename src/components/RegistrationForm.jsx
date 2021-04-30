import { useState } from 'react'

import { Input } from './Input'

import '../styles/components/RegistrationForm.css'

export const RegistrationForm = ({handleFormSubmit, handleBackButtonClick}) => {
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [picture, setPicture] = useState('')

  const handleNameChange = value => setName(value)
  const handleTelephoneChange = value => setTelephone(value)
  const handlePictureChange = value => setPicture(value)

  return (
    <div id="registration">
      <form className="registration-form">
        <h1>Criar novo contato</h1>

        <label>Nome: </label>
        <Input onChange={handleNameChange} />

        <label>Telefone: </label>
        <Input onChange={handleTelephoneChange} />

        <label>Foto: </label>
        <Input onChange={handlePictureChange} />

        <button className="back" type="button" onClick={handleBackButtonClick}>
          Voltar
        </button>
        <button
          className="submit"
          type="button"
          onClick={() => handleFormSubmit({name, telephone, picture})}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
