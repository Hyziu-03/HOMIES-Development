// React imports: 

import {
  useEffect 
} from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

// Firebase imports:

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase-auth';

// Component imports:

import Logo from './Logo';

const useEmail = () => {

  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then(() => console.log('Authenticated the user with email and password'))
    .catch((error) => console.error(error.message));
    
}

const useGoogle = () => {

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'pl';

  signInWithPopup(auth, provider)
    .then(() => console.log('Authenticate the user with Google'))
    .catch((error) => console.error(error.message));

}

const useFacebook = () => {

  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'pl';

  signInWithPopup(auth, provider)
    .then(() => console.log('Authenticated the user with Facebook'))
    .catch((error) => console.error(error));

}

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => onAuthStateChanged(getAuth(), (user) => {
    // if (user) navigate('/zbieranina')
  })
    .then(() => console.log('Navigated the user to zbieranina'))
    .catch((error) => console.error(error))
  );

  return (
    <article className='login'>

        <Logo />

        <form action='' method='' className='form'>

            <input type='email' id='email-login' className='input' placeholder='Adres email' tabIndex='0'/>

            <span className='password-input'>

              <input type='password' id='password-login' className='input' placeholder='Hasło' tabIndex='0'/> 

              <p className='password-tooltip' tabIndex='0'>Nie pamiętasz hasła?</p>

            </span>

            <Link to=''><input type='button' value='Zaloguj się' id='button-login' className='button login-button link' onClick={useEmail}/></Link>

        </form>

        <section className='alt-login'>

          <section className='social-media-login'>

              <i className='fa-brands fa-google social-media' tabIndex='0' onClick={useGoogle}></i>
              <i className='fa-brands fa-facebook-f social-media' tabIndex='0' onClick={useFacebook}></i>

            </section>

            <footer>

              <hr className='break'/>

              <p className='help-message'>Nie masz konta? &nbsp;<span className='signup-link'><Link to='/rejestracja' className='link'>Zarejestruj się</Link></span></p>

            </footer>

        </section>

    </article>
  );
}

export default Login;
