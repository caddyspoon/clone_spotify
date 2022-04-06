import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import Navbar and Footer
// import AdminPage from 'pages/AdminPage'
import NavigationBar from 'pages/NavigationBar'
// import Footer from 'pages/Footer'

// Pages
import HomePage from 'pages/HomePage'
// import PageNotFoundPage from 'pages/PageNotFoundPage'

// Components

const routes = (
  <>
    <NavigationBar />
    <Switch>
      <Route exact path='/' component={HomePage} />
      {/* <Route path='/*path' component={*path} /> */}


      {/* Admin Page */}
      {/* <Route path='/admin' component={AdminPage} /> */}


      {/* ATTENTION! ErrorPage should always be HERE */}
      {/* <Route path='/:string' component={PageNotFoundPage} /> */}
    </Switch>
  </>
)

export default routes
