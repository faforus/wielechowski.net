import { useState, useEffect } from "react";
import Title from "../../components/Title";
import classes from "./Offer.module.css";
import webpSupported from "../../helpers/webpSupport";
import HorizontalMiniGallery from "../../components/Gallery Mini Horizontal/HorizontalMiniGallery";
import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "../../config/config";

const importAll = (r) => {
  return r.keys().map(r);
};

const NonCommercialReportage = () => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    let images;

    if (webpSupported) {
      images = importAll(
        require.context(
          `../../assets/webpimages/galleries/reportage-thumbnails/noncorporate/`,
          true,
          /\.(webp)$/
        )
      );
    } else {
      images = importAll(
        require.context(
          `../../assets/images/galleries/reportage-thumbnails/noncorporate/`,
          true,
          /\.(jpe?g)$/
        )
      );
    }

    const mappedImages = images
      .sort(() => Math.random() - 0.5)
      .map((img, index) => {
        return (
          <img
            onClick={() => {
              setCurrentImage(mappedImages[index]);
            }}
            src={img}
            alt={img
              .replace(/%20/g, " ")
              .replace("/static/media/", "")
              .replace(/\..*$/, "")}
            key={index}
          />
        );
      });
    setMappedImages(mappedImages);
    setCurrentImage(mappedImages[0]);
  }, []);

  return (
    <motion.div {...CUSTOM_MOTION_PROPS} className={classes.wrapper}>
      <Title title="Reportaż Okolicznościowy" />
      <div className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["main-left"]}>
            <p>Między innymi:</p>
            <p>wieczory panieńskie / kawalerskie</p>
            <p>chrzciny / pierwsza komunia</p>
            <p>zaręczyny</p>
            <p>urodziny / imieniny</p>
          </div>
          <div className={classes["main-right"]}>
            <HorizontalMiniGallery
              currentImage={currentImage}
              mappedImages={mappedImages}
            />
          </div>
        </div>
      </div>
      <div className={classes.price}>
        <p>Ceny od:</p>
        <p className={classes["price-large"]}>
          500<span className={classes["price-currency"]}> zł</span>
        </p>
      </div>
      <div className={classes.main}>
        <p>
          Cena jest zależna od długości wydarzenia, lokalizacji, ilości zdjęć i
          rodzaju obróbki.
        </p>
      </div>
    </motion.div>
  );
};

export default NonCommercialReportage;
