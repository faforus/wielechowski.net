import useGallery from "../../hooks/use-gallery";
import Gallery from "../../components/Gallery Large/Gallery";
import { Fragment } from "react";
import { Helmet } from "react-helmet";

const Studio = () => {
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
  } = useGallery("studio");

  return (
    <Fragment>
      <Helmet>
        <title>Galeria Studio i Portret - Wizerunkowe i Biznesowe</title>
      </Helmet>
      <Gallery
        category={"Studio"}
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

export default Studio;
