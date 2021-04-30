import { useContacts } from '../hooks/useContacts'

import { RegisterForm } from '../components/RegisterForm'

export const Register = () => {
  const { addContact } = useContacts()

  return <RegisterForm
    onClickBackButton={showContactList}
    onRegister={addContact}
  />
}
