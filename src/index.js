import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/styles.css';
import reportWebVitals from './reportWebVitals';
import Start from './comps/Start';
import Zbieranina from './comps/Zbieranina';
import Latest from './comps/Latest';
import Login from './comps/Login';
import SignUp from './comps/SignUp';
import Privacy from './comps/Privacy';
import Terms from './comps/Terms';
import Settings from './comps/Settings';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhkZ7DS7BcnGHEwMkpOPc_7K8j8rW8b-A",
  authDomain: "homies-web.firebaseapp.com",
  projectId: "homies-web",
  storageBucket: "homies-web.appspot.com",
  messagingSenderId: "705309071530",
  appId: "1:705309071530:web:e0a1832d656b4001e198d3",
  measurementId: "G-ZXJ9YDRLZM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>

    <Router>

      <Routes>

        <Route path='/' element={<Start />} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/rejestracja' element={<SignUp />} />
        <Route path='/zbieranina' element={<Zbieranina />} />
        <Route path='/ostatnie' element={<Latest />} />
        <Route path='/ustawienia' element={<Settings />} />
        <Route path='/regulamin' element={<Terms />} />
        <Route path='/polityka-prywatnosci' element={<Privacy />} />
        
      </Routes>

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
