import Logo from "./Logo";
import { Link } from 'react-router-dom';

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

            <section className='social-media-login'>

              <i className='fa-brands fa-apple social-media' tabIndex='0'></i>
              <i className='fa-brands fa-google social-media' tabIndex='0'></i>
              <i className='fa-brands fa-facebook-f social-media' tabIndex='0'></i>

            </section>

            <hr className='break'/>

            <footer>

              Nie masz konta? <span className='footer-text'><Link to='/rejestracja' className='link' tabIndex='0'>Zarejestruj się</Link></span>

            </footer>

        </form>

    </article>
  );
}

export default Login;
