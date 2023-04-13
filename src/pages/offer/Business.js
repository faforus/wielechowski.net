import { useState, useEffect } from "react";
import Title from "../../components/Title";
import classes from "./Offer.module.css";
import webpSupported from "../../helpers/webpSupport";

import img1 from "../../assets/images/galleries/studio-images-thumbnails/w1-s.jpg";
import img2 from "../../assets/images/galleries/studio-images-thumbnails/dorotasmall.jpg";
import img3 from "../../assets/images/galleries/studio-images-thumbnails/d1.jpg";
import img4 from "../../assets/images/galleries/studio-images-thumbnails/ewa.jpg";
import img5 from "../../assets/images/galleries/studio-images-thumbnails/Fatimah Adebimpe Salami.jpg";
import img6 from "../../assets/images/galleries/studio-images-thumbnails/gosiasmall.jpg";
import img7 from "../../assets/images/galleries/studio-images-thumbnails/Isabela Pereira Carvalho.jpg";
import img8 from "../../assets/images/galleries/studio-images-thumbnails/justyna.jpg";
import img9 from "../../assets/images/galleries/studio-images-thumbnails/Kasjana.jpg";
import img10 from "../../assets/images/galleries/studio-images-thumbnails/ł1-s.jpg";
import img11 from "../../assets/images/galleries/studio-images-thumbnails/łukasz.jpg";
import img12 from "../../assets/images/galleries/studio-images-thumbnails/marcin1-3x2.jpg";
import img13 from "../../assets/images/galleries/studio-images-thumbnails/marta.jpg";
import img14 from "../../assets/images/galleries/studio-images-thumbnails/michalek.jpg";
import img15 from "../../assets/images/galleries/studio-images-thumbnails/p1-3x2.jpg";
import img16 from "../../assets/images/galleries/studio-images-thumbnails/patrycja1-3x2.jpg";
import img17 from "../../assets/images/galleries/studio-images-thumbnails/Radosław.jpg";
import img18 from "../../assets/images/galleries/studio-images-thumbnails/Seher.jpg";
import img19 from "../../assets/images/galleries/studio-images-thumbnails/Azeezah Aina.jpg";
import img20 from "../../assets/images/galleries/studio-images-thumbnails/ama1.jpg";

import webpImg1 from "../../assets/webpimages/galleries/studio-images-thumbnails/w1-s.webp";
import webpImg2 from "../../assets/webpimages/galleries/studio-images-thumbnails/dorotasmall.webp";
import webpImg3 from "../../assets/webpimages/galleries/studio-images-thumbnails/d1.webp";
import webpImg4 from "../../assets/webpimages/galleries/studio-images-thumbnails/ewa.webp";
import webpImg5 from "../../assets/webpimages/galleries/studio-images-thumbnails/Fatimah Adebimpe Salami.webp";
import webpImg6 from "../../assets/webpimages/galleries/studio-images-thumbnails/gosiasmall.webp";
import webpImg7 from "../../assets/webpimages/galleries/studio-images-thumbnails/Isabela Pereira Carvalho.webp";
import webpImg8 from "../../assets/webpimages/galleries/studio-images-thumbnails/justyna.webp";
import webpImg9 from "../../assets/webpimages/galleries/studio-images-thumbnails/Kasjana.webp";
import webpImg10 from "../../assets/webpimages/galleries/studio-images-thumbnails/ł1-s.webp";
import webpImg11 from "../../assets/webpimages/galleries/studio-images-thumbnails/łukasz.webp";
import webpImg12 from "../../assets/webpimages/galleries/studio-images-thumbnails/marcin1-3x2.webp";
import webpImg13 from "../../assets/webpimages/galleries/studio-images-thumbnails/marta.webp";
import webpImg14 from "../../assets/webpimages/galleries/studio-images-thumbnails/michalek.webp";
import webpImg15 from "../../assets/webpimages/galleries/studio-images-thumbnails/p1-3x2.webp";
import webpImg16 from "../../assets/webpimages/galleries/studio-images-thumbnails/patrycja1-3x2.webp";
import webpImg17 from "../../assets/webpimages/galleries/studio-images-thumbnails/Radosław.webp";
import webpImg18 from "../../assets/webpimages/galleries/studio-images-thumbnails/Seher.webp";
import webpImg19 from "../../assets/webpimages/galleries/studio-images-thumbnails/Azeezah Aina.webp";
import webpImg20 from "../../assets/webpimages/galleries/studio-images-thumbnails/ama1.webp";

const Business = () => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    let images;
    if (webpSupported) {
      images = [
        webpImg1,
        webpImg2,
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
        webpImg14,
        webpImg15,
        webpImg16,
        webpImg17,
        webpImg18,
        webpImg19,
        webpImg20,
      ];
    } else {
      images = [
        img1,
        img2,
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
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
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
    <div className={classes.business}>
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
            <div className={classes["mini-gallery"]}>
              <div className={classes["mini-gallery-left"]}>{currentImage}</div>
              <div className={classes["mini-gallery-right"]}>
                {mappedImages}
              </div>
            </div>
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
          <p>1 osoba 3 zdjęcia</p>
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
            * możliwy dojazd do biura/firmy klienta gdzie zdjęcia zostaną
            wykonane w przestrzeni biurowej/firmowej przy użyciu lamp. W grę
            wchodzą miejsca nie tylko ogarniczające się wyłącznie do biur np.
            fabryki. Cena zależy od lokalizacji i ilości zdjęć.
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
    </div>
  );
};

export default Business;

// const {
//   modal,
//   setModal,
//   tempImgSrc,
//   setCurrentIndex,
//   setLargeImgIsLoading,
//   setTempImgSrc,
//   handleLargeImageLoad,
//   largeImgIsLoading,
//   handlePrevClick,
//   handleNextClick,
// } = useModal(images);

// <img
// alt={imageX}
// key={imageX}
// onClick={() => {
//   setModal(true);
//   setTempImgSrc(images[0].src);
//   setCurrentIndex(images[0].id);
// }}
// src={images[0].src}
// />
// <img
// alt={imageY}
// key={imageY}
// onClick={() => {
//   setModal(true);
//   setTempImgSrc(images[1].src);
//   setCurrentIndex(images[1].id);
// }}
// src={images[1].src}
// />
// <img
// alt={imageA}
// key={imageA}
// onClick={() => {
//   setModal(true);
//   setTempImgSrc(images[2].src);
//   setCurrentIndex(images[2].id);
// }}
// src={images[2].src}
// />
// <img
// alt={imageS}
// key={imageS}
// onClick={() => {
//   setModal(true);
//   setTempImgSrc(images[3].src);
//   setCurrentIndex(images[3].id);
// }}
// src={images[3].src}
// />
// <Modal
// modal={modal}
// setModal={setModal}
// tempImgSrc={tempImgSrc}
// setLargeImgIsLoading={setLargeImgIsLoading}
// setTempImgSrc={setTempImgSrc}
// handleLargeImageLoad={handleLargeImageLoad}
// largeImgIsLoading={largeImgIsLoading}
// handlePrevClick={handlePrevClick}
// handleNextClick={handleNextClick}
// setCurrentIndex={setCurrentIndex}
// />
