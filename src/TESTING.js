import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import WelcomeModal from "./components/WelcomeModal";
import classes from "./components/WelcomeModal.module.css";
import Footer from "./components/Footer";
import OutletWrapper from "./pages/Root";

function App() {
  const [loadedWelcome, setLoadedWelcome] = useState(false);

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
        <RouterProvider router={createBrowserRouter()}>
          <OutletWrapper />
        </RouterProvider>
        <Footer className="footer" />
      </div>
    </Fragment>
  );
}

export default App;


import { Outlet, useMatch, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainGallery from "../pages/MainGallery";
import Contact from "../pages/Contact";
import Studio from "../pages/gallery/Studio";
import Reportage from "../pages/gallery/Reportage";
import Outdoors from "../pages/gallery/Outdoors";
import Animals from "../pages/gallery/Animals";
import Business from "../pages/offer/Business";
import Image from "../pages/offer/Image";
import Wedding from "../pages/offer/Wedding";
import NonCommercialReportage from "../pages/offer/NonCommercialReportage";
import CommercialReportage from "../pages/offer/CommercialReportage";
import webpSupported from "../helpers/webpSupport";

const OutletWrapper = () => {
  const match = useMatch();
  const location = match.pathname;
  const key = match.pathname;

  return (
    <Outlet location={location} key={key}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="galeria" element={<MainGallery />} />
        <Route path="kontakt" element={<Contact />} />
        <Route
          path="studio"
          element={<Studio webpSupported={webpSupported} />}
        />
        <Route
          path="reportaz"
          element={<Reportage webpSupported={webpSupported} />}
        />
        <Route
          path="plener"
          element={<Outdoors webpSupported={webpSupported} />}
        />
        <Route
          path="zwierzeta"
          element={<Animals webpSupported={webpSupported} />}
        />
        <Route
          path="sesja-biznesowa"
          element={<Business webpSupported={webpSupported} />}
        />
        <Route
          path="sesja-wizerunkowa"
          element={<Image webpSupported={webpSupported} />}
        />
        <Route
          path="reportaz-slubny"
          element={<Wedding webpSupported={webpSupported} />}
        />
        <Route
          path="reportaz-okolicznosciowy"
          element={<NonCommercialReportage webpSupported={webpSupported} />}
        />
        <Route
          path="reportaz-firmowy"
          element={<CommercialReportage webpSupported={webpSupported} />}
        />
      </Routes>
    </Outlet>
  );
};

export default OutletWrapper;
