import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Filip Wielechowski</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.dropdown}>
            <Link to="#" className={classes.arrow}>
              Oferta
            </Link>
            <ul className={classes["dropdown-content"]}>
              <li>
                <Link to="/sesja-biznesowa">Sesja Biznesowa</Link>
              </li>
              <li>
                <Link to="/sesja-wizerunkowa">Sesja Wizerunkowa</Link>
              </li>
              <li>
                <Link to="/sesja-dziecieca">Sesja Dziecięca</Link>
              </li>
              <li>
                <Link to="/reportaz-slubny">Reportaż Ślubny</Link>
              </li>
              <li>
                <Link to="/reportaz-okolicznosciowy">
                  Reportaż Okolicznościowy
                </Link>
              </li>
              <li>
                <Link to="/reportaz-firmowy">Eventy Firmowe / Sportowe</Link>
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
    </header>
  );
};

export default Header;
