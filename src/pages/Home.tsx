import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header/Header";
import MovieCardContainer from "../components/Lists/MovieCards/MovieCardContainer";
import "./Home.css";

const Home = () => {
  return (
    <IonPage className="Home" id="main-content">
      <Header title="Home" />
      <IonContent className="home-content">
        <section className="popular-movies-section">
          <h2>Popular Movies</h2>
          <MovieCardContainer />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
