import { createContext } from "react";
import UserProfile, { SavedMovie } from "../models/UserProfile";

export interface AuthContextModel {
  userProfile: UserProfile | null;
  combinedWatchedMovies: SavedMovie[];
  refreshProfile: (userProfile: UserProfile) => void;
}

const defaultValue: AuthContextModel = {
  userProfile: null,
  combinedWatchedMovies: [],
  refreshProfile: () => {},
};

const AuthContext = createContext(defaultValue);

export default AuthContext;
