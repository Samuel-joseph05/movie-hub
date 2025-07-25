import MovieList from "../component/MovieList";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch popular movies. Please try again later....");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  const searchFun = async (e) => {
    e.preventDefault();
    //trim th search input to remove leading and trailing spaces
    if (!search.trim()) return;
    if (loading) return;
    //  setSearch(true);
    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch search results. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={searchFun} className="search-form">
        <input
          type="text"
          placeholder=" search for movies..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>{" "}
      </form>
      {error && <div className="error-meassage">{error}</div>}
      {loading ? (
        <div className="loading">Loading...🙄</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieList movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
