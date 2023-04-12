import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../pages/gallery/Gallery.module.css";
import { SERVER_COUNT } from "../config/SERVER";
import {
  importAnimals,
  importStudio,
  importOutdoors,
  importReportage,
} from "../helpers/importImages";

const GRID_LAYOUT = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];

function useGallery(category) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
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
    (async () => {
      let images;
      let thumbnailImages;

      if (category === "animals") {
        ({ images, thumbnailImages } = importAnimals());
      }
      if (category === "studio") {
        ({ images, thumbnailImages } = importStudio());
      }
      if (category === "outdoors") {
        ({ images, thumbnailImages } = importOutdoors());
      }
      if (category === "reportage") {
        ({ images, thumbnailImages } = importReportage());
      }

      const horizontalImages = [];
      const verticalImages = [];
      const data = await Promise.all(
        thumbnailImages.map((img, index) => {
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
              alt: img
                .replace(/%20/g, " ")
                .replace("/static/media/", "")
                .replace(/\..*$/, ""),
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
      setLoader(true);
    });
  }, [category]);

  useEffect(() => {
    if (!loader) return;
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
              alt={item.alt}
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
            alt={item.alt}
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
  }, [loader, indexWithoutAppropriateProportion, loadedImages, sortedImages]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e) => {
      if (e.keyCode === 8) {
        navigate("/galeria");
        window.scrollTo(0, 0);
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

  return {
    modal,
    closeModal,
    largeImgIsLoading,
    tempImgSrc,
    handleLargeImageLoad,
    setModal,
    setTempImgSrc,
    isLoading,
    mappedImgs,
    mappedUnsortedImgs,
    handlePrevClick,
    handleNextClick,
  };
}

export default useGallery;
