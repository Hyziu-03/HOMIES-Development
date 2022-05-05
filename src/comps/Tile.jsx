// React imports: 

import { 
    Link 
} from 'react-router-dom';

// Component imports:

import MockImage from './MockImage';
// eslint-disable-next-line no-unused-vars
import { latinise } from '../utils/modules';

const Tile = (props) => {

  const name = props.name.latinise().toLowerCase().trim().replaceAll(' ', '-');
  const link = '/zbieranina/' + name;

  return (
    <Link to={link} className='link'>
        <section className='tile'>
            <MockImage size='175/175' class='tile-image'/>
            <hr className='tile-break'/>
            <span className='subject-name'>{props.name}</span>
        </section>
    </Link>
  );
}

export default Tile;
