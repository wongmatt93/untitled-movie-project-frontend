import { ReactNode, useState } from "react";
import UserProfile from "../models/UserProfile";
import UserModalContext from "./UserModalContext";

const UserModalContextProvider = ({ children }: { children: ReactNode }) => {
  // hooks
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);

  // functions
  const openUserModal = (userProfile: UserProfile): void => {
    setIsOpen(true);
    setSelectedUser(userProfile);
  };

  return (
    <UserModalContext.Provider
      value={{ isOpen, selectedUser, setIsOpen, openUserModal }}
    >
      {children}
    </UserModalContext.Provider>
  );
};

export default UserModalContextProvider;
