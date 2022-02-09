import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <article className='login'>
        <h1 className='heading'>Jesteś na stronie logowania!</h1>
        <Link to='/'>
            <button className='button'>Wróć do startu</button>
        </Link>
    </article>
  );
}

export default Login;
