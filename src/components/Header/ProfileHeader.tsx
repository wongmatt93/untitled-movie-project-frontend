import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./ProfileHeader.css";

interface Props {
  title: string;
}

const ProfileHeader = ({ title }: Props) => {
  return (
    <IonHeader className="ProfileHeader">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default ProfileHeader;
