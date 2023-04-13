import React, { useState, useEffect, useCallback } from "react";
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
      onClick={props.closeModal}
    >
      {props.largeImgIsLoading && <Spinner />}
      <img
        alt={props.tempImgSrc
          .replace(/%20/g, " ")
          .replace("/static/media/", "")
          .replace(/\..*$/, "")}
        src={props.tempImgSrc}
        onLoad={props.handleLargeImageLoad}
        style={{ display: props.largeImgIsLoading ? "none" : "block" }}
      />
      <CloseButton
        onClick={() => {
          props.setModal(false);
          props.setTempImgSrc("");
        }}
      />
      <ArrowButton direction="prev" onClick={props.handlePrevClick} />
      <ArrowButton direction="next" onClick={props.handleNextClick} />
    </div>
  );
};

export default Modal;
