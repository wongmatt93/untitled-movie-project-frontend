import { IonItem } from "@ionic/react";
import { SavedMovie } from "../../../models/UserProfile";
import "./ProfileMovieListItem.css";
import { useContext } from "react";
import MovieModalContext from "../../../context/MovieModalContext";

interface Props {
  movie: SavedMovie;
}

const ProfileMovieListItem = ({ movie }: Props) => {
  // hooks
  const { openMovieModal } = useContext(MovieModalContext);

  // variables
  const { title, genres, poster_path } = movie.movie;

  return (
    <IonItem lines="full">
      <div
        className="ProfileMovieListItem"
        onClick={() => openMovieModal(movie.movie)}
      >
        <div className="profile-movie-info-container">
          <img
            className="profile-movie-poster"
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            alt={`${title} poster`}
          />
          <div className="profile-movie-details">
            <h3 className="profile-movie-title">{title}</h3>
            <ul className="profile-movie-genre-list">
              {genres?.map((genre, index) => (
                <li key={genre.id}>
                  <p>
                    {genre.name}
                    {index !== genres.length - 1 && ","}
                  </p>
                </li>
              ))}
            </ul>
            <p className="profile-movie-date">{movie.id}</p>
          </div>
        </div>
        {movie.rating && (
          <div className="profile-movie-rating-container">
            <p className="profile-movie-rating">{movie.ranking}</p>
          </div>
        )}
      </div>
    </IonItem>
  );
};

export default ProfileMovieListItem;
