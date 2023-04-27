import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { preloadNavImages } from "../../helpers/preloadNavigationImages";

const Navbar = () => {
  const dropdownRef = useRef();
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    dropdownRef.current.style.opacity = 1;
    dropdownRef.current.style.transition = "none";
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const handleClick = () => {
    dropdownRef.current.style.transition = "opacity 0.3s ease-in";
    dropdownRef.current.style.opacity = 0;
    setTimeout(() => {
      setHovering(false);
    }, 300);
  };

  const activeHandler = ({ isActive }) => {
    return isActive ? classes.active : undefined;
  };

  return (
    <nav className={classes.navigation}>
      <ul onMouseOut={handleMouseOut} className={classes["menu-main"]}>
        <li>
          <NavLink className={activeHandler} to="/">
            Home
          </NavLink>
        </li>
        <li className={classes.dropdown}>
          <NavLink
            onMouseOver={() => {
              handleHover();
              preloadNavImages();
            }}
            to="#"
            className={classes.arrow}
          >
            Oferta
          </NavLink>
          <ul
            ref={dropdownRef}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            style={{
              display: hovering ? "block" : "none",
            }}
            className={classes["dropdown-content"]}
          >
            <li>
              <NavLink
                className={activeHandler}
                onClick={handleClick}
                to="/sesja-biznesowa"
              >
                Sesja Biznesowa
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={handleClick}
                to="/sesja-wizerunkowa"
              >
                Sesja Wizerunkowa
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={handleClick}
                to="/reportaz-slubny"
              >
                Reportaż Ślubny
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={handleClick}
                to="/reportaz-okolicznosciowy"
              >
                Reportaż Okolicznościowy
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={handleClick}
                to="/reportaz-firmowy"
              >
                <span className={classes["last-dropdown-item"]}>
                  Eventy Firmowe / Sportowe
                </span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className={activeHandler} to="/galeria">
            Galeria
          </NavLink>
        </li>
        <li>
          <NavLink className={activeHandler} to="/kontakt">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
