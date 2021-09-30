import React from 'react'
import { Router } from 'react-router-dom'

import { GlobalStyles } from './application/global_styles'
import { ThemeProvider } from '@mui/material/styles';

import Routes from './application/routes'
import history from './application/history'

import { AuthProvider } from './infra/Context/authContext'

import theme from './application/theme';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
