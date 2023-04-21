import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainGallery.module.css";
import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "../config/config";
import { CUSTOM_MOTION_PROPS_MOBILE_MAIN_GALLERY } from "../config/config";
import { preloadGalImages } from "../helpers/preloadGalleryImages";

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
    <motion.div {...motionProps} className={classes.gallery}>
      <Link onClick={scrollHandler} to="/studio-portret">
        <div className={`${classes.tab1} ${classes.tabs}`}>
          <button>STUDIO / PORTRET</button>
        </div>
      </Link>
      <Link onClick={scrollHandler} to="/reportaz">
        <div className={`${classes.tab2} ${classes.tabs}`}>
          <button>REPORTAŻ</button>
        </div>
      </Link>
      <Link onClick={scrollHandler} to="/zwierzeta">
        <div className={`${classes.tab4} ${classes.tabs}`}>
          <button>ZWIERZĘTA</button>
        </div>
      </Link>
      <Link onClick={scrollHandler} to="/travel">
        <div className={`${classes.tab3} ${classes.tabs}`}>
          <button>TRAVEL</button>
        </div>
      </Link>
    </motion.div>
  );
};

export default MainGallery;
