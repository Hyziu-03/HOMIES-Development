import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Zbieranina from './Zbieranina';
import Calendar from './Calendar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/zbieranina' element={<Zbieranina />} />
        <Route path='/kalendarz' element={<Calendar />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
