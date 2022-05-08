import { getAuth } from 'firebase/auth';
import Menu from '../comps/Menu';
import Tile from '../comps/Tile';
import SmallTile from '../comps/SmallTile';
import SearchBar from '../comps/SearchBar';

const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();

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
        <Tile name='Polski' />
        <Tile name='Matematyka' />
        <Tile name='Angielski' />
      </article>

      <h2 className='tertiary-heading'>Ostatnie lekcje</h2>
      <SmallTile name='Temat' />
      <SmallTile name='Temat' />
      <SmallTile name='Temat' />
      <SmallTile name='Temat' />
      <SmallTile name='Temat' />
      <Menu />
    </article>
  );

}

export default Zbieranina;
