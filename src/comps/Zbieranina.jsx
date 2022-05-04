// Firebase imports:

import {
  getAuth
} from "firebase/auth";

// Component imports:

import Menu from './Menu';
import SearchIcon from '../svg/SearchIcon';
import Tile from './Tile';
import SmallTile from "./SmallTile";

const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();

const Zbieranina = () => {

  rejectAccess();
  
  return (
    <article className='zbieranina'>

      <Menu />

      <h1 className='secondary-heading'>
        <span className='greeting'>Cześć, XYZ!</span> 
        <br/> Czego chcesz się dzisiaj nauczyć?
      </h1>

      <span className="search">
        <SearchIcon />
        <input type='search' placeholder='Wyszukaj' className='search-bar'/>
      </span>

      <h2 className='tertiary-heading'>Przedmioty</h2>

      <article className='subject-tiles'>
        <Tile name='Język Polski' />
        <Tile name='Język Angielski' />
      </article>

      <h2 className="tertiary-heading">Ostatnie lekcje</h2>

      <SmallTile name='Młoda Polska' />
      <SmallTile name='Wesele Wyspiańskiego' />

    </article>
  );

}

export default Zbieranina;
