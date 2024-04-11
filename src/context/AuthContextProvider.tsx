import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import UserProfile from "../models/UserProfile";
import {
  addNewUserProfile,
  getUserProfileByUid,
} from "../services/userProfileService";
import AuthContext from "./AuthContext";
import { SavedMovie } from "../models/UserProfile";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [combinedWatchedMovies, setCombinedWatchedMovies] = useState<
    SavedMovie[]
  >([]);

  const refreshProfile = (userProfile: UserProfile): void => {
    const { positive, neutral, negative } = userProfile.watchedMovies;
    setUserProfile(userProfile);
    setCombinedWatchedMovies([...positive, ...neutral, ...negative]);
  };

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((user) => {
      if (user) {
        getUserProfileByUid(user.uid).then((userProfile) => {
          if (userProfile) {
            refreshProfile(userProfile);
          } else {
            addNewUserProfile(user.uid).then((response) =>
              setUserProfile(response)
            );
          }
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ userProfile, combinedWatchedMovies, refreshProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
