import SearchIcon from '../svg/SearchIcon';

/**
 * Rendering the search bar
 */
const SearchBar = () => {
  return (
    <span className='search'>
        <SearchIcon />
        <input type='search' placeholder='Wyszukaj' className='search-bar'/>
    </span>
  )
}

export default SearchBar;
