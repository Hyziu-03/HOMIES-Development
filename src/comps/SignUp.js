import Logo from "./Logo";
import { Link } from 'react-router-dom';

import { validateName, validateEmail, validatePassword } from "../utils/modules";

const getCredentials = () => {

  const email = document.getElementById('email-sign-up').value;
  const password = document.getElementById('password-sign-up').value;
  const firstName = document.getElementById('first-name-signup').value;
  const lastName = document.getElementById('last-name-signup').value;
  const checkbox = document.getElementById('checkbox-signup').checked;

  (validateName(firstName, lastName) === true && validateEmail(email) === true && validatePassword(password) === true && checkbox) ? console.log('OK'): console.error('Not OK');
}

const SignUp = () => {
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
                <label htmlFor='checkbox-signup' className='checkbox-label'>Akceptuję <Link to='/regulamin'>regulamin</Link> i <Link to='/polityka-prywatnosci'>politykę prywatności</Link> HOMIES.</label>
                
              </span>
            
              <button className='button' type='button' onClick={getCredentials}>Utwórz konto</button>

            </section>

        </form>

    </article>
  );
}

export default SignUp;
