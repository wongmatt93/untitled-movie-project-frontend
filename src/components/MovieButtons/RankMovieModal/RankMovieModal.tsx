import { useState, useEffect } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Movie from "../../../models/Movie";
import UserProfile, { SavedMovie } from "../../../models/UserProfile";
import { addWatchedMovieToUserProfile } from "../../../services/userProfileService";
import "./RankMovieModal.css";

interface Props {
  isOpen: boolean;
  movie: Movie;
  uid: string;
  watchedMovies: SavedMovie[];
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RankMovieModal = ({
  isOpen,
  uid,
  movie,
  watchedMovies,
  setUserProfile,
  setIsOpen,
}: Props) => {
  // logic
  const checkRankings: { [key: number]: boolean } = {};

  // Filter watchedMovies array to remove elements with duplicate rankings
  // This is helpful so it doesn't compare to movies with same ranking
  const watchedMoviesSingleRating = watchedMovies.filter((movie) => {
    if (!checkRankings[movie.ranking!]) {
      checkRankings[movie.ranking!] = true;
      return true;
    }
    // If the ranking is seen before, filter out the movie
    return false;
  });

  // variables
  const { id, title } = movie;
  const watchedLength: number = watchedMoviesSingleRating.length;

  // hooks
  const [left, setLeft] = useState<number>(0);
  const [right, setRight] = useState<number>(watchedLength - 1);
  const [mid, setMid] = useState<number>(Math.floor((left + right) / 2));
  const [currentComparison, setCurrentComparison] = useState<SavedMovie | null>(
    null
  );

  useEffect(() => {
    setMid(Math.floor((left + right) / 2));
    if (watchedLength > 0 && left <= right) {
      setCurrentComparison(watchedMoviesSingleRating[mid]);
    }
  }, [left, right, watchedMoviesSingleRating, mid]);

  // functions
  const addWatchedMovie = async (
    rank: number,
    match: boolean
  ): Promise<void> => {
    setUserProfile(
      await addWatchedMovieToUserProfile(uid, id, "liked", rank, match)
    );
    setIsOpen(false);
  };

  const handleComparison = (movieId: number) => {
    if (movieId === id) {
      const updatedRight = mid - 1;
      if (left > updatedRight) {
        currentComparison && addWatchedMovie(currentComparison.ranking!, false);
      }
      setRight(updatedRight);
    }

    if (movieId !== id) {
      const updatedLeft = mid + 1;
      if (updatedLeft > right) {
        currentComparison &&
          addWatchedMovie(currentComparison.ranking! + 1, false);
      }
      setLeft(updatedLeft);
    }
  };

  return (
    <IonModal className="RankMovieModal" isOpen={isOpen}>
      <IonContent>
        <IonToolbar>
          <IonTitle>Add Movie</IonTitle>
          <IonButtons slot="end">
            <IonButton color="light" onClick={() => setIsOpen(false)}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>

        {watchedLength === 0 && (
          <IonButton onClick={() => addWatchedMovie(1, false)}>
            Add Movie
          </IonButton>
        )}

        {currentComparison && (
          <div>
            <IonButton onClick={() => handleComparison(id)}>{title}</IonButton>

            <IonButton onClick={() => handleComparison(currentComparison.id)}>
              {currentComparison.movie.title}
            </IonButton>

            <IonButton
              onClick={() => addWatchedMovie(currentComparison.ranking!, true)}
            >
              Same
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonModal>
  );
};

export default RankMovieModal;
