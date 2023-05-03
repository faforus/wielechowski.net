import { useEffect, useRef } from "react";
import React from "react";
import classes from "./Modal.module.css";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const later = () => {
        timeout = null;
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const debouncedHandlePrevClick = debounce(props.handlePrevClick, 150);
  const debouncedHandleNextClick = debounce(props.handleNextClick, 150);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 8) {
        navigate("/galeria");
        window.scrollTo(0, 0);
      }
      if (e.keyCode === 37) {
        imgRef.current.style.opacity = "0";
        setTimeout(() => {
          debouncedHandlePrevClick();
        }, 150);
      } else if (e.keyCode === 39) {
        imgRef.current.style.opacity = "0";
        setTimeout(() => {
          debouncedHandleNextClick();
        }, 150);
      } else if (e.keyCode === 27) {
        props.setModal(false);
        props.setTempImgSrc("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const imgRef = useRef(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    if (!isMobile) {
      if (props.modal) {
        document.documentElement.style.overflowY = "hidden";
        document.body.style.width = "calc(100% - 6px)";
      } else {
        document.documentElement.style.overflowY = "scroll";
        document.body.style.width = "100%";
      }
    }

    if (props.modal && isMobile) {
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      document.documentElement.style.overflowY = "scroll";
      document.body.style.width = "100%";
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [props.modal]);

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
        }, 150);
      }}
    >
      {props.largeImgIsLoading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      <img
        ref={imgRef}
        key={props.tempImgSrc}
        alt={props.tempImgSrc
          .replace(/%20/g, " ")
          .replace("/static/media/", "")
          .replace(/\..*$/, "")}
        src={props.tempImgSrc}
        onLoad={(e) => {
          e.target.style.opacity = "1";
          props.handleLargeImageLoad();
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <CloseButton
        onClick={() => {
          props.setModal(false);
          setTimeout(() => {
            props.setTempImgSrc("");
          }, 150);
        }}
      />
      <ArrowButton
        direction="prev"
        onClick={(e) => {
          e.stopPropagation();
          imgRef.current.style.opacity = "0";
          setTimeout(() => {
            debouncedHandlePrevClick();
          }, 150);
        }}
      />
      <ArrowButton
        direction="next"
        onClick={(e) => {
          e.stopPropagation();
          imgRef.current.style.opacity = "0";
          setTimeout(() => {
            debouncedHandleNextClick();
          }, 150);
        }}
      />
    </div>
  );
};

export default Modal;
