import { IonNav } from "@ionic/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <IonNav root={() => <App />}></IonNav>
    </AuthContextProvider>
  </React.StrictMode>
);
