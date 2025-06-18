import './MovieModal.css'

const MovieModal = ({ movie, show, onClose }) => {  // stuff i'll need: runtime, backdrop_path, release_date, genres, overview  // related q. what should hpn if movie is null
    console.log('Modal render - show:', show, 'movie:', movie);
    
    if (!show) return null;  // if modal not set to show don't show it basc. (how modal disappears when showModal state is false)

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="modal-body"> 
                    {!movie ? (
                        <p>Loading..</p>
                    ) : (
                        <div className="details"> 
                            {movie.trailer ? (
                                <iframe
                                    className='movie-trailer'
                                    width='100%'
                                    height='315'
                                    src={`https://www.youtube.com/embed/${movie.trailer.key}`}
                                    frameBorder="0"
                                    allowFullScreen/>
                            ) : (
                            <img className="movie-backdrop" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`${movie.title} backdrop`}/>
                            )}
                            <div className='movie-info'>
                                <div className='modal-text'>
                                <h2>{movie.title}</h2>
                                <h3>Release date: {movie.release_date}</h3>
                                <h3>Runtime: {movie.runtime} min</h3>
                                <h3>{movie.overview}</h3>
                                <h3>
                                    <strong>Genres:</strong>{" "}
                                    {movie.genres.map((g) => g.name).join(", ")}
                                </h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default MovieModal