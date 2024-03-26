import "./MovieCardContainer.css";
import { useState, useEffect } from "react";
import Movie from "../../../models/Movie";
import { getPopularMovies } from "../../../services/movieService";
import MovieCard from "./MovieCard";

const MovieCardContainer = () => {
  // hooks
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then((response) => setPopularMovies(response));
  }, []);

  return (
    <ul className="MovieCardContainer">
      {popularMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieCardContainer;
