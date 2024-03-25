import { IonCard } from "@ionic/react";
import { useState, useEffect } from "react";
import Movie from "../../../models/Movie";
import "./MovieCard.css";
import { getMovieById } from "../../../services/movieService";

interface Props {
  movieId: number;
  handleClick: (movie: Movie) => void;
}

const MovieCard = ({ movieId, handleClick }: Props) => {
  // hooks
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getMovieById(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  return (
    <li className="MovieCard">
      {movie && (
        <>
          <IonCard
            className="movie-ion-card"
            onClick={() => handleClick(movie)}
          >
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </IonCard>
        </>
      )}
    </li>
  );
};

export default MovieCard;
