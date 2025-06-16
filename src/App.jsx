import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import Search from './components/Search';
import MovieList from './components/MovieList'


const App = () => {  // parent does not hv parent to receive props from
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);  // default start at page 1
  const [searchResults, setSearchResults] = useState(null);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [category, setCategory] = useState('');

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {  // using useEffect bc only want to run once every render
        const fetchMovies = async () => {
            try {
                const {data} = await axios.get(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`  // dont hv set page number, loads page 1 by default
                );
                setMovies(data.results);
                // console.log('First movie data:', data.results[0]); // This shows one movie's data
            } catch(err) {
                console.error('Error fetching list: ', err);
            }
        };
        fetchMovies();  // calling our func (not just declaring ^)
    }, []);

  const loadMore = async() => {  // in charge of loading more movies from following pages and appending to page 1 to form new array (p is just the page number)
    if (page <= 260) {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page + 1}`
            );
            setMovies(movies.concat(data.results));  // currently have movies in movies state, just fetched new movies in data.results (update movies)
            setPage(page + 1);  // updating state to reflect we're now on next page
        } catch(err) {
            console.error(`Error fetching ${page + 1}: `, err)
        }
    }
  }

  const handleSearch = async(query) => {  // in charge of loading more movies from following pages and appending to page 1 to form new array (p is just the page number)
    setIsSearchMode(true);  // helps reveal to movielist grid
    try {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );
        setSearchResults(data.results);  // currently have movies in movies state, just fetched new movies in data.results (update movies)
    } catch(err) {
        console.error(`Error fetching ${query}: `, err)
    }
        
  }

  const handleClear = () => {  // clearing what is in the search bar
      setIsSearchMode(false);
      setSearchResults(null);
  }

  const handleCategoryChange = async(category) => {
    setCategory(category);
    console.log(category);
  }


  return (
    <div className="App">
      <header className='App-header'>
        <h1>Flixter 🍿</h1>
        <Search onSearch={handleSearch} onClear={handleClear}/>
        <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
            <option id="0" >-- New Releases --</option>
            <option id="1" >Title (alphabetic, A-z)</option>
            <option id="2" >Release Date (most recent - oldest)</option>
            <option id="3" >Vote Average</option>
        </select>
      </header>
      <MovieList
        movies={movies}
        searchResults={searchResults}
        isSearchMode={isSearchMode}
        loadMore={loadMore} // passing function
        page={page}
      />
      <footer className='App-footer'>
        <p>github: liliana-cc</p>
      </footer>
    </div>
  )
}


export default App
