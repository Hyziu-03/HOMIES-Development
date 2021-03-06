import { getAuth } from 'firebase/auth';
import NextIcon from '../icons/NextIcon';

const auth = getAuth();

/**
 * Rendering option in settings
 * @param {string} props.type Kind of an option type 
 * @returns A setting element
 */
const Option = (props) => {
  let source = props.type === 'profile' ? auth.currentUser.photoURL : 'https://color-hex.org/colors/a2d2ff.png';

  const id = auth.currentUser.uid;
  if(auth.currentUser.photoURL === null && props.type === 'profile') source = 'https://robohash.org/' + id;
  
  return (
    <section className='option' tabIndex='0'>
      <img src={source} alt='' className='profile-picture'/>
      <span className='option-description'>Ustawienie</span>
      <NextIcon />
    </section>
  );
}

export default Option;
