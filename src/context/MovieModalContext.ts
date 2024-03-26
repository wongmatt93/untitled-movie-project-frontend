import { createContext } from "react";
import Movie from "../models/Movie";

export interface MovieModalContextModel {
  isOpen: boolean;
  selectedMovie: Movie | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMovieModal: (movie: Movie) => void;
}

const defaultValue: MovieModalContextModel = {
  isOpen: false,
  selectedMovie: null,
  setIsOpen: () => {},
  openMovieModal: () => {},
};

const MovieModalContext = createContext(defaultValue);

export default MovieModalContext;
