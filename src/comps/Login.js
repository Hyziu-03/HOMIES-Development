import Logo from "./Logo";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <article className='login'>

        <Logo />

        <form action='' method='' className='form'>

            <input type='email' id='email-login' className='input' placeholder='Adres email'/>

            <span className='password-input'>

              <input type='password' id='password-login' className='input' placeholder='Hasło'/> 

              <p className='password-tooltip'>Nie pamiętasz hasła?</p>

            </span>

            <Link to='/zbieranina'><input type='button' value='Zaloguj się' id='button-login' className='button login-button'/></Link>

            <section className='social-media-login'>

              <i className='fa-brands fa-apple' id='apple-icon'></i>
              <i className='fa-brands fa-google' id='google-icon'></i>
              <i className='fa-brands fa-facebook-f' id='facebook-icon'></i>

            </section>

            <hr className='break'/>

            <footer>

              Nie masz konta? <span className='footer-text'><Link to='/rejestracja' className='link'>Zarejestruj się</Link></span>

            </footer>

        </form>

    </article>
  );
}

export default Login;
