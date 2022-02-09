import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1 className='heading'>Hi HOMIES!</h1>
      <Link to='/strona-glowna'>
        <button className='button'>Przejdź na stronę główną</button>
      </Link>
      <Link to='/logowanie'>
        <button className='button'>Przejdź na stronę logowania</button>
      </Link>
    </div>
  );
}

export default App;
