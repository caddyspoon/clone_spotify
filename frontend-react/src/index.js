import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Route from './Route';

const App = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Route />
    </BrowserRouter>,
    document.getElementById('root'),
  )
}

App()