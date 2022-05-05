// Firebase imports:

import {
  getAuth
} from "firebase/auth";

// Component imports:

import Menu from './Menu';
import SearchIcon from '../svg/SearchIcon';
import Tile from './Tile';
import SmallTile from "./SmallTile";

const loadImages = () => {
  let images = document.querySelectorAll('img');

  
  for (let i = 0; i < 5; i += 1) {
      setTimeout(() => {
    if(!images) {
    console.log('Załaduj loadera ');
  } else if (images.naturalHeight === undefined) {
    console.log('Załaduj loadera ');
  }
  }, 10000);
  }
  
}

const rejectAccess = () => {
  !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();
}

const Zbieranina = () => {

  rejectAccess();

  loadImages();

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
        <Tile name='Polski' />
        <Tile name='Matematyka' />
        <Tile name='Angielski' />
      </article>

      <h2 className="tertiary-heading">Ostatnie lekcje</h2>

      <SmallTile name='Temat 1' />
      <SmallTile name='Temat 2' />
      <SmallTile name='Temat 3' />
      <SmallTile name='Temat 4' />
      <SmallTile name='Temat 5' />

    </article>
  );

}

export default Zbieranina;
