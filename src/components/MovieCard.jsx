import './MovieCard.css'

const MovieCard = ({ title, vote_average, poster_path, onClick }) => {
  return (
    <>
        <div className="movie-item" onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}/>
            <h3>{title}</h3>
            <h4>{vote_average}</h4>

        </div>
    </>
  )
}

export default MovieCard
