import { Fragment } from "react";
import classes from "./Offer.module.css";
import Offer from "./Offer";

const Business = () => {
  return (
    <Fragment>
      <Offer title="Sesja Biznesowa" />
      <div className={classes.main}>
        <div className={classes["main-left"]}>
          <p>Zdjęcia na tle jednolitym w studiu lub w przestrzeni firmowej* </p>
          <p>Idealne na media społecznościowe, stronę www lub do CV</p>
          <p>
            Zdjęcia są poddawane profesjonalnemu retuszowi** ​ Wysoka
            rozdzielczość zdjęć***
          </p>
          <p>
            Tła: głównie w odcieniach szarości - od bieli przez szarość do
            czerni. Dostępne też kolorowe.
          </p>
        </div>
        <div className={classes["main-right"]}></div>
      </div>
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
