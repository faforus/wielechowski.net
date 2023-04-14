import { useState, useEffect } from "react";
import Title from "../../components/Title";
import classes from "./Offer.module.css";
import webpSupported from "../../helpers/webpSupport";
import HorizontalMiniGallery from "../../components/Gallery Mini Horizontal/HorizontalMiniGallery";

import img1 from "../../assets/images/galleries/reportaz-images/chrz1.jpg";
import img2 from "../../assets/images/galleries/reportaz-images/dp1.jpg";
import img3 from "../../assets/images/galleries/reportaz-images/dp2.jpg";
import img4 from "../../assets/images/galleries/reportaz-images/dp3.jpg";
import img5 from "../../assets/images/galleries/reportaz-images/dp4.jpg";
import img6 from "../../assets/images/galleries/reportaz-images/dp5.jpg";
import img7 from "../../assets/images/galleries/reportaz-images/dp6.jpg";
import img8 from "../../assets/images/galleries/reportaz-images/dp7.jpg";
import img9 from "../../assets/images/galleries/reportaz-images/okolicznosciowe.jpg";
import img10 from "../../assets/images/galleries/reportaz-images/p1.jpg";
import img11 from "../../assets/images/galleries/reportaz-images/p2.jpg";
import img12 from "../../assets/images/galleries/reportaz-images/p3.jpg";
import img13 from "../../assets/images/galleries/reportaz-images/panienski.jpg";

import webpImg1 from "../../assets/webpimages/galleries/reportaz-images/chrz1.webp";
import webpImg2 from "../../assets/webpimages/galleries/reportaz-images/dp1.webp";
import webpImg3 from "../../assets/webpimages/galleries/reportaz-images/dp2.webp";
import webpImg4 from "../../assets/webpimages/galleries/reportaz-images/dp3.webp";
import webpImg5 from "../../assets/webpimages/galleries/reportaz-images/dp4.webp";
import webpImg6 from "../../assets/webpimages/galleries/reportaz-images/dp5.webp";
import webpImg7 from "../../assets/webpimages/galleries/reportaz-images/dp6.webp";
import webpImg8 from "../../assets/webpimages/galleries/reportaz-images/dp7.webp";
import webpImg9 from "../../assets/webpimages/galleries/reportaz-images/okolicznosciowe.webp";
import webpImg10 from "../../assets/webpimages/galleries/reportaz-images/p1.webp";
import webpImg11 from "../../assets/webpimages/galleries/reportaz-images/p2.webp";
import webpImg12 from "../../assets/webpimages/galleries/reportaz-images/p3.webp";
import webpImg13 from "../../assets/webpimages/galleries/reportaz-images/panienski.webp";

const NonCommercialReportage = () => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    let images;
    if (webpSupported) {
      images = [
        webpImg2,
        webpImg1,
        webpImg3,
        webpImg4,
        webpImg5,
        webpImg6,
        webpImg7,
        webpImg8,
        webpImg9,
        webpImg10,
        webpImg11,
        webpImg12,
        webpImg13,
      ];
    } else {
      images = [
        img2,
        img1,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
      ];
    }
    const mappedImages = images.map((img, index) => {
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
    </div>
  );
};

export default NonCommercialReportage;
