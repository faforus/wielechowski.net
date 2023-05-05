import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import classes from "./MainGallery.module.css";
import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "../config/config";
import { CUSTOM_MOTION_PROPS_MOBILE_MAIN_GALLERY } from "../config/config";
import { preloadGalImages } from "../helpers/preloadGalleryImages";
import { Fragment } from "react";
import classNames from "classnames";

const scrollHandler = () => {
  window.scrollTo(0, 0);
};

const MainGallery = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    preloadGalImages();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const motionProps =
    windowWidth > 1400
      ? { ...CUSTOM_MOTION_PROPS }
      : { ...CUSTOM_MOTION_PROPS_MOBILE_MAIN_GALLERY };

  return (
    <Fragment>
      <Helmet>
        <meta
          property="description"
          content="Galeria: Studio i Portret / Reportaż / Zwierzęta / Travel"
        />
        <meta
          property="og:description"
          content="Galeria: Studio i Portret / Reportaż / Zwierzęta / Travel"
        />
        <title>Galeria: Studio i Portret / Reportaż / Zwierzęta / Travel</title>
      </Helmet>
      <motion.div {...motionProps} className={classes.gallery}>
        <Link onClick={scrollHandler} to="/galeria/studio-portret">
          <div className={classNames(classes.tab1, classes.tabs)}>
            <button>STUDIO / PORTRET</button>
          </div>
        </Link>
        <Link onClick={scrollHandler} to="/galeria/reportaz">
          <div className={classNames(classes.tab2, classes.tabs)}>
            <button>REPORTAŻ</button>
          </div>
        </Link>
        <Link onClick={scrollHandler} to="/galeria/zwierzeta">
          <div className={classNames(classes.tab3, classes.tabs)}>
            <button>ZWIERZĘTA</button>
          </div>
        </Link>
        <Link onClick={scrollHandler} to="/galeria/travel">
          <div className={classNames(classes.tab4, classes.tabs)}>
            <button>TRAVEL</button>
          </div>
        </Link>
      </motion.div>
    </Fragment>
  );
};

export default MainGallery;
