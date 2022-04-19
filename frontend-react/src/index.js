import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Router from './Router';
import Footer from './pages/Footer'
import NavigationBar from 'pages/NavigationBar'



const App = () => {
  ReactDOM.render(
    <BrowserRouter>
    <NavigationBar />
      <Router />
      <Footer />
    </BrowserRouter>,
    document.getElementById('root'),
  )
}

App()