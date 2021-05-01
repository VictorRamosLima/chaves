import { useState } from 'react'

import { Input } from './Input'

import '../styles/components/RegistrationForm.css'

export const RegistrationForm = ({handleFormSubmit, goToContactList}) => {
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [picture, setPicture] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const handleNameChange = value => {
    setErrorMessage('')
    setName(value)
  }

  const handleTelephoneChange = value => {
    setErrorMessage('')
    setTelephone(value)
  }

  const handlePictureChange = value => {
    setErrorMessage('')
    setPicture(value)
  }

  const submitForm = () => {
    if (name && telephone && picture) {
      handleFormSubmit({
        name,
        telephone,
        picture: `../assets/images/${picture.toLocaleLowerCase()}.jpg`
      }).then(goToContactList)
    } else {
      setErrorMessage('Todos os campos devem ser preenchidos')
    }
  }

  return (
    <div id="registration">
      <form className="registration-form">
        <h1>Criar novo contato</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <Input
          label="Nome:"
          onChange={handleNameChange}
          placeholder="Digite o nome"
        />

        <Input
          label="Telefone:"
          onChange={handleTelephoneChange}
          placeholder="Digite o telefone"
        />

        <Input
          label="Foto:"
          onChange={handlePictureChange}
          placeholder="Digite o nome do arquivo"
        />

        <button className="back" type="button" onClick={goToContactList}>
          Voltar
        </button>
        <button
          className="submit"
          type="button"
          onClick={() => submitForm()}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
