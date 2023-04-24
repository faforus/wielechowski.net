import { Fragment, useState, useRef, useEffect } from "react";
import classes from "./VerticalMiniGallery.module.css";
import Modal from "../../components/Modal";
import useModal from "../../hooks/use-modal";

const HorizontalMiniGallery = (props) => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    const mappedImages = props.images
      .sort(() => Math.random() - 0.5)
      .map((img, index) => {
        return (
          <img
            onClick={() => {
              setCurrentImage(
                <img
                  onClick={() => {
                    setModal(true);
                    setCurrentIndex(props.images[index].id);
                    setTempImgSrc(props.images[index].largeImage);
                  }}
                  src={props.images[index].src}
                />
              );
            }}
            src={img.src}
            alt={img.src
              .replace(/%20/g, " ")
              .replace("/static/media/", "")
              .replace(/\..*$/, "")}
            key={index}
          />
        );
      });

    setMappedImages(mappedImages);
    setCurrentImage(mappedImages[0]);
  }, [props.images]);

  useEffect(() => {
    if (mappedImages.length === 0) return;
    setCurrentIndex(props.images[0].id);
    setTempImgSrc(props.images[0].largeImage);
  }, [mappedImages]);

  const {
    modal,
    setModal,
    closeModal,
    tempImgSrc,
    setTempImgSrc,
    setCurrentIndex,
    largeImgIsLoading,
    handleLargeImageLoad,
    handlePrevClick,
    handleNextClick,
  } = useModal(props.images);

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
    <Fragment>
      <Modal
        modal={modal}
        setModal={setModal}
        closeModal={closeModal}
        tempImgSrc={tempImgSrc}
        setTempImgSrc={setTempImgSrc}
        setCurrentIndex={setCurrentIndex}
        largeImgIsLoading={largeImgIsLoading}
        handleLargeImageLoad={handleLargeImageLoad}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
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
          <div
            onClick={() => {
              setModal(true);
            }}
            style={{ height: "100%" }}
          >
            {currentImage}
          </div>
        </div>
        <div ref={myDivRef} className={classes["mini-gallery-right"]}>
          {mappedImages}
        </div>
      </div>
    </Fragment>
  );
};

export default HorizontalMiniGallery;

// import { Fragment, useState, useRef, useEffect } from "react";
// import classes from "./VerticalMiniGallery.module.css";
// import Modal from "../../components/Modal";
// import useModal from "../../hooks/use-modal";

// const HorizontalMiniGallery = (props) => {
//   const [images, setImages] = useState([]);
//   const [currentImage, setCurrentImage] = useState([]);
//   const [mappedImages, setMappedImages] = useState([]);

//   useEffect(() => {
//     setImages(props.images);
//   }, [props.images]);

//   useEffect(() => {
//     const mappedImages = images
//       .sort(() => Math.random() - 0.5)
//       .map((img, index) => {
//         return (
//           <img
//             onClick={() => {
//               setCurrentImage(img.src);
//             }}
//             src={img.src}
//             alt={img.src
//               .replace(/%20/g, " ")
//               .replace("/static/media/", "")
//               .replace(/\..*$/, "")}
//             key={index}
//           />
//         );
//       });
//     setMappedImages(mappedImages);
//     setCurrentImage(mappedImages[0]);
//   }, [images]);

//   const {
//     modal,
//     setModal,
//     closeModal,
//     tempImgSrc,
//     setTempImgSrc,
//     currentIndex,
//     setCurrentIndex,
//     largeImgIsLoading,
//     handleLargeImageLoad,
//     handlePrevClick,
//     handleNextClick,
//   } = useModal(images);

//   const myDivRef = useRef(null);

//   function scroll(direction) {
//     if (myDivRef.current) {
//       const sign = direction === "up" ? -1 : 1;
//       myDivRef.current.scrollBy({
//         top: sign * myDivRef.current.clientHeight * 0.3,
//         behavior: "smooth",
//       });
//     }
//   }

//   return (
//     <Fragment>
//       <Modal
//         modal={modal}
//         setModal={setModal}
//         closeModal={closeModal}
//         tempImgSrc={tempImgSrc}
//         setTempImgSrc={setTempImgSrc}
//         currentIndex={currentIndex}
//         setCurrentIndex={setCurrentIndex}
//         largeImgIsLoading={largeImgIsLoading}
//         handleLargeImageLoad={handleLargeImageLoad}
//         handlePrevClick={handlePrevClick}
//         handleNextClick={handleNextClick}
//       />
//       <div className={classes["mini-gallery"]}>
//         <div className={classes["mini-gallery-left"]}>
//           <p
//             onClick={() => {
//               scroll("up");
//             }}
//             className={classes.arrowdown}
//           >
//             ›
//           </p>
//           <p
//             onClick={() => {
//               scroll("down");
//             }}
//             className={classes.arrowup}
//           >
//             ›
//           </p>
//           <img
//             onClick={() => {
//               setModal(true);
//               setCurrentIndex(images[currentIndex].id);
//               setTempImgSrc(images[currentIndex].src);
//             }}
//             src={images[currentIndex]?.src}
//           />
//         </div>
//         <div ref={myDivRef} className={classes["mini-gallery-right"]}>
//           {mappedImages}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default HorizontalMiniGallery;
