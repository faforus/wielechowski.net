import { useState, useEffect } from "react";
import Title from "../../components/Title";
import classes from "./Offer.module.css";
import webpSupported from "../../helpers/webpSupport";
import VerticalMiniGallery from "../../components/Gallery Mini Vertical/VerticalMiniGallery";
import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "../../config/config";

const importAll = (r) => {
  return r.keys().map(r);
};

const Image = () => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    let images;

    if (webpSupported) {
      images = importAll(
        require.context(
          `../../assets/webpimages/galleries/studio-thumbnails/image/`,
          true,
          /\.(webp)$/
        )
      );
    } else {
      images = importAll(
        require.context(
          `../../assets/images/galleries/studio-thumbnails/image/`,
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
      <Title title="portret / sesja wizerunkowa" />
      <div className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["main-left"]}>
            <p>Zdjęcia w plenerze lub w studiu.</p>
            <p>Idealne na media społecznościowe, stronę www lub do CV</p>
            <p>Zdjęcia są poddawane profesjonalnemu retuszowi*</p>
            <p>Wysoka rozdzielczość zdjęć**</p>
          </div>
          <div className={classes["main-right"]}>
            <VerticalMiniGallery
              currentImage={currentImage}
              mappedImages={mappedImages}
            />
          </div>
        </div>
      </div>
      <div className={classes.squares}>
        <div className={classes.square}>
          <p>3 zdjęcia</p>
          <p>250 zł</p>
        </div>
        <div className={classes.square}>
          <p>5 zdjęć</p>
          <p>350 zł</p>
        </div>
        <div className={classes.square}>
          <p>7 zdjęć</p>
          <p>400 zł</p>
        </div>
        <div className={classes.square}>
          <p>8+ zdjęć</p>
          <p>do</p>
          <p>uzgodnienia</p>
        </div>
      </div>
      <div className={classes["additional-info"]}>
        <div className={classes["additional-info-container"]}>
          <p>
            * podstawowy retusz to korekta cery, oczu, sylwetki oraz lekkie
            wybielanie zębów. Na życzenie klienta można wykonać bardziej
            zaawansowany retusz.
          </p>
          <p>** zdjęcia bez kadrowania są w rozdzielczości 8640 x 5760.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Image;
