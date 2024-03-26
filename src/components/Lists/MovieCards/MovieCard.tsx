import { IonCard } from "@ionic/react";
import Movie from "../../../models/Movie";
import "./MovieCard.css";
import { useContext } from "react";
import MovieModalContext from "../../../context/MovieModalContext";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  // hooks
  const { openMovieModal } = useContext(MovieModalContext);

  return (
    <li className="MovieCard">
      <IonCard className="movie-ion-card" onClick={() => openMovieModal(movie)}>
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      </IonCard>
    </li>
  );
};

export default MovieCard;
