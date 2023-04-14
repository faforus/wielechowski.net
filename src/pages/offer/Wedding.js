import classes from "./Offer.module.css";
import Title from "../../components/Title";
import useGallery from "../../hooks/use-gallery";
import Gallery from "../../components/Gallery Large/Gallery";

const Wedding = () => {
  const {
    modal,
    largeImgIsLoading,
    tempImgSrc,
    handleLargeImageLoad,
    setModal,
    setTempImgSrc,
    isLoading,
    mappedImgs,
    mappedUnsortedImgs,
    handlePrevClick,
    handleNextClick,
  } = useGallery("wedding");

  return (
    <div className={classes.wrapper}>
      <Title title="Reportaż Ślubny" />
      <div className={classes.price}>
        <p>Ceny od:</p>
        <p className={classes["price-large"]}>
          3000<span className={classes["price-currency"]}> zł</span>
        </p>
      </div>
      <div className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["main-left"]}>
            <p>Od przygotowań do oczepin</p>
            <p>Mini sesja ślubna tego samego dnia</p>
            <p>Od 500 zdjęć w wersji cyfrowej poddanych obróbce*</p>
            <p>Zdjęcia staram się oddawać w ciągu miesiąca</p>
            <p>
              Podczas reportażu ślubnego korzystam z 2 aparatów jednocześnie
              oraz lamp reporterskich lub studyjnych rozmieszczonych w różnych
              miejscach na sal
            </p>
            <p>Trójmiasto i okolice</p>
            <p>
              * Podczas całodniowej imprezy jestem w stanie wykonać kilka
              tysięcy zdjęć. Wybieram z nich najlepsze, unikatowe i
              niepowtarzające się ujęcia.
            </p>
          </div>
          <div className={classes["main-right"]}></div>
        </div>
      </div>
      <div className={classes["gallery-container"]}>
        <Gallery
          category={"Galeria Ślubna"}
          link="empty"
          modal={modal}
          largeImgIsLoading={largeImgIsLoading}
          tempImgSrc={tempImgSrc}
          handleLargeImageLoad={handleLargeImageLoad}
          setModal={setModal}
          setTempImgSrc={setTempImgSrc}
          isLoading={isLoading}
          mappedImgs={mappedImgs}
          mappedUnsortedImgs={mappedUnsortedImgs}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Wedding;
