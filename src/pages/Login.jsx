import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import Logo from '../comps/Logo';

const auth = getAuth();
auth.languageCode = 'pl';

const emailLogin = () => {

	const email = document.getElementById('email-login').value;
	const password = document.getElementById('password-login').value;

	setPersistence(auth, browserSessionPersistence)
		.then(() => {

			signInWithEmailAndPassword(auth, email, password);
			return true;

		})
		.catch((error) => console.error(error.message));

		return false;
	
}

const useGoogle = () => {

	const provider = new GoogleAuthProvider();

	signInWithPopup(auth, provider)
		.catch((error) => console.error(error.message));
	
}

const useFacebook = () => {

	const provider = new FacebookAuthProvider();

	signInWithPopup(auth, provider)
		.catch((error) => console.error(error));

}

const Login = () => {

	const navigate = useNavigate();

	const handleLogin = () => {
		if (emailLogin()) navigate('/zbieranina');
	}

	onAuthStateChanged(auth, (user) => {
		if (user) navigate('/zbieranina');
	});

	return (
		<article className='login'>
				<Logo />
				<form action='' method='' className='form'>
						<input type='email' id='email-login' className='input' placeholder='Adres email' tabIndex='0' required/>
						<span className='password-input'>
							<input type='password' id='password-login' className='input' placeholder='Hasło' tabIndex='0' required/> 
							<p className='password-tooltip' tabIndex='0'><Link to='/odzyskaj-haslo' className='link'>Nie pamiętasz hasła?</Link></p>
						</span>
						<input type='button' value='Zaloguj się' id='button-login' className='button login-button link' onClick={handleLogin} required/>
				</form>
				<section className='alt-login'>
					<section className='social-media-login'>
							<i className='fa-brands fa-google social-media' tabIndex='0' onClick={useGoogle}>&nbsp;Google</i>
							<i className='fa-brands fa-facebook-f social-media' tabIndex='0' onClick={useFacebook}>&nbsp;Facebook</i>
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
