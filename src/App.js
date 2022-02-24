import { Link } from 'react-router-dom';

function App() {
  return (
    <article className='App'>
      <h1 className='heading'>Hi HOMIES!</h1>
      <Link to='/logowanie'>
        <button className='button'>Przejdź na stronę logowania</button>
      </Link>
    </article>
  );
}

export default App;
