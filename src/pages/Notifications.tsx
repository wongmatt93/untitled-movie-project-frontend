import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header/Header";
import NotificationsList from "../components/Lists/NotificationsList/NotificationsList";
import "./Notifications.css";

const Notifications = () => {
  return (
    <IonPage className="Notifications" id="main-content">
      <Header title="Notifications" />
      <IonContent>
        <NotificationsList />
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
