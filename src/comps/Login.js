import Logo from "./Logo";

import {
  useEffect 
} from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

const useEmail = () => {

  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .catch((error) => console.error(error.message));
    
}

const useGoogle = () => {

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'pl';

  signInWithPopup(auth, provider)
    .catch((error) => console.error(error.message));

}

const useFacebook = () => {

  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'pl';

  signInWithPopup(auth, provider)
    .catch((error) => console.error(error.message));

}

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => onAuthStateChanged(getAuth(), (user) => {
    if (user) navigate('/zbieranina')
  }));

  return (
    <article className='login'>

        <Logo />

        <form action='' method='' className='form'>

            <input type='email' id='email-login' className='input' placeholder='Adres email' tabIndex='0'/>

            <span className='password-input'>

              <input type='password' id='password-login' className='input' placeholder='Hasło' tabIndex='0'/> 

              <p className='password-tooltip' tabIndex='0'>Nie pamiętasz hasła?</p>

            </span>

            <Link to='' tabIndex='0'><input type='button' value='Zaloguj się' id='button-login' className='button login-button' onClick={useEmail}/></Link>

        </form>

        <section className='alt-login'>

          <section className='social-media-login'>

              <i className='fa-brands fa-google social-media' tabIndex='0' onClick={useGoogle}></i>
              <i className='fa-brands fa-facebook-f social-media' tabIndex='0' onClick={useFacebook}></i>

            </section>

            <footer>

              <hr className='break'/>

              <p className='help-message'>Nie masz konta? &nbsp;<span className='signup-link'><Link to='/rejestracja' className='link' tabIndex='0'>Zarejestruj się</Link></span></p>

            </footer>

        </section>

    </article>
  );
}

export default Login;
