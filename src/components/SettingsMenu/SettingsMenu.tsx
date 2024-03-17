import { useContext } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { signOut, signInWithGoogle } from "../../firebaseConfig";
import AuthContext from "../../context/AuthContext";
import "./SettingsMenu.css";

const SettingsMenu = () => {
  const { userProfile, setUserProfile } = useContext(AuthContext);

  const handleSignOutClick = () => {
    signOut();
    setUserProfile(null);
  };

  return (
    <IonMenu className="SettingsMenu" contentId="main-content" side="end">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
        <IonContent>
          <IonMenuToggle>
            {!userProfile && (
              <IonButton onClick={signInWithGoogle}>Sign In</IonButton>
            )}
            {userProfile && (
              <IonButton onClick={handleSignOutClick}>Sign Out</IonButton>
            )}
          </IonMenuToggle>
        </IonContent>
      </IonHeader>
    </IonMenu>
  );
};

export default SettingsMenu;
