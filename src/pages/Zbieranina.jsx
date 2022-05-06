import { getAuth } from "firebase/auth";
import Menu from '../comps/Menu';
import Tile from '../comps/Tile';
import SmallTile from "../comps/SmallTile";
import SearchBar from "../comps/SearchBar";

const loadImages = () => {
  const allImages = document.querySelectorAll('img');
  if(!allImages || allImages.naturalHeight === undefined) 
    console.warn('Zdjęcia ładują się zbyt wolno ');
}

const rejectAccess = () => !getAuth().currentUser ? console.warn('Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny') : console.log();

const Zbieranina = () => {

  rejectAccess();

  loadImages();

  return (
    <article className='zbieranina'>

      <Menu />

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
