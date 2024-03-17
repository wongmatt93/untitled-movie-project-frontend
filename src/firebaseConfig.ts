import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCE7b58B5Lc5vUOtGEsjE_40hC2R8YBHTo",
  authDomain: "working-title-movies.firebaseapp.com",
  projectId: "working-title-movies",
  storageBucket: "working-title-movies.appspot.com",
  messagingSenderId: "929419856216",
  appId: "1:929419856216:web:5883b318f9576517593d2d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}

export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
