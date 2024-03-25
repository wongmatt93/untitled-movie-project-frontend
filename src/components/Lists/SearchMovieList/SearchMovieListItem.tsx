import { IonItem } from "@ionic/react";
import { useState, useEffect } from "react";
import Movie from "../../../models/Movie";
import "./SearchMovieListItem.css";
import { getMovieById } from "../../../services/movieService";

interface Props {
  movieId: number;
  handleClick: (movie: Movie) => void;
}

const SearchMovieListItem = ({ movieId, handleClick }: Props) => {
  // hooks
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getMovieById(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  return (
    <IonItem className="SearchMovieListItem">
      {movie && (
        <>
          <div
            className="search-result-info-container"
            onClick={() => handleClick(movie)}
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
        </>
      )}
    </IonItem>
  );
};

export default SearchMovieListItem;
