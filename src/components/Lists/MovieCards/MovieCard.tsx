import { IonCard } from "@ionic/react";
import { useState, useEffect } from "react";
import Movie from "../../../models/Movie";
import MovieModal from "../../MovieModal/MovieModal";
import "./MovieCard.css";
import { getMovieById } from "../../../services/movieService";

interface Props {
  movieId: number;
}

const MovieCard = ({ movieId }: Props) => {
  // hooks
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    getMovieById(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  return (
    <li className="MovieCard">
      {movie && (
        <>
          <IonCard className="movie-ion-card" onClick={() => setIsOpen(true)}>
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </IonCard>
          <MovieModal movie={movie} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      )}
    </li>
  );
};

export default MovieCard;
