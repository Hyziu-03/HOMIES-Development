// React imports:

import { Link } from 'react-router-dom';

// Component imports:

import Home from '../svg/Home';
import Calendar from '../svg/Calendar';
import Profile from '../svg/Profile';

const Menu = () => {
  return (
    <ol className='menu'>

      <Link to='/' className='link'>
        <li className='menu-item'><Calendar /></li>
      </Link>

      <Link to='/zbieranina' className='link'>
        <li className='menu-item'><Home /></li>
      </Link>

      <Link to='/ustawienia' className='link'>
        <li className='menu-item'><Profile /></li>
      </Link>

    </ol>
  );
}

export default Menu;
