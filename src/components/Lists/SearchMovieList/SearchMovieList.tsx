import { IonList } from "@ionic/react";
import "./SearchMovieList.css";
import SearchMovieListItem from "./SearchMovieListItem";

interface Props {
  movieIds: number[];
}

const SearchMovieList = ({ movieIds }: Props) => {
  return (
    <IonList className="SearchMovieList">
      {movieIds.map((movieId) => (
        <SearchMovieListItem key={movieId} movieId={movieId} />
      ))}
    </IonList>
  );
};

export default SearchMovieList;
