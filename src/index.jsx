import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <App className="app" />
  </React.StrictMode>,
  document.getElementById('root')
)
