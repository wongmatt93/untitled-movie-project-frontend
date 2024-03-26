import { IonModal, IonPage } from "@ionic/react";
import Movie from "../../../models/Movie";
import { useContext } from "react";
import MovieModalContext from "../../../context/MovieModalContext";
import AuthContext from "../../../context/AuthContext";
import MovieModalHeader from "./MovieModalHeader";
import "./MovieModal.css";

interface Props {
  movie: Movie;
}

const MovieModal = ({ movie }: Props) => {
  // hooks
  const { userProfile } = useContext(AuthContext);
  const { isOpen } = useContext(MovieModalContext);

  return (
    <IonModal className="MovieModal" isOpen={isOpen}>
      <IonPage>
        <MovieModalHeader movie={movie} userProfile={userProfile} />
      </IonPage>
    </IonModal>
  );
};

export default MovieModal;
