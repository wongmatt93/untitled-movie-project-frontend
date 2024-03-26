import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import MovieModalContextProvider from "./context/MovieModalContextProvider";
import UserModalContextProvider from "./context/UserModalContextProvider";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserModalContextProvider>
        <MovieModalContextProvider>
          <App />
        </MovieModalContextProvider>
      </UserModalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
