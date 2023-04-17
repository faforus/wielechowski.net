import { Link } from "react-router-dom";
import classes from "./MainGallery.module.css";

const scrollHandler = () => {
  window.scrollTo(0, 0);
};

const MainGallery = () => {
  return (
    <div className={classes.gallery}>
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
    </div>
  );
};

export default MainGallery;
