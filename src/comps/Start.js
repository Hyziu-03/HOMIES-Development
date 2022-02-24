import { Link } from 'react-router-dom';
import Logo from './Logo';

const Start = () => {
  return (
    <article className='start'>
      <Logo />
      <p className='quote'>Curabitur tincidunt lorem lobortis lorem venenatis, et porttitor dui porttitor. Nam vel malesuada tortor.</p>
      <Link to='/logowanie'>
        <button className='start-button button'>Zacznij</button>
      </Link>
    </article>
  );
}

export default Start;
