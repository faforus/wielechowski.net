import { Fragment } from "react";
import classes from "./Offer.module.css";
import Offer from "./Offer";
import Modal from "../../components/Modal";
import useModal from "../../hooks/use-modal";
import imageX from "../../assets/images/1.jpg";
import imageY from "../../assets/images/2.jpg";
import imageA from "../../assets/images/3.jpg";
import imageS from "../../assets/images/4.jpg";

const Business = () => {
  const images = [
    { src: imageX, id: 1, largeImage: imageX },
    { src: imageY, id: 2, largeImage: imageY },
    { src: imageA, id: 3, largeImage: imageA },
    { src: imageS, id: 4, largeImage: imageS },
  ];

  const {
    modal,
    setModal,
    closeModal,
    tempImgSrc,
    setCurrentIndex,
    setLargeImgIsLoading,
    setTempImgSrc,
    handleLargeImageLoad,
    largeImgIsLoading,
    handlePrevClick,
    handleNextClick,
  } = useModal(images);

  return (
    <Fragment>
      <Offer title="Sesja Biznesowa" />
      <div className={classes.main}>
        <div className={classes["main-left"]}>
          <p>Zdjęcia na tle jednolitym w studiu lub w przestrzeni firmowej* </p>
          <p>Idealne na media społecznościowe, stronę www lub do CV</p>
          <p>Zdjęcia są poddawane profesjonalnemu retuszowi**</p>
          <p> Wysoka rozdzielczość zdjęć***</p>
          <p>
            Tła: głównie w odcieniach szarości - od bieli przez szarość do
            czerni. Dostępne też kolorowe.
          </p>
        </div>
        <div className={classes["main-right"]}></div>
      </div>
      <img
        alt={imageX}
        key={imageX}
        onClick={() => {
          setModal(true);
          setTempImgSrc(images[0].src);
          setCurrentIndex(images[0].id);
        }}
        src={images[0].src}
      />
      <img
        alt={imageY}
        key={imageY}
        onClick={() => {
          setModal(true);
          setTempImgSrc(images[1].src);
          setCurrentIndex(images[1].id);
        }}
        src={images[1].src}
      />
      <img
        alt={imageA}
        key={imageA}
        onClick={() => {
          setModal(true);
          setTempImgSrc(images[2].src);
          setCurrentIndex(images[2].id);
        }}
        src={images[2].src}
      />
      <img
        alt={imageS}
        key={imageS}
        onClick={() => {
          setModal(true);
          setTempImgSrc(images[3].src);
          setCurrentIndex(images[3].id);
        }}
        src={images[3].src}
      />
      <Modal
        modal={modal}
        setModal={setModal}
        closeModal={closeModal}
        tempImgSrc={tempImgSrc}
        setLargeImgIsLoading={setLargeImgIsLoading}
        setTempImgSrc={setTempImgSrc}
        handleLargeImageLoad={handleLargeImageLoad}
        largeImgIsLoading={largeImgIsLoading}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        setCurrentIndex={setCurrentIndex}
      />
      <div className={classes["additional-info"]}>
        <p>
          * możliwy dojazd do biura/firmy klienta gdzie zdjęcia zostaną wykonane
          w przestrzeni biurowej/firmowej przy użyciu lamp. W grę wchodzą
          miejsca nie tylko ogarniczające się wyłącznie do biur np. fabryki.
          Cena zależy od lokalizacji i ilości zdjęć.
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
          wyskości. Okna muszą być zakrywane. Czas rozstawienia i przetestowania
          studia to około godziny. Cena zależy od lokalizacji i ilości zdjęć.
        </p>
      </div>
    </Fragment>
  );
};

export default Business;
