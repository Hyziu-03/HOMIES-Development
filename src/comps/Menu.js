import { Link } from 'react-router-dom';

import Home from '../svg/Home';
import Calendar from '../svg/Calendar';
import Profile from '../svg/Profile';

const Menu = () => {
  return (
    <ol className='menu'>

      <Link to='/' className='link' tabIndex='0'>
        <li className='menu-item'><Home/ ></li>
      </Link>

      <Link to='/zbieranina' className='link' tabIndex='0'>
        <li className='menu-item'><Calendar /></li>
      </Link>

      <Link to='/ustawienia'>
        <li className='menu-item'><Profile /></li>
      </Link>

    </ol>
  );
}

export default Menu;
