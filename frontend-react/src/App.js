import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Routes from './Routes';
import Footer from './pages/Footer'

const App = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>,
    document.getElementById('root'),
  )
}

App()