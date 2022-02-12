import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ol className='menu'>
      <Link to='/' className='link'>
        <li className='menu-item'>Start</li>
      </Link>
      <Link to='/zbieranina' className='link'>
        <li className='menu-item'>Zbieranina</li>
      </Link>
      <Link to='/kalendarz' className='link'>
        <li className='menu-item'>Kalendarz</li>
      </Link> 
    </ol>
  );
}

export default Menu;