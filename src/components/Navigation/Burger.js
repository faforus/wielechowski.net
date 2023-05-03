import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Burger.module.css";
import { preloadNavImages } from "../../helpers/preloadNavigationImages";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Burger = () => {
  const [toggleBurger, setToggleBurger] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    if (toggleBurger && !isMobile) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.width = "calc(100% - 6px)";
    } else {
      document.documentElement.style.overflowY = "scroll";
      document.body.style.width = "100%";
    }
    if (toggleBurger && isMobile) {
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }
    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [toggleBurger]);

  const toggleBurgerMenuHandler = () => {
    setToggleBurger((prev) => !prev);
  };

  const scrollToTopAndClose = () => {
    toggleBurgerMenuHandler();
    scrollToTop();
  };

  const activeHandler = ({ isActive }) => {
    return isActive ? classes.activeB : undefined;
  };

  return (
    <div className={classes["burger-overflow-hidden"]}>
      <div
        onClick={() => {
          toggleBurgerMenuHandler();
          preloadNavImages();
        }}
        className={`${classes.button} ${toggleBurger ? classes.move : ""}`}
      >
        <div className={classes["menu-icon"]}>
          <span className={toggleBurger ? `${classes["top-line"]}` : ""}></span>
          <span
            className={toggleBurger ? `${classes["middle-line"]}` : ""}
          ></span>
          <span
            className={toggleBurger ? `${classes["bottom-line"]}` : ""}
          ></span>
        </div>
      </div>
      <div
        className={`${classes.container} ${toggleBurger ? "" : classes.hidden}`}
      >
        <nav className={classes["burger-nav"]}>
          <ul className={classes["burger-ul"]}>
            <li>
              <NavLink
                className={activeHandler}
                onClick={scrollToTopAndClose}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink>Oferta</NavLink>
              <ul className={classes["dropdown-content"]}>
                <li>
                  <NavLink
                    className={activeHandler}
                    onClick={scrollToTopAndClose}
                    to="/oferta/sesja-biznesowa"
                  >
                    Sesja Biznesowa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={activeHandler}
                    onClick={scrollToTopAndClose}
                    to="/oferta/sesja-wizerunkowa"
                  >
                    Sesja Wizerunkowa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={activeHandler}
                    onClick={scrollToTopAndClose}
                    to="/oferta/reportaz-slubny"
                  >
                    Reportaż Ślubny
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={activeHandler}
                    onClick={scrollToTopAndClose}
                    to="/oferta/reportaz-okolicznosciowy"
                  >
                    Reportaż Okolicznościowy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={activeHandler}
                    onClick={scrollToTopAndClose}
                    to="/oferta/reportaz-firmowy"
                  >
                    Eventy Firmowe / Sportowe
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={scrollToTopAndClose}
                to="/galeria"
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={scrollToTopAndClose}
                to="/kontakt"
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Burger;
