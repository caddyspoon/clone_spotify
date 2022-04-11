import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import routes from './routes';

const App = () => {
  ReactDOM.render(
    <BrowserRouter>
      <routes />
    </BrowserRouter>,
    document.getElementById('root'),
  )
}

App()