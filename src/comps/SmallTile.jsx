import { Link } from 'react-router-dom';
import MockImage from './MockImage';

/**
 * Rendering an element 
 * @param {string} props.name Name of the element 
 * @returns A tile used for topics  or lastly used elements
 */
const SmallTile = (props) => {
  return (
    <Link to='/zagadnienie' className='link'>
      <article className='small-tile'>
        <MockImage size='65/65' class='small-tile-image'/>
        <span className='lesson-name'>{props.name}</span>
      </article>
    </Link>
  );
}

export default SmallTile;
