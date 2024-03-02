import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';



const root = ReactDOM.createRoot(document.getElementById('root'));

//render the React element at that root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);