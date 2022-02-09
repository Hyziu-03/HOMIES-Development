import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <article className='main'>
        <h1 className='heading'>Jesteś na stronie głównej!</h1>
        <Link to='/'>
            <button className='button'>Wróć do startu</button>
        </Link>
    </article>
  );
}

export default Main;
