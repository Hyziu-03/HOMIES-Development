import Logo from "./Logo";

const Login = () => {
  return (
    <article className='login'>
        <Logo />
        <form action='' method='' className='form'>
            <input type='email' id='email-login' className='input'/>
            <input type='password' id='password-login' className='input'/> 
            <p className='password-tooltip'>Nie pamiętasz hasła?</p>
            <input type='button' value='Zaloguj się' id='button-login' className='button login-button'/>

            <span>Apple</span>
            <span>Google</span>
            <span>Facebook</span>

            <hr/>

            Nie masz konta? Zarejestruj się
        </form>
    </article>
  );
}

export default Login;
