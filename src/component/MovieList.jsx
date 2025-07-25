import "../css/MovieList.css";

import { useMovieContext } from "../context/MovieContext";

function MovieList({ movie }) {
  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const onfavlike = (e) => {
    e.preventDefault();
    if (favorite) removeFavorite(movie.id);
    else addFavorite(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
        {/* image of the movie */}
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <div className="over-lay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onDoubleClick={onfavlike}
          >
            {favorite ? "❤️" : "🤍"}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
export default MovieList;
