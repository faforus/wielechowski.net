import { useEffect } from "react";
import webpSupported from "../helpers/webpSupport";
import { Link } from "react-router-dom";
import classes from "./MainGallery.module.css";
import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "../config/config";

const scrollHandler = () => {
  window.scrollTo(0, 0);
};

const importAll = (r) => {
  return r.keys().map(r);
};

let set1, set2, set3, set4;

if (webpSupported) {
  set1 = importAll(
    require.context(
      `../assets/webpimages/galleries/studio-thumbnails/`,
      true,
      /\.(webp)$/
    )
  );
  set2 = importAll(
    require.context(
      `../assets/webpimages/galleries/reportage-thumbnails/`,
      true,
      /\.(webp)$/
    )
  );
  set3 = importAll(
    require.context(
      `../assets/webpimages/galleries/animals-thumbnails/`,
      true,
      /\.(webp)$/
    )
  );
  set4 = importAll(
    require.context(
      `../assets/webpimages/galleries/travel-thumbnails/`,
      true,
      /\.(webp)$/
    )
  );
} else {
  set1 = importAll(
    require.context(
      `../assets/images/galleries/studio-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set2 = importAll(
    require.context(
      `../assets/images/galleries/reportage-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set3 = importAll(
    require.context(
      `../assets/images/galleries/animals-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set4 = importAll(
    require.context(
      `../assets/images/galleries/travel-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );
}

let imagesToPreload = [...set1, ...set2, ...set3, ...set4];

const MainGallery = () => {
  useEffect(() => {
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
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
