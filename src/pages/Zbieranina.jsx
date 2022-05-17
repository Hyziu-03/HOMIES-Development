import { getAuth } from 'firebase/auth';
import Menu from '../comps/Menu';
import Tile from '../comps/Tile';
import { displayTopics } from '../utils/modules';
import SearchBar from '../comps/SearchBar';

/**
 * Displaying all the subjects as tiles
 * @returns {array} Collection of <Tile /> elements of the subjects
 */
const displayTiles = () => {
  const subjects = ['Polski', 'Matematyka', 'Angielski'];
  const tiles = [];

  for(let i = 0; i < subjects.length; i += 1) {
    tiles[i] = <Tile name={subjects[i]} />;
  }

  return tiles;
}

// This function will be rewritten in production
const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();

/**
 * Rendering the homepage
 */
const Zbieranina = () => {

  rejectAccess();

  return (
    <article className='zbieranina'>
      <h1 className='secondary-heading' tabIndex='0'>
        <span className='greeting'>Cześć, XYZ!</span> 
        <br/> Czego chcesz się dzisiaj nauczyć?
      </h1>
      <SearchBar />

      <h2 className='tertiary-heading'>Przedmioty</h2>
      <article className='subject-tiles'>
        {displayTiles()}
      </article>

      <h2 className='tertiary-heading'>Ostatnie lekcje</h2>
      {displayTopics()}
      <Menu />
    </article>
  );

}

export default Zbieranina;
