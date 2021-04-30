import { withRouter } from 'react-router'

import { useContacts } from '../hooks/useContacts'

import { ContactList } from '../components/ContactList'
import { InputWithAction } from '../components/InputWithAction'

import '../styles/pages/Index.css'

const Index = ({history}) => {
  const { removeContact, filterContacts, filteredContacts } = useContacts()

  const goToRegistrationForm = () => history.push('/cadastro')

  return (
    <div>
      <InputWithAction
        actionClassName="add-contact"
        onChange={filterContacts}
        onClick={goToRegistrationForm}
      />
      <ContactList
        contacts={filteredContacts}
        handleRemoveContact={removeContact}
      />
    </div>
  )
}

const IndexWithRouter = withRouter(Index)

export {IndexWithRouter as Index}
