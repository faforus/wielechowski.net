import useGallery from "../../hooks/use-gallery";
import Gallery from "../../components/Gallery_Main/Gallery";
import { Fragment } from "react";
import { Helmet } from "react-helmet";

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
    <Fragment>
      <Helmet>
        <title>Galeria Travel - Podróże / Architektura / Przyroda</title>
      </Helmet>
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
    </Fragment>
  );
};

export default Travel;
