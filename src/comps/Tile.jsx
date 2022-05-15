import { Link } from 'react-router-dom';
import MockImage from './MockImage';
// eslint-disable-next-line no-unused-vars
import { latinise } from '../utils/modules';

/**
 * Rendering an element 
 * @param {string} props.name Name of the element 
 * @returns A tile for broader categories
 */
const Tile = (props) => {

  const name = props.name.latinise().toLowerCase().trim().replaceAll(' ', '-');
  const link = '/zbieranina/' + name;

  return (
    <Link to={link} className='link'>
        <section className='tile'>
            <MockImage size='175/175' class='tile-image'/>
            <hr className='tile-break'/>
            <div className='subject-name'>{props.name}</div>
        </section>
    </Link>
  );
}

export default Tile;
