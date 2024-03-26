import { IonItem } from "@ionic/react";
import Movie from "../../../models/Movie";
import "./SearchMovieListItem.css";
import { useContext } from "react";
import MovieModalContext from "../../../context/MovieModalContext";

interface Props {
  movie: Movie;
}

const SearchMovieListItem = ({ movie }: Props) => {
  // hooks
  const { openMovieModal } = useContext(MovieModalContext);

  return (
    <IonItem className="SearchMovieListItem">
      <div
        className="search-result-info-container"
        onClick={() => openMovieModal(movie)}
      >
        <img
          className="search-result-poster"
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div className="search-movie-details">
          <h3 className="search-result-title">{movie.title}</h3>
          <p className="search-result-date">{movie.release_date}</p>
        </div>
      </div>
    </IonItem>
  );
};

export default SearchMovieListItem;
