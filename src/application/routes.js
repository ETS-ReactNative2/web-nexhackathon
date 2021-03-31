import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Context } from '../infra/Context/authContext'

import Login from '../presenter/screens/Login'
import Dashboard from '../presenter/screens/Dashboard'

function CustomRoute({ isPrivate, ...rest}) {
  const { authenticated, loading } = useContext(Context)

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if (isPrivate && !authenticated) {
    return <Redirect to='/login' />
  }

  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute isPrivate exact path="/dashboard" component={Dashboard} />
    </Switch>
  )
}