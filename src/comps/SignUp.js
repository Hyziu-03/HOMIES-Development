import Logo from "./Logo";

const SignUp = () => {
  return (
    <article className='signup'>

        <Logo />

        <form action='' method='' className='form'>

            <input type='text' id='first-name-signup' className='input' placeholder='Imię' tabIndex='0'/>
            <input type='text' id='last-name-ginup' className='input' placeholder='Nazwisko' tabIndex='0'/>
            <input type='email' id='email-sign-up' className='input' placeholder='Adres email' tabIndex='0'/>
            <input type='password' id='password-sign-up' className='input' placeholder='Hasło' tabIndex='0'/>
            
            <section className='confirmation'>

              <span className='checkbox-container'><input type='checkbox' id='checkbox-signup' className='checkbox' /><label htmlFor='checkbox-signup' className='checkbox-label'>Akceptuję regulamin i politykę prywatności</label></span>
            
              <button className='button'>Utwórz konto</button>

            </section>

        </form>

    </article>
  );
}

export default SignUp;
