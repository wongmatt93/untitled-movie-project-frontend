import { IonModal } from "@ionic/react";
import Movie from "../../models/Movie";
import "./MovieModal.css";
import MovieDetailsHeading from "./MovieDetailsHeading";

interface Props {
  movie: Movie;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieModal = ({ movie, isOpen, setIsOpen }: Props) => {
  console.log("Wow I can't believe there's so many of these");

  return (
    <IonModal className="MovieModal" isOpen={isOpen}>
      <MovieDetailsHeading movie={movie} setIsOpen={setIsOpen} />
    </IonModal>
  );
};

export default MovieModal;
