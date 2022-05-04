import MockImage from "./MockImage";

const SmallTile = (props) => {
  return (
    <article className="small-tile">
        <MockImage size='65/65' class='small-tile-image'/>
        <span className="lesson-name">{props.name}</span>
    </article>
  );
}

export default SmallTile;
