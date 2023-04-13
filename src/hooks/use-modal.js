import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useModal = (images) => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [largeImgIsLoading, setLargeImgIsLoading] = useState(false);
  const navigate = useNavigate();
  const handlePrevClick = useCallback(() => {
    console.log(currentIndex);
    setLargeImgIsLoading(true);
    const currentImageIndex = images.findIndex(
      (img) => img.id === currentIndex
    );
    const newIndex = (currentImageIndex + images.length - 1) % images.length;
    setTempImgSrc(images[newIndex].largeImage);
    setCurrentIndex(images[newIndex].id);
  }, [images, currentIndex]);

  const handleNextClick = useCallback(() => {
    setLargeImgIsLoading(true);
    const currentImageIndex = images.findIndex(
      (img) => img.id === currentIndex
    );
    const newIndex = (currentImageIndex + 1) % images.length;
    setTempImgSrc(images[newIndex].largeImage);
    setCurrentIndex(images[newIndex].id);
  }, [images, currentIndex]);

  const handleLargeImageLoad = () => {
    setLargeImgIsLoading(false);
  };

  // const closeModal = useCallback(
  //   (e) => {
  //     if (e.target.classList.contains(classes.modal)) {
  //       setModal(false);
  //       setTempImgSrc("");
  //     }
  //   },
  //   [setModal, setTempImgSrc]
  // );

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e) => {
      if (e.keyCode === 8) {
        // navigate("/galeria");
        // window.scrollTo(0, 0);
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
    setModal,
    tempImgSrc,
    setLargeImgIsLoading,
    setCurrentIndex,
    setTempImgSrc,
    handleLargeImageLoad,
    largeImgIsLoading,
    handlePrevClick,
    handleNextClick,
  };
};

export default useModal;
