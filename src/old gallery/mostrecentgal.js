import React, { Fragment, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./HomeGrid.module.css";
import Spinner from "../components/Spinner";

const GRID_LAYOUT = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
const SERVER_COUNT = 0.5;

const importAll = (r) => {
  return r.keys().map((key) => ({ fileName: key, src: r(key) }));
};

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

function Home() {
  const [LOADER, setLOADER] = useState(false);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);
  const [largeImgIsLoading, setLargeImgIsLoading] = useState(false);

  const [sortedImages, setSortedImages] = useState([]);

  const [mappedImgs, setMappedImgs] = useState([]);
  const [mappedUnsortedImgs, setMappedUnsortedImgs] = useState([]);

  const [
    indexWithoutAppropriateProportion,
    setIndexWithoutAppropriateProportion,
  ] = useState(undefined);

  const handlePrevClick = useCallback(() => {
    setLargeImgIsLoading(true);
    const currentImageIndex = sortedImages.findIndex(
      (img) => img.id === currentIndex
    );
    const newIndex =
      (currentImageIndex + sortedImages.length - 1) % sortedImages.length;
    setTempImgSrc(sortedImages[newIndex].largeImage);
    setCurrentIndex(sortedImages[newIndex].id);
  }, [sortedImages, currentIndex]);

  const handleNextClick = useCallback(() => {
    setLargeImgIsLoading(true);
    const currentImageIndex = sortedImages.findIndex(
      (img) => img.id === currentIndex
    );
    const newIndex = (currentImageIndex + 1) % sortedImages.length;
    setTempImgSrc(sortedImages[newIndex].largeImage);
    setCurrentIndex(sortedImages[newIndex].id);
  }, [sortedImages, currentIndex]);

  const largeImageHandler = () => {
    setLargeImgIsLoading(true);
  };

  const handleLargeImageLoad = () => {
    setLargeImgIsLoading(false);
  };

  const closeModal = useCallback(
    (e) => {
      if (e.target.classList.contains(classes.modal)) {
        setModal(false);
        setTempImgSrc("");
      }
    },
    [setModal, setTempImgSrc]
  );

  useEffect(() => {
    if (LOADER) return;
    console.log("loading images");
    (async () => {
      const thumbnailImages = importAll(
        require.context(
          "../assets/images/galleries/studio-images-thumbnails",
          false,
          /\.(jpe?g)$/
        )
      ).reduce((acc, item) => {
        acc[item.fileName] = item.src;
        return acc;
      }, {});

      const images = importAll(
        require.context(
          "../assets/images/galleries/studio-images",
          false,
          /\.(jpe?g)$/
        )
      ).reduce((acc, item) => {
        acc[item.fileName] = item.src;
        return acc;
      }, {});

      const horizontalImages = [];
      const verticalImages = [];
      const data = await Promise.all(
        Object.keys(thumbnailImages).map((fileName, index) => {
          const img = thumbnailImages[fileName];
          const imgObj = new Image();
          imgObj.src = img;

          const imgLoaded = new Promise((resolve) => {
            imgObj.onload = () => {
              resolve(imgObj);
              setLoadedImages((prevCount) => prevCount + SERVER_COUNT);
            };
          });

          const getImage = async () => {
            await imgLoaded;
            const isHorizontal = imgObj.width > imgObj.height;
            const item = {
              imgSrc: img,
              isHorizontal: isHorizontal,
              largeImage: images[index],
            };

            if (isHorizontal) {
              horizontalImages.push(item);
            } else {
              verticalImages.push(item);
            }

            return item;
          };

          return getImage();
        })
      );

      let horizontalIndex = 0;
      let verticalIndex = 0;
      let idCounter = 1;
      let newSortedImages = [];
      let isFirstUnfitImage = true;

      while (newSortedImages.length < data.length) {
        for (
          let i = 0;
          i < GRID_LAYOUT.length && newSortedImages.length < data.length;
          i++
        ) {
          const isHorizontal = GRID_LAYOUT[i] === 1;
          let image;
          let imageAvailable = true;

          if (isHorizontal) {
            if (horizontalIndex < horizontalImages.length) {
              image = horizontalImages[horizontalIndex++];
            } else {
              imageAvailable = false;
            }
          } else {
            if (verticalIndex < verticalImages.length) {
              image = verticalImages[verticalIndex++];
            } else {
              imageAvailable = false;
            }
          }

          if (!imageAvailable && isFirstUnfitImage) {
            isFirstUnfitImage = false;
            setIndexWithoutAppropriateProportion(newSortedImages.length);
          }

          if (image) {
            image.id = idCounter++;
            newSortedImages.push(image);
          }
        }
      }
      setSortedImages(newSortedImages);
    })().then(() => {
      setLOADER(true);
    });
  }, [LOADER, indexWithoutAppropriateProportion]);

  useEffect(() => {
    if (!LOADER) return;
    console.log("rendering images");
    let doesNotFitCount = 0;
    let temporaryFittingImagesArray = [];
    let temporaryRemainingImagesArray = [];
    let mappedImgs = [];
    let mappedUnsortedImgs = [];

    let sortedFittingImages = sortedImages;

    if (indexWithoutAppropriateProportion !== undefined) {
      const sliceIndex = Math.ceil(indexWithoutAppropriateProportion / 14) * 14;

      sortedFittingImages = sortedImages.slice(0, sliceIndex);
      const sortedRemainingImages = sortedImages.slice(sliceIndex);

      sortedRemainingImages.forEach((item, index) => {
        temporaryRemainingImagesArray.push(
          <div
            key={index}
            className={
              item.isHorizontal
                ? classes["horizontal-image-proportions"]
                : classes["vertical-image-proportions"]
            }
          >
            <img
              src={item.imgSrc}
              alt="gallery"
              onClick={() => {
                largeImageHandler();
                setTempImgSrc(item.largeImage);
                setCurrentIndex(item.id);
                setModal(true);
              }}
            />
          </div>
        );
        if (
          (index + 1) % 12 === 0 ||
          index === sortedRemainingImages.length - 1
        ) {
          const isLastGrid = index === sortedRemainingImages.length - 1;
          const numOfImgsInGrid = isLastGrid
            ? temporaryRemainingImagesArray.length
            : 12;

          mappedUnsortedImgs.push(
            <div
              className={
                item.isHorizontal
                  ? classes["grid-horizontal"]
                  : classes["grid-vertical"]
              }
              key={`grid-${index}`}
            >
              {temporaryRemainingImagesArray.slice(0, numOfImgsInGrid)}
            </div>
          );
          temporaryRemainingImagesArray = [];
        }
      });
    }

    sortedFittingImages.forEach((item, index) => {
      temporaryFittingImagesArray.push(
        <div key={index} className={classes["horizontal-image-proportions"]}>
          <img
            src={item.imgSrc}
            alt="gallery"
            onClick={() => {
              largeImageHandler();
              setTempImgSrc(item.largeImage);
              setCurrentIndex(item.id);
              setModal(true);
            }}
          />
        </div>
      );

      if (
        ((index + 1) % 14 === 0 && doesNotFitCount === 0) ||
        index === sortedImages.length - 1
      ) {
        const isLastGrid = index === sortedImages.length - 1;
        const numOfImgsInGrid = isLastGrid
          ? temporaryFittingImagesArray.length
          : 14;

        mappedImgs.push(
          <div className={classes.grid} key={`grid-${index}`}>
            {temporaryFittingImagesArray.slice(0, numOfImgsInGrid)}
          </div>
        );
        temporaryFittingImagesArray = [];
        doesNotFitCount = 0;
      }
    });

    if (loadedImages !== 0 && loadedImages === sortedImages.length) {
      setIsLoading(false);
    }

    setMappedUnsortedImgs(mappedUnsortedImgs);
    setMappedImgs(mappedImgs);
    console.log(indexWithoutAppropriateProportion);
  }, [LOADER, indexWithoutAppropriateProportion, loadedImages, sortedImages]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e) => {
      if (e.keyCode === 8) {
        navigate("/galeria");
      }
      if (e.keyCode === 37) {
        handlePrevClick();
      } else if (e.keyCode === 39) {
        handleNextClick();
      } else if (e.keyCode === 27) {
        setModal(false);
        setTempImgSrc("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal, navigate, handlePrevClick, handleNextClick]);

  return (
    <Fragment>
      <div
        className={
          modal
            ? `${classes.modal} ${classes.open} ${classes["disable-select"]}`
            : classes.modal
        }
        onClick={closeModal}
      >
        {largeImgIsLoading && <Spinner />}
        (
        <img
          alt="plener-enlarged"
          src={tempImgSrc}
          onLoad={handleLargeImageLoad}
          style={{ display: largeImgIsLoading ? "none" : "block" }}
        />
        )
        <CloseButton onClick={() => setModal(false)} />
        <ArrowButton
          direction="prev"
          onClick={() => {
            setLargeImgIsLoading(true);
            const newIndex =
              (currentIndex + sortedImages.length - 1) % sortedImages.length;
            setTempImgSrc(sortedImages[newIndex].largeImage);
            setCurrentIndex(newIndex);
            setModal(true);
          }}
        />
        <ArrowButton
          direction="next"
          onClick={() => {
            setLargeImgIsLoading(true);
            const newIndex = (currentIndex + 1) % sortedImages.length;
            setTempImgSrc(sortedImages[newIndex].largeImage);
            setCurrentIndex(newIndex);
            setModal(true);
          }}
        />
      </div>
      <div className={classes.title}>
        <h2>Plener</h2>
      </div>
      {isLoading && <Spinner />}
      <div
        style={{ display: isLoading ? "none" : "block" }}
        className={classes.container}
      >
        {mappedImgs}
        {mappedUnsortedImgs}
      </div>
      <div className={classes["button-container"]}>
        <Link to="/galeria">
          <button className={classes["back-btn"]}>‹‹‹</button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;

// setUnsortedImages(
//   sliceIndex === undefined ? [] : sortedImages.splice(sliceIndex)
// );

// import classes from "./HomeGrid.module.css";

// const importAll = (r) => {
//   return r.keys().map(r);
// };

// const images = importAll(
//   require.context("../assets/images/grid", false, /\.(jpe?g)$/)
// );

// const thumbnailImages = importAll(
//   require.context(
//     "../assets/images/grid/images-thumbnails",
//     false,
//     /\.(jpe?g)$/
//   )
// );

// const data = images.map((img, index) => {
//   const imgObj = new Image();
//   imgObj.src = img;
//   const isHorizontal = imgObj.width > imgObj.height;
//   return {
//     id: index + 1,
//     imgSrc: img,
//     thumbnailImgSrc: thumbnailImages[index],
//     isHorizontal: isHorizontal,
//   };
// });

// const mappedImgs = [];
// let temporaryFittingImagesArray = [];

// data.forEach((item, index) => {
//   gridImgs.push(<img src={item.thumbnailImgSrc} alt="plener" key={index} />);

//   if ((index + 1) % 14 === 0 || index === data.length - 1) {
//     // create a new grid div for every 14 elements or if it's the last element
//     mappedImgs.push(
//       <div className={classes.grid} key={`grid-${index}`}>
//         {gridImgs}
//       </div>
//     );
//     gridImgs = []; // reset the gridImgs array
//   }
// });

// const Home = () => {
//   return <div className={classes.container}>{mappedImgs}</div>;
// };

// export default Home;

// import { useState, useEffect } from "react";
// import classes from "./Home.module.css";
// import top from "../assets/images/top.jpg";
// import bottom from "../assets/images/bottom.jpg";
// import topSmall from "../assets/images/topsmall.jpg";
// import bottomSmall from "../assets/images/bottomsmall.jpg";

// const Home = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className={classes["img-container"]}>
//       <img
//         className={classes["img-top"]}
//         alt="Filip Wielechowski Fotografia"
//         src={windowWidth > 500 ? top : topSmall}`}
//       />
//       <div className={classes.stripe}>
//         F<span className={classes.smaller}>ILIP&nbsp;</span> W
//         <span className={classes.smaller}>IELECHOWSKI&nbsp;</span>F
//         <span className={classes.smaller}>OTOGRAFIA</span>
//       </div>
//       <img
//         className={classes["img-bottom"]}
//         alt="Filip Wielechowski Fotografia"
//         src={windowWidth > 500 ? bottom : bottomSmall}`}
//       />
//     </div>
//   );
// };

// export default Home;

// import classes from "./HomeGrid.module.css";

// const importAll = (r) => {
//   return r.keys().map(r);
// };

// const images = importAll(
//   require.context("../assets/images/grid", false, /\.(jpe?g)$/)
// );

// const thumbnailImages = importAll(
//   require.context(
//     "../assets/images/grid/images-thumbnails",
//     false,
//     /\.(jpe?g)$/
//   )
// );

// const data = images.map((img, index) => {
//   const imgObj = new Image();
//   imgObj.src = img;
//   const isHorizontal = imgObj.width > imgObj.height;
//   return {
//     id: index + 1,
//     imgSrc: img,
//     thumbnailImgSrc: thumbnailImages[index],
//     isHorizontal: isHorizontal,
//   };
// });

// const mappedImgs = [];
// let gridImgs = [];

// data.forEach((item, index) => {
//   gridImgs.push(<img src={item.thumbnailImgSrc} alt="plener" key={index} />);

//   if ((index + 1) % 14 === 0 || index === data.length - 1) {
//     // create a new grid div for every 14 elements or if it's the last element
//     mappedImgs.push(
//       <div className={classes.grid} key={`grid-${index}`}>
//         {gridImgs}
//       </div>
//     );
//     gridImgs = []; // reset the gridImgs array
//   }
// });

// const Home = () => {
//   return <div className={classes.container}>{mappedImgs}</div>;
// };

// export default Home;

// import { useState, useEffect } from "react";
// import classes from "./Home.module.css";
// import top from "../assets/images/top.jpg";
// import bottom from "../assets/images/bottom.jpg";
// import topSmall from "../assets/images/topsmall.jpg";
// import bottomSmall from "../assets/images/bottomsmall.jpg";

// const Home = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className={classes["img-container"]}>
//       <img
//         className={classes["img-top"]}
//         alt="Filip Wielechowski Fotografia"
//         src={windowWidth > 500 ? top : topSmall}`}
//       />
//       <div className={classes.stripe}>
//         F<span className={classes.smaller}>ILIP&nbsp;</span> W
//         <span className={classes.smaller}>IELECHOWSKI&nbsp;</span>F
//         <span className={classes.smaller}>OTOGRAFIA</span>
//       </div>
//       <img
//         className={classes["img-bottom"]}
//         alt="Filip Wielechowski Fotografia"
//         src={windowWidth > 500 ? bottom : bottomSmall}`}
//       />
//     </div>
//   );
// };

// export default Home;

// const thumbnailImages = importAll(
//   require.context(
//     "../assets/images/grid/images-thumbnails",
//     false,
//     /\.(jpe?g)$/
//   )
// );
