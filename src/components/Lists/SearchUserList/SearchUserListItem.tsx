import UserProfile from "../../../models/UserProfile";
import "./SearchUserListItem.css";
import { IonItem, IonNavLink } from "@ionic/react";
import Profile from "../../../pages/Profile";

interface Props {
  userProfile: UserProfile;
}

const SearchUserListItem = ({ userProfile }: Props) => {
  return (
    <IonItem className="SearchUserListItem">
      <IonNavLink
        routerDirection="forward"
        component={() => <Profile thisProfile={userProfile} />}
      >
        <h3>{userProfile.username}</h3>
      </IonNavLink>
    </IonItem>
  );
};

export default SearchUserListItem;
