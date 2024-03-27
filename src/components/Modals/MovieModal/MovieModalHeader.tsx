import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import Movie from "../../../models/Movie";
import UserProfile from "../../../models/UserProfile";
import AddRemoveMovieButton from "../../MovieButtons/AddRemoveMovieButton";
import { useContext } from "react";
import MovieModalContext from "../../../context/MovieModalContext";
import "./MovieModalHeader.css";

interface Props {
  movie: Movie;
  userProfile: UserProfile | null;
}

const MovieModalHeader = ({ movie, userProfile }: Props) => {
  // hooks
  const { setIsOpen } = useContext(MovieModalContext);

  // variables
  const { id, title, backdrop_path } = movie;

  return (
    <IonHeader className="MovieModalHeader">
      <IonToolbar className="movie-modal-toolbar">
        <IonButtons slot="end">
          <IonButton
            className="movie-modal-close-button"
            fill="solid"
            shape="round"
            color="light"
            onClick={() => setIsOpen(false)}
          >
            <IonIcon slot="icon-only" icon={closeOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <section className="movie-modal-backdrop-info-container">
        <img
          className="movie-modal-header-backdrop"
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt={`${title} backdrop`}
        />
        <div className="movie-modal-title-button-container">
          <h2 className="movie-modal-title">{title}</h2>
          {userProfile && (
            <div>
              <AddRemoveMovieButton
                type="watched"
                userProfile={userProfile}
                movieId={id}
              />
              <AddRemoveMovieButton
                type="watchlist"
                userProfile={userProfile}
                movieId={id}
              />
            </div>
          )}
        </div>
      </section>
    </IonHeader>
  );
};

export default MovieModalHeader;
