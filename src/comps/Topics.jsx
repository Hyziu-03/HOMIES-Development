import BackIcon from '../svg/BackIcon';
import MockImage from './MockImage';
import SmallTile from './SmallTile';
import Menu from './Menu';

const Topics = (props) => {
  return (
    <article className="topics">
        <BackIcon />

        <h1 className="topics-heading">{props.subject}</h1>

        <MockImage size='325/250' class='topics-image'/>

        <h2 className="tertiary-heading">Działy</h2>

        <SmallTile name='Temat 1' />
        <SmallTile name='Temat 2' />
        <SmallTile name='Temat 3' />
        <SmallTile name='Temat 4' />
        <SmallTile name='Temat 5' />

        <Menu />
    </article>
  );
}

export default Topics;
