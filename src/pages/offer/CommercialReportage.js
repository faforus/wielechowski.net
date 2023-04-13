import { Fragment } from "react";
import classes from "./Offer.module.css";
import Offer from "./Offer";

const CommercialReportage = () => {
  return (
    <Fragment>
      <Offer title="Eventy Firmowe / Sportowe" />
      <div className={classes.main}>
        <div className={classes["main-left"]}>
          <p>Między innymi:</p>
          <p>wszelkiego rodzaju reportaże</p>
          <p>imprezy / eventy firmowe</p>
          <p>jubileusze / konferencje</p>
          <p>eventy sportowe / muzyczne</p>
          <p>otwarcia nowych lokali</p>
        </div>
        <div className={classes["main-right"]}></div>
      </div>
    </Fragment>
  );
};

export default CommercialReportage;
