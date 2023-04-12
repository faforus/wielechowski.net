import useGallery from "../../hooks/use-gallery";
import Gallery from "./Gallery";

const Animals = () => {
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
  } = useGallery("animals");

  return (
    <Gallery
      category={"Zwierzęta"}
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

export default Animals;
