import React from 'react'
import { Route, Routes } from 'react-router-dom'

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
    <Routes>
      <Route path='/' element={<HomePage />} />
      {/* <Route path='/*path' component={*path} /> */}


      {/* Admin Page */}
      {/* <Route path='/admin' component={AdminPage} /> */}


      {/* ATTENTION! ErrorPage should always be HERE */}
      {/* <Route path='/:string' component={PageNotFoundPage} /> */}
    </Routes>
  </>
)

export default routes
