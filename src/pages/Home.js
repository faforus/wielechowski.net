import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import classes from "./Home.module.css";
import webpSupported from "../helpers/webpSupport";
import top from "../assets/images/top.jpg";
import topWEBP from "../assets/webpimages/top.webp";
import bottom from "../assets/images/bottom.jpg";
import bottomWEBP from "../assets/webpimages/bottom.webp";
import topSmall from "../assets/images/topsmall.jpg";
import topSmallWEBP from "../assets/webpimages/topsmall.webp";
import bottomSmall from "../assets/images/bottomsmall.jpg";
import bottomSmallWEBP from "../assets/webpimages/bottomsmall.webp";
import color from "../assets/images/color.png";
import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "../config/config";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta
          property="description"
          content="Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto"
        />
        <meta
          property="og:description"
          content="Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto"
        />
        <title>FW Fotografia</title>
      </Helmet>
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes["img-container"]}>
        {windowWidth > 800 ? (
          <img
            className={classes.color}
            alt="+48 722 265 649 Fotograf, Gdynia, Sopot, Gdańsk, Trójmiasto"
            src={color}
          />
        ) : (
          ""
        )}
        <img
          className={classes["img-top"]}
          alt="Filip Wielechowski Fotografia - Gdynia, Sopot, Gdańsk, Trójmiasto"
          src={
            windowWidth > 800
              ? webpSupported
                ? topWEBP
                : top
              : webpSupported
              ? topSmallWEBP
              : topSmall
          }
        />
        <div className={classes.stripe}>
          F<span className={classes.smaller}>ILIP&nbsp;</span> W
          <span className={classes.smaller}>IELECHOWSKI&nbsp;</span>F
          <span className={classes.smaller}>OTOGRAFIA</span>
        </div>
        <img
          className={classes["img-bottom"]}
          alt="Filip Wielechowski Fotografia - Gdynia, Sopot, Gdańsk, Trójmiasto"
          src={
            windowWidth > 800
              ? webpSupported
                ? bottomWEBP
                : bottom
              : webpSupported
              ? bottomSmallWEBP
              : bottomSmall
          }
        />
      </motion.div>
    </Fragment>
  );
};

export default Home;
