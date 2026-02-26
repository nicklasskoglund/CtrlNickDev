import React from "react";
// Startpunkt som monterar appen i sidan.
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Sätter appen i root-elementet.
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
