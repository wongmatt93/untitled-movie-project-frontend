import "./MovieDetailsHeading.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { IonButton, IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import AddRemoveMovieButton from "../MovieButtons/AddRemoveMovieButton";
import Movie from "../../models/Movie";

interface Props {
  movie: Movie;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieDetailsHeading = ({ movie, setIsOpen }: Props) => {
  const { userProfile, setUserProfile } = useContext(AuthContext);
  const { title, backdrop_path, id } = movie;

  return (
    <div className="MovieDetailsHeading">
      <div className="movie-details-backdrop-frame">
        <div className="movie-details-backdrop-wrapper">
          <img
            className="movie-details-backdrop"
            src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
            alt={`${title} backdrop`}
          />
        </div>
      </div>
      <div className="movie-details-title-button-container">
        <h2 className="movie-details-title">{title}</h2>
        {userProfile && (
          <div className="movie-details-button-container">
            <AddRemoveMovieButton
              type="watched"
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              movieId={id}
            />
            <AddRemoveMovieButton
              type="watchlist"
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              movieId={movie.id}
            />
          </div>
        )}
      </div>
      <IonButton
        className="close-movie-modal-button"
        size="small"
        color="light"
        slot="icon-only"
        shape="round"
        onClick={() => setIsOpen(false)}
      >
        <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
      </IonButton>
    </div>
  );
};

export default MovieDetailsHeading;
