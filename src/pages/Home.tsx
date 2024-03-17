import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header/Header";
import MovieCardContainer from "../components/Lists/MovieCards/MovieCardContainer";
import "./Home.css";

const Home = () => {
  return (
    <IonPage className="Home" id="main-content">
      <Header title="Home" />
      <IonContent fullscreen>
        <MovieCardContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
