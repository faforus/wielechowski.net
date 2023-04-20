import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// LAZDY LOADING
// FORM SERVER SIDE VALIDATION
// webpSupport into redux? how often does it run
// CHECK IF USEMODAL ON ITS OWN WORKS

// Burger menu

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
