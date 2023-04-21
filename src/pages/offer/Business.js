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

const Business = () => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    let images;

    if (webpSupported) {
      images = importAll(
        require.context(
          `../../assets/webpimages/galleries/studio-thumbnails/business/`,
          true,
          /\.(webp)$/
        )
      );
    } else {
      images = importAll(
        require.context(
          `../../assets/images/galleries/studio-thumbnails/business/`,
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
      <Title title="portret biznesowy / sesja biznesowa / korporacyjna" />
      <div className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["main-left"]}>
            <p>
              Zdjęcia na tle jednolitym w studiu lub w przestrzeni firmowej*{" "}
            </p>
            <p>Idealne na media społecznościowe, stronę www lub do CV</p>
            <p>Zdjęcia są poddawane profesjonalnemu retuszowi**</p>
            <p> Wysoka rozdzielczość zdjęć***</p>
            <p>
              Tła: głównie w odcieniach szarości - od bieli przez szarość do
              czerni. Dostępne też kolorowe.
            </p>
          </div>
          <div className={classes["main-right"]}>
            <VerticalMiniGallery
              currentImage={currentImage}
              mappedImages={mappedImages}
            />
          </div>
        </div>
      </div>
      <div className={classes["red-stripe"]}>
        <p>
          Mobilne studio - możliwość dojazdu i wykonania zdjęć na terenie
          firmy****
        </p>
      </div>
      <div className={classes.squares}>
        <div className={classes.square}>
          <p>indywidualnie</p>
          <p>1 zdjęcie</p>
          <p>150 zł</p>
        </div>
        <div className={classes.square}>
          <p>indywidualnie</p>
          <p>1 osoba</p>
          <p>3 zdjęcia</p>
          <p>250 zł</p>
        </div>
        <div className={classes.square}>
          <p>grupy</p>
          <p>5 - 10 osób</p>
          <p>130 zł / zdj</p>
        </div>
        <div className={classes.square}>
          <p>grupy</p>
          <p>10+ osób</p>
          <p>120 zł / zdj</p>
        </div>
      </div>
      <div className={classes["additional-info"]}>
        <div className={classes["additional-info-container"]}>
          <p>
            * Możliwy dojazd do biura/firmy klienta, gdzie zdjęcia zostaną
            wykonane w przestrzeni biurowej/firmowej przy użyciu lamp. W grę
            wchodzą również obszary znajdujące się poza biurem, np. fabryki..
          </p>
          <p>
            ** podstawowy retusz to korekta cery, oczu, sylwetki oraz lekkie
            wybielanie zębów. Na życzenie klienta można wykonać bardziej
            zaawansowany retusz.
          </p>
          <p>*** zdjęcia bez kadrowania są w rozdzielczości 8640 x 5760.</p>
          <p>
            **** istnieje możliwość przewiezienia i ustawienia studia w miejscu
            dogodnym dla klienta. Minimalny rozmiar pomieszczenia to 4x5m i 3m
            wyskości. Okna muszą być zakrywane. Czas rozstawienia i
            przetestowania studia to około godziny. Cena zależy od lokalizacji i
            ilości zdjęć.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Business;
