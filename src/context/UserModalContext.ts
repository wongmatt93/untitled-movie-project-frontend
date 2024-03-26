import { createContext } from "react";
import UserProfile from "../models/UserProfile";

export interface UserModalContextModel {
  isOpen: boolean;
  selectedUser: UserProfile | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openUserModal: (userProfile: UserProfile) => void;
}

const defaultValue: UserModalContextModel = {
  isOpen: false,
  selectedUser: null,
  setIsOpen: () => {},
  openUserModal: () => {},
};

const UserModalContext = createContext(defaultValue);

export default UserModalContext;
