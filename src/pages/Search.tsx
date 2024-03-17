import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import { useState } from "react";
import Header from "../components/Header/Header";
import "./Search.css";
import { getTmdbMoviesByQuery } from "../services/tmdbService";
import SearchMovieList from "../components/Lists/SearchMovieList/SearchMovieList";

const Search = () => {
  const [query, setQuery] = useState<string | null | undefined>(null);
  const [movieIds, setMovieIds] = useState<number[]>([]);

  const handleSendQuery = async () =>
    query &&
    setMovieIds(
      (await getTmdbMoviesByQuery(query)).results.map((movie) => movie.id)
    );

  return (
    <IonPage className="Search" id="main-content">
      <Header title="Search" />
      <IonContent fullscreen>
        <IonSearchbar
          autocapitalize="off"
          onIonInput={(e) => setQuery(e.target.value)}
          onIonChange={handleSendQuery}
        />
        <SearchMovieList movieIds={movieIds} />
      </IonContent>
    </IonPage>
  );
};

export default Search;
