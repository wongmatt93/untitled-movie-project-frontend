import Movie from "./Movie";

interface WatchedMovies {
  positive: SavedMovie[];
  neutral: SavedMovie[];
  negative: SavedMovie[];
}

export interface SavedMovie {
  id: number;
  movie: Movie;
  preference?: string;
  ranking?: number;
  rating?: number;
}

export default interface UserProfile {
  uid: string;
  email: string;
  username: string;
  displayName: string;
  photoURL: string;
  watchedMovies: WatchedMovies;
  watchlistMovies: SavedMovie[];
}
