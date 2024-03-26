import { IonList } from "@ionic/react";
import { SavedMovie } from "../../../models/UserProfile";
import "./ProfileMovieList.css";
import ProfileMovieListItem from "./ProfileMovieListItem";

interface Props {
  movies: SavedMovie[];
}

const ProfileMovieList = ({ movies }: Props) => {
  return (
    <IonList className="ProfileMovieList">
      {movies.map((movie) => (
        <ProfileMovieListItem key={movie.id} movie={movie} />
      ))}
    </IonList>
  );
};

export default ProfileMovieList;
