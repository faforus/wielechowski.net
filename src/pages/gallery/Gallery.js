import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Gallery.module.css";
import Spinner from "../../components/Spinner";

const ArrowButton = React.memo(({ direction, onClick }) => {
  return (
    <button
      className={
        direction === "prev" ? classes["prev-button"] : classes["next-button"]
      }
      onClick={onClick}
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
});

const CloseButton = React.memo(({ onClick }) => {
  return (
    <span onClick={onClick} className={`${classes["close-button"]}`}>
      {"×"}
    </span>
  );
});

function Gallery(props) {
  return (
    <Fragment>
      <div
        className={
          props.modal
            ? `${classes.modal} ${classes.open} ${classes["disable-select"]}`
            : classes.modal
        }
        onClick={props.closeModal}
      >
        {props.largeImgIsLoading && <Spinner />}
        (
        <img
          alt={props.tempImgSrc
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
          src={props.tempImgSrc}
          onLoad={props.handleLargeImageLoad}
          style={{ display: props.largeImgIsLoading ? "none" : "block" }}
        />
        )
        <CloseButton
          onClick={() => {
            props.setModal(false);
            props.setTempImgSrc("");
          }}
        />
        <ArrowButton direction="prev" onClick={props.handlePrevClick} />
        <ArrowButton direction="next" onClick={props.handleNextClick} />
      </div>
      <div className={classes.title}>
        <h2>{props.category}</h2>
      </div>
      {props.isLoading && <Spinner />}
      <div
        style={{ display: props.isLoading ? "none" : "block" }}
        className={classes.container}
      >
        {props.mappedImgs}
        {props.mappedUnsortedImgs}
      </div>
      <div className={classes["button-container"]}>
        <Link to="/galeria">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            ‹‹‹
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Gallery;
