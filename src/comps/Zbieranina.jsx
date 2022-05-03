// React imports: 

import {
  Link
} from 'react-router-dom';

// Firebase imports:

import {
  getAuth
} from "firebase/auth";

// Component imports:

import Menu from './Menu';
import MockImage from './MockImage';
import SearchIcon from '../svg/SearchIcon';

const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();

const Zbieranina = () => {

  rejectAccess();
  
  return (
    <article className='zbieranina'>

      <Menu />

      <h1 className='secondary-heading'>
        <span className='greeting'>Cześć, XYZ!</span> 
        <br/> Czego chesz się dzisiaj nauczyć?
      </h1>

      <span className="search">
        <SearchIcon />
        <input type='search' placeholder='Wyszukaj' className='search-bar'/>
      </span>

      <h2 className='tertiary-heading'>Przedmioty</h2>

      <article className='subject-tiles'>

        <Link to ='/zbieranina/wybor-klasy' className='link'>
          <section className='subject-tile'>
            <MockImage size='175/175'/>
            <hr className='subject-tile-break'/>
            <span className='subject-name'>Język polski</span>
          </section>
        </Link>

        <Link to='/zbieranina/wybor-klasy' className='link'>
          <section className='subject-tile'>
            <MockImage size='175/175'/>
            <hr className='subject-tile-break'/>
            <span className='subject-name'>Język angielski</span>
          </section>
        </Link>

      </article>

      <h2 className="tertiary-heading">Ostatnie lekcje</h2>

      <article className="last-lessons">
        <MockImage size='65/65'/>
        <span className="lesson-name">Młoda Polska</span>
      </article>

      <article className="last-lessons">
        <MockImage size='65/65'/>
        <span className="lesson-name">Wesele Wyspiańskiego</span>
      </article>

    </article>
  );

}

export default Zbieranina;
