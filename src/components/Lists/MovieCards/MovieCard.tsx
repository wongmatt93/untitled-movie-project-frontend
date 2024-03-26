import { IonCard } from "@ionic/react";
import Movie from "../../../models/Movie";
import "./MovieCard.css";

interface Props {
  movie: Movie;
  handleClick: (movie: Movie) => void;
}

const MovieCard = ({ movie, handleClick }: Props) => {
  return (
    <li className="MovieCard">
      <IonCard className="movie-ion-card" onClick={() => handleClick(movie)}>
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
