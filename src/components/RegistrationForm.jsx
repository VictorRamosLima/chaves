import { useReducer } from 'react'
import { withRouter } from 'react-router'

import { useContacts } from '../state/ContactsContext'
import { Input } from './Input'

import '../styles/components/RegistrationForm.css'

const initialState = {
  name: '',
  telephone: '',
  picture: '',
  errorMessage: '',
}

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...currentState,
        name: action.payload,
        errorMessage: '',
      }
    case 'SET_TELEPHONE':
      return {
        ...currentState,
        telephone: action.payload,
        errorMessage: '',
      }
    case 'SET_PICTURE':
      return {
        ...currentState,
        picture: action.payload,
        errorMessage: '',
      }
    case 'SET_ERROR_MESSAGE':
      return {
        ...currentState,
        errorMessage: action.payload,
      }
    default:
      return currentState
  }
}

const RegistrationForm = ({history}) => {
  const { addContact } = useContacts()
  const [
    {name, telephone, picture, errorMessage},
    dispatch
  ] = useReducer(reducer, initialState)

  const goToContactList = () => history.push('/')

  const handleNameChange = value => dispatch({
    type: 'SET_NAME',
    payload: value
  })
  const handleTelephoneChange = value => dispatch({
    type: 'SET_TELEPHONE',
    payload: value
  })
  const handlePictureChange = value => dispatch({
    type: 'SET_PICTURE',
    payload: value
  })

  const submitForm = () => {
    if (name && telephone && picture) {
      addContact({
        name,
        telephone,
        picture: `/assets/images/${picture.toLocaleLowerCase()}.jpg`
      }).then(goToContactList)
    } else {
      dispatch({
        type: 'SET_PICTURE',
        payload: 'Todos os campos devem ser preenchidos'
      })
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

const RegistrationFormWithRouter = withRouter(RegistrationForm)

export {RegistrationFormWithRouter as RegistrationForm}
