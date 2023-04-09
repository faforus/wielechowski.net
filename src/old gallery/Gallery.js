import { Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import classes from "./Gallery.module.css";

const Gallery = (props) => {
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
        <button
          className={classes["prev-button"]}
          onClick={() => {
            props.setLargeImgIsLoading(true);
            const newIndex =
              (props.currentIndex + props.data.length - 1) % props.data.length;
            props.setTempImgSrc(props.data[newIndex].imgSrc);
            props.setCurrentIndex(newIndex);
          }}
        >
          &#10094;
        </button>
        {props.largeImgIsLoading && <Spinner />}
        (
        <img
          alt="plener-enlarged"
          src={props.tempImgSrc}
          onLoad={props.handleLargeImageLoad}
          style={{ display: props.largeImgIsLoading ? "none" : "block" }}
        />
        )
        <button
          className={classes["next-button"]}
          onClick={() => {
            props.setLargeImgIsLoading(true);
            const newIndex = (props.currentIndex + 1) % props.data.length;
            props.setTempImgSrc(props.data[newIndex].imgSrc);
            props.setCurrentIndex(newIndex);
          }}
        >
          &#10095;
        </button>
        <span
          onClick={() => props.setModal(false)}
          className={`${classes["close-button"]}`}
        >
          &#10005;
        </span>
      </div>
      <div className={classes.title}>
        <h2>{props.category}</h2>
      </div>
      {props.isLoading && <Spinner />}
      <div
        style={{ display: props.isLoading ? "none" : "block" }}
        className={classes.gallery}
      >
        {props.data.map((item, index) => {
          return (
            <div
              className={classes.pics}
              key={index}
              onClick={() => {
                props.largeImageHandler();
                props.setTempImgSrc(item.imgSrc);
                props.setCurrentIndex(index);
                props.setModal(true);
              }}
            >
              <img
                src={item.thumbnailImgSrc}
                alt="plener"
                key={index}
                style={{
                  width: `100%`,
                }}
                onLoad={props.handleImageLoad}
              />
            </div>
          );
        })}
      </div>
      <div className={classes["button-container"]}>
        <Link to="/galeria">
          <button className={classes["back-btn"]}>
            &#10094;&#10094;&#10094;
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Gallery;

// import { Fragment, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Spinner from "../../components/Spinner";
// import classes from "./Gallery.module.css";

// const Gallery = (props) => {
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [largeImgIsLoading, setLargeImgIsLoading] = useState(false);

//   useEffect(() => {
//     if (loadedImages === props.data.length) {
//       setIsLoading(false);
//     }
//   }, [loadedImages, props.data.length]);

//   const handleImageLoad = () => {
//     setLoadedImages((prevCount) => prevCount + 1);
//   };

//   const largeImageHandler = () => {
//     setLargeImgIsLoading(true);
//   };

//   const handleLargeImageLoad = () => {
//     setLargeImgIsLoading(false);
//   };

//   return (
//     <Fragment>
//       <div
//         className={
//           props.modal
//             ? `${classes.modal} ${classes.open} ${classes["disable-select"]}`
//             : classes.modal
//         }
//         onClick={props.closeModal}
//       >
//         <button
//           className={classes["prev-button"]}
//           onClick={() => {
//             const newIndex =
//               (props.currentIndex + props.data.length - 1) % props.data.length;
//             props.setTempImgSrc(props.data[newIndex].imgSrc);
//             props.setCurrentIndex(newIndex);
//           }}
//         >
//           &#10094;
//         </button>
//         {largeImgIsLoading && <Spinner />}
//         (
//         <img
//           alt="plener-enlarged"
//           src={props.tempImgSrc}
//           onLoad={handleLargeImageLoad}
//           style={{ display: largeImgIsLoading ? "none" : "block" }}
//         />
//         )
//         <button
//           className={classes["next-button"]}
//           onClick={() => {
//             const newIndex = (props.currentIndex + 1) % props.data.length;
//             props.setTempImgSrc(props.data[newIndex].imgSrc);
//             props.setCurrentIndex(newIndex);
//           }}
//         >
//           &#10095;
//         </button>
//         <span
//           onClick={() => props.setModal(false)}
//           className={`${classes["close-button"]}`}
//         >
//           &#10005;
//         </span>
//       </div>
//       <div className={classes.title}>
//         <h2>{props.category}</h2>
//       </div>
//       {isLoading && <Spinner />}
//       <div
//         style={{ display: isLoading ? "none" : "block" }}
//         className={classes.gallery}
//       >
//         {props.data.map((item, index) => {
//           return (
//             <div
//               className={classes.pics}
//               key={index}
//               onClick={() => {
//                 largeImageHandler();
//                 props.setTempImgSrc(item.imgSrc);
//                 props.setCurrentIndex(index);
//                 props.setModal(true);
//               }}
//             >
//               <img
//                 src={item.thumbnailImgSrc}
//                 alt="plener"
//                 key={index}
//                 style={{
//                   width: `100%`,
//                 }}
//                 onLoad={handleImageLoad}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className={classes["button-container"]}>
//         <Link to="/galeria">
//           <button className={classes["back-btn"]}>
//             &#10094;&#10094;&#10094;
//           </button>
//         </Link>
//       </div>
//     </Fragment>
//   );
// };

// export default Gallery;

// import { Fragment } from "react";
// import { Link } from "react-router-dom";
// import classes from "./Gallery.module.css";

// const Gallery = (props) => {
//   return (
//     <Fragment>
//       <div
//         className={
//           props.modal
//             ? `${classes.model} ${classes.open} ${classes["disable-select"]}`
//             : classes.model
//         }
//         onClick={props.closeModel}
//       >
//         <button
//           className={classes["prev-button"]}
//           onClick={() => {
//             const newIndex =
//               (props.currentIndex + props.data.length - 1) % props.data.length;
//             props.setTempImgSrc(props.data[newIndex].imgSrc);
//             props.setCurrentIndex(props.newIndex);
//           }}
//         >
//           &#10094;
//         </button>
//         <img alt="plener-enlarged" src={props.tempImgSrc} />
//         <button
//           className={classes["next-button"]}
//           onClick={() => {
//             const newIndex = (props.currentIndex + 1) % props.data.length;
//             props.setTempImgSrc(props.data[newIndex].imgSrc);
//             props.setCurrentIndex(props.newIndex);
//           }}
//         >
//           &#10095;
//         </button>
//         <span
//           onClick={() => props.setModel(false)}
//           className={`${classes["close-button"]}`}
//         >
//           &#10005;
//         </span>
//       </div>
//       <div className={classes.title}>
//         <h2>{props.category}</h2>
//       </div>
//       <div className={classes.gallery}>
//         {props.data.map((item, index) => {
//           return (
//             <div
//               className={classes.pics}
//               key={index}
//               onClick={() => {
//                 props.setTempImgSrc(item.imgSrc);
//                 props.setCurrentIndex(index);
//                 props.setModel(true);
//               }}
//             >
//               <img
//                 src={item.thumbnailImgSrc}
//                 alt="plener"
//                 style={{ width: `100%` }}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className={classes["button-container"]}>
//         <Link to="/galeria">
//           <button className={classes["back-btn"]}>
//             &#10094;&#10094;&#10094;
//           </button>
//         </Link>
//       </div>
//     </Fragment>
//   );
// };

// export default Gallery;
