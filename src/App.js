import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.css";

import classes from "./components/WelcomeModal.module.css";
import Header from "./components/Header";
import WelcomeModal from "./components/WelcomeModal";
import Footer from "./components/Footer";
import webpSupported from "./helpers/webpSupport";

import wgal1 from "./assets/webpimages/reportaz1.webp";
import wgal2 from "./assets/webpimages/studio.webp";
import wgal3 from "./assets/webpimages/animals.webp";
import wgal4 from "./assets/webpimages/plener.webp";
import wkon1 from "./assets/webpimages/kontakt.webp";

import gal1 from "./assets/images/reportaz1.jpg";
import gal2 from "./assets/images/studio.jpg";
import gal3 from "./assets/images/animals.jpg";
import gal4 from "./assets/images/plener.jpg";
import kon1 from "./assets/images/kontakt.jpg";

let imagesToPreload = [];
if (webpSupported) {
  imagesToPreload = [wgal1, wgal2, wgal3, wgal4, wkon1];
} else {
  imagesToPreload = [gal1, gal2, gal3, gal4, kon1];
}

function App() {
  const [loadedWelcome, setLoadedWelcome] = useState(false);

  useEffect(() => {
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const welcomeElement = document.querySelector(`.${classes.welcome}`);
      welcomeElement.style.opacity = 0;
      setTimeout(() => {
        setLoadedWelcome(true);
      }, 400);
    }, 500);
  }, []);

  return (
    <Fragment>
      {!loadedWelcome &&
        ReactDOM.createPortal(
          <WelcomeModal />,
          document.getElementById("welcome")
        )}
      <div className="container">
        <BrowserRouter>
          <Header />
          <AnimatedRoutes />
          <Footer className="footer" />
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
