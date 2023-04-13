import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Gallery.module.css";
import Spinner from "../../components/Spinner";
import Title from "../../components/Title";
import Modal from "../../components/Modal";

function Gallery(props) {
  return (
    <Fragment>
      <Modal
        modal={props.modal}
        setModal={props.setModal}
        tempImgSrc={props.tempImgSrc}
        setTempImgSrc={props.setTempImgSrc}
        largeImgIsLoading={props.largeImgIsLoading}
        handleLargeImageLoad={props.handleLargeImageLoad}
        handlePrevClick={props.handlePrevClick}
        handleNextClick={props.handleNextClick}
      />
      <div className={classes.title}>
        <Title title={props.category} />
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
