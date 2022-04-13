// Firebase imports:

import {
  getAuth
} from "firebase/auth";

// Component imports:

import Menu from './Menu';

const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();
  
const Zbieranina = () => {

  rejectAccess();

  return (
    <article className='zbieranina'>
      <Menu />
      <h1 className='subpage-heading'>Jesteś w Zbieraninie!</h1>
    </article>
  );

}

export default Zbieranina;
