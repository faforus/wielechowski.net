import { useState, useEffect } from "react";
import Title from "../../components/Title";
import classes from "./Offer.module.css";
import webpSupported from "../../helpers/webpSupport";
import HorizontalMiniGallery from "../../components/Gallery Mini Horizontal/HorizontalMiniGallery";

import p1 from "../../assets/images/partners/emporium.png";
import p2 from "../../assets/images/partners/fedex.png";
import p3 from "../../assets/images/partners/hebe.png";
import p4 from "../../assets/images/partners/hevelianum.png";
import p5 from "../../assets/images/partners/pepsico.png";
import p6 from "../../assets/images/partners/png.png";
import p7 from "../../assets/images/partners/pomerania.png";
import p8 from "../../assets/images/partners/zabka.png";
import p9 from "../../assets/images/partners/arrow.png";

const importAll = (r) => {
  return r.keys().map(r);
};

const CommercialReportage = () => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    let images;

    if (webpSupported) {
      images = importAll(
        require.context(
          `../../assets/webpimages/galleries/reportage/corporate/`,
          true,
          /\.(webp)$/
        )
      );
    } else {
      images = importAll(
        require.context(
          `../../assets/images/galleries/reportage/corporate/`,
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
    <div className={classes.wrapper}>
      <Title title="Eventy Firmowe / Sportowe" />
      <div className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["main-left"]}>
            <p>Między innymi:</p>
            <p>wszelkiego rodzaju reportaże</p>
            <p>imprezy / eventy firmowe</p>
            <p>jubileusze / konferencje</p>
            <p>eventy sportowe / muzyczne</p>
            <p>otwarcia nowych lokali</p>
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
        <p>
          Cena jest zależna od długości wydarzenia, lokalizacji, ilości zdjęć i
          rodzaju obróbki.
        </p>
      </div>
      <div className={classes.main}>
        <p className={classes["partners-txt"]}>Współpracowałem z</p>
      </div>
      <div className={classes.partners}>
        <img
          src={p1}
          alt={p1
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
        <img
          src={p2}
          alt={p2
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
        <img
          src={p3}
          alt={p3
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
        <img
          src={p4}
          alt={p4
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
        <img
          src={p5}
          alt={p5
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
        <img
          src={p6}
          alt={p6
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
        <img
          src={p7}
          alt={p7
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
        <img
          src={p8}
          alt={p8
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
        <img
          src={p9}
          alt={p9
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
        />
      </div>
    </div>
  );
};

export default CommercialReportage;
