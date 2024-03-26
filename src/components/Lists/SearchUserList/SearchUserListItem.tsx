import UserProfile from "../../../models/UserProfile";
import "./SearchUserListItem.css";
import { IonItem } from "@ionic/react";
import { useContext } from "react";
import UserModalContext from "../../../context/UserModalContext";

interface Props {
  userProfile: UserProfile;
}

const SearchUserListItem = ({ userProfile }: Props) => {
  const { openUserModal } = useContext(UserModalContext);

  return (
    <IonItem>
      <div
        className="SearchUserListItem"
        onClick={() => openUserModal(userProfile)}
      >
        <h3>{userProfile.username}</h3>
      </div>
    </IonItem>
  );
};

export default SearchUserListItem;
