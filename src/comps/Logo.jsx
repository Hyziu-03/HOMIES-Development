import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 100' width='280' height='100' className='logo'>

        <rect width='280' height='100' fill='#ffffff'></rect>

        <text x='50%' y='50%' dominantBaseline='middle' textAnchor='middle' fontFamily='Roboto' fontSize='60px' fill='#0b090a'>HOMIES</text>  

      </svg>

    </Link>
  );
}

export default Logo;
