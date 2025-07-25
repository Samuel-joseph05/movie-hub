import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieList from "../component/MovieList";
function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div>
        <h2 className="favorites-title">Your Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieList movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here </p>
    </div>
  );
}
export default Favorites;
