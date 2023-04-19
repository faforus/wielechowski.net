import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import webpSupported from "../helpers/webpSupport";

import p1 from "../assets/images/partners/emporium.png";
import p2 from "../assets/images/partners/fedex.png";
import p3 from "../assets/images/partners/hebe.png";
import p4 from "../assets/images/partners/hevelianum.png";
import p5 from "../assets/images/partners/pepsico.png";
import p6 from "../assets/images/partners/png.png";
import p7 from "../assets/images/partners/pomerania.png";
import p8 from "../assets/images/partners/zabka.png";
import p9 from "../assets/images/partners/arrow.png";

const logos = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

const importAll = (r) => {
  return r.keys().map(r);
};

let set1, set2, set3, set4;

if (webpSupported) {
  set1 = importAll(
    require.context(
      `../assets/webpimages/galleries/studio-thumbnails/business/`,
      true,
      /\.(webp)$/
    )
  );
  set2 = importAll(
    require.context(
      `../assets/webpimages/galleries/reportage-thumbnails/corporate/`,
      true,
      /\.(webp)$/
    )
  );
  set3 = importAll(
    require.context(
      `../assets/webpimages/galleries/studio-thumbnails/image/`,
      true,
      /\.(webp)$/
    )
  );
  set4 = importAll(
    require.context(
      `../assets/webpimages/galleries/reportage-thumbnails/noncorporate/`,
      true,
      /\.(webp)$/
    )
  );
} else {
  set1 = importAll(
    require.context(
      `../assets/images/galleries/studio-thumbnails/business/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set2 = importAll(
    require.context(
      `../assets/images/galleries/reportage-thumbnails/corporate/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set3 = importAll(
    require.context(
      `../assets/images/galleries/studio-thumbnails/image/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set4 = importAll(
    require.context(
      `../assets/images/galleries/reportage-thumbnails/noncorporate/`,
      true,
      /\.(jpe?g)$/
    )
  );
}

let imagesToPreload = [...logos, ...set1, ...set2, ...set3, ...set4];

const Header = () => {
  const [hovering, setHovering] = useState(false);
  const [preloaded, setPreloaded] = useState(false);

  const preloadImages = () => {
    if (!preloaded) {
      imagesToPreload.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
      setPreloaded(true);
    }
  };

  const handleHover = () => {
    setHovering(true);
  };

  const handleClick = () => {
    setHovering(false);
  };

  return (
    <header>
      <Link to="/">
        <h1>Filip Wielechowski</h1>
      </Link>
      <nav>
        <ul onMouseOut={handleClick} className={classes["menu-main"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.dropdown}>
            <Link
              onMouseOver={() => {
                handleHover();
                preloadImages();
              }}
              to="#"
              className={classes.arrow}
            >
              Oferta
            </Link>
            <ul
              onMouseOver={handleHover}
              onMouseOut={handleClick}
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
    </header>
  );
};

export default Header;
