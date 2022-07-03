import SearchIcon from '../icons/SearchIcon';

const SearchBar = () => {
  return (
    <span className='search'>
      <SearchIcon />
      <input type='search' placeholder='Wyszukaj' className='search-bar'/>
    </span>
  )
}

export default SearchBar;
