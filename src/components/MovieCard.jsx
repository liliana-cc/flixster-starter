import './MovieCard.css'

const MovieCard = ({ title, vote_average, poster_path, onClick }) => {
    if (!poster_path && vote_average === 0) {
        return null;
    }
    return (
    <>
        <div className="movie-item" onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${title} poster`}/>
            <div className="card-text">
                <h3>{title}</h3>
                <h4>{vote_average} ⭐</h4>
            </div>
        </div>
    </>
  )
}

export default MovieCard
