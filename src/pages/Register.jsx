import { withRouter } from 'react-router'

import { useContacts } from '../hooks/useContacts'

import { RegistrationForm } from '../components/RegistrationForm'

const Register = ({history}) => {
  const { addContact } = useContacts()

  const goToContactList = () => history.push('/')

  return <RegistrationForm
    goToContactList={goToContactList}
    handleFormSubmit={addContact}
  />
}

const RegisterWithRouter = withRouter(Register)

export {RegisterWithRouter as Register}
