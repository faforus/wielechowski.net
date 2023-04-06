import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../pages/gallery/Gallery.module.css";

const useGallery = (data) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [largeImgIsLoading, setLargeImgIsLoading] = useState(false);

  const isSafari =
    navigator.userAgent.indexOf("Safari") !== -1 &&
    navigator.userAgent.indexOf("Chrome") === -1;

  const handleImageLoad = () => {
    setLoadedImages((prevCount) => prevCount + 1);
  };

  const largeImageHandler = () => {
    setLargeImgIsLoading(true);
  };

  const handleLargeImageLoad = () => {
    setLargeImgIsLoading(false);
  };

  useEffect(() => {
    if (loadedImages === data.length) {
      setIsLoading(false);
    }
  }, [loadedImages, data.length]);

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
        setLargeImgIsLoading(true);
        const newIndex = (currentIndex + data.length - 1) % data.length;
        setTempImgSrc(data[newIndex].imgSrc);
        setCurrentIndex(newIndex);
      } else if (e.keyCode === 39) {
        setLargeImgIsLoading(true);
        const newIndex = (currentIndex + 1) % data.length;
        setTempImgSrc(data[newIndex].imgSrc);
        setCurrentIndex(newIndex);
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
  }, [currentIndex, modal]);

  const closeModal = (event) => {
    if (event.target.classList.contains(classes.modal)) {
      setModal(false);
      setTempImgSrc("");
    }
  };

  return {
    modal,
    setModal,
    closeModal,
    tempImgSrc,
    setTempImgSrc,
    currentIndex,
    setCurrentIndex,
    isLoading,
    setIsLoading,
    largeImgIsLoading,
    setLargeImgIsLoading,
    handleImageLoad,
    largeImageHandler,
    handleLargeImageLoad,
    isSafari,
  };
};

export default useGallery;
