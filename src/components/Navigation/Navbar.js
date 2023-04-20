import { useState, useRef } from "react";
import { Link } from "react-router-dom";
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

  return (
    <nav className={classes.navigation}>
      <ul onMouseOut={handleMouseOut} className={classes["menu-main"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.dropdown}>
          <Link
            onMouseOver={() => {
              handleHover();
              preloadNavImages();
            }}
            to="#"
            className={classes.arrow}
          >
            Oferta
          </Link>
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
              <Link onClick={handleClick} to="/sesja-biznesowa">
                Sesja Biznesowa
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/sesja-wizerunkowa">
                Sesja Wizerunkowa
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/reportaz-slubny">
                Reportaż Ślubny
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/reportaz-okolicznosciowy">
                Reportaż Okolicznościowy
              </Link>
            </li>
            <li>
              <Link
                className={classes["last-dropdown-item"]}
                onClick={handleClick}
                to="/reportaz-firmowy"
              >
                Eventy Firmowe / Sportowe
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
