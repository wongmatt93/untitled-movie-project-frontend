import { IonList } from "@ionic/react";
import { useState } from "react";
import { SavedMovie } from "../../../models/UserProfile";
import MovieModal from "../../MovieModal/MovieModal";
import "./ProfileMovieList.css";
import ProfileMovieListItem from "./ProfileMovieListItem";

interface Props {
  movies: SavedMovie[];
}

const ProfileMovieList = ({ movies }: Props) => {
  // hooks
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<SavedMovie | null>(null);

  // functions
  const handleClick = (movie: SavedMovie) => {
    setIsOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <IonList className="ProfileMovieList">
      {movies.map((movie) => (
        <ProfileMovieListItem
          key={movie.id}
          movie={movie}
          handleClick={handleClick}
        />
      ))}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie.movie}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </IonList>
  );
};

export default ProfileMovieList;
