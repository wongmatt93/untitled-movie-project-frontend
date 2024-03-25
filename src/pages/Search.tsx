import {
  IonContent,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { useState } from "react";
import Header from "../components/Header/Header";
import SearchMovieList from "../components/Lists/SearchMovieList/SearchMovieList";
import SearchUserList from "../components/Lists/SearchUserList/SearchUserList";
import "./Search.css";

const Search = () => {
  const [displaySearch, setDisplaySearch] = useState<string>("movies");

  return (
    <IonPage className="Search" id="main-content">
      <Header title="Search" />
      <IonContent fullscreen>
        <IonSegment color="dark" value={displaySearch}>
          <IonSegmentButton
            value="movies"
            onClick={() => setDisplaySearch("movies")}
          >
            <IonLabel>Movies</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton
            value="users"
            onClick={() => setDisplaySearch("users")}
          >
            <IonLabel>Users</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {displaySearch === "movies" && <SearchMovieList />}

        {displaySearch === "users" && <SearchUserList />}
      </IonContent>
    </IonPage>
  );
};

export default Search;
