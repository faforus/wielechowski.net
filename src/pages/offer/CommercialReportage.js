import { useState, useEffect } from "react";
import Title from "../../components/Title";
import classes from "./Offer.module.css";
import webpSupported from "../../helpers/webpSupport";

import p1 from "../../assets/images/partners/emporium.png";
import p2 from "../../assets/images/partners/fedex.png";
import p3 from "../../assets/images/partners/hebe.png";
import p4 from "../../assets/images/partners/hevelianum.png";
import p5 from "../../assets/images/partners/pepsico.png";
import p6 from "../../assets/images/partners/png.png";
import p7 from "../../assets/images/partners/pomerania.png";
import p8 from "../../assets/images/partners/zabka.png";
import p9 from "../../assets/images/partners/arrow.png";

import img25 from "../../assets/images/galleries/reportaz-images/_DSC4417.jpg";
import img1 from "../../assets/images/galleries/reportaz-images/_DSC5459.jpg";
import img2 from "../../assets/images/galleries/reportaz-images/6.jpg";
import img3 from "../../assets/images/galleries/reportaz-images/barb1.jpg";
import img4 from "../../assets/images/galleries/reportaz-images/cheer.jpg";
import img5 from "../../assets/images/galleries/reportaz-images/chef.jpg";
import img6 from "../../assets/images/galleries/reportaz-images/dancer.jpg";
import img7 from "../../assets/images/galleries/reportaz-images/fire.jpg";
import img8 from "../../assets/images/galleries/reportaz-images/fireguy.jpg";
import img9 from "../../assets/images/galleries/reportaz-images/p4.jpg";
import img10 from "../../assets/images/galleries/reportaz-images/p5.jpg";
import img11 from "../../assets/images/galleries/reportaz-images/s1.jpg";
import img12 from "../../assets/images/galleries/reportaz-images/s2.jpg";
import img13 from "../../assets/images/galleries/reportaz-images/s3.jpg";
import img14 from "../../assets/images/galleries/reportaz-images/waiter3000.jpg";
import img15 from "../../assets/images/galleries/reportaz-images/DSC01765.jpg";
import img16 from "../../assets/images/galleries/reportaz-images/DSC04282.jpg";
import img17 from "../../assets/images/galleries/reportaz-images/DSC05130.jpg";
import img18 from "../../assets/images/galleries/reportaz-images/DSC05198.jpg";
import img19 from "../../assets/images/galleries/reportaz-images/DSC05216.jpg";
import img20 from "../../assets/images/galleries/reportaz-images/DSC05219.jpg";
import img21 from "../../assets/images/galleries/reportaz-images/DSC08447.jpg";
import img22 from "../../assets/images/galleries/reportaz-images/DSC08579.jpg";
import img23 from "../../assets/images/galleries/reportaz-images/DSC08825.jpg";
import img24 from "../../assets/images/galleries/reportaz-images/DSC09018.jpg";
import img27 from "../../assets/images/galleries/reportaz-images/j4-2.jpg";
import img26 from "../../assets/images/galleries/reportaz-images/j7-2.jpg";

import webpImg25 from "../../assets/webpimages/galleries/reportaz-images/_DSC4417.webp";
import webpImg1 from "../../assets/webpimages/galleries/reportaz-images/_DSC5459.webp";
import webpImg2 from "../../assets/webpimages/galleries/reportaz-images/6.webp";
import webpImg3 from "../../assets/webpimages/galleries/reportaz-images/barb1.webp";
import webpImg4 from "../../assets/webpimages/galleries/reportaz-images/cheer.webp";
import webpImg5 from "../../assets/webpimages/galleries/reportaz-images/chef.webp";
import webpImg6 from "../../assets/webpimages/galleries/reportaz-images/dancer.webp";
import webpImg7 from "../../assets/webpimages/galleries/reportaz-images/fire.webp";
import webpImg8 from "../../assets/webpimages/galleries/reportaz-images/fireguy.webp";
import webpImg9 from "../../assets/webpimages/galleries/reportaz-images/p4.webp";
import webpImg10 from "../../assets/webpimages/galleries/reportaz-images/p5.webp";
import webpImg11 from "../../assets/webpimages/galleries/reportaz-images/s1.webp";
import webpImg12 from "../../assets/webpimages/galleries/reportaz-images/s2.webp";
import webpImg13 from "../../assets/webpimages/galleries/reportaz-images/s3.webp";
import webpImg14 from "../../assets/webpimages/galleries/reportaz-images/waiter3000.webp";
import webpImg15 from "../../assets/webpimages/galleries/reportaz-images/DSC01765.webp";
import webpImg16 from "../../assets/webpimages/galleries/reportaz-images/DSC04282.webp";
import webpImg17 from "../../assets/webpimages/galleries/reportaz-images/DSC05130.webp";
import webpImg18 from "../../assets/webpimages/galleries/reportaz-images/DSC05198.webp";
import webpImg19 from "../../assets/webpimages/galleries/reportaz-images/DSC05216.webp";
import webpImg20 from "../../assets/webpimages/galleries/reportaz-images/DSC05219.webp";
import webpImg21 from "../../assets/webpimages/galleries/reportaz-images/DSC08447.webp";
import webpImg22 from "../../assets/webpimages/galleries/reportaz-images/DSC08579.webp";
import webpImg23 from "../../assets/webpimages/galleries/reportaz-images/DSC08825.webp";
import webpImg24 from "../../assets/webpimages/galleries/reportaz-images/DSC09018.webp";
import webpImg26 from "../../assets/webpimages/galleries/reportaz-images/j4-2.webp";
import webpImg27 from "../../assets/webpimages/galleries/reportaz-images/j7-2.webp";

const CommercialReportage = () => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    let images;
    if (webpSupported) {
      images = [
        webpImg15,
        webpImg3,
        webpImg7,
        webpImg8,
        webpImg9,
        webpImg10,
        webpImg11,
        webpImg12,
        webpImg13,
        webpImg14,
        webpImg4,
        webpImg16,
        webpImg17,
        webpImg18,
        webpImg1,
        webpImg2,
        webpImg6,
        webpImg19,
        webpImg20,
        webpImg5,
        webpImg21,
        webpImg22,
        webpImg23,
        webpImg24,
        webpImg25,
        webpImg26,
        webpImg27,
      ];
    } else {
      images = [
        img15,
        img4,
        img7,
        img8,
        img9,
        img10,
        img1,
        img11,
        img12,
        img13,
        img14,
        img16,
        img17,
        img18,
        img2,
        img6,
        img5,
        img3,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
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
            <div className={classes["mini-gallery-horizontal"]}>
              <div className={classes["mini-gallery-top"]}>{currentImage}</div>
              <div className={classes["mini-gallery-bottom"]}>
                {mappedImages}
              </div>
              <div></div>
            </div>
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
