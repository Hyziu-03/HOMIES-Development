import { Link } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';
import CalendarIcon from '../icons/CalendarIcon';
import SettingsIcon from '../icons/SettingsIcon';

/**
 * Rendering the menu
 */
const Menu = () => {
  return (
    <ol className='menu'>
      <Link to='/planer' className='link'>
        <li className='menu-item'><CalendarIcon /></li>
      </Link>
      <Link to='/zbieranina' className='link'>
        <li className='menu-item'><HomeIcon /></li>
      </Link>
      <Link to='/ustawienia' className='link'>
        <li className='menu-item'><SettingsIcon /></li>
      </Link>
    </ol>
  );
}

export default Menu;
