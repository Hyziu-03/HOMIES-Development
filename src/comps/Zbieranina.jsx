// Firebase imports:

import {
  getAuth
} from "firebase/auth";

// Component imports:

import Menu from './Menu';
import MockSubject from '../img/MockSubject';
import MockElement from "../img/MockElement";

const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();

const Zbieranina = () => {

  rejectAccess();
  
  return (
    <article className='zbieranina'>

      <Menu />

      <h1 className='subpage-heading'><span className='greeting'>Cześć, XYZ!</span> <br/> Czego chesz się dzisiaj nauczyć?</h1>

      <input type='search' placeholder='Wyszukaj' className='search-bar'/>

      <h2 className='subjects-heading'>Przedmioty</h2>
        
      <article className='subject-tiles'>

        <section className='subject-tile'>
          <MockSubject />
          <hr className='subject-tile-break'/>
          <span className='subject-name'>Język polski</span>
        </section>

        <section className='subject-tile'>
          <MockSubject />
          <hr className='subject-tile-break'/>
          <span className='subject-name'>Język angielski</span>
        </section>

      </article>

      <h2 className="subjects-heading">Ostatnie lekcje</h2>

      <article className="last-lessons">
        <MockElement />
        <span className="lesson-name">Młoda Polska</span>
      </article>

      <article className="last-lessons">
        <MockElement />
        <span className="lesson-name">Wesele Wyspiańskiego</span>
      </article>

    </article>
  );

}

export default Zbieranina;
