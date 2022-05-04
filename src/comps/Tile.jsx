// React imports: 

import { 
    Link 
} from 'react-router-dom';

// Component imports:

import MockImage from './MockImage';

const Tile = (props) => {
  return (
    <Link to ='/zbieranina' className='link'>
        <section className='tile'>
            <MockImage size='175/175' class='tile-image'/>
            <hr className='tile-break'/>
            <span className='subject-name'>{props.name}</span>
        </section>
    </Link>
  );
}

export default Tile;
