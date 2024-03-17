import { IonItem } from "@ionic/react";
import { useState } from "react";
import { SavedMovie } from "../../../models/UserProfile";
import MovieModal from "../../MovieModal/MovieModal";
import "./ProfileMovieListItem.css";

interface Props {
  movie: SavedMovie;
}

const ProfileMovieListItem = ({ movie }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, genres, poster_path } = movie.movie;

  return (
    <IonItem className="ProfileMovieListItem" lines="full">
      <div
        className="profile-movie-info-container"
        onClick={() => setIsOpen(true)}
      >
        <img
          className="profile-movie-poster"
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt={`${title} poster`}
        />
        <div className="profile-movie-details">
          <h3 className="profile-movie-title">{title}</h3>
          <ul className="profile-movie-genre-list">
            {genres.map((genre, index) => (
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
        {movie.rating && (
          <div className="profile-movie-rating-container">
            <p className="profile-movie-rating">{movie.rating}</p>
          </div>
        )}
      </div>

      <MovieModal movie={movie.movie} isOpen={isOpen} setIsOpen={setIsOpen} />
    </IonItem>
  );
};

export default ProfileMovieListItem;
