import { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./MainGallery.module.css";
import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "../config/config";
import { preloadGalImages } from "../helpers/preloadGalleryImages";

const scrollHandler = () => {
  window.scrollTo(0, 0);
};

const MainGallery = () => {
  useEffect(() => {
    preloadGalImages();
  }, []);

  return (
    <motion.div {...CUSTOM_MOTION_PROPS} className={classes.gallery}>
      <Link onClick={scrollHandler} to="/studio">
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
      <Link onClick={scrollHandler} to="/plener">
        <div className={`${classes.tab3} ${classes.tabs}`}>
          <button>TRAVEL</button>
        </div>
      </Link>
    </motion.div>
  );
};

export default MainGallery;
