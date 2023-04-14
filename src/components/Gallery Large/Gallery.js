import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Gallery.module.css";
import Spinner from "../Spinner";
import Title from "../Title";
import Modal from "../Modal";

function Gallery(props) {
  return (
    <Fragment>
      <Modal
        modal={props.modal}
        setModal={props.setModal}
        closeModal={props.closeModal}
        tempImgSrc={props.tempImgSrc}
        setTempImgSrc={props.setTempImgSrc}
        largeImgIsLoading={props.largeImgIsLoading}
        handleLargeImageLoad={props.handleLargeImageLoad}
        handlePrevClick={props.handlePrevClick}
        handleNextClick={props.handleNextClick}
      />
      <Title title={props.category} />
      {props.isLoading && <Spinner />}
      <div
        style={{ display: props.isLoading ? "none" : "block" }}
        className={classes.container}
      >
        {props.mappedImgs}
        {props.mappedUnsortedImgs}
      </div>
      <div className={classes["button-container"]}>
        {props.link === "empty" ? (
          ""
        ) : (
          <Link to={props.link}>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              ‹‹‹
            </button>
          </Link>
        )}
      </div>
    </Fragment>
  );
}

export default Gallery;
