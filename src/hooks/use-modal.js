import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../components/Modal.module.css";

const useModal = (props) => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [largeImgIsLoading, setLargeImgIsLoading] = useState(false);
  const [sortedImages, setSortedImages] = useState([]);
  const navigate = useNavigate();

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
    largeImgIsLoading,
    tempImgSrc,
    handleLargeImageLoad,
    setModal,
    setTempImgSrc,
    handlePrevClick,
    handleNextClick,
  };
};

export default useModal;
