import { Fragment } from "react";
import classes from "./Offer.module.css";
import Title from "../../components/Title";

const Children = () => {
  return (
    <Fragment>
      <Title title="Sesja Dziecięca" />
      <div className={classes.main}>
        <div className={classes["main-left"]}>
          <p>Lot Balonem</p>
          <p>
            Jedyny w swoim rodzaju kosz z balonem - stworzony wyłącznie na
            potrzeby naszego studio!
          </p>
          <p>
            Doskonała zabawa i oryginalna pamiątka! Ubiór i warianty chmur do
            indywidualnego ustalenia. Wymiary balonu podane w galerii.
          </p>
          <p>Wymiaru boxu: 60 x 80 x 48</p>
          <p>Przykładowy pakiet 5 zdjęć</p>
          <p>3 zdjęcia w balonie</p>
          <p>2 zdjęcia w boxie - 1 duże i mozaika z 9 mniejszych (3x3)</p>
          <p>
            Możliwość wykonania sesji tylko w balonie lub tylko w boxach. Cena
            zależna od ilości zdjęć końcowych i ilości zdjęć w mozaice.
          </p>
        </div>
        <div className={classes["main-right"]}></div>
      </div>
    </Fragment>
  );
};

export default Children;
