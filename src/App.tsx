import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, listOutline, mail, search } from "ionicons/icons";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import AuthContext from "./context/AuthContext";
import SettingsMenu from "./components/SettingsMenu/SettingsMenu";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import MovieModalContext from "./context/MovieModalContext";
import MovieModal from "./components/Modals/MovieModal/MovieModal";
import UserModalContext from "./context/UserModalContext";
import UserModal from "./components/Modals/UserModal/UserModal";

setupIonicReact();

const App = () => {
  const { userProfile } = useContext(AuthContext);
  const { selectedUser } = useContext(UserModalContext);
  const { selectedMovie } = useContext(MovieModalContext);

  return (
    <IonApp>
      <SettingsMenu />
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route path="/notifications">
              {userProfile ? <Notifications /> : <Login />}
            </Route>
            <Route path="/lists">
              {userProfile ? <Profile thisProfile={userProfile} /> : <Login />}
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon aria-hidden="true" icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="lists" href="/lists">
              <IonIcon aria-hidden="true" icon={listOutline} />
              <IonLabel>My Lists</IonLabel>
            </IonTabButton>
            <IonTabButton tab="notifications" href="/notifications">
              <IonIcon aria-hidden="true" icon={mail} />
              <IonLabel>Notifications</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>

      {selectedUser && <UserModal userProfile={selectedUser} />}
      {selectedMovie && <MovieModal movie={selectedMovie} />}
    </IonApp>
  );
};

export default App;
