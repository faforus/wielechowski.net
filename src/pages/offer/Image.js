import { Fragment } from "react";
import classes from "./Offer.module.css";
import Offer from "./Offer";

const Image = () => {
  return (
    <Fragment>
      <Offer title="Sesja Wizerunkowa" />
      <div className={classes.main}>
        <div className={classes["main-left"]}>
          <p>Zdjęcia w plenerze lub w studiu.</p>
          <p>Idealne na media społecznościowe, stronę www lub do CV</p>
          <p>Zdjęcia są poddawane profesjonalnemu retuszowi*</p>
          <p>Wysoka rozdzielczość zdjęć**</p>
        </div>
        <div className={classes["main-right"]}></div>
      </div>
      <div className={classes["additional-info"]}>
        <p>
          * podstawowy retusz to korekta cery, oczu, sylwetki oraz lekkie
          wybielanie zębów. Na życzenie klienta można wykonać bardziej
          zaawansowany retusz.
        </p>
        <p>** zdjęcia bez kadrowania są w rozdzielczości 8640 x 5760.</p>
        <p>*** zdjęcia bez kadrowania są w rozdzielczości 8640 x 5760.</p>
      </div>
    </Fragment>
  );
};

export default Image;
