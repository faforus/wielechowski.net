import { useRef } from "react";
import classes from "./VerticalMiniGallery.module.css";

const HorizontalMiniGallery = (props) => {
  const myDivRef = useRef(null);

  function scroll(direction) {
    if (myDivRef.current) {
      const sign = direction === "up" ? -1 : 1;
      myDivRef.current.scrollBy({
        top: sign * myDivRef.current.clientHeight * 0.3,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className={classes["mini-gallery"]}>
      <div className={classes["mini-gallery-left"]}>
        <p
          onClick={() => {
            scroll("up");
          }}
          className={classes.arrowdown}
        >
          ›
        </p>
        <p
          onClick={() => {
            scroll("down");
          }}
          className={classes.arrowup}
        >
          ›
        </p>
        {props.currentImage}
      </div>
      <div ref={myDivRef} className={classes["mini-gallery-right"]}>
        {props.mappedImages}
      </div>
    </div>
  );
};

export default HorizontalMiniGallery;
