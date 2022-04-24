// React imports: 

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

// Component imports:

import './styles/styles.css';
import reportWebVitals from './reportWebVitals';
import Start from './comps/Start';
import Zbieranina from './comps/Zbieranina';
import Login from './comps/Login';
import SignUp from './comps/SignUp';
import Privacy from './comps/Privacy';
import Terms from './comps/Terms';
import Settings from './comps/Settings';
import PasswordRecovery from './comps/PasswordRecovery';

ReactDOM.render(
  <React.StrictMode>

    <Router>

      <Routes>

        <Route path='/' element={<Start />} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/rejestracja' element={<SignUp />} />
        <Route path='/zbieranina' element={<Zbieranina />} />
        <Route path='/ustawienia' element={<Settings />} />
        <Route path='/regulamin' element={<Terms />} />
        <Route path='/polityka-prywatnosci' element={<Privacy />} />
        <Route path='/odzyskaj-haslo' element={<PasswordRecovery /> } />
        
      </Routes>

    </Router>

  </React.StrictMode>,
  
  document.getElementById('root')
);

reportWebVitals();
