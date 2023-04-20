import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Burger from "../components/Navigation/Burger";
import Navbar from "../components/Navigation/Navbar";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={classes.header}>
      <Link to="/">
        <h1>Filip Wielechowski</h1>
      </Link>
      {windowWidth > 800 ? <Navbar /> : <Burger />}
    </header>
  );
};

export default Header;
