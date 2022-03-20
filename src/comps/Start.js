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

const Start = () => {
  return (
    <article className='start'>

      <Logo />
      
      <p className='quote' tabIndex='0'>Curabitur tincidunt lorem lobortis lorem venenatis, et porttitor dui porttitor. Nam vel malesuada tortor.</p>

      <Link to='/logowanie' tabIndex='0'><button className='start-button button'>Zacznij</button></Link>

    </article>
  );
}

export default Start;
