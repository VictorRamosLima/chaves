import { useContacts } from '../hooks/useContacts'

import { ContactList } from '../components/ContactList'
import { InputWithAction } from '../components/InputWithAction'

export const Index = () => {
  const { removeContact, filterContacts, filteredContacts } = useContacts()

  return (
    <div>
      <InputWithAction
        actionClassName="adicionar-contato"
        onChange={filterContacts}
        onClick={showRegister}
      />
      <ContactList
        contacts={filteredContacts}
        handleRemoveContact={removeContact}
      />
    </div>
  )
}
