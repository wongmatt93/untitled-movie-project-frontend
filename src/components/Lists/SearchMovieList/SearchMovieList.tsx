import { IonList, IonSearchbar } from "@ionic/react";
import { useState } from "react";
import Movie from "../../../models/Movie";
import "./SearchMovieList.css";
import SearchMovieListItem from "./SearchMovieListItem";
import { getMoviesbyQuery } from "../../../services/movieService";

const SearchMovieList = () => {
  const [query, setQuery] = useState<string | null | undefined>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSendQuery = async () =>
    query && setMovies(await getMoviesbyQuery(query));

  return (
    <div className="SearchMovieList">
      <IonSearchbar
        autocapitalize="off"
        onIonInput={(e) => setQuery(e.target.value)}
        onIonChange={handleSendQuery}
      />

      <IonList>
        {movies.map((movie) => (
          <SearchMovieListItem key={movie.id} movie={movie} />
        ))}
      </IonList>
    </div>
  );
};

export default SearchMovieList;
