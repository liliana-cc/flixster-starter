import './MovieModal.css'

const MovieModal = ({ movie, show, onClose }) => {  // stuff i'll need: runtime, backdrop_path, release_date, genres, overview  // related q. what should hpn if movie is null
    console.log('Modal render - show:', show, 'movie:', movie);
    if (!show) return null;  // if modal not set to show don't show it basc. (how modal disappears when showModal state is false)

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
                <div className="modal-header">
                    <button onClick={onClose}>X</button>
                </div>
                <div className="modal-body"> 
                    {!movie ? (
                        <p>Loading..</p>
                    ) : (
                        <div className="details">
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`${movie.title} backdrop`}/>
                            <h3>{movie.release_date}</h3>
                            <h3>{movie.runtime} min</h3>
                            <h3>{movie.overview}</h3>
                            <h3>
                                <strong>Genres:</strong>{" "}
                                {movie.genres.map((g) => g.name).join(", ")}
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default MovieModal