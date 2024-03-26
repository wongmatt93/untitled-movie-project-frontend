import "./MovieCardContainer.css";
import { useState, useEffect } from "react";
import Movie from "../../../models/Movie";
import MovieModal from "../../MovieModal/MovieModal";
import { getPopularMovies } from "../../../services/movieService";
import MovieCard from "./MovieCard";

const MovieCardContainer = () => {
  // hooks
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getPopularMovies().then((response) => setPopularMovies(response));
  }, []);

  const handleClick = (movie: Movie) => {
    setIsOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <ul className="MovieCardContainer">
      {popularMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} handleClick={handleClick} />
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
