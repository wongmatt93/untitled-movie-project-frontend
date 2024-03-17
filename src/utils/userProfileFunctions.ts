import UserProfile from "../models/UserProfile";
import { removeWatchlistMovieFromUserProfile } from "../services/userProfileService";
import {
  addWatchedMovieToUserProfile,
  addWatchlistMovieToUserProfile,
  removeWatchedMovieFromUserProfile,
} from "../services/userProfileService";

export const addWatchedMovie = async (
  uid: string,
  movieId: number,
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
): Promise<void> => {
  const returnedUserProfile = await addWatchedMovieToUserProfile(
    uid,
    movieId,
    "liked",
    1
  );

  setUserProfile(returnedUserProfile);
};

export const removeWatchedMovie = async (
  uid: string,
  movieId: number,
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
) => {
  const returnedUserProfile = await removeWatchedMovieFromUserProfile(
    uid,
    movieId
  );

  setUserProfile(returnedUserProfile);
};

export const addWatchlistMovie = async (
  uid: string,
  movieId: number,
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
): Promise<void> => {
  const returnedUserProfile = await addWatchlistMovieToUserProfile(
    uid,
    movieId
  );

  setUserProfile(returnedUserProfile);
};

export const removeWatchlistMovie = async (
  uid: string,
  movieId: number,
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
) => {
  const returnedUserProfile = await removeWatchlistMovieFromUserProfile(
    uid,
    movieId
  );

  setUserProfile(returnedUserProfile);
};
