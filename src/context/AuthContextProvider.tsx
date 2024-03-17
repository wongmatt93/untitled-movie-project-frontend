import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import UserProfile from "../models/UserProfile";
import {
  addNewUserProfile,
  getUserProfile,
} from "../services/userProfileService";
import AuthContext from "./AuthContext";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((user) => {
      if (user) {
        getUserProfile("uid", user.uid).then((userProfile) => {
          if (userProfile) {
            setUserProfile(userProfile);
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
    <AuthContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
