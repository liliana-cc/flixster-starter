import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import Search from './components/Search';
import MovieList from './components/MovieList'


const App = () => {  // parent does not hv parent to receive props from
  const [movies, setMovies] = useState(null);  // default movie loads
  const [page, setPage] = useState(1);  // default start at page 1
  const [searchResults, setsearchResults] = useState(null);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [category, setCategory] = useState('');
  const [sortResults, setSortResults] = useState(null);
  const [isSortMode, setIsSortMode] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  const centralFetch = async(url) => {  // centralized fetch function to avoid repetitive code 
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${url}&adult=false`)
    return data.results;
  } catch (err) {
    console.error(`Error fetching from ${url}:`, err)
    return null;
  }
  }

  useEffect(() => {  // initial movie load - using useEffect bc only want to run once every render
        const fetchMovies = async () => {
          const results = await nowPlayingMovies();
          if (results) setMovies(results);
        };
        fetchMovies();  // calling our func (not just declaring ^)
    }, []);

  const searchMovies = (query) => 
      centralFetch(`search/movie?api_key=${apiKey}&query=${query}`);  // specific api call for searching

  const discoverMovies = (sort, page) => 
      centralFetch(`discover/movie?api_key=${apiKey}&sort_by=${sort}&page=${page}&with_original_language=en`);  // specific api call for sorting

  const nowPlayingMovies = (page = 1) => 
      centralFetch(`movie/now_playing?api_key=${apiKey}&page=${page}`);  // speacific api call for general nowplaying

  function filterDuplicates(existingMovies, newMovies) {  // arr being results
    return newMovies.filter(m => {
      const existsAlr = existingMovies.some(existingMovie => {
        return existingMovie.id === m.id;  // comparing id's btwn new movies and existing movies 
      });
      return !existsAlr;  // keep if id is not already loaded in
    })
  }

  const loadMore = async() => {  // in charge of loading more (filtered to not duplicate id's) movies from following pages and appending to page 1 to form new array (p is just the page number)
    const newPage = page + 1;
    setPage(newPage);
    if (newPage <= 260) {
      if (!isSortMode) {  // regular load more
        const results = await nowPlayingMovies(newPage);
        if (results) {
          setMovies(movies.concat(filterDuplicates(movies, results)));
        }
      }
      else {  // else in sort mode add load more functionality
        const results = await discoverMovies(category, newPage);
          if (results) {
            setSortResults(sortResults.concat(filterDuplicates(sortResults, results)));
            console.log(results);
          }
      }
    }
  }

  const handleSearch = async(query) => {  // in charge of loading more movies from following pages and appending to page 1 to form new array (p is just the page number)
    setIsSearchMode(true);  // helps reveal to movielist grid
    const results = await searchMovies(query);
    if (results) setsearchResults(results);
        
  }

  const handleClear = () => {  // clearing what is in the search bar
    setIsSearchMode(false);
    setsearchResults(null);
    setIsSortMode(false);
    setSortResults(null)
    setCategory("");  // ensure if handleclear pressed when sorting to go back to -- Select Sorting -- option
  }

  const handleCategoryChange = async(category) => {
    setCategory(category);
    console.log(category);
    if (category !== "") {  // category isn't empty (some sort)
      if (isSearchMode) {  // & search mode
        return // no nothing here for now !!! come back
      } else {  // not in search mode
          setPage(1);
          const results = await discoverMovies(category, 1);
          if (results) {  // want to sort nowplaying movies
            setSortResults(results)
            setIsSortMode(true);  // sort nowplaying (or whichever the api link connects to w sorting) movies
          };  
      }
    } else {  // selected -- select sorting -- (has value=(category) of empty string)
      setIsSortMode(false);
      setSortResults(null);
    }
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Cassette 🎞️</h1>
        <Search onSearch={handleSearch} onClear={handleClear}/>
        <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
            <option value="">-- Select Sorting --</option>
            <option value="title.asc" >Title (alphabetic, A-z)</option>
            <option value="release_date.desc" >Release Date (most recent - oldest)</option>
            <option value="vote_average.desc" >Vote Average</option>
        </select>
      </header>
      <MovieList
        movies={movies}
        searchResults={searchResults}
        isSearchMode={isSearchMode}
        sortResults={sortResults}
        isSortMode={isSortMode}
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
