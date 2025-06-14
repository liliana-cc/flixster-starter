import './MovieList.css'
import MovieCard from './MovieCard';

import React, {useState, useEffect} from "react";  // know i will be using variables who's states update
import axios from "axios"

const MovieList = () => {  // future ref: learning - api key exposed in frontend (fetching list on mount)
    const [movies, setMovies] = useState([]); 
    const [selectedMovies, setSelectedMovies] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const apiKey = import.meta.env.VITE_API_KEY;
    //console.log('API Key type:', typeof apiKey);
    //console.log('API Key is undefined?', apiKey === undefined);

    const finalUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    //console.log('Final URL being called:', finalUrl);

    useEffect(() => {  // using useEffect bc only want to run once every render
        const fetchMovies = async () => {
            try {
                const {data} = await axios.get(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
                );
                setMovies(data.results);
                console.log('First movie data:', data.results[0]); // This shows one movie's data
            } catch(err) {
                console.error('Error fetching list: ', err);
            }
        };
        fetchMovies();  // calling our func (not just declaring ^)
    }, []);

    const handleCardClick = async(id) => {  // using const bc function ref doesnt change btwn renders - async is used during api calls, it allows to use await rather than dealing w .then
        setShowModal(true);  // modal becomes visible
        setSelectedMovies(null);  // modal has nothing to display -> trigger loading state?
        try {
            const { data } = await axios.get(  // await pauses execution until Promise resolves or rejects -> then continues w/ result
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
            );
            setSelectedMovies(data);  // modal has info to display! - component is rerendered whenever state changes
        } catch(err) {
            console.error(`Error fetching ${id}: `, err);  // might want to add user-friends err messages (soon)
        }
    };


  return (
    <div className="movie-list">
        {movies.map((m) => (  // mapping thru to get data into individual card
            <MovieCard  // actually helps show card on html (moviecard -> movielist -> app)
                key={m.id}  // unique for each movie! (good identifier in case movies have same title)
                title={m.title}
                vote_average={m.vote_average}
                poster_path={m.poster_path}
                onClick={() => handleCardClick(m.id)}
            />
        ))}

        <p>API Key loaded: {apiKey ? 'Yes' : 'No'}</p>
        <p>Movies count: {movies.length}</p>
    </div>
  )
}


export default MovieList
