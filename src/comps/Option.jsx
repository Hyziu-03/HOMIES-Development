import { getAuth } from 'firebase/auth';
import NextIcon from '../svg/NextIcon';

const auth = getAuth();

/**
 * Rendering option in settings
 * @param {*} props.type Kind of an option type 
 * @returns 
 */
const Option = (props) => {
  let source = props.type === 'profile' ? auth.currentUser.photoURL : 'https://color-hex.org/colors/a2d2ff.png';

  return (
    <section className='option' tabIndex='0'>
        <img src={source} alt='' className='profile-picture'/>
        <span className='option-description'>Ustawienie</span>
        <NextIcon />
    </section>
  );
}

export default Option;
