import React from "react";
import classes from "./Modal.module.css";
import Spinner from "./Spinner";

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

const Modal = (props) => {
  return (
    <div
      className={
        props.modal
          ? `${classes.modal} ${classes.open} ${classes["disable-select"]}`
          : classes.modal
      }
      onClick={() => {
        props.setModal(false);
        setTimeout(() => {
          props.setTempImgSrc("");
        }, 500);
      }}
    >
      {props.largeImgIsLoading && <Spinner />}
      <img
        key={props.tempImgSrc}
        alt={props.tempImgSrc
          .replace(/%20/g, " ")
          .replace("/static/media/", "")
          .replace(/\..*$/, "")}
        src={props.tempImgSrc}
        onLoad={props.handleLargeImageLoad}
        style={{ display: props.largeImgIsLoading ? "none" : "block" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <CloseButton
        onClick={() => {
          props.setModal(false);
          setTimeout(() => {
            props.setTempImgSrc("");
          }, 500);
        }}
      />
      <ArrowButton
        direction="prev"
        onClick={(e) => {
          e.stopPropagation();
          props.handlePrevClick();
        }}
      />
      <ArrowButton
        direction="next"
        onClick={(e) => {
          e.stopPropagation();
          props.handleNextClick();
        }}
      />
    </div>
  );
};

export default Modal;
