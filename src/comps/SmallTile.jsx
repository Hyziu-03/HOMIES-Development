import { Link } from 'react-router-dom';
import MockImage from './MockImage';
import { getCurrentPathName } from '../utils/modules';

const SmallTile = (props) => {
  return (
    <Link to={getCurrentPathName()} className='link'>
      <article className='small-tile'>
        <MockImage size='65/65' class='small-tile-image'/>
        <span className='lesson-name'>{props.name}</span>
      </article>
    </Link>
  );
}

export default SmallTile;
