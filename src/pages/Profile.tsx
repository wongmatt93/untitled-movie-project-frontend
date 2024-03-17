import { useState, useContext } from "react";
import {
  IonContent,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import Header from "../components/Header/Header";
import ProfileMovieList from "../components/Lists/ProfileMovieList/ProfileMovieList";
import UserProfile from "../models/UserProfile";
import AuthContext from "../context/AuthContext";
import "./Profile.css";

interface Props {
  thisProfile: UserProfile;
}

const Profile = ({ thisProfile }: Props) => {
  const { userProfile } = useContext(AuthContext);
  const [displayList, setDisplayList] = useState<string>("watched");

  return (
    <IonPage className="Profile" id="main-content">
      <Header title="Profile" />
      <IonContent fullscreen>
        <IonSegment value={displayList}>
          <IonSegmentButton
            value="watched"
            onClick={() => setDisplayList("watched")}
          >
            <IonLabel>Watched</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton
            value="watchlist"
            onClick={() => setDisplayList("watchlist")}
          >
            <IonLabel>Watchlist</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="recs" onClick={() => setDisplayList("recs")}>
            <IonLabel>Recs</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {displayList === "watched" && (
          <ProfileMovieList movies={thisProfile.watchedMovies} />
        )}
        {displayList === "watchlist" && (
          <ProfileMovieList movies={thisProfile.watchlistMovies} />
        )}
        {displayList === "recs" && <ProfileMovieList movies={[]} />}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
