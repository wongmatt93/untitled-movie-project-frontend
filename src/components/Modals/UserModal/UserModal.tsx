import "./UserModal.css";
import { IonModal } from "@ionic/react";
import UserProfile from "../../../models/UserProfile";
import { useContext } from "react";
import Profile from "../../../pages/Profile";
import UserModalContext from "../../../context/UserModalContext";

interface Props {
  userProfile: UserProfile;
}

const UserModal = ({ userProfile }: Props) => {
  const { isOpen } = useContext(UserModalContext);

  return (
    <IonModal className="UserModal" isOpen={isOpen}>
      <Profile thisProfile={userProfile} />
    </IonModal>
  );
};

export default UserModal;
