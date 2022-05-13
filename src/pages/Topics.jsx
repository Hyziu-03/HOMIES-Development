import BackIcon from '../svg/BackIcon';
import MockImage from '../comps/MockImage';
import SmallTile from '../comps/SmallTile';
import Menu from '../comps/Menu';

/**
 * Rendering collection of elements within a topic
 * @param {string} props.subject Name of the subject 
 */
const Topics = (props) => {
  return (
    <article className='topics'>
        <BackIcon class='back-zbieranina'/>

        <h1 className='topics-heading'>{props.subject}</h1>
        <MockImage size='325/250' class='topics-image'/>

        <h2 className='tertiary-heading'>Działy</h2>
        <SmallTile name='Temat' />
        <SmallTile name='Temat' />
        <SmallTile name='Temat' />
        <SmallTile name='Temat' />
        <SmallTile name='Temat' />
        
        <Menu />
    </article>
  );
}

export default Topics;
