import "./MovieCardContainer.css";
import { useState, useEffect } from "react";
import Movie from "../../../models/Movie";
import { getTmdbPopularMovies } from "../../../services/tmdbService";
import MovieCard from "./MovieCard";

const MovieCardContainer = () => {
  // hooks
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getTmdbPopularMovies().then((response) =>
      setPopularMovies(response.results)
    );
  }, []);

  return (
    <ul className="MovieCardContainer">
      {popularMovies.map((movie) => (
        <MovieCard key={movie.id} movieId={movie.id} />
      ))}
    </ul>
  );
};

export default MovieCardContainer;
