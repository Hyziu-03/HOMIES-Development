import { Link } from 'react-router-dom';

function App() {
  return (
    <article className='App'>

      <h1 className='heading' tabIndex='0'>Hi HOMIES!</h1>
      
      <Link to='/zacznij' tabIndex='0'><button className='button'>Przejdź na stronę logowania</button></Link>

    </article>
  );
}

export default App;
