import useGallery from '../../hooks/use-gallery';
import Gallery from '../../components/Gallery_Main/Gallery';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Animals = () => {
  const {
    modal,
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
  } = useGallery('animals');

  return (
    <Fragment>
      <Helmet>
        <title>FW Fotografia - Galeria Zwierzęta - Dzikie i Udomowione</title>
      </Helmet>
      <Gallery
        category={'Zwierzęta'}
        link='/galeria'
        modal={modal}
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

export default Animals;
