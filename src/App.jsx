import { ContactsProvider } from './contexts/ContactsContext'

import { Index } from './pages/Index'
import { Register } from './pages/Register'

export const App = () => {
  return (
    <ContactsProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/cadastro" component={Register} />
        </Switch>
      </BrowserRouter>
    </ContactsProvider>
  )
}
