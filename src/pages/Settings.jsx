import Menu from '../comps/Menu';
import BackIcon from '../svg/BackIcon';
import Option from '../comps/Option';

const Settings = () => {
  return (
    <article className='settings'>
      <BackIcon class='back-settings'/>
      <h1 className="settings-heading">Ustawienia</h1>

      <h3 className='options-heading'>Ustawienia konta</h3>
      <Option type='profile'/>

      <h3 className='options-heading'>Inne ustawienia</h3>
      <Option />
      <Option />
      <Option />
      <Option />
      <Menu />
    </article>
  );
}

export default Settings;
