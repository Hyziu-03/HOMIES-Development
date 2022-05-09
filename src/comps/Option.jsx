import { getAuth } from 'firebase/auth';
import NextIcon from '../svg/NextIcon';

const auth = getAuth();

const Option = (props) => {
  let source = props.type === 'profile' ? auth.currentUser.photoURL : 'https://color-hex.org/colors/a2d2ff.png';

  return (
    <section className='option' tabIndex='0'>
        <img src={source} alt='' className='profile-picture'/>
        <span className='option-description'>Ustawienie</span>
        <span className='icon-container'><NextIcon /></span>
    </section>
  );
}

export default Option;
