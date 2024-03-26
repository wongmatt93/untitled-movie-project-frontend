import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  bookmark,
  bookmarkOutline,
  checkmarkCircle,
} from "ionicons/icons";

import UserProfile from "../../models/UserProfile";
import {
  addWatchedMovie,
  addWatchlistMovie,
  removeWatchedMovie,
  removeWatchlistMovie,
} from "../../utils/userProfileFunctions";
import "./AddRemoveMovieButton.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

interface Props {
  type: string;
  userProfile: UserProfile;
  movieId: number;
}

const AddRemoveMovieButton = ({ type, userProfile, movieId }: Props) => {
  // hooks
  const { setUserProfile } = useContext(AuthContext);

  // variables
  const { uid, watchedMovies, watchlistMovies } = userProfile;

  const inWatched: boolean = watchedMovies.some(
    (movie) => movie.id === movieId
  );

  const inWatchlist: boolean = watchlistMovies.some(
    (movie) => movie.id === movieId
  );

  // functions
  const handleClick = async () => {
    if (type === "watched" && !inWatched) {
      await addWatchedMovie(uid, movieId, setUserProfile);
    }

    if (type === "watched" && inWatched) {
      await removeWatchedMovie(uid, movieId, setUserProfile);
    }

    if (type === "watchlist" && !inWatchlist) {
      await addWatchlistMovie(uid, movieId, setUserProfile);
    }

    if (type === "watchlist" && inWatchlist) {
      await removeWatchlistMovie(uid, movieId, setUserProfile);
    }
  };

  return (
    <button className="AddRemoveMovieButton" onClick={handleClick}>
      {type === "watched" && !inWatched && (
        <IonIcon
          className="movie-button-icon"
          icon={addCircleOutline}
        ></IonIcon>
      )}

      {type === "watched" && inWatched && (
        <IonIcon className="movie-button-icon" icon={checkmarkCircle} />
      )}

      {type === "watchlist" && !inWatchlist && !inWatched && (
        <IonIcon className="movie-button-icon" icon={bookmarkOutline}></IonIcon>
      )}

      {type === "watchlist" && inWatchlist && !inWatched && (
        <IonIcon className="movie-button-icon" icon={bookmark}></IonIcon>
      )}
    </button>
  );
};

export default AddRemoveMovieButton;
