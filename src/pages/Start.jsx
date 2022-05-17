import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Logo from '../svg/Logo';
import { useTabIndex } from '../utils/modules';

const firebaseConfig = {
  apiKey: 'AIzaSyAhkZ7DS7BcnGHEwMkpOPc_7K8j8rW8b-A',
  authDomain: 'homies-web.firebaseapp.com',
  projectId: 'homies-web',
  storageBucket: 'homies-web.appspot.com',
  messagingSenderId: '705309071530',
  appId: '1:705309071530:web:e0a1832d656b4001e198d3',
  measurementId: 'G-ZXJ9YDRLZM'
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

/**
 * Checking if user is authorised
 * @returns {boolean} Information if the user is authorised or not
 */
const isAuthorised = () => {
  try {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) return true;
      else return false;
    });
  } catch(error) {
    console.error(error);
  }
}

/**
 * Rendering start page of the app
 */
const Start = () => {

  useTabIndex();

  let destination = isAuthorised() ? '/zbieranina' : '/logowanie';

  return (
    <article className='start'>
      <Logo />
      <p className='quote' tabIndex='0'>Curabitur tincidunt lorem lobortis lorem venenatis, et porttitor dui porttitor. Nam vel malesuada tortor.</p>
      <Link to={destination}><button className='start-button button link'>Zacznij</button></Link>
    </article>
  );
}

export default Start;
