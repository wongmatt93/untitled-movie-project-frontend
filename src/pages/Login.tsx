import { IonButton, IonPage } from "@ionic/react";
import { signInWithGoogle } from "../firebaseConfig";
import "./Login.css";

const Login = () => {
  return (
    <IonPage className="Login" id="main-content">
      <IonButton onClick={signInWithGoogle}>Sign In With Google</IonButton>
    </IonPage>
  );
};

export default Login;
