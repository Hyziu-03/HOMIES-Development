// Firebase imports:

import {
  getAuth
} from "firebase/auth";

// Component imports:

import Menu from './Menu';
import Angielski from '../img/Angielski';
import Polski from '../img/Polski';
// import Matematyka from '../img/Matematyka';

const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();

const Zbieranina = () => {

  rejectAccess();
  
  return (
    <article className='zbieranina'>

      <Menu />

      <h1 className='subpage-heading'><span className='greeting'>Cześć, XYZ!</span> <br/>   Czego chesz się dzisiaj nauczyć?</h1>

      <input type='search' placeholder='Wyszukaj' className='search-bar'/>

        <h2 className='subjects-heading'>Przedmioty</h2>
        
        <article className='subject-tiles'>

          <section className='subject-tile polski'>
            <Polski />
            <span className='subject-name'>Polski</span>
          </section>
          
          <section className='subject-tile'>
            <Angielski />
            <span className='subject-name'>Angielski</span>
          </section>

        </article>

    </article>
  );

}

export default Zbieranina;
