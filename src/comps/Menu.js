import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ol className='menu'>
      <Link to='/' className='link'>
        <li className='menu-item'>Ostatnie</li>
      </Link>
      <Link to='/zbieranina' className='link'>
        <li className='menu-item'>Zbieranina</li>
      </Link>
    </ol>
  );
}

export default Menu;
