import Logo from "./Logo";

const SignUp = () => {
  return (
    <article className='signup'>

        <Logo />

        <form action='' method='' className='form'>

            <input type='text' id='first-name-signup' className='input' placeholder='Imię'/>
            <input type='text' id='last-name-ginup' className='input' placeholder='Nazwisko'/>
            <input type='email' id='email-sign-up' className='input' placeholder='Adres email'/>
            <input type='password' id='password-sign-up' className='input' placeholder='Hasło'/>
            <input type='checkbox' id='checkbox-signup' className='input' /> Akceptuję regulamin i politykę prywatności

            <button className='button'>Utwórz konto</button>

        </form>

    </article>
  );
}

export default SignUp;
