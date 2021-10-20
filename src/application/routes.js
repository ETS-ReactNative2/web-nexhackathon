import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Context } from '../infra/Context/authContext'

import Landing from '../presenter/screens/Landing'
import Login from '../presenter/screens/Login'
import Home from '../presenter/screens/Home'
import Teams from '../presenter/screens/Teams'
import SubmitProject from '../presenter/screens/Submit'
import NotFound from '../presenter/screens/NotFoundRoute'
import CreateTeams from '../presenter/screens/CreateTeams'
import Register from '../presenter/screens/Register'

import Loader from '../presenter/screens/Loader'

function CustomRoute({ isPrivate, ...rest}) {
  const { loading, authenticated } = useContext(Context)

  if (loading) {
    return <Loader />
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
      <CustomRoute exact path="/submit" component={SubmitProject} />
      <CustomRoute exact path="/teams" component={Teams} />
      <CustomRoute exact path="/team/create" component={CreateTeams} />
      <CustomRoute exact path="/sign-up" component={Register} />

      {/* prevent not found route */}
      <CustomRoute path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  )
};
