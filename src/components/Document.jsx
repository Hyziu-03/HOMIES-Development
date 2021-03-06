import MockImage from './MockImage';

/**
 * Tag generator
 * @param {string} tags Comma separated information about a document
 * @returns {array} Collection of <span> elements with the above data
 */
const generateTags = (tags) => {
    let data = tags;
    const array = data.split(',');

    for(let i = 0; i < array.length; i += 1) {
        array[i] = array[i].trim();
    }
    data = array;

    let elements = [];
    for(let i = 0; i < data.length; i += 1) {
        elements.push(<span className='tag' key={'tag-' + i + 1}>{data[i]}</span>);
    }

    return elements;
}

/**
 * Rendering a single study material
 * @param {string} props.name Name of the material
 * @param {string} props.tags Comma separated tags of the material
 */
const Document = (props) => {
  return (
    <section className='item'>
        <MockImage size='155/110' class='documents-image'/>
            <section className='item-info'>
                <span className='item-name'>{props.name}</span>
                {generateTags(props.tags)}   
            </section>
    </section>
  );
}

export default Document;
