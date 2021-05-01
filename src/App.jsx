import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { ContactsProvider } from './state/ContactsContext'

import { Index } from './pages/Index'
import { Register } from './pages/Register'

export const App = () => (
  <ContactsProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/cadastro" exact component={Register} />
      </Switch>
    </BrowserRouter>
  </ContactsProvider>
)
