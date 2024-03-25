import "./MovieCardContainer.css";
import { useState, useEffect } from "react";
import Movie from "../../../models/Movie";
import { getTmdbPopularMovies } from "../../../services/tmdbService";
import MovieCard from "./MovieCard";
import MovieModal from "../../MovieModal/MovieModal";

const MovieCardContainer = () => {
  // hooks
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getTmdbPopularMovies().then((response) =>
      setPopularMovies(response.results)
    );
  }, []);

  const handleClick = (movie: Movie) => {
    setIsOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <ul className="MovieCardContainer">
      {popularMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          handleClick={handleClick}
        />
      ))}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </ul>
  );
};

export default MovieCardContainer;
