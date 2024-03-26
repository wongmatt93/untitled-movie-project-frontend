import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./ProfileHeader.css";
import { useContext } from "react";
import UserModalContext from "../../context/UserModalContext";
import { closeOutline } from "ionicons/icons";

interface Props {
  title: string;
}

const ProfileHeader = ({ title }: Props) => {
  // hooks
  const { setIsOpen } = useContext(UserModalContext);

  return (
    <IonHeader className="ProfileHeader">
      <IonToolbar>
        <IonButtons slot="end">
          <IonButton onClick={() => setIsOpen(false)}>
            <IonIcon slot="icon-only" icon={closeOutline} />
          </IonButton>
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default ProfileHeader;
