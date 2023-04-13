import { Fragment } from "react";
import classes from "./Offer.module.css";
import Offer from "./Offer";

const Wedding = () => {
  return (
    <Fragment>
      <Offer title="Reportaż Ślubny" />
      <div className={classes.main}>
        <div className={classes["main-left"]}>
          <p>Od przygotowań do oczepin</p>
          <p>Mini sesja ślubna tego samego dnia</p>
          <p>Od 500 zdjęć w wersji cyfrowej poddanych obróbce*</p>
          <p>Zdjęcia staram się oddawać w ciągu miesiąca</p>
          <p>
            Podczas reportażu ślubnego korzystam z 2 aparatów jednocześnie oraz
            lamp reporterskich lub studyjnych rozmieszczonych w różnych
            miejscach na sal
          </p>
          <p>Trójmiasto i okolice</p>
          <p>
            * Podczas całodniowej imprezy jestem w stanie wykonać kilka tysięcy
            zdjęć. Wybieram z nich najlepsze, unikatowe i niepowtarzające się
            ujęcia.
          </p>
        </div>
        <div className={classes["main-right"]}></div>
      </div>
    </Fragment>
  );
};

export default Wedding;
