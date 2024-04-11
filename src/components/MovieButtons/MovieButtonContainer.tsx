import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  bookmark,
  bookmarkOutline,
  checkmarkCircle,
} from "ionicons/icons";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Movie from "../../models/Movie";
import UserProfile from "../../models/UserProfile";
import "./MovieButtonContainer.css";
import { removeWatchedMovieFromUserProfile } from "../../services/userProfileService";
import {
  removeWatchlistMovieFromUserProfile,
  addWatchlistMovieToUserProfile,
} from "../../services/userProfileService";
import RankMovieModal from "./RankMovieModal/RankMovieModal";

interface Props {
  movie: Movie;
  userProfile: UserProfile;
}

const MovieButtonContainer = ({ userProfile, movie }: Props) => {
  // hooks
  const { refreshProfile, combinedWatchedMovies } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // variables
  const { uid, watchedMovies, watchlistMovies } = userProfile;
  const { id } = movie;

  const inWatched: boolean = combinedWatchedMovies.some(
    (watchedMovie) => watchedMovie.id === id
  );

  const inWatchlist: boolean = watchlistMovies.some(
    (watchedMovie) => watchedMovie.id === id
  );

  // functions
  const handleRemoveFromWatched = async (): Promise<void> =>
    refreshProfile(await removeWatchedMovieFromUserProfile(uid, id));

  const handleAddToWatchlist = async (): Promise<void> =>
    refreshProfile(await addWatchlistMovieToUserProfile(uid, id));

  const handleRemoveFromWatchlist = async (): Promise<void> =>
    refreshProfile(await removeWatchlistMovieFromUserProfile(uid, id));

  return (
    <div className="MovieButtonContainer">
      <div className="watched-buttons-container">
        {!inWatched && (
          <IonIcon
            className="movie-button-icon"
            icon={addCircleOutline}
            onClick={() => setIsOpen(true)}
          />
        )}

        {inWatched && (
          <IonIcon
            className="movie-button-icon"
            icon={checkmarkCircle}
            onClick={handleRemoveFromWatched}
          />
        )}
      </div>

      {!inWatched && (
        <div className="watchlist-buttons-container">
          {!inWatchlist && (
            <IonIcon
              className="movie-button-icon"
              icon={bookmarkOutline}
              onClick={handleAddToWatchlist}
            />
          )}

          {inWatchlist && (
            <IonIcon
              className="movie-button-icon"
              icon={bookmark}
              onClick={handleRemoveFromWatchlist}
            />
          )}
        </div>
      )}

      <RankMovieModal
        isOpen={isOpen}
        movie={movie}
        userProfile={userProfile}
        refreshProfile={refreshProfile}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default MovieButtonContainer;
