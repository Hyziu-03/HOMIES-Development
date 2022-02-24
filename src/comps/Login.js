import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <article className='login'>
      <p className='quote'>Curabitur tincidunt lorem lobortis lorem venenatis, et porttitor dui porttitor. Nam vel malesuada tortor.</p>
      <Link to='/zbieranina'>
        <button className='start-button button'>Zacznij</button>
      </Link>
    </article>
  );
}

export default Login;
