import { useRef } from "react";
import classes from "./HorizontalMiniGallery.module.css";

const HorizontalMiniGallery = (props) => {
  const myDivRef = useRef(null);

  function scroll(direction) {
    if (myDivRef.current) {
      const sign = direction === "left" ? -1 : 1;
      myDivRef.current.scrollBy({
        left: sign * myDivRef.current.clientWidth * 0.3,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className={classes["mini-gallery-horizontal"]}>
      <div className={classes["mini-gallery-top"]}>
        <p
          onClick={() => {
            scroll("left");
          }}
          className={classes.arrowleft}
        >
          ›
        </p>{" "}
        <p
          onClick={() => {
            scroll("right");
          }}
          className={classes.arrowright}
        >
          ›
        </p>
        {props.currentImage}
      </div>
      <div ref={myDivRef} className={classes["mini-gallery-bottom"]}>
        {props.mappedImages}
      </div>
    </div>
  );
};

export default HorizontalMiniGallery;
