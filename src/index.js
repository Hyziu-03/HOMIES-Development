import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css';
import reportWebVitals from './reportWebVitals';
import Start from './pages/Start';
import Zbieranina from './pages/Zbieranina';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Settings from './pages/Settings';
import PasswordRecovery from './pages/PasswordRecovery';
import Planer from './pages/Planer';
import Topics from './pages/Topics';
import Documents from './pages/Documents';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/rejestracja' element={<SignUp />} />
        <Route path='/zagadnienie' element={<Documents />} />
        <Route path='/planer' element={<Planer />} />
        <Route path='/ustawienia' element={<Settings />} />
        <Route path='/regulamin' element={<Terms />} />
        <Route path='/polityka-prywatnosci' element={<Privacy />} />
        <Route path='/odzyskaj-haslo' element={<PasswordRecovery /> } />
        <Route path='/zbieranina' element={<Zbieranina />} />
        <Route path='/zbieranina/polski' element={<Topics subject='Język polski'/>} />
        <Route path='/zbieranina/angielski' element={<Topics subject='Język angielski'/>} />
        <Route path='/zbieranina/matematyka' element={<Topics subject='Matematyka'/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
