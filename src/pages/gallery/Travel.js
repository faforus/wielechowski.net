import useGallery from "../../hooks/use-gallery";
import Gallery from "../../components/Gallery Large/Gallery";

const Travel = () => {
  const {
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
  } = useGallery("outdoors");

  return (
    <Gallery
      category={"Travel"}
      link="/galeria"
      modal={modal}
      closeModal={closeModal}
      largeImgIsLoading={largeImgIsLoading}
      tempImgSrc={tempImgSrc}
      handleLargeImageLoad={handleLargeImageLoad}
      setModal={setModal}
      setTempImgSrc={setTempImgSrc}
      isLoading={isLoading}
      mappedImgs={mappedImgs}
      mappedUnsortedImgs={mappedUnsortedImgs}
      handlePrevClick={handlePrevClick}
      handleNextClick={handleNextClick}
    />
  );
};

export default Travel;
