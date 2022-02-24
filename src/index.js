import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './comps/Login';
import Zbieranina from './comps/Zbieranina';
import Latest from './comps/Latest';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/zbieranina' element={<Zbieranina />} />
        <Route path='/ostatnie' element={<Latest />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
