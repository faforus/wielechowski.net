import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import MainGallery from "./pages/MainGallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Studio from "./pages/gallery/Studio";
import Reportage from "./pages/gallery/Reportage";
import Outdoors from "./pages/gallery/Outdoors";
import Animals from "./pages/gallery/Animals";
import welcomeImg from "./assets/images/logo.jpg";
import top from "./assets/images/top.jpg";
import bottom from "./assets/images/bottom.jpg";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/galeria", element: <MainGallery /> },
      { path: "/kontakt", element: <Contact /> },
      { path: "/studio", element: <Studio /> },
      { path: "/reportaz", element: <Reportage /> },
      { path: "/plener", element: <Outdoors /> },
      { path: "/zwierzeta", element: <Animals /> },
    ],
  },
]);

function App() {
  const [loadedWelcome, setLoadedWelcome] = useState(false);

  useEffect(() => {
    const topImage = new Image();
    const bottomImage = new Image();

    topImage.src = top;
    bottomImage.src = bottom;

    Promise.all([topImage, bottomImage]).then(() => {
      setTimeout(() => {
        if (document.querySelector(".welcome"))
          document.querySelector(".welcome").style.opacity = 0;
        setTimeout(() => {
          setLoadedWelcome(true);
        }, 1000);
      }, 1000);
    });
  }, []);

  const WelcomeModal = () => {
    return (
      <div className="welcome">
        <img src={welcomeImg} alt="welcome" />
      </div>
    );
  };

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
