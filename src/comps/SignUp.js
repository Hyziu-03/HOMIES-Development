import Logo from "./Logo";
import { Link } from 'react-router-dom';

import { validateName, validateEmail, validatePassword } from "../utils/modules";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
}
from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const createAccount = (email, password, firstName, lastName) => {

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => updateProfile(auth.currentUser, {
      displayName: firstName + ' ' + lastName
    }))
    .catch((error) => console.error(error.message));

}

const getCredentials = () => {

  const email = document.getElementById('email-sign-up').value;
  const password = document.getElementById('password-sign-up').value;
  const firstName = document.getElementById('first-name-signup').value;
  const lastName = document.getElementById('last-name-signup').value;
  const checkbox = document.getElementById('checkbox-signup').checked;

  const isRegistered = (validateName(firstName, lastName) === true && validateEmail(email) === true && validatePassword(password) === true && checkbox) ? createAccount(email, password, firstName, lastName) : console.error('Coś poszło nie tak ');

}

const SignUp = () => {

  let destination = '';

  return (
    <article className='signup'>

        <Logo />

        <form action='' method='' className='form'>

            <input type='text' id='first-name-signup' className='input' placeholder='Imię' tabIndex='0'/>
            <input type='text' id='last-name-signup' className='input' placeholder='Nazwisko' tabIndex='0'/>
            <input type='email' id='email-sign-up' className='input' placeholder='Adres email' tabIndex='0'/>
            <input type='password' id='password-sign-up' className='input' placeholder='Hasło' tabIndex='0'/>
            
            <section className='confirmation'>

              <span className='checkbox-container'>
                
                <input type='checkbox' id='checkbox-signup' className='checkbox' />
                <label htmlFor='checkbox-signup' className='checkbox-label'>Akceptuję <Link to='/regulamin' className='link'>regulamin</Link> i <Link to='/polityka-prywatnosci' className='link'>politykę prywatności</Link> HOMIES.</label>
                
              </span>
            
              <Link to={destination}><button className='button' type='button' onClick={getCredentials}>Utwórz konto</button></Link>

            </section>

        </form>

    </article>
  );
}

export default SignUp;
