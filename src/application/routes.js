import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Context } from '../infra/Context/authContext'

import Landing from '../presenter/screens/Landing'
import Login from '../presenter/screens/Login'
import Home from '../presenter/screens/Home'
import SubmitProject from '../presenter/screens/Teams/Submit'
import NotFound from '../presenter/screens/NotFoundRoute'

function CustomRoute({ isPrivate, ...rest}) {
  const { loading, authenticated } = useContext(Context)

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
      <CustomRoute exact path="/" component={Landing} />
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact path="/home" component={Home} />
      <CustomRoute exact path="/submitProject" component={SubmitProject} />
      <CustomRoute isPrivate exact path="/home" component={Home} />

      {/* prevent not found route */}
      <CustomRoute path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  )
};