import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import WelcomeModal from "./components/WelcomeModal";
import classes from "./components/WelcomeModal.module.css";
import Home from "./pages/Home";
import MainGallery from "./pages/MainGallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Studio from "./pages/gallery/Studio";
import Reportage from "./pages/gallery/Reportage";
import Outdoors from "./pages/gallery/Outdoors";
import Animals from "./pages/gallery/Animals";
import RootLayout from "./pages/Root";
import webpSupported from "./helpers/webpSupport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/galeria", element: <MainGallery /> },
      { path: "/kontakt", element: <Contact /> },
      { path: "/studio", element: <Studio webpSupported={webpSupported} /> },
      {
        path: "/reportaz",
        element: <Reportage webpSupported={webpSupported} />,
      },
      { path: "/plener", element: <Outdoors webpSupported={webpSupported} /> },
      {
        path: "/zwierzeta",
        element: <Animals webpSupported={webpSupported} />,
      },
    ],
  },
]);

function App() {
  const [loadedWelcome, setLoadedWelcome] = useState(false);

  useEffect(() => {
    const welcomeElement = document.querySelector(`.${classes.welcome}`);
    welcomeElement.style.opacity = 0;
    setTimeout(() => {
      setLoadedWelcome(true);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {!loadedWelcome &&
        ReactDOM.createPortal(
          <WelcomeModal />,
          document.getElementById("welcome")
        )}
      <div className="container">
        <RouterProvider router={router} />
        <Footer className="footer" />
      </div>
    </Fragment>
  );
}

export default App;
