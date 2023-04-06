import { Link, NavLink } from "react-router-dom";
import classes from "./MainGallery.module.css";

const MainGallery = () => {
  return (
    <div className={classes.gallery}>
      <Link to="/studio">
        <div className={`${classes.tab1} ${classes.tabs}`}>
          <button>STUDIO</button>
        </div>
      </Link>
      <Link to="/reportaz">
        <div className={`${classes.tab2} ${classes.tabs}`}>
          <button>REPORTAŻ</button>
        </div>
      </Link>
      <Link to="/plener">
        <div className={`${classes.tab3} ${classes.tabs}`}>
          <button>PLENER</button>
        </div>
      </Link>
      <Link to="/zwierzeta">
        <div className={`${classes.tab4} ${classes.tabs}`}>
          <button>ZWIERZĘTA</button>
        </div>
      </Link>
    </div>
  );
};

export default MainGallery;
