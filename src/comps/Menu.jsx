import { Link } from 'react-router-dom';
import HomeIcon from '../svg/HomeIcon';
import CalendarIcon from '../svg/CalendarIcon';
import SettingsIcon from '../svg/SettingsIcon';

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
