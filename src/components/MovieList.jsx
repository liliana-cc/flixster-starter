import './MovieList.css'
import App from '../App';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

import {useState, useEffect} from "react";  // know i will be using variables who's states update
import axios from "axios"

const MovieList = ({movies, searchResults, isSearchMode, loadMore, page}) => {  // future ref: learning - api key exposed in frontend (fetching list on mount)
    const [selectedMovies, setSelectedMovies] = useState(null);
    const [showModal, setShowModal] = useState(false);   

    const apiKey = import.meta.env.VITE_API_KEY;
    //console.log('API Key type:', typeof apiKey);
    //console.log('API Key is undefined?', apiKey === undefined);

    const finalUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    //console.log('Final URL being called:', finalUrl);

    const handleCardClick = async(id) => {  // using const bc function ref doesnt change btwn renders - async is used during api calls, it allows to use await rather than dealing w .then
        console.log('Card clicked! ID:', id);
        setShowModal(true);  // modal becomes visible
        setSelectedMovies(null);  // modal has nothing to display -> trigger loading state?
        try {
            const { data } = await axios.get(  // await pauses execution until Promise resolves or rejects -> then continues w/ result
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`  // can find url template in api docu. or just by looking at link :3
            );
            setSelectedMovies(data);  // modal has info to display! - component is rerendered whenever state changes
            // console.log('More movie data:', data)
        } catch(err) {
            console.error(`Error fetching ${id}: `, err);  // might want to add user-friends err messages (soon)
        }
    };


    const handleClose = () => {  // closing modal
        setShowModal(false);
        setSelectedMovies(null);
    }

  return (
    <>
        <div className="movie-list">
            {isSearchMode ?  // searchMode true -> load searchResults (else load)
                searchResults ? searchResults.map((m) => (  // **alwaysss check if array exists before mapping over it
                    <MovieCard  // actually helps show card on html (moviecard -> movielist -> app)
                    key={m.id}  // unique for each movie! (good identifier in case movies have same title)
                    title={m.title}
                    vote_average={m.vote_average}
                    poster_path={m.poster_path}
                    onClick={() => handleCardClick(m.id)}
                />
                )) : <p>Loading search results...</p>: (
                movies ? movies.map((m) => (  // check if array exists before mapping over it
                    <MovieCard  // actually helps show card on html (moviecard -> movielist -> app)
                    key={m.id}  // unique for each movie! (good identifier in case movies have same title)
                    title={m.title}
                    vote_average={m.vote_average}
                    poster_path={m.poster_path}
                    onClick={() => handleCardClick(m.id)}
                />)) : <p>Loading movies...</p>)
            }

        </div>
        {!isSearchMode && (  // when search mode false, doesn't render load more button or all movies loaded
        <div className='load-more'>
            {page <= 260 ? (  
                 <button onClick={loadMore}>Load More</button> /* using JUST loadMore, helps call only when button clicked (not loadMore() - this calls func immediately when component renders - all pages render)*/
            ) : ( 
                <p>All movies loaded!</p>  /* when limit reached show this */
            )}
           
        </div> )}
        
        <MovieModal 
            show={showModal}
            onClose={handleClose}
            movie={selectedMovies}
        />  
    </>
  )
}


export default MovieList
