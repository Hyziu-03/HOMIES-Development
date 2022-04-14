// Firebase imports:

import {
  getAuth
} from "firebase/auth";

// Component imports:

import Menu from './Menu';

const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();
  
const toggleBrowser = () => setTimeout(() => document.getElementById('browser').style.display = 'block', 1000);

const Zbieranina = () => {

  rejectAccess();

  let url = 'https://www.matemaks.pl/';
  
  return (
    <article className='zbieranina'>

      <Menu />

      <h1 className='subpage-heading'>Jesteś w Zbieraninie!</h1>

      <iframe name='browser' id='browser' title='browser' className='browser'>
        Twoja przeglądarka niestety nie obsługuje elementu ramki iframe.
      </iframe>

      <button className='button'>
        <a href={url} target='browser' className='link' onClick={toggleBrowser}>Otwórz w ramce</a>
      </button>

    </article>
  );

}

export default Zbieranina;
