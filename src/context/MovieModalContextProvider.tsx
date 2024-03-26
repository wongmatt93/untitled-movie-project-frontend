import { ReactNode, useState } from "react";
import Movie from "../models/Movie";
import MovieModalContext from "./MovieModalContext";

const MovieModalContextProvider = ({ children }: { children: ReactNode }) => {
  // hooks
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // functions
  const openMovieModal = (movie: Movie): void => {
    setIsOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <MovieModalContext.Provider
      value={{ isOpen, selectedMovie, setIsOpen, openMovieModal }}
    >
      {children}
    </MovieModalContext.Provider>
  );
};

export default MovieModalContextProvider;
