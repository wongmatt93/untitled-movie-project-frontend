import { createContext } from "react";
import UserProfile from "../models/UserProfile";

export interface AuthContextModel {
  userProfile: UserProfile | null;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

const defaultValue: AuthContextModel = {
  userProfile: null,
  setUserProfile: () => {},
};

const AuthContext = createContext(defaultValue);

export default AuthContext;
