import { withRouter } from 'react-router'

import { useContacts } from '../state/ContactsContext'
import { ContactList } from '../components/ContactList'
import { InputWithAction } from '../components/InputWithAction'

import '../styles/pages/Index.css'

const Index = ({history}) => {
  const { filterContacts } = useContacts()

  const goToRegistrationForm = () => history.push('/cadastro')

  return (
    <div>
      <InputWithAction
        actionClassName="add-contact"
        onChange={filterContacts}
        onClick={goToRegistrationForm}
      />
      <ContactList />
    </div>
  )
}

const IndexWithRouter = withRouter(Index)

export {IndexWithRouter as Index}
