import classes from "./Offer.module.css";
import Title from "../../components/Title";

import img1 from "../../assets/images/galleries/reportaz-images-thumbnails/Kasia i Rafał.jpg";

const Wedding = () => {
  return (
    <div className={classes.wrapper}>
      <Title title="Reportaż Ślubny" />
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
    </div>
  );
};

export default Wedding;
