import Logo from "./Logo";

import {
  Link
} from 'react-router-dom';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

const useGoogle = () => {

  const button = document.getElementById('button-login');
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'pl';

  signInWithPopup(auth, provider).then(() => button.click()).catch((error) => console.error(error.message));

}

const useFacebook = () => {

  const button = document.getElementById('button-login');
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'pl';

  signInWithPopup(auth, provider).then(() => button.click()).catch((error) => console.error(error.message));

}

const Login = () => {

  return (
    <article className='login'>

        <Logo />

        <form action='' method='' className='form'>

            <input type='email' id='email-login' className='input' placeholder='Adres email' tabIndex='0'/>

            <span className='password-input'>

              <input type='password' id='password-login' className='input' placeholder='Hasło' tabIndex='0'/> 

              <p className='password-tooltip' tabIndex='0'>Nie pamiętasz hasła?</p>

            </span>

            <Link to='/zbieranina' tabIndex='0'><input type='button' value='Zaloguj się' id='button-login' className='button login-button'/></Link>

        </form>

        <section className='alt-login'>

          <section className='social-media-login'>

              <i className='fa-brands fa-google social-media' tabIndex='0' onClick={useGoogle}></i>
              <i className='fa-brands fa-facebook-f social-media' tabIndex='0' onClick={useFacebook}></i>

            </section>

            <footer>

              <hr className='break'/>

              <p className='help-message'>Nie masz konta? <span className='signup-link'><Link to='/rejestracja' className='link' tabIndex='0'>Zarejestruj się</Link></span></p>

            </footer>

        </section>

    </article>
  );
}

export default Login;
