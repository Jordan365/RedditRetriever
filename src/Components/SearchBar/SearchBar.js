import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, selectSearch } from './SearchBarSlice';

export const SearchBar = () => {

    const dispatch = useDispatch();
    const searchValue = useSelector(selectSearch)

    const updateSearchValue = (e) => {
        const newValue = e.target.value;
        dispatch(updateSearch({value: newValue}));
    }

    return (
        <div id="searchBar">
            <input id="searchInput" type="text" name="searchBar" placeholder="Search..." onChange={updateSearchValue} value={searchValue}/>
            <FontAwesomeIcon icon="magnifying-glass" className='searchIcon'/>
        </div>
    )

}