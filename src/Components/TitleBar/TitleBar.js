import './TitleBar.css';
import { SearchBar } from '../SearchBar/SearchBar.js'

export const TitleBar = () => {

    return (
        <div className='header'>
            <h1 className='main-title'>Reddit Retriever</h1>
            <SearchBar/>
            <h1 className='main-title positional'>Reddit Retriever</h1>
        </div>
    )
}

