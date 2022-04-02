import {
  Link
} from 'react-router-dom';

import Logo from './Logo';

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";

import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";

import {
  onAuthStateChanged,
  getAuth
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

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
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const isAuthorised = () => {

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {

    if (user) return true;
    else return false;

  });

}

const Start = () => {

  let destination = isAuthorised ? '/zbieranina' : '/logowanie';

  return (
    <article className='start'>

      <Logo />
      
      <p className='quote' tabIndex='0'>Curabitur tincidunt lorem lobortis lorem venenatis, et porttitor dui porttitor. Nam vel malesuada tortor.</p>

      <Link to={destination} tabIndex='0'><button className='start-button button'>Zacznij</button></Link>

    </article>
  );
}

export default Start;
