import React from 'react'
import { Router } from 'react-router-dom'

import { GlobalStyles } from './application/global_styles'

import Routes from './application/routes'
import history from './application/history'

import { AuthProvider } from './infra/Context/authContext'
function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </AuthProvider>
  );
}

export default App;
