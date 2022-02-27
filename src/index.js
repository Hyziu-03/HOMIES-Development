import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './comps/Start';
import Zbieranina from './comps/Zbieranina';
import Latest from './comps/Latest';
import Login from './comps/Login';
import SignUp from './comps/SignUp';

ReactDOM.render(
  <React.StrictMode>

    <Router>

      <Routes>

        <Route path='/' element={<App />} />
        <Route path='/zacznij' element={<Start />} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/rejestracja' element={<SignUp />} />
        <Route path='/zbieranina' element={<Zbieranina />} />
        <Route path='/ostatnie' element={<Latest />} />
        
      </Routes>

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
