import { useState } from 'react';
import './Search.css'

function Search({ onSearch, onClear }) {  // defined like js function (arrow not. applied too) -> also must match w/ the file name
    const [query, setQuery] = useState('');  // set to empty string to store response 
    return (
    // JSX code for rendering the component
    <form onSubmit={(e) => {  // on submit takes care of submit button and enter key functionality
        e.preventDefault();  // stop page refresh
        onSearch(query);  // send query to app.js via onsearch function -> handle search
    }}>
        <input 
            id="input-box" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder='Search movies..'/>
        <button 
            type="submit" // submits form
            id="submit-btn"
            >Submit</button>
        <button 
        type="button" 
        onClick={() => {
            setQuery('')  // set query back to empty
            onClear();  // tell app.jsx -> isSearchMode false and searchResults null -> go back to regular movies
        }} 
        id="clear-btn">Clear</button>
    </form>
  );
}

export default Search;