import { IonList, IonSearchbar } from "@ionic/react";
import { useState, useContext } from "react";
import UserProfile from "../../../models/UserProfile";
import { getUserProfilesByQuery } from "../../../services/userProfileService";
import "./SearchUserList.css";
import SearchUserListItem from "./SearchUserListItem";
import AuthContext from "../../../context/AuthContext";

const SearchUserList = () => {
  const { userProfile } = useContext(AuthContext);
  const [query, setQuery] = useState<string | null | undefined>(null);
  const [searchedUsers, setSearchedUsers] = useState<UserProfile[]>([]);

  const handleSendQuery = async () =>
    query &&
    setSearchedUsers(
      await getUserProfilesByQuery(query, userProfile!.username)
    );

  return (
    <div className="SearchUserList">
      <IonSearchbar
        autocapitalize="off"
        onIonInput={(e) => setQuery(e.target.value)}
        onIonChange={handleSendQuery}
      />

      <IonList>
        {searchedUsers.map((userProfile) => (
          <SearchUserListItem key={userProfile.uid} userProfile={userProfile} />
        ))}
      </IonList>
    </div>
  );
};

export default SearchUserList;
