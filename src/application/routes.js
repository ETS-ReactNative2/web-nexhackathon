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
      <CustomRoute isPrivate exact path="/home" component={Home} />
      <CustomRoute isPrivate exact path="/submit" component={SubmitProject} />
      <CustomRoute isPrivate exact path="/home" component={Home} />
      <CustomRoute isPrivate exact path="/teams" component={Teams} />
      <CustomRoute isPrivate exact path="/team/create" component={CreateTeams} />

      {/* prevent not found route */}
      <CustomRoute path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  )
};
