import useGallery from "../../hooks/use-gallery";
import Gallery from "../../components/Gallery_Main/Gallery";
import { Fragment } from "react";
import { Helmet } from "react-helmet";

const Reportage = () => {
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
  } = useGallery("reportage");

  return (
    <Fragment>
      <Helmet>
        <title>Galeria Reportaż - Okolicznościowy i Komercyjny</title>
      </Helmet>
      <Gallery
        category={"Reportaż"}
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

export default Reportage;
