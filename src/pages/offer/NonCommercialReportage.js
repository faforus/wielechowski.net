import { Fragment } from "react";
import classes from "./Offer.module.css";
import Offer from "./Offer";

const NonCommercialReportage = () => {
  return (
    <Fragment>
      <Offer title="Reportaż Okolicznościowy" />
      <div className={classes.main}>
        <div className={classes["main-left"]}>
          <p>Między innymi:</p>
          <p>wieczory panieńskie / kawalerskie</p>
          <p>chrzciny / pierwsza komunia</p>
          <p>zaręczyny</p>
          <p>urodziny / imieniny</p>
        </div>
        <div className={classes["main-right"]}></div>
      </div>
    </Fragment>
  );
};

export default NonCommercialReportage;
