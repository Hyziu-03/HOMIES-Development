/**
 * Rendering image
 * @param {string} props.size Photo size
 * @param {string} props.alt Alternative description
 * @param {string} props.class Element's class name 
 * @returns A generated image for testing purposes
 */
const MockImage = (props) => <img src={'https://picsum.photos/' + props.size} alt={props.alt} className={props.class}/>;

export default MockImage;
